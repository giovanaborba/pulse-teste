import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "motion/react";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useConsultaMidia } from "@/hooks/useConsultaMidia";
import { spring } from "@/lib/presetsMovimento";

// Regra: arrastar sempre tem alternativa: setas, botões e foco (WCAG 2.5.7).
// No toque, pan-y deixa a página rolar, para o dedo não ficar preso na galeria.
const CONSULTA_CANVAS = "(min-width: 64rem) and (min-height: 37.5rem)";
export const TAMANHO_PLANO = { largura: 2400, altura: 1500 };
const PASSO_TECLA = 200;
const PASSO_BOTAO = { x: 320, y: 260 };
const JANELA_VELOCIDADE = 100; // ms
const ALCANCE_INERCIA = 0.25; // s
const CENTRO_FOTOS = { x: 900, y: 550 };
// Setas: para onde o plano anda (o contrário de para onde se "olha")
const SETAS = {
  ArrowLeft: [1, 0],
  ArrowRight: [-1, 0],
  ArrowUp: [0, 1],
  ArrowDown: [0, -1],
};

function limitar(janela, valorX, valorY) {
  const minimoX = Math.min(0, janela.clientWidth - TAMANHO_PLANO.largura);
  const minimoY = Math.min(0, janela.clientHeight - TAMANHO_PLANO.altura);
  return [Math.max(minimoX, Math.min(0, valorX)), Math.max(minimoY, Math.min(0, valorY))];
}

// Se o navegador rolou a janela para mostrar uma foto com foco, essa rolagem
// vira deslocamento do plano, e a janela volta ao 0.
function absorverRolagemDaJanela(janela, x, y) {
  const { scrollLeft, scrollTop } = janela;
  if (!scrollLeft && !scrollTop) return false;
  janela.scrollLeft = 0;
  janela.scrollTop = 0;
  // jump: muda sem animar (e para a mola em andamento)
  x.jump(x.get() - scrollLeft);
  y.jump(y.get() - scrollTop);
  return true;
}

