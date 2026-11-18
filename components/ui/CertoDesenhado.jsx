"use client";

import { motion } from "motion/react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { spring } from "@/lib/presetsMovimento";

// Regra: o "certo" fica na mensagem, e não no botão, para o anúncio "Registro salvo."
// não esperar a animação (decisão da 9.9).
export default function CertoDesenhado() {
  const { efeitosLigados } = useEfeitos();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 size-6 shrink-0"
    >
      <circle cx="12" cy="12" r="9.5" />
      <motion.path
        d="M7.5 12.5l3 3 6-6.5"
        initial={efeitosLigados ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={spring.padrao}
      />
    </svg>
  );
}
