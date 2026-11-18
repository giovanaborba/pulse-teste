"use client";

import { useRef } from "react";
import { usePulseira3D } from "@/hooks/usePulseira3D";

export default function CenaPulseira({ modo, interativo, pronta, idDescricao, giro, ...opcoes }) {
  const refCaixa = useRef(null);
  usePulseira3D(refCaixa, { modo, giro: giro?.conexao, ...opcoes });

  // Uma <div> só, sempre a mesma: o canvas criado pelo hook fica dentro
  // dela. Só os atributos mudam quando a cena fica pronta.
  const ehPalco = interativo && pronta;
  const propsPalco = ehPalco
    ? {
        role: "group",
        "aria-roledescription": "modelo 3D",
        "aria-label": "Pulseira Pulse em 3D. Use as setas do teclado para girar.",
        "aria-describedby": idDescricao,
        tabIndex: 0,
        ...giro?.propsPalco,
      }
    : {};

  return (
    <div
      ref={refCaixa}
      aria-hidden={interativo ? undefined : "true"}
      {...propsPalco}
      className={`absolute inset-0 ${
        ehPalco ? `touch-pan-y rounded-cartao ${giro?.arrastando ? "cursor-grabbing" : "cursor-grab"}` : ""
      }`}
    />
  );
}
