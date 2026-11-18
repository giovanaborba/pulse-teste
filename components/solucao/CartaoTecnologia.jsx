"use client";

import { useState } from "react";
import { motion } from "motion/react";
import EspacoIcone from "@/components/ui/EspacoIcone";
import EspacoImagem from "@/components/ui/EspacoImagem";
import { useEfeitos } from "@/hooks/useEfeitos";
import { spring } from "@/lib/presetsMovimento";

// Com os efeitos desligados a duração é 0: o MotionConfig não tira a rotação, por
// isso o cartão confere o interruptor.

// Mesma célula da grade: o cartão tem a altura da face mais alta e cresce com o texto.
const ESTILO_FACE =
  "[grid-area:1/1] rounded-t-cartao border border-b-0 backface-hidden";

export default function CartaoTecnologia({ rotulo, nome, descricao, src, alt }) {
  const [virado, setVirado] = useState(false);
  const { efeitosLigados } = useEfeitos();

  return (
    <li className="grid min-h-56 grid-cols-1 grid-rows-[1fr_auto] perspective-distant">
      <motion.div
        initial={false}
        animate={{ rotateY: virado ? 180 : 0 }}
        transition={efeitosLigados ? spring.suave : { duration: 0 }}
        className="grid grid-cols-1 transform-3d"
      >
        <div className={`${ESTILO_FACE} grid content-start gap-1.5 border-borda bg-superficie p-4`}>
          <span className="rotulo-mono text-destaque">{rotulo}</span>
          <h3 className="text-[1.15rem] leading-tight">{nome}</h3>
          <p className="text-auxiliar text-texto-2">{descricao}</p>
        </div>

        {/* inert: o verso escondido não recebe foco nem é lido. */}
        <div
          inert={!virado}
          className={`${ESTILO_FACE} overflow-hidden border-acao bg-superficie rotate-y-180`}
        >
          {src ? (
            <img src={src} alt={alt} loading="lazy" decoding="async" className="size-full object-cover" />
          ) : (
            <EspacoImagem texto={`Foto da peça: ${nome} (a definir)`} formato="livre" className="rounded-none border-0" />
          )}
        </div>
      </motion.div>

      <motion.button
        type="button"
        aria-pressed={virado}
        onClick={() => setVirado((atual) => !atual)}
        whileTap={{ scale: 0.97 }}
        className={`flex min-h-15 items-center gap-2 rounded-b-cartao border bg-superficie px-4 font-bold text-marca [border-top-style:dashed] focus-visible:-outline-offset-4 ${
          virado ? "border-acao" : "border-borda hover:border-marca"
        }`}
      >
        <EspacoIcone nome="ArrowsClockwise" />
        Ver a peça
      </motion.button>
    </li>
  );
}
