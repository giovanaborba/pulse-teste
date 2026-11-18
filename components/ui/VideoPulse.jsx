"use client";

import { motion } from "motion/react";
import EspacoIcone from "@/components/ui/EspacoIcone";
import IconeAlternado from "@/components/ui/IconeAlternado";
import EspacoImagem from "@/components/ui/EspacoImagem";
import { useVideoPulse } from "@/hooks/useVideoPulse";

// Regra: "Pausar" sempre visível (WCAG 2.2.2); o texto do botão diz a ação, sem
// aria-pressed (decisão da 9.8).

const ESTILO_BOTAO =
  "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-borda bg-superficie px-4 text-center font-bold text-texto hover:border-marca";

export function caminhosDoVideo(nome) {
  return {
    video: `/videos/${nome}.mp4`,
    quadroParado: `/videos/${nome}-quadro-parado.jpg`,
    legendas: `/videos/${nome}-legendas.vtt`,
  };
}

export function ControlesVideo({ tocando, aoAlternarPausa, comSom = false, somLigado = false, aoAlternarSom, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={aoAlternarPausa} className={ESTILO_BOTAO}>
        <IconeAlternado chave={tocando ? "pausar" : "reproduzir"}>
          {tocando ? (
            <EspacoIcone nome="Pause" />
          ) : (
            <EspacoIcone nome="Play" />
          )}
        </IconeAlternado>
        {tocando ? "Pausar" : "Reproduzir"}
      </motion.button>
      {comSom && (
        <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={aoAlternarSom} className={ESTILO_BOTAO}>
          {somLigado ? (
            <EspacoIcone nome="SpeakerSlash" />
          ) : (
            <EspacoIcone nome="SpeakerHigh" />
          )}
          {somLigado ? "Desativar som" : "Ativar som"}
        </motion.button>
      )}
    </div>
  );
}

export default function VideoPulse({
  nome,
  comSom = false,
  fundo = false,
  ativo = true,
  idTitulo,
  idDescricao,
  className = "",
  classeCaixa = "",
  classeControles = "",
}) {
  const { refContainer, propsVideo, tocando, somLigado, falhou, alternarPausa, alternarSom } = useVideoPulse({
    ativo,
    chave: nome,
  });
  const caminhos = caminhosDoVideo(nome);

  // preload="none": a Solução tem 12 vídeos, e só os metadados já somavam cerca de
  // 0,9 MB ao abrir. O quadro parado (poster) aparece até o vídeo tocar.
  const elementoVideo = (
    <video
      {...propsVideo(0)}
      src={caminhos.video}
      data-src={caminhos.video}
      poster={caminhos.quadroParado}
      muted
      playsInline
      preload="none"
      aria-labelledby={fundo ? undefined : idTitulo}
      aria-describedby={fundo ? undefined : idDescricao}
      className="size-full object-cover"
    >
      {comSom && <track kind="captions" srcLang="pt-BR" label="Português" src={caminhos.legendas} />}
    </video>
  );

  if (fundo) {
    return (
      <div ref={refContainer} aria-hidden="true" className={className}>
        {!falhou && elementoVideo}
      </div>
    );
  }

  return (
    <div ref={refContainer} className={`grid gap-3 ${className}`}>
      <div className={`relative aspect-video overflow-hidden rounded-cartao bg-[var(--cor-cortina)] ${classeCaixa}`}>
        {falhou ? (
          <EspacoImagem texto={`Vídeo ${nome} (a definir)`} formato="livre" className="absolute inset-0" />
        ) : (
          elementoVideo
        )}
      </div>
      {!falhou && (
        <ControlesVideo
          tocando={tocando}
          aoAlternarPausa={alternarPausa}
          comSom={comSom}
          somLigado={somLigado}
          aoAlternarSom={alternarSom}
          className={classeControles}
        />
      )}
    </div>
  );
}
