"use client";

import RotuloSecao from "@/components/layout/RotuloSecao";
import { useTrajeto } from "@/hooks/useTrajeto";

// O mapa é decorativo (aria-hidden); a lista <ol> das paradas é o conteúdo de verdade.

// Rota no mapa (viewBox 600 × 400): 770 unidades de comprimento
const CAMINHO = "M60 350 H200 V245 H370 V100 H540 V60";
// Onde cada parada fica ao longo da rota (0 = saída; 1 = destino)
const FRACOES = [0, 0.26, 0.5, 0.78, 1];
// Posição de cada parada no mapa, calculada a partir de CAMINHO e de
// FRACOES (assim o mapa já vem certo do servidor, sem JavaScript)
const POSICOES = [
  [60, 350],
  [200, 289.8],
  [340, 245],
  [410.6, 100],
  [540, 60],
];

const PARADAS = [
  { nome: "Saída", texto: "Continuar: pressão no pulso até você andar." },
  { nome: "Esquina", texto: "Virar à esquerda: vibração no lado esquerdo." },
  { nome: "Semáforo fechado", texto: "Parar. Quando o sinal abre, Continuar." },
  { nome: "Ponto de ônibus", texto: "Aguardar: três vibrações curtas até o ônibus certo chegar." },
  { nome: "Destino", texto: "Chegada sem precisar olhar o celular." },
];

export default function TrajetoPulse() {
  const { refSecao, refTrilho, refPalco, refCaminho, refPonto, refLista } = useTrajeto(FRACOES);

  return (
    // data-secao-fixa: o "Nesta página" conta esta seção a partir do começo
    // dela, porque o título fica preso no meio da tela (useSecaoAtual)
    <section ref={refSecao} data-secao-fixa="" className="trajeto mt-20">
      <div ref={refTrilho} className="trajeto-trilho">
        <div ref={refPalco} className="trajeto-palco grid grid-cols-1 gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-x-10">
          <div className="grid grid-cols-1 gap-3 lg:col-span-full">
            <RotuloSecao>No caminho</RotuloSecao>
            <h2 id="um-trajeto-com-a-pulse" tabIndex={-1} className="scroll-mt-10">
              Um trajeto com a Pulse
            </h2>
          </div>

          <svg
            viewBox="0 0 600 400"
            aria-hidden="true"
            focusable="false"
            className="trajeto-mapa aspect-[3/2] max-h-[46svh] w-full rounded-[1.375rem] border-2 border-borda bg-superficie lg:max-h-[70svh]"
          >
            <rect className="quadra" x="30" y="30" width="140" height="110" rx="10" />
            <rect className="quadra" x="230" y="30" width="110" height="60" rx="10" />
            <rect className="quadra" x="30" y="200" width="140" height="120" rx="10" />
            <rect className="quadra" x="230" y="150" width="100" height="60" rx="10" />
            <rect className="quadra" x="400" y="120" width="170" height="90" rx="10" />
            <rect className="quadra" x="230" y="270" width="340" height="100" rx="10" />
            <path className="rua" d="M10 175 H590 M200 10 V390 M370 10 V390 M10 245 H590" />
            <path ref={refCaminho} className="caminho" d={CAMINHO} />
            {POSICOES.map(([x, y], i) => (
              <g key={i} data-parada-mapa="" data-chegou="">
                <circle className="parada" cx={x} cy={y} r="15" />
                <text className="numero" x={x} y={y + 5}>
                  {i + 1}
                </text>
              </g>
            ))}
            <circle ref={refPonto} className="ponto" r="11" cx={POSICOES[4][0]} cy={POSICOES[4][1]} />
          </svg>

          <ol ref={refLista} className="trajeto-paradas grid grid-cols-1 gap-2">
            {PARADAS.map((parada) => (
              <li key={parada.nome}>
                <strong>{parada.nome}</strong>
                <span>{parada.texto}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
