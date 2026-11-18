"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEfeitos } from "@/hooks/useEfeitos";

// Regra: tamanho min(21rem, 150vw ÷ letras), contando no mínimo 5 letras (18.6), para
// caber na tela sem rolagem lateral.

function tamanhoDaPalavra(texto) {
  const letras = Math.max(5, texto.length);
  return `min(21rem, ${(150 / letras).toFixed(1)}vw)`;
}

export default function PalavraFundo({ texto, animarTroca = false, className = "inset-0", tamanho }) {
  const { efeitosLigados } = useEfeitos();
  const duracao = animarTroca && efeitosLigados ? 0.35 : 0;

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute flex items-center justify-center overflow-hidden ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={texto}
          className="palavra-fundo"
          style={{ fontSize: tamanho ?? tamanhoDaPalavra(texto) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duracao }}
        >
          {texto}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
