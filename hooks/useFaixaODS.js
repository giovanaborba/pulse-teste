import { useRef, useState } from "react";

// Regra: "Pausar" atende a WCAG 2.2.2. Na frase, o mouse em cima vence o foco.

export function useFaixaODS() {
  const [pausada, setPausada] = useState(false);
  const [odsComMouse, setOdsComMouse] = useState(null);
  const [odsComFoco, setOdsComFoco] = useState(null);
  const refFaixa = useRef(null);

  function alternarPausa() {
    setPausada((valor) => !valor);
  }

  // Ao sair, a faixa volta ao começo da rolagem interna, para a animação recomeçar
  // do ponto certo.
  function aoSairDoBotao(evento) {
    setOdsComFoco(null);
    const faixa = refFaixa.current;
    if (faixa && !faixa.contains(evento.relatedTarget)) {
      faixa.scrollLeft = 0;
    }
  }

  function eventosDoOds(numero) {
    return {
      onMouseEnter: () => setOdsComMouse(numero),
      onMouseLeave: () => setOdsComMouse(null),
      onFocus: (evento) => {
        setOdsComFoco(numero);
        // Regra: nada invisível recebe foco (18.2). No quadro seguinte, já parada, a
        // faixa rola até o botão aparecer inteiro.
        const botao = evento.currentTarget;
        requestAnimationFrame(() => botao.scrollIntoView({ block: "nearest", inline: "nearest" }));
      },
      onBlur: aoSairDoBotao,
      // No toque, alguns navegadores (Safari no iPhone) não focam o
      // botão. O clique garante que a frase apareça.
      onClick: () => setOdsComFoco(numero),
    };
  }

  return {
    pausada,
    alternarPausa,
    odsEmDestaque: odsComMouse ?? odsComFoco,
    eventosDoOds,
    refFaixa,
  };
}
