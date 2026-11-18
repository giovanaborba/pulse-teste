"use client";

import { useProgressoLeitura } from "@/hooks/useProgressoLeitura";

// Sem efeitos, a barra não aparece: parada em 0, ela não diria nada.
export default function BarraProgresso() {
  const refBarra = useProgressoLeitura();

  return (
    <div
      ref={refBarra}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px] origin-left scale-x-0 bg-acao efeitos-desligados:hidden"
    />
  );
}
