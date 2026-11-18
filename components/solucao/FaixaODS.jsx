"use client";

import EspacoIcone from "@/components/ui/EspacoIcone";
import IconeAlternado from "@/components/ui/IconeAlternado";
import { useFaixaODS } from "@/hooks/useFaixaODS";

// Regra: a cópia que fecha o laço é aria-hidden e com tabIndex={-1}; a frase chega
// pelo aria-describedby, e a área dela não cobre nada (WCAG 1.4.13).
const ODS = [
  {
    numero: "10",
    nome: "ODS 10 · Redução das Desigualdades",
    nomeNaFrase: "ODS 10: Redução das Desigualdades (principal)",
    principal: true,
    frase:
      "Reduz as barreiras enfrentadas por pessoas com deficiência visual e promove igualdade de acesso à mobilidade.",
  },
  {
    numero: "9",
    nome: "ODS 9 · Indústria, Inovação e Infraestrutura",
    nomeNaFrase: "ODS 9: Indústria, Inovação e Infraestrutura",
    principal: false,
    frase:
      "Um dispositivo inteligente que melhora a infraestrutura de acessibilidade e mobilidade urbana.",
  },
  {
    numero: "11",
    nome: "ODS 11 · Cidades e Comunidades Sustentáveis",
    nomeNaFrase: "ODS 11: Cidades e Comunidades Sustentáveis",
    principal: false,
    frase:
      "Torna as cidades mais acessíveis, inclusivas e seguras nas ruas e no transporte público.",
  },
];

const ID_FAIXA = "faixa-ods";
const idDaFrase = (numero) => `ods-frase-${numero}`;

const CLASSES_BOTAO_ODS =
  "inline-flex min-h-16 max-w-[min(36rem,calc(100vw-2rem))] items-center gap-3 rounded-full border bg-rodape-cartao py-2 pr-5 pl-4 text-left font-bold text-rodape-texto transicao-fundo";

function ConteudoOds({ ods }) {
  return (
    <>
      <span aria-hidden="true" className="shrink-0 font-titulo text-[2.4rem] leading-none font-normal whitespace-nowrap text-rodape-destaque">
        {ods.numero}
      </span>
      <span>
        {ods.nome}
        {ods.principal && (
          <>
            {" "}
            <span className="ml-1 inline-block rounded-full bg-rodape-destaque px-2.5 text-auxiliar text-sobre-acao">
              Principal
            </span>
          </>
        )}
      </span>
    </>
  );
}

export default function FaixaODS() {
  const { pausada, alternarPausa, odsEmDestaque, eventosDoOds, refFaixa } = useFaixaODS();
  const destaque = ODS.find((ods) => ods.numero === odsEmDestaque);

  return (
    <section aria-labelledby="titulo-ods" className="mb-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="rotulo-mono mb-2 text-rodape-destaque">Objetivos de Desenvolvimento Sustentável</p>
          <h2 id="titulo-ods" className="text-rodape-texto">
            A Pulse e os ODS
          </h2>
        </div>
        <button
          type="button"
          aria-pressed={pausada}
          aria-controls={ID_FAIXA}
          onClick={alternarPausa}
          className="faixa-ods-pausa inline-flex min-h-12 efeitos-desligados:hidden items-center gap-2 rounded-full border-2 border-rodape-borda px-5 font-bold text-rodape-texto hover:border-rodape-destaque"
        >
          <IconeAlternado chave={pausada ? "retomar" : "pausar"}>
            {pausada ? (
              <EspacoIcone nome="Play" />
            ) : (
              <EspacoIcone nome="Pause" />
            )}
          </IconeAlternado>
          <span>{pausada ? "Retomar" : "Pausar"}</span>
        </button>
      </div>

      <div
        id={ID_FAIXA}
        ref={refFaixa}
        data-pausada={pausada ? "" : undefined}
        className="faixa-ods"
      >
        <div className="faixa-ods-trilho">
          <ul className="faixa-ods-lista">
            {ODS.map((ods) => (
              <li key={ods.numero}>
                <button
                  type="button"
                  aria-describedby={idDaFrase(ods.numero)}
                  className={`${CLASSES_BOTAO_ODS} ${
                    odsEmDestaque === ods.numero ? "border-rodape-destaque" : "border-rodape-borda"
                  }`}
                  {...eventosDoOds(ods.numero)}
                >
                  <ConteudoOds ods={ods} />
                </button>
              </li>
            ))}
          </ul>
          <ul className="faixa-ods-lista" aria-hidden="true">
            {ODS.map((ods) => (
              <li key={ods.numero}>
                <button
                  type="button"
                  tabIndex={-1}
                  className={`${CLASSES_BOTAO_ODS} ${
                    odsEmDestaque === ods.numero ? "border-rodape-destaque" : "border-rodape-borda"
                  }`}
                  onMouseEnter={eventosDoOds(ods.numero).onMouseEnter}
                  onMouseLeave={eventosDoOds(ods.numero).onMouseLeave}
                >
                  <ConteudoOds ods={ods} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {ODS.map((ods) => (
        <p key={ods.numero} id={idDaFrase(ods.numero)} hidden>
          {ods.frase}
        </p>
      ))}

      <div
        aria-hidden="true"
        className="mt-4 grid min-h-[5.5rem] content-center gap-1 rounded-cartao border border-dashed border-rodape-borda px-5 py-4"
      >
        {destaque ? (
          <>
            <strong className="text-h4 text-rodape-texto">{destaque.nomeNaFrase}</strong>
            <span className="text-rodape-texto-2">{destaque.frase}</span>
          </>
        ) : (
          <span className="text-rodape-texto-2">
            Passe o mouse, foque ou toque num ODS para ver o que ele significa.
          </span>
        )}
      </div>
    </section>
  );
}
