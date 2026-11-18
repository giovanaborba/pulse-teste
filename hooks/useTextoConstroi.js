import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import { useEfeitos } from "@/hooks/useEfeitos";
import { guia, spring } from "@/lib/presetsMovimento";

// Regra: entra com o gesto GUIA, e não com domos (decisão 3 da 9.0). Com o foco
// dentro, aparece na hora: nada invisível recebe foco.
const MARGEM_DE_CHEGADA = "0px 0px -12% 0px";

export function useTextoConstroi() {
  const refBloco = useRef(null);
  const { efeitosLigados } = useEfeitos();

  useEffect(() => {
    const bloco = refBloco.current;
    if (!bloco || !efeitosLigados) return;
    if (bloco.getBoundingClientRect().top < window.innerHeight * 0.88) return;

    const { initial } = guia(1);
    let animacao = null;
    bloco.style.opacity = String(initial.opacity);
    bloco.style.transform = `translateX(${initial.x}px)`;

    function mostrarNaHora() {
      pararDeObservar();
      animacao?.stop();
      bloco.style.opacity = "";
      bloco.style.transform = "";
    }

    const pararDeObservar = inView(
      bloco,
      () => {
        animacao = animate(bloco, { opacity: [initial.opacity, 1], x: [initial.x, 0] }, spring.padrao);
        pararDeObservar();
        bloco.removeEventListener("focusin", mostrarNaHora);
      },
      { margin: MARGEM_DE_CHEGADA },
    );
    bloco.addEventListener("focusin", mostrarNaHora);

    return () => {
      bloco.removeEventListener("focusin", mostrarNaHora);
      mostrarNaHora();
    };
  }, [efeitosLigados]);

  return refBloco;
}
