"use client";

import EspacoImagem from "@/components/ui/EspacoImagem";
import VideoPulse from "@/components/ui/VideoPulse";
import { useRolagemFixa } from "@/hooks/useRolagemFixa";
import RotuloSecao from "@/components/layout/RotuloSecao";

// Regra: no modo fixo, os sinais inativos ficam transparentes, mas o leitor de tela
// lê os 4, em ordem. O vídeo nunca fica sobre a foto (decisão da 9.8).

const SINAIS = [
  {
    chave: "continuar",
    id: "sinal-continuar",
    link: "Continuar",
    titulo: "Continuar",
    pares: [
      ["Modo tátil:", "pressão contínua no pulso até você andar."],
      ["Modo sonoro:", "som grave e curto."],
    ],
    imagem: "Foto do sinal continuar (a definir)",
    src: "/imagens/sinal-continuar.webp",
    alt: "Pessoa cega com bengala atravessando a faixa de pedestres.",
  },
  {
    chave: "parar",
    id: "sinal-parar",
    link: "Parar",
    titulo: "Parar",
    pares: [
      ["Modo tátil:", "vibração contínua até você parar."],
      ["Modo sonoro:", "som agudo e contínuo."],
    ],
    imagem: "Foto do sinal parar (a definir)",
    src: "/imagens/sinal-parar.webp",
    alt: "Pessoa parada no meio-fio diante do semáforo fechado.",
  },
  {
    chave: "virar",
    id: "sinal-virar",
    link: "Virar",
    titulo: "Virar à esquerda ou à direita",
    pares: [["Nos dois modos:", "vibração no lado correspondente."]],
    imagem: "Foto do sinal virar (a definir)",
    src: "/imagens/sinal-virar.webp",
    alt: "Esquina de calçada com piso tátil indicando a curva.",
  },
  {
    chave: "aguardar",
    id: "sinal-aguardar",
    link: "Aguardar",
    titulo: "Aguardar",
    pares: [["Nos dois modos:", "três vibrações curtas, repetidas em intervalos."]],
    imagem: "Foto do sinal aguardar (a definir)",
    src: "/imagens/sinal-aguardar.webp",
    alt: "Pessoa esperando no ponto de ônibus.",
  },
];

function videoDoSinal(sinal) {
  return `animacao-sinal-${sinal.chave}`;
}

