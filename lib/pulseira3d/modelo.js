import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { VISTA_DAS_PARTES } from "@/lib/pulseira3d/partes";

// Regra: módulo único da pulseira (19.12). O site e as animações em vídeo usam
// o mesmo modelo, que segue criarPulseira() do protótipo.

const COR = {
  modulo: 0xcc4200,
  face: 0x242428,
  poco: 0x141416,
  metal: 0xb0b0b8,
  laranja: 0xfc4c02,
  luzApagada: 0x4e4e57,
  luzAcesa: 0xff8a50,
};

const RAIO_Y = 1.1;
const RAIO_Z = 0.86;
const LARGURA = 0.5;
const ESPESSURA = 0.09;

const LETRAS_BRAILLE = { p: [1, 2, 3, 4], u: [1, 3, 6], l: [1, 2, 3], s: [2, 3, 4], e: [1, 5] };

function naTira(angulo) {
  const ponto = new THREE.Vector3(0, RAIO_Y * Math.sin(angulo), RAIO_Z * Math.cos(angulo));
  const normal = new THREE.Vector3(0, ponto.y / (RAIO_Y * RAIO_Y), ponto.z / (RAIO_Z * RAIO_Z)).normalize();
  return { ponto, normal };
}

function orientar(objeto, normal) {
  objeto.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
}

function criarTexturaDoBrilho() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const contexto = canvas.getContext("2d");
  const degrade = contexto.createRadialGradient(32, 32, 0, 32, 32, 32);
  degrade.addColorStop(0, "rgba(255,255,255,1)");
  degrade.addColorStop(0.4, "rgba(255,255,255,.45)");
  degrade.addColorStop(1, "rgba(255,255,255,0)");
  contexto.fillStyle = degrade;
  contexto.fillRect(0, 0, 64, 64);
  const textura = new THREE.CanvasTexture(canvas);
  textura.colorSpace = THREE.SRGBColorSpace;
  return textura;
}

