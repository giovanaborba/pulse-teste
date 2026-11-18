import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { criarPulseira } from "@/lib/pulseira3d/modelo";

// criarCena é assíncrona para compilar os shaders em paralelo: de uma vez, isso
// travava a página por até 1,6 s (opção B da equipe, 9.5).

const CAMERA_POR_MODO = {
  abertura: { posicao: [0, 0.25, 6.6], abertura: 30 },
  explorar: { posicao: [0, 0.25, 7.2], abertura: 30 },
  sinal: { posicao: [0, 0.15, 5.6], abertura: 30 },
  parar: { posicao: [0, 0.2, 6.4], abertura: 30 },
};

export function lerCorDaFaixa() {
  const cor = getComputedStyle(document.documentElement).getPropertyValue("--cor-faixa-3d").trim();
  return cor || "#FC4C02";
}

// Pede o WebGL2 antes do Three.js: se ele tentasse sozinho, escreveria um erro no
// console antes de a descrição em texto aparecer.
function criarRenderizador(canvas) {
  const contexto = canvas.getContext("webgl2", { antialias: true, alpha: true });
  if (!contexto) throw new Error("sem-webgl");
  const renderizador = new THREE.WebGLRenderer({ canvas, context: contexto, antialias: true, alpha: true });
  // Regra: densidade de pixels limitada a 1,75 (19.1, item 9).
  renderizador.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderizador.outputColorSpace = THREE.SRGBColorSpace;
  renderizador.toneMapping = THREE.ACESFilmicToneMapping;
  renderizador.toneMappingExposure = 1.05;
  renderizador.setClearColor(0x000000, 0);
  // Só no desenvolvimento: publicada, compila mais rápido e não escreve no console os
  // avisos "warning X4122" do Windows, que não são erros.
  renderizador.debug.checkShaderErrors = process.env.NODE_ENV !== "production";
  return renderizador;
}

// Sem KHR_parallel_shader_compile, o compileAsync só escreveria um aviso no console, sem ganho.
function compilaEmParalelo(renderizador) {
  return renderizador.extensions.has("KHR_parallel_shader_compile");
}

// Compila antes os shaders do gerador de reflexos, para travar menos a página.
// Armadilha: usa campos internos do Three.js 0.186.1; se mudarem, o try/catch volta ao normal.
async function criarAmbiente(renderizador) {
  const gerador = new THREE.PMREMGenerator(renderizador);
  const sala = new RoomEnvironment();
  if (compilaEmParalelo(renderizador)) {
    try {
      gerador._setSize(256); // o mesmo tamanho que o fromScene usa (padrão)
      const alvoTemporario = gerador._allocateTargets();
      const cenaDeCompilacao = new THREE.Scene();
      for (const material of [gerador._blurMaterial, gerador._ggxMaterial]) {
        if (material) cenaDeCompilacao.add(new THREE.Mesh(new THREE.BufferGeometry(), material));
      }
      // O gerador desenha numa textura intermediária, e não na tela: os shaders
      // compilados para a tela seriam outros.
      renderizador.setRenderTarget(alvoTemporario);
      try {
        await renderizador.compileAsync(cenaDeCompilacao, new THREE.OrthographicCamera());
        await renderizador.compileAsync(sala, new THREE.PerspectiveCamera(90, 1, 0.1, 100));
      } finally {
        renderizador.setRenderTarget(null);
        alvoTemporario.dispose();
        cenaDeCompilacao.traverse((objeto) => objeto.geometry?.dispose());
      }
    } catch {
      // segue sem a compilação antecipada
    }
  }
  const ambiente = gerador.fromScene(sala, 0.04).texture;
  return { gerador, sala, ambiente };
}

export async function criarCena(canvas, modo) {
  const renderizador = criarRenderizador(canvas);
  const cena = new THREE.Scene();

  const { gerador, sala, ambiente } = await criarAmbiente(renderizador);
  cena.environment = ambiente;
  const principal = new THREE.DirectionalLight(0xffffff, 1.6);
  principal.position.set(3, 4, 5);
  const contorno = new THREE.DirectionalLight(0xffb088, 1.2);
  contorno.position.set(-4, 1, -3);
  cena.add(principal, contorno);

  const { posicao, abertura } = CAMERA_POR_MODO[modo] ?? CAMERA_POR_MODO.abertura;
  const camera = new THREE.PerspectiveCamera(abertura, 1, 0.1, 50);
  camera.position.set(...posicao);
  camera.lookAt(0, 0, 0);

  const modelo = criarPulseira(lerCorDaFaixa());
  const pivo = new THREE.Group();
  pivo.add(modelo.grupo);
  cena.add(pivo);

  const posicaoTemporaria = new THREE.Vector3();

  if (compilaEmParalelo(renderizador)) {
    try {
      await renderizador.compileAsync(cena, camera);
    } catch {
      // segue sem a compilação antecipada
    }
  }

  function redimensionar(largura, altura) {
    if (!largura || !altura) return;
    renderizador.setSize(largura, altura, false);
    camera.aspect = largura / altura;
    camera.updateProjectionMatrix();
  }

  function projetar(nomeDaAncora) {
    const objeto = modelo.ancoras[nomeDaAncora];
    if (!objeto) return null;
    objeto.getWorldPosition(posicaoTemporaria);
    posicaoTemporaria.project(camera);
    const { left, top, width, height } = canvas.getBoundingClientRect();
    return {
      x: left + ((posicaoTemporaria.x + 1) / 2) * width,
      y: top + ((1 - posicaoTemporaria.y) / 2) * height,
    };
  }

  function desenhar() {
    renderizador.render(cena, camera);
  }

  // Regra: libera a memória da placa de vídeo (19.1, item 9).
  function liberar() {
    const materiais = new Set();
    const geometrias = new Set();
    cena.traverse((objeto) => {
      if (objeto.geometry) geometrias.add(objeto.geometry);
      if (objeto.material) materiais.add(objeto.material);
    });
    for (const geometria of geometrias) geometria.dispose();
    for (const material of materiais) material.dispose();
    modelo.liberar();
    ambiente.dispose();
    sala.dispose?.();
    gerador.dispose();
    renderizador.dispose();
    // Os navegadores só deixam algumas dezenas de contextos WebGL abertos ao mesmo tempo.
    renderizador.forceContextLoss();
  }

  return { modelo, pivo, redimensionar, projetar, desenhar, liberar };
}
