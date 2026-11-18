import { useEffect, useRef } from "react";
import { useEfeitos } from "@/hooks/useEfeitos";

// Sem data-frase-ligada (sem JavaScript ou sem efeitos), a frase aparece toda acesa.
// Escreve direto nos atributos, uma vez por quadro, sem redesenhar o React.
export function useFraseAcende() {
  const refFrase = useRef(null);
  const { efeitosLigados } = useEfeitos();

  useEffect(() => {
    const frase = refFrase.current;
    if (!frase || !efeitosLigados) return;
    const palavras = [...frase.querySelectorAll("[data-palavra]")];
    let quadro = 0;

    function atualizar() {
      quadro = 0;
      const altura = window.innerHeight;
      const topo = frase.getBoundingClientRect().top;
      const fracao = Math.max(0, Math.min(1, (altura * 0.85 - topo) / (altura * 0.5)));
      const acesas = Math.round(fracao * palavras.length);
      palavras.forEach((palavra, i) => palavra.toggleAttribute("data-acesa", i < acesas));
    }

    function pedirAtualizacao() {
      if (!quadro) quadro = requestAnimationFrame(atualizar);
    }

    frase.setAttribute("data-frase-ligada", "");
    atualizar();
    window.addEventListener("scroll", pedirAtualizacao, { passive: true });
    window.addEventListener("resize", pedirAtualizacao);

    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", pedirAtualizacao);
      window.removeEventListener("resize", pedirAtualizacao);
      frase.removeAttribute("data-frase-ligada");
      palavras.forEach((palavra) => palavra.removeAttribute("data-acesa"));
    };
  }, [efeitosLigados]);

  return refFrase;
}