export function criarPulseira(corDaTira = "#FC4C02") {
  const grupo = new THREE.Group();
  const partes = {};

  const pontos = [];
  for (let i = 0; i < 160; i++) pontos.push(naTira((i / 160) * Math.PI * 2).ponto);
  const caminho = new THREE.CatmullRomCurve3(pontos, true);
  const forma = new THREE.Shape();
  const hx = LARGURA / 2;
  const hy = ESPESSURA / 2;
  const r = 0.04;
  forma.moveTo(-hx + r, -hy);
  forma.lineTo(hx - r, -hy);
  forma.quadraticCurveTo(hx, -hy, hx, -hy + r);
  forma.lineTo(hx, hy - r);
  forma.quadraticCurveTo(hx, hy, hx - r, hy);
  forma.lineTo(-hx + r, hy);
  forma.quadraticCurveTo(-hx, hy, -hx, hy - r);
  forma.lineTo(-hx, -hy + r);
  forma.quadraticCurveTo(-hx, -hy, -hx + r, -hy);
  const materialTira = new THREE.MeshPhysicalMaterial({
    color: corDaTira,
    roughness: 0.58,
    sheen: 0.5,
    sheenRoughness: 0.6,
    sheenColor: new THREE.Color(0xff9a66),
  });
  grupo.add(new THREE.Mesh(new THREE.ExtrudeGeometry(forma, { steps: 320, bevelEnabled: false, extrudePath: caminho }), materialTira));

  const materialFriso = new THREE.MeshStandardMaterial({ color: 0xd94200, roughness: 0.7 });
  const geometriaFriso = new THREE.BoxGeometry(LARGURA * 0.78, 0.012, 0.01);
  for (const lado of [-1, 1]) {
    for (let k = 0; k < 9; k++) {
      const { ponto, normal } = naTira(lado * (0.42 + k * 0.075));
      const friso = new THREE.Mesh(geometriaFriso, materialFriso);
      friso.position.copy(ponto).addScaledVector(normal, ESPESSURA / 2 + 0.002);
      orientar(friso, normal);
      grupo.add(friso);
    }
  }

  const materialEscuro = new THREE.MeshBasicMaterial({ color: COR.poco });
  const geometriaFuro = new THREE.CircleGeometry(0.03, 20);
  for (let k = 0; k < 6; k++) {
    const { ponto, normal } = naTira(Math.PI + 0.38 + k * 0.12);
    const furo = new THREE.Mesh(geometriaFuro, materialEscuro);
    furo.position.copy(ponto).addScaledVector(normal, ESPESSURA / 2 + 0.003);
    orientar(furo, normal);
    grupo.add(furo);
  }
  const fecho = new THREE.Group();
  const moldura = new THREE.Mesh(
    new RoundedBoxGeometry(LARGURA + 0.08, 0.26, 0.07, 4, 0.025),
    new THREE.MeshStandardMaterial({ color: COR.face, metalness: 0.6, roughness: 0.35, emissive: COR.laranja, emissiveIntensity: 0 }),
  );
  fecho.add(moldura);
  const lingueta = new THREE.Mesh(
    new RoundedBoxGeometry(0.05, 0.2, 0.05, 3, 0.02),
    new THREE.MeshStandardMaterial({ color: COR.metal, metalness: 0.8, roughness: 0.3, emissive: COR.laranja, emissiveIntensity: 0 }),
  );
  lingueta.position.z = 0.03;
  fecho.add(lingueta);
  const noFecho = naTira(Math.PI);
  fecho.position.copy(noFecho.ponto).addScaledVector(noFecho.normal, ESPESSURA / 2 + 0.03);
  orientar(fecho, noFecho.normal);
  grupo.add(fecho);
  const passador = new THREE.Mesh(new RoundedBoxGeometry(LARGURA + 0.06, 0.08, 0.05, 3, 0.02), materialTira);
  const noPassador = naTira(Math.PI - 0.32);
  passador.position.copy(noPassador.ponto).addScaledVector(noPassador.normal, ESPESSURA / 2 + 0.02);
  orientar(passador, noPassador.normal);
  grupo.add(passador);
  partes.fecho = { objetos: [moldura, lingueta], ...VISTA_DAS_PARTES.fecho };

  const zModulo = RAIO_Z + 0.05;
  const corpo = new THREE.Mesh(
    new RoundedBoxGeometry(0.66, 1.14, 0.24, 6, 0.09),
    new THREE.MeshPhysicalMaterial({ color: COR.modulo, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.2 }),
  );
  corpo.position.set(0, 0, zModulo);
  grupo.add(corpo);
  const face = new THREE.Mesh(
    new RoundedBoxGeometry(0.56, 1.04, 0.04, 5, 0.018),
    new THREE.MeshPhysicalMaterial({ color: COR.face, roughness: 0.45, clearcoat: 0.5, clearcoatRoughness: 0.3 }),
  );
  face.position.set(0, 0, zModulo + 0.11);
  grupo.add(face);
  const superficie = zModulo + 0.13;

  const geometriaMicrofone = new THREE.CircleGeometry(0.014, 16);
  for (const x of [-0.05, 0, 0.05]) {
    const furo = new THREE.Mesh(geometriaMicrofone, materialEscuro);
    furo.position.set(x, 0.44, superficie + 0.001);
    grupo.add(furo);
  }

  // Colar laranja para o contraste; topo côncavo e anéis em relevo para o tato.
  const materialClaro = new THREE.MeshStandardMaterial({ color: 0xf4f4f5, roughness: 0.35, emissive: COR.laranja, emissiveIntensity: 0 });
  const materialRelevo = new THREE.MeshStandardMaterial({ color: 0x9a9aa4, roughness: 0.45 });
  const botaoDestino = new THREE.Group();
  const aro = new THREE.Mesh(
    new THREE.CylinderGeometry(0.175, 0.185, 0.03, 64).rotateX(Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: COR.laranja, roughness: 0.35, emissive: COR.laranja, emissiveIntensity: 0.2 }),
  );
  aro.position.z = 0.012;
  aro.userData.brilhoBase = 0.2;
  botaoDestino.add(aro);
  const disco = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.15, 0.075, 64).rotateX(Math.PI / 2), materialClaro);
  disco.position.z = 0.05;
  botaoDestino.add(disco);
  const fundoConcavo = new THREE.Mesh(new THREE.CircleGeometry(0.105, 48), new THREE.MeshStandardMaterial({ color: 0xdadadf, roughness: 0.5 }));
  fundoConcavo.position.z = 0.0885;
  botaoDestino.add(fundoConcavo);
  for (const raio of [0.05, 0.1]) {
    const anel = new THREE.Mesh(new THREE.TorusGeometry(raio, 0.008, 10, 56), materialRelevo);
    anel.position.z = 0.09;
    botaoDestino.add(anel);
  }
  botaoDestino.position.set(0, 0.22, superficie);
  grupo.add(botaoDestino);
  partes.destino = { objetos: [disco, aro], ...VISTA_DAS_PARTES.destino };

  const poco = new THREE.Mesh(
    new RoundedBoxGeometry(0.17, 0.25, 0.02, 3, 0.008),
    new THREE.MeshStandardMaterial({ color: COR.poco, roughness: 0.6, emissive: COR.laranja, emissiveIntensity: 0 }),
  );
  poco.position.set(0, -0.08, superficie - 0.004);
  grupo.add(poco);
  const pinos = [];
  const materialPino = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35, emissive: COR.laranja, emissiveIntensity: 0 });
  const geometriaPino = new THREE.CapsuleGeometry(0.019, 0.02, 4, 12).rotateX(Math.PI / 2);
  for (let coluna = 0; coluna < 2; coluna++) {
    for (let linha = 0; linha < 3; linha++) {
      const pino = new THREE.Mesh(geometriaPino, materialPino);
      pino.position.set(-0.035 + coluna * 0.07, -0.08 + 0.068 - linha * 0.068, superficie - 0.02);
      pino.userData.alvo = 0;
      grupo.add(pino);
      pinos[coluna * 3 + linha] = pino; // índice 0..5 = pontos 1..6
    }
  }
  partes.braille = { objetos: [poco], ...VISTA_DAS_PARTES.braille };

  const botaoModo = new THREE.Group();
  const colar = new THREE.Mesh(
    new RoundedBoxGeometry(0.3, 0.15, 0.03, 4, 0.012),
    new THREE.MeshStandardMaterial({ color: COR.laranja, roughness: 0.35, emissive: COR.laranja, emissiveIntensity: 0.2 }),
  );
  colar.position.z = 0.012;
  colar.userData.brilhoBase = 0.2;
  botaoModo.add(colar);
  const pilula = new THREE.Mesh(new RoundedBoxGeometry(0.25, 0.11, 0.07, 5, 0.045), materialClaro.clone());
  pilula.position.z = 0.045;
  botaoModo.add(pilula);
  const ponto = new THREE.Mesh(new THREE.SphereGeometry(0.022, 20, 14), materialRelevo);
  ponto.position.z = 0.082;
  botaoModo.add(ponto);
  botaoModo.position.set(0, -0.37, superficie);
  grupo.add(botaoModo);
  partes.modo = { objetos: [pilula, colar], ...VISTA_DAS_PARTES.modo };

  const geometriaFresta = new THREE.BoxGeometry(0.01, 0.07, 0.016);
  for (const lado of [-1, 1]) {
    for (let k = 0; k < 4; k++) {
      const fresta = new THREE.Mesh(geometriaFresta, materialEscuro);
      fresta.position.set(lado * 0.331, -0.05 - k * 0.05, zModulo + 0.02);
      grupo.add(fresta);
    }
  }

  const luzes = { esquerda: [], direita: [] };
  const geometriaLuz = new RoundedBoxGeometry(0.042, 0.095, 0.022, 2, 0.014);
  const geometriaBrilho = new THREE.PlaneGeometry(0.2, 0.24);
  const texturaBrilho = criarTexturaDoBrilho();
  for (const [lado, sinalX] of [["esquerda", -1], ["direita", 1]]) {
    for (let k = 0; k < 5; k++) {
      const luz = new THREE.Mesh(
        geometriaLuz,
        new THREE.MeshStandardMaterial({ color: COR.luzApagada, roughness: 0.3, emissive: COR.laranja, emissiveIntensity: 0 }),
      );
      luz.position.set(sinalX * 0.302, -0.3 + k * 0.15, zModulo + 0.123);
      grupo.add(luz);
      const brilho = new THREE.Mesh(
        geometriaBrilho,
        new THREE.MeshBasicMaterial({
          color: 0xff6a1a,
          map: texturaBrilho,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      brilho.position.set(sinalX * 0.302, -0.3 + k * 0.15, zModulo + 0.14);
      grupo.add(brilho);
      luz.userData.brilho = brilho;
      luzes[lado].push(luz);
    }
  }
  partes.luzes = { objetos: [...luzes.esquerda, ...luzes.direita], ...VISTA_DAS_PARTES.luzes, ehLuz: true };

  const contatos = [];
  for (const x of [-0.07, 0.07]) {
    const contato = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.022, 0.02, 24),
      new THREE.MeshStandardMaterial({ color: COR.metal, metalness: 0.9, roughness: 0.25, emissive: COR.laranja, emissiveIntensity: 0 }),
    );
    contato.position.set(x, -0.575, zModulo + 0.02);
    grupo.add(contato);
    contatos.push(contato);
  }
  partes.carga = { objetos: contatos, ...VISTA_DAS_PARTES.carga };

  const zonas = {};
  for (const [nome, angulo] of [["direita", 1.25], ["esquerda", -1.25]]) {
    const { ponto: p, normal } = naTira(angulo);
    const zona = new THREE.Mesh(
      new RoundedBoxGeometry(LARGURA * 0.7, 0.32, 0.024, 4, 0.01),
      new THREE.MeshStandardMaterial({ color: 0xd9d9de, roughness: 0.5, emissive: COR.laranja, emissiveIntensity: 0.05 }),
    );
    zona.position.copy(p).addScaledVector(normal, -ESPESSURA / 2 - 0.01);
    orientar(zona, normal.clone().negate());
    zona.userData.base = zona.position.clone();
    zona.userData.normal = normal.clone();
    zona.userData.brilhoBase = 0.05;
    grupo.add(zona);
    zonas[nome] = zona;
  }
  partes.vibracao = { objetos: [zonas.esquerda, zonas.direita], ...VISTA_DAS_PARTES.vibracao };
  const naFrente = naTira(0);
  const atuador = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.15, 0.03, 48).rotateX(Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0xd9d9de, roughness: 0.5, emissive: COR.laranja, emissiveIntensity: 0.05 }),
  );
  atuador.position.copy(naFrente.ponto).addScaledVector(naFrente.normal, -ESPESSURA / 2 - 0.012);
  atuador.userData.base = atuador.position.clone();
  atuador.userData.brilhoBase = 0.05;
  grupo.add(atuador);
  partes.pressao = { objetos: [atuador], ...VISTA_DAS_PARTES.pressao };

  partes.zonaEsquerda = { objetos: [zonas.esquerda], ...VISTA_DAS_PARTES.zonaEsquerda };
  partes.zonaDireita = { objetos: [zonas.direita], ...VISTA_DAS_PARTES.zonaDireita };

  const ancoras = {
    destino: botaoDestino,
    esquerdo: zonas.esquerda,
    faixa: fecho,
    modo: botaoModo,
    direito: zonas.direita,
    pressao: atuador,
  };
  const parteDoLink = {
    destino: "destino",
    esquerdo: "zonaEsquerda",
    faixa: "fecho",
    modo: "modo",
    direito: "zonaDireita",
    pressao: "pressao",
  };

  const destacaveis = [...new Set(Object.values(partes).flatMap((parte) => parte.objetos))];

  function escreverBraille(letra) {
    const pontosDaLetra = LETRAS_BRAILLE[letra] ?? [];
    pinos.forEach((pino, i) => {
      pino.userData.alvo = pontosDaLetra.includes(i + 1) ? 1 : 0;
    });
  }

  function acenderLuzes(lista, forca) {
    for (const luz of lista) {
      luz.material.emissiveIntensity = forca * 2.4;
      luz.material.color.setHex(forca > 0.05 ? COR.luzAcesa : COR.luzApagada);
      luz.userData.brilho.material.opacity = forca * 0.8;
    }
  }

  function atualizar({ t, dt, sinal = null, parte = null, semMovimento = false }) {
    for (const pino of pinos) {
      const alvoZ = superficie - 0.02 + pino.userData.alvo * 0.034;
      pino.position.z = semMovimento ? alvoZ : pino.position.z + (alvoZ - pino.position.z) * Math.min(1, dt * 10);
    }

    for (const objeto of destacaveis) {
      if (objeto.material.emissiveIntensity !== undefined && !partes.luzes.objetos.includes(objeto)) {
        objeto.material.emissiveIntensity = objeto.userData.brilhoBase ?? 0;
      }
    }
    for (const zona of Object.values(zonas)) zona.position.copy(zona.userData.base);
    atuador.position.copy(atuador.userData.base);
    acenderLuzes(luzes.esquerda, 0);
    acenderLuzes(luzes.direita, 0);

    // Regra: a vibração é a informação principal; as luzes complementam (19.12).
    const vibrar = (zona, forca) => {
      zona.material.emissiveIntensity = 0.4 + 0.6 * forca;
      if (!semMovimento) zona.position.addScaledVector(zona.userData.normal, Math.sin(t * 70) * 0.006 * forca);
    };
    // Regra: três pulsos no primeiro segundo de cada ciclo de 1,6 s; nunca mais de 3
    // piscadas por segundo (WCAG 2.3.1).
    const cicloAguardar = t % 1.6;
    const pulsoAguardar = semMovimento ? 1 : cicloAguardar < 1 && cicloAguardar % 0.34 < 0.17 ? 1 : 0;
    const forteVirar = semMovimento ? 1 : 0.75 + 0.25 * Math.sin(t * 9);

    if (sinal === "esquerda") {
      vibrar(zonas.esquerda, 1);
      acenderLuzes(luzes.esquerda, forteVirar);
    } else if (sinal === "direita") {
      vibrar(zonas.direita, 1);
      acenderLuzes(luzes.direita, forteVirar);
    } else if (sinal === "parar") {
      vibrar(zonas.esquerda, 1);
      vibrar(zonas.direita, 1);
      acenderLuzes(luzes.esquerda, 1);
      acenderLuzes(luzes.direita, 1);
    } else if (sinal === "aguardar") {
      vibrar(zonas.esquerda, pulsoAguardar);
      vibrar(zonas.direita, pulsoAguardar);
      acenderLuzes(luzes.esquerda, pulsoAguardar);
      acenderLuzes(luzes.direita, pulsoAguardar);
    } else if (sinal === "continuar") {
      const aperto = semMovimento ? 1 : 0.5 + 0.5 * Math.sin(t * 2.4);
      atuador.material.emissiveIntensity = 0.4 + 0.6 * aperto;
      atuador.position.addScaledVector(naFrente.normal, -0.012 * aperto);
      for (const lado of ["esquerda", "direita"]) {
        luzes[lado].forEach((luz, k) => {
          const fase = semMovimento ? 1 : Math.max(0, 1 - Math.abs(((t * 1.6) % 1.4) - k * 0.22) / 0.22);
          acenderLuzes([luz], fase);
        });
      }
    }

    if (parte && partes[parte] && !partes[parte].ehLuz) {
      const brilho = semMovimento ? 0.75 : 0.55 + 0.35 * Math.sin(t * 4);
      for (const objeto of partes[parte].objetos) {
        if (objeto.material.emissive) {
          objeto.material.emissiveIntensity = Math.max(objeto.material.emissiveIntensity, brilho);
        }
      }
    }
  }

  // Geometrias e materiais saem junto com a cena (cena.js); aqui, só o que é deste modelo.
  function liberar() {
    texturaBrilho.dispose();
  }

  escreverBraille("p");

  return { grupo, partes, ancoras, parteDoLink, escreverBraille, atualizar, liberar };
}
