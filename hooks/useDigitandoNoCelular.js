import { useEffect, useState } from "react";

// Regra: a barra flutuante sai da frente do teclado do celular (7.3).
const CONSULTA_CELULAR = "(max-width: 47.99rem)";
const TIPOS_QUE_NAO_ABREM_TECLADO = ["radio", "checkbox", "button", "submit", "reset"];

function ehCampoDeDigitacao(elemento) {
  if (elemento instanceof HTMLTextAreaElement) return true;
  return elemento instanceof HTMLInputElement && !TIPOS_QUE_NAO_ABREM_TECLADO.includes(elemento.type);
}

export function useDigitandoNoCelular() {
  const [digitando, setDigitando] = useState(false);

  useEffect(() => {
    const consultaCelular = window.matchMedia(CONSULTA_CELULAR);

    function aoFocar(evento) {
      setDigitando(consultaCelular.matches && ehCampoDeDigitacao(evento.target));
    }
    function aoSair() {
      setDigitando(false);
    }

    document.addEventListener("focusin", aoFocar);
    document.addEventListener("focusout", aoSair);
    return () => {
      document.removeEventListener("focusin", aoFocar);
      document.removeEventListener("focusout", aoSair);
    };
  }, []);

  return digitando;
}
