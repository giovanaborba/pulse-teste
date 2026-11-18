import { useEffect, useLayoutEffect, useRef } from "react";
import { efeitosLigadosAgora } from "@/lib/efeitos";

// As linhas são escritas direto no SVG, sem estado do React, porque mudam até 60
// vezes por segundo.

const CONSULTA_TELA_LARGA = "(min-width: 62.5rem)";
const VELOCIDADE_DO_TRACEJADO = 18; // px por segundo

export function caminhoDaLinha(ax, ay, lx, ly) {
  const meio = (ax + lx) / 2;
  const n = (valor) => valor.toFixed(1);
  return `M${n(ax)},${n(ay)} C${n(meio)},${n(ay)} ${n(meio)},${n(ly)} ${n(lx)},${n(ly)}`;
}

function desenharLinhas({ svg, palco, nos, parteAtiva, projetar }) {
  if (!svg || !palco || !window.matchMedia(CONSULTA_TELA_LARGA).matches) return;

  const origem = palco.getBoundingClientRect();
  const deslocamento = efeitosLigadosAgora() ? -((performance.now() / 1000) * VELOCIDADE_DO_TRACEJADO) % 10 : 0;

  for (const linha of svg.querySelectorAll("[data-linha]")) {
    const nome = linha.dataset.linha;
    const ponto = projetar(nome);
    const no = nos[nome];
    const marcaDaParte = svg.querySelector(`[data-ponto="${nome}"]`);
    if (!ponto || !no) continue;

    const caixaDoNo = no.getBoundingClientRect();
    const ax = ponto.x - origem.left;
    const ay = ponto.y - origem.top;
    const lx = caixaDoNo.left + caixaDoNo.width / 2 - origem.left;
    const ly = caixaDoNo.top + caixaDoNo.height / 2 - origem.top;

    linha.setAttribute("d", caminhoDaLinha(ax, ay, lx, ly));
    linha.style.strokeDashoffset = String(deslocamento);
    linha.classList.toggle("ativa", parteAtiva === nome);
    if (marcaDaParte) {
      marcaDaParte.setAttribute("cx", ax.toFixed(1));
      marcaDaParte.setAttribute("cy", ay.toFixed(1));
    }
  }
}

export function useLinhasPartes(parteAtiva) {
  const refPalco = useRef(null);
  const refSvg = useRef(null);
  const refNos = useRef({});
  const refUltimaProjecao = useRef(null);
  const refParteAtiva = useRef(parteAtiva);

  useLayoutEffect(() => {
    refParteAtiva.current = parteAtiva;
  });

  function registrarNo(nome) {
    return (elemento) => {
      if (elemento) refNos.current[nome] = elemento;
      else delete refNos.current[nome];
    };
  }

  function aoDesenhar(projetar) {
    refUltimaProjecao.current = projetar;
    desenharLinhas({
      svg: refSvg.current,
      palco: refPalco.current,
      nos: refNos.current,
      parteAtiva: refParteAtiva.current,
      projetar,
    });
  }

  // Se o palco mudar de tamanho com a pulseira parada (pausa, efeitos
  // desligados, janela redimensionada), redesenha com a última posição.
  useEffect(() => {
    const palco = refPalco.current;
    if (!palco) return;
    const observador = new ResizeObserver(() => {
      const projetar = refUltimaProjecao.current;
      if (!projetar) return;
      desenharLinhas({
        svg: refSvg.current,
        palco,
        nos: refNos.current,
        parteAtiva: refParteAtiva.current,
        projetar,
      });
    });
    observador.observe(palco);
    return () => observador.disconnect();
  }, []);

  return { refPalco, refSvg, registrarNo, aoDesenhar };
}
