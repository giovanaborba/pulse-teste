// Por que <canvas>: numa máscara de CSS todos os domos têm o mesmo raio;
// aqui cada domo tem o seu tamanho em cada quadro.
const PASSO = 30;
const RAIO_MAXIMO = 22; // px: com células de 30 px, os domos se encostam e cobrem tudo
const ATRASO_MAXIMO = 0.55;
const DURACAO_DO_DOMO = 0.45;

function ajustarTamanho(canvas) {
  const densidade = Math.min(1.75, window.devicePixelRatio || 1);
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  const larguraReal = Math.round(largura * densidade);
  const alturaReal = Math.round(altura * densidade);
  if (canvas.width !== larguraReal || canvas.height !== alturaReal) {
    canvas.width = larguraReal;
    canvas.height = alturaReal;
  }
  return { densidade, largura, altura };
}

export function desenharDomos(canvas, progresso, entrando, cor) {
  const contexto = canvas.getContext("2d");
  if (!contexto) return;
  const { densidade, largura, altura } = ajustarTamanho(canvas);
  contexto.setTransform(densidade, 0, 0, densidade, 0, 0);
  contexto.clearRect(0, 0, largura, altura);
  contexto.fillStyle = cor;

  // Um retângulo só: mais leve que desenhar centenas de domos.
  if ((entrando && progresso >= 1) || (!entrando && progresso <= 0)) {
    contexto.fillRect(0, 0, largura, altura);
    return;
  }

  const colunas = Math.ceil(largura / PASSO) + 1;
  const linhas = Math.ceil(altura / PASSO) + 1;
  const total = colunas + linhas;
  contexto.beginPath();
  for (let i = 0; i < colunas; i++) {
    for (let j = 0; j < linhas; j++) {
      const atraso = ((i + j) / total) * ATRASO_MAXIMO;
      let crescimento = Math.max(0, Math.min(1, (progresso - atraso) / DURACAO_DO_DOMO));
      if (!entrando) crescimento = 1 - crescimento;
      const raio = crescimento * RAIO_MAXIMO;
      if (raio > 0.3) {
        contexto.moveTo(i * PASSO + raio, j * PASSO);
        contexto.arc(i * PASSO, j * PASSO, raio, 0, Math.PI * 2);
      }
    }
  }
  contexto.fill();
}

export function limparDomos(canvas) {
  canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
}
