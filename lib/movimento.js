import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Um relógio só (o do GSAP) para o Lenis e o ScrollTrigger: com dois, o ScrollTrigger
// poderia ler a rolagem um quadro atrasado, e a animação tremeria.

let registrado = false;

export function registrarPluginsGsap() {
  if (registrado || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registrado = true;
}

export function sincronizarLenisComGsap(lenis) {
  // O relógio do GSAP informa segundos; o Lenis espera milissegundos.
  function avancarQuadro(tempoEmSegundos) {
    lenis.raf(tempoEmSegundos * 1000);
  }

  gsap.ticker.add(avancarQuadro);
  // Sem "compensação de atraso": se o navegador travar um instante, a
  // rolagem não dá um salto para recuperar o tempo perdido.
  gsap.ticker.lagSmoothing(0);
  const pararDeAvisar = lenis.on("scroll", ScrollTrigger.update);

  return () => {
    pararDeAvisar();
    gsap.ticker.remove(avancarQuadro);
    gsap.ticker.lagSmoothing(500, 33);
  };
}
