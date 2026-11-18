"use client";

import { formatarNumero, useContagem } from "@/hooks/useContagem";

export default function NumeroContado({ valor, casas = 0, antes = "", depois = "", textoReal, className = "" }) {
  const refNumero = useContagem({ valor, casas, antes, depois });

  return (
    <strong className={className}>
      <span ref={refNumero} aria-hidden="true">
        {formatarNumero(valor, casas, antes, depois)}
      </span>
      <span className="sr-only">{textoReal}</span>
    </strong>
  );
}
