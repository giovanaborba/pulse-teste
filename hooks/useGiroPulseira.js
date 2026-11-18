import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { VISTA_DAS_PARTES } from "@/lib/pulseira3d/partes";

// Guarda só o destino do giro; quem anima é a cena, sem redesenhar o React.
// Regra: nenhum jeito de girar depende só do mouse (WCAG 2.5.7).

const VISTA_TRES_QUARTOS = { y: -0.6, x: 0.18 };
const VISTA_DA_FRENTE = { y: -0.35, x: 0.12 };
const INCLINACAO_MAXIMA = 0.9; // radianos
const VOLTA = Math.PI * 2;

const limitar = (valor) => Math.max(-INCLINACAO_MAXIMA, Math.min(INCLINACAO_MAXIMA, valor));
// A volta completa mais perto de onde a pulseira está (para não dar voltas
// a mais ao ir para uma parte)
const voltaAtual = (y) => Math.round(y / VOLTA) * VOLTA;

export function useGiroPulseira() {
  const { efeitosLigados, efeitosConhecidos } = useEfeitos();
  const [giroPedido, setGiroPedido] = useState(true);
  const [arrastando, setArrastando] = useState(false);
  const girando = giroPedido && efeitosLigados;

  const refAlvo = useRef({ ...VISTA_TRES_QUARTOS });
  const refGirando = useRef(girando);
  const refArrasto = useRef(null);
  const refOuvintes = useRef(new Set());

  function avisar() {
    for (const aoMudar of refOuvintes.current) aoMudar();
  }

  useLayoutEffect(() => {
    refGirando.current = girando;
    avisar();
  }, [girando]);

  useEffect(() => {
    if (!efeitosConhecidos || efeitosLigados) return;
    refAlvo.current = { y: voltaAtual(refAlvo.current.y) + VISTA_DA_FRENTE.y, x: VISTA_DA_FRENTE.x };
    avisar();
  }, [efeitosConhecidos, efeitosLigados]);

  function pararGiro() {
    refGirando.current = false;
    setGiroPedido(false);
  }

  function alternarGiro() {
    setGiroPedido((valor) => !valor);
  }

  function mudarAlvo(y, x) {
    refAlvo.current = { y, x: limitar(x) };
    avisar();
  }

  function girar(graus) {
    pararGiro();
    mudarAlvo(refAlvo.current.y + (graus * Math.PI) / 180, refAlvo.current.x);
  }

  function verFrente() {
    pararGiro();
    mudarAlvo(voltaAtual(refAlvo.current.y) + VISTA_DA_FRENTE.y, VISTA_DA_FRENTE.x);
  }

  function verPorDentro() {
    girar(180);
  }

  // As partes da face ficam um pouco de lado, para o relevo aparecer.
  function irParaParte(nome) {
    const vista = VISTA_DAS_PARTES[nome];
    if (!vista) return;
    pararGiro();
    const ajuste = vista.angulo === 0 ? VISTA_DA_FRENTE.y : 0;
    mudarAlvo(voltaAtual(refAlvo.current.y) + vista.angulo + ajuste, vista.inclinar ?? VISTA_DA_FRENTE.x);
  }

  function verSinal() {
    pararGiro();
    mudarAlvo(voltaAtual(refAlvo.current.y) - 0.3, VISTA_DA_FRENTE.x);
  }

  function aoApertarTecla(evento) {
    const passos = { ArrowLeft: [-0.3, 0], ArrowRight: [0.3, 0], ArrowUp: [0, -0.15], ArrowDown: [0, 0.15] };
    const passo = passos[evento.key];
    if (!passo) return;
    evento.preventDefault(); // as setas não rolam a página enquanto giram a pulseira
    pararGiro();
    mudarAlvo(refAlvo.current.y + passo[0], refAlvo.current.x + passo[1]);
  }

  function aoApertar(evento) {
    if (evento.button !== undefined && evento.button !== 0) return;
    pararGiro();
    refArrasto.current = { x: evento.clientX, y: evento.clientY, alvoY: refAlvo.current.y, alvoX: refAlvo.current.x };
    evento.currentTarget.setPointerCapture?.(evento.pointerId);
    setArrastando(true);
  }

  function aoMover(evento) {
    const arrasto = refArrasto.current;
    if (!arrasto) return;
    mudarAlvo(
      arrasto.alvoY + (evento.clientX - arrasto.x) * 0.012,
      arrasto.alvoX + (evento.clientY - arrasto.y) * 0.006,
    );
  }

  function aoSoltar() {
    refArrasto.current = null;
    setArrastando(false);
  }

  const conexao = {
    refAlvo,
    refGirando,
    assinar(aoMudar) {
      refOuvintes.current.add(aoMudar);
      return () => refOuvintes.current.delete(aoMudar);
    },
  };

  return {
    girando,
    alternarGiro,
    girar,
    verFrente,
    verPorDentro,
    irParaParte,
    verSinal,
    arrastando,
    propsPalco: {
      onKeyDown: aoApertarTecla,
      onPointerDown: aoApertar,
      onPointerMove: aoMover,
      onPointerUp: aoSoltar,
      onPointerCancel: aoSoltar,
      onLostPointerCapture: aoSoltar,
    },
    conexao,
  };
}
