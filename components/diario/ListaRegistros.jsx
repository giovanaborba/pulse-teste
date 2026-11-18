"use client";

import { AnimatePresence, motion } from "motion/react";
import CartaoRegistro from "@/components/diario/CartaoRegistro";
import { saida } from "@/lib/presetsMovimento";

// Regra: no Diário, só o registro em destaque anima; a lista não entra em cascata
// (decisão da 9.9). popLayout libera o lugar de quem sai, sem salto.
export default function ListaRegistros({ registros, idDestaque }) {
  return (
    <section className="mt-12">
      <h2>Registros</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {registros.map((registro) => (
            <motion.li key={registro.id} layout exit={{ opacity: 0, transition: saida }}>
              <CartaoRegistro registro={registro} destaque={registro.id === idDestaque} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
