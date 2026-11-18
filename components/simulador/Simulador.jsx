"use client";

import { useEffect, useRef, useState } from "react";
import "@/components/simulador/simulador.css";
import { dmSans } from "@/components/simulador/fonte";
import TelaInicial from "@/components/simulador/TelaInicial";
import TelaRota from "@/components/simulador/TelaRota";
import TelaTransporte from "@/components/simulador/TelaTransporte";
import RotasSalvas from "@/components/simulador/RotasSalvas";
import Vitrine from "@/components/simulador/Vitrine";
import { usePulseiraSimulador, useSomSemaforo } from "@/hooks/usePulseiraSimulador";
import { useNavegacaoSimulador } from "@/hooks/useNavegacaoSimulador";

// Nome de cada tela, lido pelo leitor de tela quando a pessoa troca de tela.
const NOMES_DAS_TELAS = {
  inicio: "tela inicial",
  vitrine: "comandos da pulseira",
  rotas: "rotas salvas",
  rota: "rota no mapa",
  transporte: "ônibus e trem",
};

// O simulador inteiro. Tudo o que é visual vive dentro de .simulador (simulador.css),
// para nada vazar para o resto do site.
export default function Simulador() {
  const [vitrineAberta, definirVitrineAberta] = useState(false);
  const [rotasAbertas, definirRotasAbertas] = useState(false);
  const pulso = usePulseiraSimulador();
  const nav = useNavegacaoSimulador(pulso.modo, pulso.emitirContinuar);
  useSomSemaforo(pulso.modo, nav.estado);

  const refRaiz = useRef(null);
  const tela = vitrineAberta ? "vitrine" : rotasAbertas ? "rotas" : nav.tela;
  const telaAnterior = useRef(tela);

  // Ao trocar de tela, o foco vai para o simulador (o botão clicado some) e a página
  // volta ao topo dele, se ele tiver ficado para cima da tela.
  useEffect(() => {
    if (telaAnterior.current === tela) return;
    telaAnterior.current = tela;
    const raiz = refRaiz.current;
    if (!raiz) return;
    raiz.focus({ preventScroll: true });
    if (raiz.getBoundingClientRect().top < 0) raiz.scrollIntoView({ block: "start" });
  }, [tela]);

  return (
    <div
      ref={refRaiz}
      tabIndex={-1}
      role="region"
      aria-label={`Simulador da pulseira: ${NOMES_DAS_TELAS[tela]}`}
      className={`simulador ${dmSans.variable}`}
    >
      {vitrineAberta ? (
        <Vitrine voltar={() => definirVitrineAberta(false)} />
      ) : rotasAbertas ? (
        <RotasSalvas voltar={() => definirRotasAbertas(false)} nav={nav} />
      ) : nav.tela === "inicio" ? (
        <TelaInicial
          pulso={pulso}
          nav={nav}
          abrirVitrine={() => definirVitrineAberta(true)}
          abrirRotas={() => definirRotasAbertas(true)}
        />
      ) : nav.tela === "transporte" ? (
        <TelaTransporte pulso={pulso} nav={nav} />
      ) : (
        <TelaRota pulso={pulso} nav={nav} />
      )}
    </div>
  );
}
