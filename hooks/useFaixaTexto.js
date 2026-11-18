import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useEfeitos } from "@/hooks/useEfeitos";

// Regra: o botão "Efeitos" do cabeçalho é o controle de pausa da faixa (19.6,
// WCAG 2.2.2).
const VELOCIDADE = 60; // px por segundo
const PESO_DA_ROLAGEM = 0.6;
const SUAVIZACAO = 0.2;

export function useFaixaTexto() {
  const refTrilho = useRef(null);
  const { efeitosLigados } = useEfeitos();

  useEffect(() => {
    const trilho = refTrilho.current;
    if (!trilho || !efeitosLigados) return;

    let x = 0;
    let velocidadeRolagem = 0;
    let rolagemAnterior = window.scrollY;
    let naTela = false;

    // O relógio do GSAP passa deltaTime em ms.
    function quadro(_tempo, deltaTime) {
      const passo = window.scrollY - rolagemAnterior;
      rolagemAnterior = window.scrollY;
      velocidadeRolagem += (passo - velocidadeRolagem) * SUAVIZACAO;
      if (!naTela) return;

      const dt = Math.min(64, deltaTime);
      x -= (dt / 1000) * VELOCIDADE + Math.abs(velocidadeRolagem) * PESO_DA_ROLAGEM;
      const metade = trilho.scrollWidth / 2;
      if (metade && -x > metade) x += metade;
      trilho.style.transform = `translateX(${x.toFixed(1)}px)`;
    }

    const observador = new IntersectionObserver(([entrada]) => {
      naTela = entrada.isIntersecting;
    });
    observador.observe(trilho);
    gsap.ticker.add(quadro);

    return () => {
      gsap.ticker.remove(quadro);
      observador.disconnect();
      trilho.style.transform = "";
    };
  }, [efeitosLigados]);

  return refTrilho;
}