export function useGaleriaCanvas() {
  const { efeitosLigados } = useEfeitos();
  const telaGrande = useConsultaMidia(CONSULTA_CANVAS);
  const modoCanvas = efeitosLigados && telaGrande;
  const refJanela = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [arrastando, setArrastando] = useState(false);
  const refAnimacoes = useRef([]);
  const refArrasto = useRef(null);
  const refDestino = useRef(null);

  function pararAnimacoes() {
    refAnimacoes.current.forEach((animacao) => animacao.stop());
    refAnimacoes.current = [];
    refDestino.current = null;
  }

  function moverPara(alvoX, alvoY, velocidade = [0, 0]) {
    const janela = refJanela.current;
    if (!janela) return;
    pararAnimacoes();
    const [destinoX, destinoY] = limitar(janela, alvoX, alvoY);
    refDestino.current = [destinoX, destinoY];
    refAnimacoes.current = [
      animate(x, destinoX, { ...spring.suave, velocity: velocidade[0] }),
      animate(y, destinoY, { ...spring.suave, velocity: velocidade[1] }),
    ];
  }

  useEffect(() => {
    const janela = refJanela.current;
    if (!janela || !modoCanvas) return;
    const animacoes = refAnimacoes;
    const destino = refDestino;

    function aoRolarJanela() {
      if (!absorverRolagemDaJanela(janela, x, y) || !destino.current) return;
      const [destinoX, destinoY] = destino.current;
      animacoes.current = [animate(x, destinoX, spring.suave), animate(y, destinoY, spring.suave)];
    }
    janela.addEventListener("scroll", aoRolarJanela);

    const [inicioX, inicioY] = limitar(
      janela,
      janela.clientWidth / 2 - CENTRO_FOTOS.x,
      janela.clientHeight / 2 - CENTRO_FOTOS.y,
    );
    x.jump(inicioX);
    y.jump(inicioY);

    const observador = new ResizeObserver(() => {
      const [dentroX, dentroY] = limitar(janela, x.get(), y.get());
      x.jump(dentroX);
      y.jump(dentroY);
    });
    observador.observe(janela);

    return () => {
      observador.disconnect();
      janela.removeEventListener("scroll", aoRolarJanela);
      animacoes.current.forEach((animacao) => animacao.stop());
      animacoes.current = [];
    };
  }, [modoCanvas, x, y]);

  function aoApertar(evento) {
    if (evento.button !== 0) return;
    pararAnimacoes();
    refArrasto.current = {
      ponteiro: evento.pointerId,
      inicioX: evento.clientX,
      inicioY: evento.clientY,
      planoX: x.get(),
      planoY: y.get(),
      amostras: [{ t: evento.timeStamp, x: evento.clientX, y: evento.clientY }],
    };
    evento.currentTarget.setPointerCapture(evento.pointerId);
    setArrastando(true);
  }

  function aoMover(evento) {
    const arrasto = refArrasto.current;
    if (!arrasto || arrasto.ponteiro !== evento.pointerId) return;
    const [novoX, novoY] = limitar(
      evento.currentTarget,
      arrasto.planoX + evento.clientX - arrasto.inicioX,
      arrasto.planoY + evento.clientY - arrasto.inicioY,
    );
    x.set(novoX);
    y.set(novoY);
    arrasto.amostras.push({ t: evento.timeStamp, x: evento.clientX, y: evento.clientY });
    while (arrasto.amostras.length > 2 && evento.timeStamp - arrasto.amostras[0].t > JANELA_VELOCIDADE) {
      arrasto.amostras.shift();
    }
  }

  function aoSoltar(evento) {
    const arrasto = refArrasto.current;
    if (!arrasto || arrasto.ponteiro !== evento.pointerId) return;
    refArrasto.current = null;
    setArrastando(false);
    const primeira = arrasto.amostras[0];
    const ultima = arrasto.amostras[arrasto.amostras.length - 1];
    const tempo = ultima.t - primeira.t;
    if (evento.timeStamp - ultima.t > JANELA_VELOCIDADE || tempo <= 0) return;
    const velocidadeX = ((ultima.x - primeira.x) / tempo) * 1000;
    const velocidadeY = ((ultima.y - primeira.y) / tempo) * 1000;
    moverPara(
      x.get() + velocidadeX * ALCANCE_INERCIA,
      y.get() + velocidadeY * ALCANCE_INERCIA,
      [velocidadeX, velocidadeY],
    );
  }

  function aoTeclar(evento) {
    if (evento.key === "Tab") {
      tabularEntreFotos(evento);
      return;
    }
    const direcao = SETAS[evento.key];
    if (!direcao) return;
    evento.preventDefault();
    moverPara(x.get() + direcao[0] * PASSO_TECLA, y.get() + direcao[1] * PASSO_TECLA);
  }

  // Foco com preventScroll, para a página não pular; o onFocus da foto leva o plano até ela.
  function tabularEntreFotos(evento) {
    const fotos = [...evento.currentTarget.querySelectorAll("figure")];
    const atual = fotos.indexOf(document.activeElement); // −1 = a janela
    const destino = atual + (evento.shiftKey ? -1 : 1);
    if (atual === -1 && evento.shiftKey) return;
    if (destino < 0 || destino >= fotos.length) return;
    evento.preventDefault();
    fotos[destino].focus({ preventScroll: true });
  }

  function aoTeclarControles(evento) {
    const janela = refJanela.current;
    const primeiroBotao = evento.currentTarget.querySelector("button");
    if (evento.key !== "Tab" || !evento.shiftKey || !janela || document.activeElement !== primeiroBotao) return;
    const fotos = janela.querySelectorAll("figure");
    if (!fotos.length) return;
    evento.preventDefault();
    fotos[fotos.length - 1].focus({ preventScroll: true });
  }

  // Botões: dx e dy dizem para onde se quer olhar (−1 = esquerda/cima).
  function mover(dx, dy) {
    moverPara(x.get() - dx * PASSO_BOTAO.x, y.get() - dy * PASSO_BOTAO.y);
  }

  function centralizar() {
    const janela = refJanela.current;
    if (!janela) return;
    moverPara(janela.clientWidth / 2 - CENTRO_FOTOS.x, janela.clientHeight / 2 - CENTRO_FOTOS.y);
  }

  // Um clique para arrastar também foca a foto; nesse caso o plano segue o arrasto,
  // e não o foco.
  function aoFocarFoto(evento) {
    const janela = refJanela.current;
    const item = evento.currentTarget.closest("li");
    if (!janela || !item || refArrasto.current) return;
    absorverRolagemDaJanela(janela, x, y);
    moverPara(
      janela.clientWidth / 2 - (item.offsetLeft + item.offsetWidth / 2),
      janela.clientHeight / 2 - (item.offsetTop + item.offsetHeight / 2),
    );
  }

  return {
    modoCanvas,
    x,
    y,
    arrastando,
    refJanela,
    eventosJanela: {
      onPointerDown: aoApertar,
      onPointerMove: aoMover,
      onPointerUp: aoSoltar,
      onPointerCancel: aoSoltar,
      onKeyDown: aoTeclar,
    },
    aoTeclarControles,
    mover,
    centralizar,
    aoFocarFoto,
  };
}
