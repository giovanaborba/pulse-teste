"use client";

import { useEffect, useRef } from "react";
import { useAnimate } from "motion/react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { tremor } from "@/lib/presetsMovimento";

// Regra: sempre junto da mensagem de erro em texto; o tremor só reforça (19.11).
export default function Tremor({ gatilho, ativo, className = "", children }) {
  const { efeitosLigados } = useEfeitos();
  const [refBloco, animar] = useAnimate();
  const refUltimo = useRef(gatilho);

  useEffect(() => {
    if (gatilho === refUltimo.current) return;
    refUltimo.current = gatilho;
    if (!ativo || !efeitosLigados) return;
    const animacao = animar(refBloco.current, { x: tremor.x }, tremor.transition);
    return () => animacao.stop();
  }, [gatilho, ativo, efeitosLigados, animar, refBloco]);

  return (
    <div ref={refBloco} className={className}>
      {children}
    </div>
  );
}
