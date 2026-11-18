"use client";

import { motion } from "motion/react";
import LinkInterno from "@/components/ui/LinkInterno";
import EspacoIcone from "@/components/ui/EspacoIcone";
import { useMagnetico } from "@/hooks/useMagnetico";

// Regra: só os botões laranja principais são magnéticos (19.6); o Botao chama este
// componente sozinho.
export default function BotaoMagnetico({
  href,
  icone,
  className,
  type = "button",
  onPointerMove,
  onPointerLeave,
  children,
  ...resto
}) {
  const { x, y, aoMover, aoSair } = useMagnetico();

  const eventos = {
    onPointerMove: (evento) => {
      aoMover(evento);
      onPointerMove?.(evento);
    },
    onPointerLeave: (evento) => {
      aoSair();
      onPointerLeave?.(evento);
    },
  };

  const conteudo = (
    <motion.span style={{ x, y }} className="inline-flex items-center justify-center gap-2">
      {icone && <EspacoIcone nome={icone} />}
      <span>{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <LinkInterno href={href} className={className} {...eventos} {...resto}>
        {conteudo}
      </LinkInterno>
    );
  }

  return (
    <button type={type} className={className} {...eventos} {...resto}>
      {conteudo}
    </button>
  );
}
