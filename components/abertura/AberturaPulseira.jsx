"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import Pulseira3D from "@/components/pulseira/Pulseira3D";
import CapaIntro from "@/components/abertura/CapaIntro";
import Preloader from "@/components/abertura/Preloader";
import PartesSolucao, { PARTES_DA_SOLUCAO } from "@/components/abertura/PartesSolucao";
import PalavraFundo from "@/components/ui/PalavraFundo";
import EspacoIcone from "@/components/ui/EspacoIcone";
import IconeAlternado from "@/components/ui/IconeAlternado";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useCapaIntro } from "@/hooks/useCapaIntro";
import { useEncaixe } from "@/hooks/useEncaixe";
import { useGiroPulseira } from "@/hooks/useGiroPulseira";
import { useLinhasPartes } from "@/hooks/useLinhasPartes";
import { SINAIS_DA_ABERTURA } from "@/lib/pulseira3d/sinais";
import { spring } from "@/lib/presetsMovimento";

// Regra: "Girar sozinha" para o giro, os sinais e o Braille (WCAG 2.2.2, decisão da 9.0).
// Ordem no HTML = ordem do leitor de tela (18.15): H1 → resumo → palco → giro → links.

const ESTILO_BOTAO_GIRO =
  "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-borda bg-superficie px-4 font-bold text-texto hover:border-marca";
export default function AberturaPulseira() {
  const [sinalAtual, setSinalAtual] = useState(SINAIS_DA_ABERTURA[0]);
  const [cenaPronta, setCenaPronta] = useState(false);
  const [parteAtiva, setParteAtiva] = useState(null);
  const { efeitosLigados } = useEfeitos();
  const capa = useCapaIntro();
  const giro = useGiroPulseira();
  const { refPalco, refSvg, registrarNo, aoDesenhar } = useLinhasPartes(parteAtiva);
  const parada = !efeitosLigados || !cenaPronta;
  useEncaixe();

  function aoCenaPronta() {
    setCenaPronta(true);
  }

  function aoCenaFalhar() {
    setCenaPronta(false);
  }

  // initial: false: na primeira pintura (e sem JavaScript), o texto já aparece no lugar.
  function revelacao(atraso = 0) {
    if (capa.capaNaTela) {
      return { initial: false, animate: { opacity: 0, y: 12 }, transition: { duration: 0 } };
    }
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      transition: { ...spring.padrao, delay: atraso },
    };
  }

  const palavra = parada || capa.capaNaTela ? "Pulse" : sinalAtual.palavra;

  return (
    // overflow-x-clip: a palavra de fundo tem a largura da tela; o que
    // passar é cortado, sem criar rolagem lateral.
    <section
      aria-labelledby="titulo-inicio"
      data-encaixe=""
      className="relative overflow-x-clip margem-lateral pt-8 pb-10"
    >
      {/* Portal no <body>: com o rodapé revelado, o <main> ganha camada própria, e a capa
          ficaria atrás do cabeçalho. */}
      {capa.capaNaTela &&
        createPortal(
          <>
            <CapaIntro refCapa={capa.refCapa} saindo={capa.saindo} aoTocar={capa.sair} />
            {capa.preloaderNaTela && (
              <Preloader
                refPreloader={capa.refPreloader}
                refContador={capa.refContador}
                aoTocar={capa.sair}
              />
            )}
          </>,
          document.body,
        )}

      <div className="relative mx-auto grid max-w-pagina gap-2">
        <motion.div {...revelacao()} className="grid justify-items-center gap-3 text-center">
          <p className="rotulo-mono text-destaque">Pulseira de navegação</p>
          <h1 id="titulo-inicio" tabIndex={-1} className="max-w-[18ch] text-h1-abertura">
            Inovação que chega a quem precisa
          </h1>
          <p className="max-w-[46ch] text-texto-2">
            A Pulse é uma pulseira que guia pessoas cegas e com baixa visão pela cidade.
            Conheça o problema que ela resolve.
          </p>
        </motion.div>

        <div
          ref={refPalco}
          className="relative mt-2 abertura-larga:grid abertura-larga:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] abertura-larga:grid-rows-[auto_auto_auto_auto] abertura-larga:items-center abertura-larga:gap-x-6 abertura-larga:gap-y-8"
        >
          <svg
            ref={refSvg}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden size-full overflow-visible abertura-larga:block"
          >
            {PARTES_DA_SOLUCAO.map((item) => (
              <g key={item.parte}>
                <path
                  data-linha={item.parte}
                  className="fill-none stroke-destaque opacity-55 [stroke-dasharray:3_7] [stroke-width:1.6] [&.ativa]:opacity-100 [&.ativa]:[stroke-width:2.4]"
                />
                <circle data-ponto={item.parte} r="4" className="fill-destaque" />
              </g>
            ))}
          </svg>

          <div className="relative abertura-larga:col-start-2 abertura-larga:row-span-3 abertura-larga:row-start-1">
            {/* A palavra fica na frente da textura, nunca atrás: a textura tem fundo e a cobriria. */}
            <div aria-hidden="true" className="textura-piso textura-centro absolute -inset-6" />
            <PalavraFundo
              texto={palavra}
              animarTroca
              className="inset-y-0 left-1/2 w-screen -translate-x-1/2"
            />
            <Pulseira3D
              modo="abertura"
              giro={giro}
              parteAtiva={parteAtiva}
              aguardarEntrada={capa.capaNaTela}
              adiar={capa.preloaderNaTela}
              aoTrocarSinal={setSinalAtual}
              aoDesenhar={aoDesenhar}
              aoPronta={aoCenaPronta}
              aoFalhar={aoCenaFalhar}
              className="mx-auto aspect-[1/0.92] w-full max-w-[30rem]"
            />
          </div>

          <motion.div
            {...revelacao(0.06)}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center abertura-larga:col-start-2 abertura-larga:row-start-4"
          >
            <span aria-hidden="true" className="rotulo-mono text-destaque">
              {parada ? "Sinais da Pulse" : `Sinal · ${sinalAtual.nome}`}
            </span>
            <span aria-hidden="true" className="text-auxiliar text-texto-2">
              {parada ? "Veja cada sinal explicado na página Solução." : sinalAtual.descricao}
            </span>
            {/* Só com a cena pronta: sem cena, não há o que girar. */}
            {cenaPronta && (
              <div role="group" aria-label="Girar a pulseira" className="flex flex-wrap justify-center gap-2">
                <button type="button" onClick={() => giro.girar(-45)} className={ESTILO_BOTAO_GIRO}>
                  <EspacoIcone nome="ArrowCounterClockwise" />
                  Girar para a esquerda
                </button>
                <button type="button" onClick={() => giro.girar(45)} className={ESTILO_BOTAO_GIRO}>
                  <EspacoIcone nome="ArrowClockwise" />
                  Girar para a direita
                </button>
                {efeitosLigados && (
                  <button
                    type="button"
                    aria-pressed={giro.girando}
                    onClick={giro.alternarGiro}
                    className={ESTILO_BOTAO_GIRO}
                  >
                    <IconeAlternado chave={giro.girando ? "pausar" : "girar"}>
                      {giro.girando ? (
                        <EspacoIcone nome="Pause" />
                      ) : (
                        <EspacoIcone nome="Play" />
                      )}
                    </IconeAlternado>
                    Girar sozinha
                  </button>
                )}
              </div>
            )}
          </motion.div>

          <PartesSolucao
            parteAtiva={parteAtiva}
            aoMudarParte={setParteAtiva}
            registrarNo={registrarNo}
            animacao={revelacao(0.12)}
          />
        </div>
      </div>
    </section>
  );
}
