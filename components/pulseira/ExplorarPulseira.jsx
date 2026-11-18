"use client";

import { useState } from "react";
import Pulseira3D from "@/components/pulseira/Pulseira3D";
import EspacoIcone from "@/components/ui/EspacoIcone";
import IconeAlternado from "@/components/ui/IconeAlternado";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useGiroPulseira } from "@/hooks/useGiroPulseira";

// Regra: "Girar sozinha" tem texto fixo e aria-pressed; só o ícone troca (decisão da 9.5).

const PARTES = [
  { id: "destino", nome: "Botão do destino", texto: "Aperte e diga para onde quer ir. É o maior, côncavo e com dois anéis em relevo, para ser achado pelo tato. O aro laranja ajuda quem tem baixa visão." },
  { id: "modo", nome: "Botão de modo", texto: "Troca entre sonoro e tátil ou só tátil. É pequeno, em forma de pílula, com um ponto em relevo no centro." },
  { id: "braille", nome: "Célula Braille", texto: "Seis pinos no centro do módulo sobem e descem e formam letras em Braille, por exemplo quantos minutos faltam para o ônibus (função opcional). Aqui ela escreve P-U-L-S-E." },
  { id: "vibracao", nome: "Zonas de vibração", texto: "Por dentro da tira, nos dois lados do pulso. Vibram do lado da conversão: à esquerda para virar à esquerda, à direita para virar à direita." },
  { id: "pressao", nome: "Atuador de pressão", texto: "Por dentro, embaixo do módulo. Aperta o pulso de leve e sem parar para dizer Continuar." },
  { id: "luzes", nome: "Luzes de sinal", texto: "Cinco pontos de luz em cada lateral da face. Acendem junto com a vibração: do lado esquerdo para virar à esquerda, do direito para a direita, os dois para parar e, em Continuar, uma luz que sobe. Ajudam quem tem baixa visão e quem acompanha a pessoa; a informação principal continua sendo o tato." },
  { id: "carga", nome: "Contatos de carga", texto: "Dois pontos de metal na ponta de baixo do módulo. O carregador magnético gruda ali, sem nenhuma entrada aberta por onde possam entrar água ou poeira." },
  { id: "fecho", nome: "Fecho", texto: "Fivela embaixo do pulso, com furos para ajustar o tamanho da tira." },
];

const SINAIS = [
  { id: "continuar", nome: "Continuar", texto: "O atuador de pressão aperta o pulso de leve, sem parar, até você andar. Nas laterais, uma luz sobe, como uma seta para a frente." },
  { id: "parar", nome: "Parar", texto: "As duas zonas vibram juntas, sem parar, até você parar. As luzes dos dois lados ficam acesas." },
  { id: "esquerda", nome: "Virar à esquerda", texto: "Só a zona do lado esquerdo vibra, e acendem as luzes do lado esquerdo." },
  { id: "direita", nome: "Virar à direita", texto: "Só a zona do lado direito vibra, e acendem as luzes do lado direito." },
  { id: "aguardar", nome: "Aguardar", texto: "Três vibrações curtas nas duas zonas, repetidas em intervalos, e as luzes piscam junto." },
];

const EXPLICACAO_PARTE = { nome: "Escolha uma parte", texto: "A pulseira gira até ela e a parte acende." };
const EXPLICACAO_SINAL = { nome: "Escolha um sinal", texto: "Veja onde a pulseira vibra ou aperta." };

const ESTILO_BOTAO =
  "inline-flex min-h-12 items-center gap-2 rounded-full border-2 px-4 text-center font-bold hover:border-marca aria-pressed:border-acao aria-pressed:bg-acao aria-pressed:text-sobre-acao";
const BOTAO_SOLTO = "border-borda bg-superficie text-texto";

