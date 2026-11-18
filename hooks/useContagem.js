import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import { useEfeitos } from "@/hooks/useEfeitos";

// Regra: o número que conta é decorativo; o leitor de tela lê o valor real, que
// nunca muda. Sem JavaScript ou sem efeitos, aparece o valor final.
const DURACAO = 1.2; // segundos (19.6)

export function formatarNumero(numero, casas, antes = "", depois = "") {
  return `${antes}${numero.toFixed(casas).replace(".", ",")}${depois}`;
}

export function useContagem({ valor, casas = 0, antes = "", depois = "" }) {
  const refNumero = useRef(null);
  const { efeitosLigados } = useEfeitos();

  useEffect(() => {
    const numero = refNumero.current;
    if (!numero || !efeitosLigados) return;
    const formatar = (valorAtual) => formatarNumero(valorAtual, casas, antes, depois);
    const textoFinal = formatar(valor);
    if (numero.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    numero.textContent = formatar(0);
    let animacao = null;
    const pararDeObservar = inView(
      numero,
      () => {
        animacao = animate(0, valor, {
          duration: DURACAO,
          ease: [0.33, 1, 0.68, 1],
          onUpdate: (atual) => {
            numero.textContent = formatar(atual);
          },
        });
        pararDeObservar();
      },
      { amount: 0.6 },
    );

    return () => {
      pararDeObservar();
      animacao?.stop();
      numero.textContent = textoFinal;
    };
  }, [efeitosLigados, valor, casas, antes, depois]);

  return refNumero;
}
