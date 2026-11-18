"use client";

import { AnimatePresence, motion } from "motion/react";
import { saida, spring } from "@/lib/presetsMovimento";

export default function IconeAlternado({ chave, children }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={chave}
        aria-hidden="true"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0, transition: spring.rapida }}
        exit={{ opacity: 0, rotate: 90, transition: saida }}
        className="inline-flex shrink-0 has-[>[data-icone]]:hidden"
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}