export default function ExplorarPulseira() {
  const giro = useGiroPulseira();
  const { efeitosLigados } = useEfeitos();
  const [parteAtiva, setParteAtiva] = useState(null);
  const [sinalAtivo, setSinalAtivo] = useState(null);
  const [cenaPronta, setCenaPronta] = useState(false);

  function escolherParte(id) {
    const marcar = parteAtiva !== id;
    setParteAtiva(marcar ? id : null);
    if (marcar) giro.irParaParte(id);
  }

  function escolherSinal(id) {
    const marcar = sinalAtivo !== id;
    setSinalAtivo(marcar ? id : null);
    if (marcar) giro.verSinal();
  }

  const explicacaoParte = PARTES.find((parte) => parte.id === parteAtiva) ?? EXPLICACAO_PARTE;
  const explicacaoSinal = SINAIS.find((item) => item.id === sinalAtivo) ?? EXPLICACAO_SINAL;

  return (
    <div className="grid gap-6 min-[62.5rem]:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] min-[62.5rem]:items-start">
      <div className="grid gap-3">
        <div className="textura-piso relative aspect-square max-h-[78svh] w-full overflow-hidden rounded-[1.75rem]">
          <Pulseira3D
            modo="explorar"
            giro={giro}
            parteAtiva={parteAtiva}
            sinalAtivo={sinalAtivo}
            aoPronta={() => setCenaPronta(true)}
            aoFalhar={() => setCenaPronta(false)}
            className="size-full"
          />
          {cenaPronta && (
            <span
              aria-hidden="true"
              className="rotulo-mono pointer-events-none absolute bottom-3 left-3 rounded-full border border-borda bg-superficie px-3 py-1.5 text-texto-2"
            >
              Arraste para girar
            </span>
          )}
        </div>

        {cenaPronta && (
          <div role="group" aria-label="Girar a pulseira" className="flex flex-wrap gap-2">
            <button type="button" onClick={() => giro.girar(-45)} className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}>
              <EspacoIcone nome="ArrowCounterClockwise" />
              Girar para a esquerda
            </button>
            <button type="button" onClick={() => giro.girar(45)} className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}>
              <EspacoIcone nome="ArrowClockwise" />
              Girar para a direita
            </button>
            <button type="button" onClick={giro.verPorDentro} className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}>
              <EspacoIcone nome="Eye" />
              Ver por dentro
            </button>
            <button type="button" onClick={giro.verFrente} className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}>
              Vista da frente
            </button>
            {efeitosLigados && (
              <button
                type="button"
                aria-pressed={giro.girando}
                onClick={giro.alternarGiro}
                className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}
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
      </div>

      <div className="grid gap-4 min-[62.5rem]:sticky min-[62.5rem]:top-[calc(var(--altura-cabecalho)+var(--altura-indice,0px)+1.5rem)]">
        <section aria-labelledby="titulo-partes-pulseira" className="grid gap-3 rounded-[1.25rem] border border-borda bg-superficie p-4">
          <h3 id="titulo-partes-pulseira">Partes da pulseira</h3>
          <ul className="flex flex-wrap gap-2">
            {PARTES.map((parte) => (
              <li key={parte.id}>
                <button
                  type="button"
                  aria-pressed={parteAtiva === parte.id}
                  onClick={() => escolherParte(parte.id)}
                  className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}
                >
                  {parte.nome}
                </button>
              </li>
            ))}
          </ul>
          <p aria-live="polite" className="min-h-[5.6em] border-l-4 border-acao py-1 pl-3.5 text-texto-2">
            <strong className="block text-texto">{explicacaoParte.nome}</strong>
            {explicacaoParte.texto}
          </p>
        </section>

        <section aria-labelledby="titulo-sinais-pulseira" className="grid gap-3 rounded-[1.25rem] border border-borda bg-superficie p-4">
          <h3 id="titulo-sinais-pulseira">Os sinais no pulso</h3>
          <ul className="flex flex-wrap gap-2">
            {SINAIS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={sinalAtivo === item.id}
                  onClick={() => escolherSinal(item.id)}
                  className={`${ESTILO_BOTAO} ${BOTAO_SOLTO}`}
                >
                  {item.nome}
                </button>
              </li>
            ))}
          </ul>
          <p aria-live="polite" className="min-h-[5.6em] border-l-4 border-acao py-1 pl-3.5 text-texto-2">
            <strong className="block text-texto">{explicacaoSinal.nome}</strong>
            {explicacaoSinal.texto}
          </p>
        </section>
      </div>
    </div>
  );
}
