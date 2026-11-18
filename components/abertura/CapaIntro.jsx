"use client";

import EspacoIcone from "@/components/ui/EspacoIcone";
import VideoPulse from "@/components/ui/VideoPulse";
import { useConsultaMidia } from "@/hooks/useConsultaMidia";

// Cores fixas: a capa é escura nos dois temas (19.3). O véu a 60% garante 7,8:1 ou
// mais para "PULSE" sobre o vídeo (decisão da 9.8).
export default function CapaIntro({ refCapa, saindo, aoTocar }) {
  const retrato = useConsultaMidia("(orientation: portrait)");

  return (
    // O clique só pede a saída; a mesma ação existe pelo teclado (qualquer
    // tecla) e pelo foco, então nada depende só do mouse (seção 18.2).
    <div
      ref={refCapa}
      aria-hidden="true"
      data-saindo={saindo ? "" : undefined}
      onClick={aoTocar}
      className="capa-intro"
    >
      <VideoPulse
        nome={retrato ? "animacao-capa-vertical" : "animacao-capa"}
        fundo
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-[rgba(26,26,29,0.6)]" />

      {/* Regra: o logo é código, não imagem (18.13). */}
      <div className="capa-logo absolute inset-0 grid place-items-center efeitos-desligados:hidden">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#FC4C02"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-22"
        >
          <circle className="capa-logo-onda" cx="50" cy="50" r="34" strokeWidth="3" />
          <circle cx="50" cy="50" r="34" />
          <path d="M24 52h14l6-14 10 26 6-12h16" />
        </svg>
      </div>

      <div className="capa-conteudo absolute inset-0 grid content-center justify-items-center gap-4 overflow-hidden px-[max(1rem,env(safe-area-inset-left))] py-6 text-center">
        <span className="rotulo-mono rounded-[0.625rem] bg-[#1A1A1D] px-3 py-1.5 text-[#FC4C02]">GS 2026.2 · CitizenTech</span>
        <span className="font-titulo text-[clamp(5.5rem,24vw,17rem)] leading-[0.85] tracking-[0.01em] uppercase">
          Pulse
        </span>
        <span className="max-w-[26ch] rounded-[0.625rem] bg-[#1A1A1D] px-4 py-1.5 text-xl">
          Um guia no pulso para atravessar a cidade.
        </span>
        <span className="mt-4 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#FC4C02] px-6 font-bold text-[#242428]">
          <EspacoIcone nome="ArrowDown" />
          Toque, role ou aperte uma tecla
        </span>
      </div>
    </div>
  );
}
