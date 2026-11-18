"use client";

import { useLinhaRotulo } from "@/hooks/useLinhaRotulo";

// Regra: só a linha se desenha; o rótulo e o título não se mexem (19.6).
export default function RotuloSecao({ children, className = "" }) {
  const refLinha = useLinhaRotulo();

  return (
    <p className={`rotulo-mono flex items-center gap-3 text-destaque ${className}`}>
      <span
        ref={refLinha}
        aria-hidden="true"
        className="h-[3px] w-6 shrink-0 origin-left rounded-full bg-acao"
      />
      {children}
    </p>
  );
}