export default function SinaisRolagemFixa() {
  const { podeFixar, ativo, refTrilho, refPalco, irPara } = useRolagemFixa(SINAIS.length);
  const sinalAtual = SINAIS[ativo];

  return (
    <section className={`mt-20 ${podeFixar ? "sinais-fixo" : ""}`}>
      <RotuloSecao>Linguagem da Pulse</RotuloSecao>
      <h2 id="os-sinais" tabIndex={-1} className="mt-3 scroll-mt-10">
        Os sinais
      </h2>
      <p className="mt-6 max-w-texto">
        Cada comando tem um sinal próprio. Role a página para passar de um sinal para o outro.
      </p>

      <div
        ref={refTrilho}
        className="mt-8"
        style={podeFixar ? { height: "calc(4 * 85svh + 100svh)" } : undefined}
      >
        <div
          ref={refPalco}
          className={
            podeFixar
              ? "sticky top-[calc(var(--altura-cabecalho)+var(--altura-indice,0px))] grid h-[calc(100svh-var(--altura-cabecalho)-var(--altura-indice,0px))] grid-rows-[auto_minmax(0,1fr)] gap-4 pt-4 pb-[var(--espaco-fim)] min-[62.5rem]:grid-cols-[15rem_minmax(0,1fr)] min-[62.5rem]:grid-rows-1 min-[62.5rem]:gap-10"
              : "grid gap-6"
          }
        >
          <div className={podeFixar ? "grid min-w-0 gap-3 min-[62.5rem]:content-center min-[62.5rem]:gap-5" : ""}>
            <nav aria-label="Sinais">
              <ol
                className={
                  podeFixar
                    ? "flex gap-1 overflow-x-auto min-[62.5rem]:grid min-[62.5rem]:overflow-visible"
                    : "flex flex-wrap gap-2"
                }
              >
                {SINAIS.map((sinal, indice) => {
                  const atual = podeFixar && indice === ativo;
                  return (
                    <li key={sinal.id} className="shrink-0">
                      <a
                        href={`#${sinal.id}`}
                        aria-current={atual ? "step" : undefined}
                        onClick={(evento) => irPara(indice, evento)}
                        className={`rotulo-mono flex min-h-12 items-center gap-3 px-3 text-[0.9rem] whitespace-nowrap no-underline ${
                          podeFixar
                            ? `border-b-[3px] min-[62.5rem]:border-b-0 min-[62.5rem]:border-l-[3px] ${
                                atual ? "border-acao text-texto" : "border-borda/45 text-texto-2"
                              }`
                            : "rounded-full border border-borda bg-superficie text-texto"
                        }`}
                      >
                        {sinal.link}
                        {atual && <span aria-hidden="true" className="size-2 rounded-full bg-acao" />}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {podeFixar && (
              <VideoPulse
                nome={videoDoSinal(sinalAtual)}
                comSom
                idTitulo={`titulo-${sinalAtual.id}`}
                idDescricao={`descricao-${sinalAtual.id}`}
                className="grid-cols-[8rem_minmax(0,1fr)] items-center min-[62.5rem]:grid-cols-1"
                classeControles="flex-col items-start min-[62.5rem]:flex-row"
              />
            )}
          </div>

          <div className={podeFixar ? "relative min-h-0" : "grid gap-12"}>
            {SINAIS.map((sinal, indice) => {
              const atual = podeFixar && indice === ativo;
              return (
                <article
                  key={sinal.id}
                  id={sinal.id}
                  data-ativo={atual ? "" : undefined}
                  className={
                    podeFixar
                      ? `absolute inset-0 grid grid-rows-[minmax(0,1fr)_auto] gap-4 min-[62.5rem]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] min-[62.5rem]:grid-rows-1 min-[62.5rem]:items-center min-[62.5rem]:gap-8 ${
                          atual ? "" : "pointer-events-none"
                        }`
                      : "grid gap-4 scroll-mt-4 min-[62.5rem]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] min-[62.5rem]:items-center min-[62.5rem]:gap-8"
                  }
                >
                  <div className={`foto-sinal min-h-0 ${podeFixar ? "min-[62.5rem]:self-stretch" : ""}`}>
                    {sinal.src ? (
                      <img
                        src={sinal.src}
                        alt={sinal.alt}
                        loading="lazy"
                        decoding="async"
                        className={`size-full rounded-cartao object-cover ${podeFixar ? "" : "aspect-[4/3]"}`}
                      />
                    ) : (
                      <EspacoImagem texto={sinal.imagem} formato={podeFixar ? "livre" : "paisagem"} />
                    )}
                  </div>
                  <div className="texto-sinal grid gap-3">
                    <h3
                      id={`titulo-${sinal.id}`}
                      className="font-titulo text-[clamp(2.2rem,10vw,3.5rem)] leading-none font-normal text-marca uppercase"
                    >
                      {sinal.titulo}
                    </h3>
                    <dl id={`descricao-${sinal.id}`} className="grid gap-2">
                      {sinal.pares.map(([termo, descricao]) => (
                        <div key={termo} className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                          <dt className="rotulo-mono text-destaque">{termo}</dt>
                          <dd>{descricao}</dd>
                        </div>
                      ))}
                    </dl>
                    {!podeFixar && (
                      <VideoPulse
                        nome={videoDoSinal(sinal)}
                        comSom
                        idTitulo={`titulo-${sinal.id}`}
                        idDescricao={`descricao-${sinal.id}`}
                        className="mt-2"
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
