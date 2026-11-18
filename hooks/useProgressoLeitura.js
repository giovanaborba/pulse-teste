import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useEfeitos } from "@/hooks/useEfeitos";

// Escreve direto no estilo da barra, uma vez por quadro, sem redesenhar o componente.
export function useProgressoLeitura() {
  const refBarra = useRef(null);
  const { efeitosLigados } = useEfeitos();
  const caminho = usePathname();

  useEffect(() => {
    const barra = refBarra.current;
    if (!barra || !efeitosLigados) return;
    let quadro = 0;

    function atualizar() {
      quadro = 0;
      const raiz = document.documentElement;
      const maximo = raiz.scrollHeight - window.innerHeight;
      const fracao = maximo > 0 ? Math.min(1, Math.max(0, window.scrollY / maximo)) : 0;
      barra.style.transform = `scaleX(${fracao.toFixed(4)})`;
    }

    function pedirAtualizacao() {
      if (!quadro) quadro = requestAnimationFrame(atualizar);
    }

    atualizar();
    window.addEventListener("scroll", pedirAtualizacao, { passive: true });
    window.addEventListener("resize", pedirAtualizacao);
    const observador = new ResizeObserver(pedirAtualizacao);
    observador.observe(document.body);

    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", pedirAtualizacao);
      window.removeEventListener("resize", pedirAtualizacao);
      observador.disconnect();
    };
  }, [efeitosLigados, caminho]);

  return refBarra;
}
