"use client";

import { useFaixaTexto } from "@/hooks/useFaixaTexto";

const TEXTO = "Pulse · um guia no pulso · Pulse · um guia no pulso ·";

export default function FaixaTexto() {
  const refTrilho = useFaixaTexto();

  return (
    <div aria-hidden="true" className="faixa-texto">
      <div ref={refTrilho} className="faixa-texto-trilho">
        <span>{TEXTO}</span>
        <span>{TEXTO}</span>
      </div>
    </div>
  );
}
