"use client";

import Image from "next/image";
import { motion } from "motion/react";
import RotuloSecao from "@/components/layout/RotuloSecao";
import VideoPulse from "@/components/ui/VideoPulse";
import { useComoFuncionaFundo } from "@/hooks/useComoFuncionaFundo";
import { spring } from "@/lib/presetsMovimento";

// O layout do modo fixo é só CSS, para a página nascer certa, sem pular quando o
// React assume. O JavaScript só escolhe o item ativo.

// Medidas escritas por extenso nas classes: o Tailwind só gera as classes que
// encontra escritas no arquivo.
const CLASSES_FUNDO =
  "sticky top-[calc(var(--altura-cabecalho)+var(--altura-indice,0px))] ml-[calc(50%-50vw)] hidden h-[calc(100svh-var(--altura-cabecalho)-var(--altura-indice,0px))] w-screen overflow-hidden bg-[var(--cor-cortina)] efeitos-ligados:secao-fixa:block";
const CLASSES_CONTEUDO =
  "relative grid grid-cols-1 gap-6 efeitos-ligados:secao-fixa:mt-[calc(-100svh+var(--altura-cabecalho)+var(--altura-indice,0px))] efeitos-ligados:secao-fixa:pt-6";

const ITENS = [
  {
    chave: "vibracoes",
    titulo: "Vibrações direcionais",
    video: "animacao-vibracoes",
    conteudo: (
      <p>
        Precisa virar? A pulseira vibra no lado correspondente: à esquerda
        para virar à esquerda, à direita para virar à direita.
      </p>
    ),
  },
  {
    chave: "semaforos",
    titulo: "Semáforos em tempo real",
    idTitulo: "semaforos",
    video: "animacao-semaforos",
    conteudo: (
      <p>
        A Pulse usa dados dos semáforos de pedestres para indicar parar,
        aguardar ou atravessar, sem adivinhar pelo som do trânsito.
      </p>
    ),
  },
  {
    chave: "dois-modos",
    titulo: "Dois modos",
    idTitulo: "dois-modos",
    video: "animacao-dois-modos",
    conteudo: (
      <ul className="grid gap-3">
        <li className="rounded-campo border border-borda p-4">
          <h4>Sonoro e tátil</h4>
          <p className="mt-1">
            Sons curtos indicam parar, continuar ou aguardar. As vibrações
            continuam guiando as conversões.
          </p>
        </li>
        <li className="rounded-campo border border-borda p-4">
          <h4>Exclusivamente tátil</h4>
          <p className="mt-1">
            Para quem prefere não usar som ou está em lugares muito
            barulhentos.
          </p>
        </li>
      </ul>
    ),
  },
  {
    chave: "transporte",
    titulo: "Transporte público",
    idTitulo: "transporte-publico",
    video: "animacao-transporte",
    conteudo: (
      <>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>No local:</strong> identifica que você chegou ao ponto de
            ônibus ou à plataforma e avisa para aguardar.
          </li>
          <li>
            <strong>O veículo:</strong> orienta sobre a chegada do transporte
            e o momento de embarcar.
          </li>
          <li>
            <strong>O embarque:</strong> evita que você passe do local ou
            embarque no veículo errado.
          </li>
        </ol>
        <p>
          Opcional: a pulseira informa quanto falta para o transporte chegar,
          em voz no modo sonoro ou em Braille, com pinos retráteis, no modo
          tátil.
        </p>
        <p className="text-auxiliar text-texto-2">
          <strong>Nota:</strong> Depende de essas informações estarem
          disponíveis nos sistemas de transporte público.
        </p>
      </>
    ),
  },
];

function quadroParado(video) {
  return `/videos/${video}-quadro-parado.jpg`;
}

export default function ComoFuncionaFundo() {
  const { modoFixo, ativo, refLista, propsDoItem } = useComoFuncionaFundo();

  return (
    <section className="relative mt-20">
      <div aria-hidden="true" className={CLASSES_FUNDO}>
        {ITENS.map((item, indice) => (
          <motion.div
            key={item.chave}
            initial={false}
            animate={{ opacity: ativo === indice ? 1 : 0 }}
            transition={spring.suave}
            className="absolute inset-0"
          >
            <VideoPulse nome={item.video} fundo ativo={modoFixo && ativo === indice} className="size-full" />
          </motion.div>
        ))}
      </div>

      {/* No modo fixo, a margem negativa sobe o conteúdo por cima do fundo. */}
      <div className={CLASSES_CONTEUDO}>
        <div className="grid gap-3 efeitos-ligados:secao-fixa:max-w-120 efeitos-ligados:secao-fixa:rounded-cartao efeitos-ligados:secao-fixa:bg-superficie efeitos-ligados:secao-fixa:p-5 efeitos-ligados:secao-fixa:shadow-cartao">
          <RotuloSecao>No trajeto</RotuloSecao>
          <h2 id="como-funciona" tabIndex={-1} className="scroll-mt-10">
            Como funciona
          </h2>
        </div>

        <ul
          ref={refLista}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 efeitos-ligados:secao-fixa:max-w-120 efeitos-ligados:secao-fixa:grid-cols-1 efeitos-ligados:secao-fixa:gap-[40vh] efeitos-ligados:secao-fixa:pt-[16vh] efeitos-ligados:secao-fixa:pb-[30vh]"
        >
          {ITENS.map((item, indice) => (
            <li
              key={item.chave}
              {...propsDoItem(indice)}
              className={`grid grid-cols-1 content-start gap-3 rounded-cartao border bg-superficie p-5 shadow-cartao ${
                modoFixo && ativo === indice ? "border-acao ring-1 ring-acao" : "border-borda"
              }`}
            >
              <div
                aria-hidden="true"
                className="relative aspect-video overflow-hidden rounded-campo bg-[var(--cor-cortina)] efeitos-ligados:secao-fixa:hidden"
              >
                <Image
                  src={quadroParado(item.video)}
                  alt=""
                  fill
                  sizes="(min-width: 48rem) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 id={item.idTitulo} tabIndex={item.idTitulo ? -1 : undefined}>
                {item.titulo}
              </h3>
              <div className="grid gap-4">{item.conteudo}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
