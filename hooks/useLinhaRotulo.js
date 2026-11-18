import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import { useEfeitos } from "@/hooks/useEfeitos";
import { spring } from "@/lib/presetsMovimento";

// Regra: só transform e opacity animam; por isso a linha cresce com scaleX, e não
// com a largura.
const MARGEM_DE_CHEGADA = "0px 0px -15% 0px"; // a seção "chegou" quando passa de 85% da altura da tela

export function useLinhaRotulo() {
  const refLinha = useRef(null);
  const { efeitosLigados } = useEfeitos();

  useEffect(() => {
    const linha = refLinha.current;
    if (!linha || !efeitosLigados) return;
    const jaNaTela = linha.getBoundingClientRect().top < window.innerHeight * 0.85;
    if (jaNaTela) return;

    linha.style.transform = "scaleX(0)";
    let animacao = null;
    const pararDeObservar = inView(
      linha,
      () => {
        animacao = animate(linha, { scaleX: [0, 1] }, spring.padrao);
        pararDeObservar();
      },
      { margin: MARGEM_DE_CHEGADA },
    );

    return () => {
      pararDeObservar();
      animacao?.stop();
      linha.style.transform = "";
    };
  }, [efeitosLigados]);

  return refLinha;
}
