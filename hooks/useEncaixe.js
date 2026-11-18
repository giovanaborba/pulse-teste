import { useEffect } from "react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useRolagemSuave } from "@/hooks/useRolagemSuave";

// Regra: encaixe só por proximidade e só depois da roda do mouse; nunca com zoom
// alto, arrasto, teclado ou foco num campo (19.6).
const ESPERA = 160; // ms
const LIMITE = 0.3; // fração da altura da tela
const CONSULTA = "(min-width: 64rem) and (min-height: 37.5rem)";

function alturaDoTopo() {
  const estilo = getComputedStyle(document.documentElement);
  const cabecalho = parseFloat(estilo.getPropertyValue("--altura-cabecalho")) || 0;
  const indice = parseFloat(estilo.getPropertyValue("--altura-indice")) || 0;
  return cabecalho + indice;
}

export function useEncaixe() {
  const { efeitosLigados } = useEfeitos();
  const lenis = useRolagemSuave();

  useEffect(() => {
    if (!efeitosLigados || !lenis) return;
    const consulta = window.matchMedia(CONSULTA);
    let ultimaEntrada = "nenhuma";
    let espera = 0;

    function tentarEncaixe() {
      if (!consulta.matches || ultimaEntrada !== "roda") return;
      const ativo = document.activeElement;
      if (ativo?.matches("input, textarea, select")) return;

      const topo = alturaDoTopo();
      let melhor = null;
      for (const secao of document.querySelectorAll("[data-encaixe]")) {
        const distancia = secao.getBoundingClientRect().top - topo;
        if (melhor === null || Math.abs(distancia) < Math.abs(melhor)) melhor = distancia;
      }
      if (melhor === null) return;
      if (Math.abs(melhor) > 2 && Math.abs(melhor) < window.innerHeight * LIMITE) {
        ultimaEntrada = "encaixe"; // o próprio encaixe não chama outro
        lenis.scrollTo(window.scrollY + melhor);
      }
    }

    function aoRolar() {
      clearTimeout(espera);
      espera = setTimeout(tentarEncaixe, ESPERA);
    }

    const marcarRoda = () => (ultimaEntrada = "roda");
    const marcarOutra = () => (ultimaEntrada = "outra");
    const opcoes = { capture: true, passive: true };

    window.addEventListener("wheel", marcarRoda, opcoes);
    window.addEventListener("keydown", marcarOutra, true);
    window.addEventListener("pointerdown", marcarOutra, true);
    window.addEventListener("touchstart", marcarOutra, opcoes);
    const pararDeOuvir = lenis.on("scroll", aoRolar);

    return () => {
      clearTimeout(espera);
      pararDeOuvir();
      window.removeEventListener("wheel", marcarRoda, opcoes);
      window.removeEventListener("keydown", marcarOutra, true);
      window.removeEventListener("pointerdown", marcarOutra, true);
      window.removeEventListener("touchstart", marcarOutra, opcoes);
    };
  }, [efeitosLigados, lenis]);
}
