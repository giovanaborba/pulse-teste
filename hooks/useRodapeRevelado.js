import { useEffect, useRef } from "react";
import { useEfeitos } from "@/hooks/useEfeitos";

// Só vale com o rodapé abaixo de 80% da altura da tela: um rodapé mais alto não
// caberia preso embaixo, e parte dele nunca apareceria.
const LIMITE = 0.8; // fração da altura da tela

export function useRodapeRevelado() {
  const refRodape = useRef(null);
  const { efeitosLigados } = useEfeitos();

  useEffect(() => {
    const rodape = refRodape.current;
    const raiz = document.documentElement;
    if (!rodape || !efeitosLigados) {
      raiz.removeAttribute("data-rodape-revela");
      return;
    }

    function decidir() {
      const cabe = rodape.offsetHeight < window.innerHeight * LIMITE;
      raiz.toggleAttribute("data-rodape-revela", cabe);
    }

    decidir();
    const observador = new ResizeObserver(decidir);
    observador.observe(rodape);
    window.addEventListener("resize", decidir);

    return () => {
      observador.disconnect();
      window.removeEventListener("resize", decidir);
      raiz.removeAttribute("data-rodape-revela");
    };
  }, [efeitosLigados]);

  return refRodape;
}
