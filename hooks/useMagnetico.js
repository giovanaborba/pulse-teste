import { useEffect } from "react";
import { useSpring } from "motion/react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useConsultaMidia } from "@/hooks/useConsultaMidia";
import { spring } from "@/lib/presetsMovimento";

// Só o conteúdo se move; a área de clique fica parada, para o alvo nunca fugir de
// quem está mirando.
const LIMITE = 8; // px
const CONSULTA_PONTEIRO_FINO = "(pointer: fine)";

function limitar(valor) {
  return Math.max(-LIMITE, Math.min(LIMITE, valor));
}

export function useMagnetico() {
  const { efeitosLigados } = useEfeitos();
  const ponteiroFino = useConsultaMidia(CONSULTA_PONTEIRO_FINO);
  const ligado = efeitosLigados && ponteiroFino;
  const x = useSpring(0, spring.rapida);
  const y = useSpring(0, spring.rapida);

  useEffect(() => {
    if (ligado) return;
    x.jump(0);
    y.jump(0);
  }, [ligado, x, y]);

  function aoMover(evento) {
    if (!ligado || evento.pointerType === "touch") return;
    const caixa = evento.currentTarget.getBoundingClientRect();
    x.set(limitar((evento.clientX - caixa.left - caixa.width / 2) * 0.2));
    y.set(limitar((evento.clientY - caixa.top - caixa.height / 2) * 0.3));
  }

  function aoSair() {
    x.set(0);
    y.set(0);
  }

  return { x, y, aoMover, aoSair };
}
