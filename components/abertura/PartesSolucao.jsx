"use client";

import { motion } from "motion/react";
import LinkInterno from "@/components/ui/LinkInterno";
import EspacoIcone from "@/components/ui/EspacoIcone";

// Regra: UMA lista de 6 links, na ordem da 18.6. O subgrid põe cada link de um lado
// da pulseira sem mudar a ordem no HTML.

export const PARTES_DA_SOLUCAO = [
  { parte: "destino", texto: "Como funciona", href: "/solucao#como-funciona", descricao: "Aperte o botão e diga o destino." },
  { parte: "esquerdo", texto: "Os sinais", href: "/solucao#os-sinais", descricao: "Cada comando tem uma vibração própria." },
  { parte: "faixa", texto: "Transporte público", href: "/solucao#transporte-publico", descricao: "Avisa a hora de embarcar no veículo certo." },
  { parte: "modo", texto: "Dois modos", href: "/solucao#dois-modos", descricao: "Sonoro e tátil, ou só tátil." },
  { parte: "direito", texto: "Semáforos", href: "/solucao#semaforos", descricao: "Dados reais para saber quando atravessar." },
  { parte: "pressao", texto: "Tecnologias", href: "/solucao#tecnologias", descricao: "GPS, ESP32, motores e atuadores." },
];

// Lugar de cada link na grade do computador (classes escritas por
// inteiro, para o Tailwind encontrá-las)
const POSICAO_NO_COMPUTADOR = [
  "abertura-larga:col-start-1 abertura-larga:row-start-1",
  "abertura-larga:col-start-1 abertura-larga:row-start-2",
  "abertura-larga:col-start-1 abertura-larga:row-start-3",
  "abertura-larga:col-start-3 abertura-larga:row-start-1",
  "abertura-larga:col-start-3 abertura-larga:row-start-2",
  "abertura-larga:col-start-3 abertura-larga:row-start-3",
];

export default function PartesSolucao({ parteAtiva, aoMudarParte, registrarNo, animacao }) {
  return (
    <motion.nav
      aria-labelledby="titulo-partes"
      {...animacao}
      className="mt-6 abertura-larga:pointer-events-none abertura-larga:col-span-full abertura-larga:row-span-3 abertura-larga:row-start-1 abertura-larga:mt-0 abertura-larga:grid abertura-larga:grid-cols-subgrid abertura-larga:grid-rows-subgrid"
    >
      <h2 id="titulo-partes" className="sr-only">
        Partes da solução
      </h2>
      <ul className="grid gap-2.5 sm:grid-cols-2 abertura-larga:col-span-full abertura-larga:row-span-3 abertura-larga:grid-cols-subgrid abertura-larga:grid-rows-subgrid">
        {PARTES_DA_SOLUCAO.map((item, indice) => {
          const ativa = parteAtiva === item.parte;
          const naEsquerda = indice < 3;
          return (
            <li
              key={item.parte}
              className={`abertura-larga:pointer-events-auto abertura-larga:self-center ${POSICAO_NO_COMPUTADOR[indice]}`}
            >
              <LinkInterno
                href={item.href}
                onMouseEnter={() => aoMudarParte(item.parte)}
                onMouseLeave={() => aoMudarParte(null)}
                onFocus={() => aoMudarParte(item.parte)}
                onBlur={() => aoMudarParte(null)}
                className={`grid min-h-16 grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 rounded-[0.875rem] border px-4 py-3 text-texto no-underline transition-[translate,background-color,border-color] duration-200 abertura-larga:px-3 abertura-larga:py-2 ${
                  naEsquerda ? "abertura-larga:grid-cols-[1fr_auto] abertura-larga:text-right" : ""
                } ${
                  ativa
                    ? "border-marca bg-superficie efeitos-ligados:-translate-y-0.5"
                    : "border-borda bg-superficie abertura-larga:border-transparent abertura-larga:bg-transparent"
                }`}
              >
                <span
                  aria-hidden="true"
                  ref={registrarNo(item.parte)}
                  className={`row-span-2 size-3 rounded-full bg-acao shadow-[0_0_0_4px_color-mix(in_srgb,var(--cor-acao)_25%,transparent)] ${
                    naEsquerda ? "abertura-larga:col-start-2 abertura-larga:row-start-1" : ""
                  }`}
                />
                <span
                  className={`inline-flex items-center gap-1 text-lg leading-tight font-bold ${
                    naEsquerda ? "abertura-larga:col-start-1 abertura-larga:row-start-1 abertura-larga:justify-end" : ""
                  }`}
                >
                  {item.texto}
                  <EspacoIcone nome="ArrowRight" />
                </span>
                <span
                  className={`text-auxiliar leading-snug text-texto-2 ${
                    naEsquerda ? "abertura-larga:col-start-1 abertura-larga:row-start-2" : ""
                  }`}
                >
                  {item.descricao}
                </span>
              </LinkInterno>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
