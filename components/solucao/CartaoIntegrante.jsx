"use client";

import { motion } from "motion/react";
import EspacoIcone from "@/components/ui/EspacoIcone";
import FotoFiltro from "@/components/ui/FotoFiltro";
import { useEfeitos } from "@/hooks/useEfeitos";
import { spring } from "@/lib/presetsMovimento";

// Regra: com o mouse, o polaroide só se endireita e sobe, sem acompanhar o mouse
// (decisão da 9.7). Cores fixas nos dois temas, como uma foto de verdade.
export default function CartaoIntegrante({ nome, src, alt, inclinacao = 0, className = "" }) {
  const { efeitosLigados } = useEfeitos();

  return (
    <li className={`varal-trecho relative pt-[18px] ${className}`}>
      <motion.div
        initial={false}
        animate={{ rotate: inclinacao, y: 0 }}
        whileHover={efeitosLigados ? { rotate: 0, y: -6 } : undefined}
        transition={spring.padrao}
        className="polaroide relative grid origin-top gap-2 rounded-[4px] bg-[#FFFFFF] p-2 pb-3 text-[#242428] shadow-[0_8px_18px_rgba(26,26,29,0.2)] forced-colors:border"
      >
        <FotoFiltro className="aspect-square rounded-[2px]">
          {src ? (
            <img src={src} alt={alt} loading="lazy" decoding="async" className="size-full object-cover" />
          ) : (
            <div className="grid size-full place-items-center border-2 border-dashed border-[#6E6E78] bg-[#FAFAFA]">
              <EspacoIcone nome="Image" />
            </div>
          )}
        </FotoFiltro>
        <h3 className="text-center font-titulo text-[1.15rem] leading-[1.1] font-normal tracking-[0.02em] uppercase">
          <span className="polaroide-nome px-1">{nome}</span>
        </h3>
      </motion.div>
    </li>
  );
}
