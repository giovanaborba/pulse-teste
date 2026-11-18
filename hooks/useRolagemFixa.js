import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useConsultaMidia } from "@/hooks/useConsultaMidia";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useRolagemSuave } from "@/hooks/useRolagemSuave";
import { registrarPluginsGsap } from "@/lib/movimento";

// O ScrollTrigger só lê a rolagem; quem prende o palco é o CSS (sticky), sem "pin".
// Regra: modo fixo só com os efeitos ligados e janela de 700 × 340 px ou mais (18.8).

const CONSULTA_MODO_FIXO = "(min-height: 700px) and (min-width: 340px)";

function topoDoPalco(palco) {
  return palco ? parseFloat(getComputedStyle(palco).top) || 0 : 0;
}

export function useRolagemFixa(quantidade) {
  const { efeitosLigados } = useEfeitos();
  const podeFixar = useConsultaMidia(CONSULTA_MODO_FIXO) && efeitosLigados;
  const [ativo, setAtivo] = useState(0);
  const refTrilho = useRef(null);
  const refPalco = useRef(null);
  const lenis = useRolagemSuave();

  // O useGSAP desfaz tudo sozinho quando o modo desliga ou a pessoa sai da página.
  useGSAP(
    () => {
      if (!podeFixar || !refTrilho.current) return;
      registrarPluginsGsap();
      ScrollTrigger.create({
        trigger: refTrilho.current,
        start: () => `top ${topoDoPalco(refPalco.current)}px`,
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onUpdate: (gatilho) => {
          setAtivo(Math.min(quantidade - 1, Math.floor(gatilho.progress * quantidade)));
        },
      });
    },
    { dependencies: [podeFixar, quantidade] },
  );

  function irPara(indice, evento) {
    const trilho = refTrilho.current;
    if (!podeFixar || !trilho) return;
    evento.preventDefault();
    const topo = topoDoPalco(refPalco.current);
    const inicio = trilho.getBoundingClientRect().top + window.scrollY - topo;
    const percurso = trilho.offsetHeight - (window.innerHeight - topo);
    const destino = inicio + (percurso * (indice + 0.5)) / quantidade;
    if (lenis) lenis.scrollTo(destino);
    else window.scrollTo({ top: destino });
    setAtivo(indice);
  }

  return { podeFixar, ativo, refTrilho, refPalco, irPara };
}
