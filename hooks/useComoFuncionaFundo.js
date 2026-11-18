import { useEffect, useRef, useState } from "react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useConsultaMidia } from "@/hooks/useConsultaMidia";

// Regra: modo fixo só a partir de 64rem × 600 px e com os efeitos ligados (9.7).
// Com o mouse em cima de um item, a rolagem não troca o ativo, como no protótipo.
const CONSULTA_FIXA = "(min-width: 64rem) and (min-height: 37.5rem)";

export function useComoFuncionaFundo() {
  const { efeitosLigados } = useEfeitos();
  const telaFixa = useConsultaMidia(CONSULTA_FIXA);
  const modoFixo = efeitosLigados && telaFixa;
  const [ativo, setAtivo] = useState(0);
  const refLista = useRef(null);
  const refItemMouse = useRef(null);

  useEffect(() => {
    const lista = refLista.current;
    if (!lista || !modoFixo) return;
    const itens = [...lista.children];
    const observador = new IntersectionObserver(
      (registros) => {
        if (refItemMouse.current !== null) return;
        for (const registro of registros) {
          if (registro.isIntersecting) setAtivo(itens.indexOf(registro.target));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    itens.forEach((item) => observador.observe(item));
    return () => observador.disconnect();
  }, [modoFixo]);

  function propsDoItem(indice) {
    return {
      onPointerEnter: (evento) => {
        if (evento.pointerType === "touch") return;
        refItemMouse.current = indice;
        setAtivo(indice);
      },
      onPointerLeave: () => {
        refItemMouse.current = null;
      },
      // No React, onFocus "sobe" dos filhos (como o focusin do navegador)
      onFocus: () => setAtivo(indice),
    };
  }

  return { modoFixo, ativo, refLista, propsDoItem };
}
