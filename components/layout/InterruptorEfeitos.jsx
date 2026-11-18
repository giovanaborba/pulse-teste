"use client";

import { motion } from "motion/react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { spring } from "@/lib/presetsMovimento";

// Texto e cores vêm do CSS (data-efeitos no <html>), que já está certo antes de o
// React assumir: o botão nunca mostra o estado errado.
export default function InterruptorEfeitos() {
  const { efeitosLigados, efeitosConhecidos, alternarEfeitos } = useEfeitos();

  return (
    <motion.button
      type="button"
      aria-pressed={efeitosLigados}
      onClick={alternarEfeitos}
      whileTap={{ scale: 0.97 }}
      className="inline-flex min-h-12 items-center gap-2.5 rounded-full border-2 border-borda bg-superficie py-1 pr-4 pl-2.5 text-left leading-tight font-bold text-texto hover:border-marca max-[26.25rem]:gap-2 max-[26.25rem]:pr-3 max-[26.25rem]:text-[0.95rem]"
    >
      <span
        aria-hidden="true"
        className="relative h-6 w-10 shrink-0 rounded-full border-2 border-borda bg-[color-mix(in_srgb,var(--cor-borda)_35%,transparent)] efeitos-ligados:border-sobre-acao efeitos-ligados:bg-acao"
      >
        {/* Antes da hidratação, a posição vem do CSS; depois, o Motion nasce no lugar
            (initial={false}) e só desliza quando a pessoa aperta. */}
        {efeitosConhecidos ? (
          <motion.span
            initial={false}
            animate={{ x: efeitosLigados ? 16 : 0 }}
            transition={spring.rapida}
            className="absolute top-0.5 left-0.5 size-4 rounded-full bg-texto-2 efeitos-ligados:bg-sobre-acao"
          />
        ) : (
          <span className="absolute top-0.5 left-0.5 size-4 rounded-full bg-texto-2 efeitos-ligados:translate-x-4 efeitos-ligados:bg-sobre-acao" />
        )}
      </span>
      <span className="max-[26.25rem]:max-w-[6.5em]">
        Efeitos: <span className="efeitos-desligados:hidden">ligados</span>
        <span className="efeitos-ligados:hidden">desligados</span>
      </span>
    </motion.button>
  );
}
