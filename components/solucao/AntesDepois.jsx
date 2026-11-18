"use client";

import { useState } from "react";
import Cartao from "@/components/ui/Cartao";
import EspacoIcone from "@/components/ui/EspacoIcone";
import EspacoImagem from "@/components/ui/EspacoImagem";
import { ControlesVideo, caminhosDoVideo } from "@/components/ui/VideoPulse";
import { useVideoPulse } from "@/hooks/useVideoPulse";

// Um <input type="range"> de verdade move a divisória: mouse, dedo, setas e leitor de
// tela funcionam sem código de arrasto. clip-path é exceção aprovada no padrão.

const SEM = caminhosDoVideo("animacao-antes-sem");
const COM = caminhosDoVideo("animacao-antes-com");

function LadoVideo({ caminhos, propsVideo, falhou, texto }) {
  if (falhou) return <EspacoImagem texto={texto} formato="livre" className="rounded-none border-0" />;
  return (
    <video
      {...propsVideo}
      src={caminhos.video}
      data-src={caminhos.video}
      poster={caminhos.quadroParado}
      muted
      playsInline
      preload="none"
      className="size-full object-cover"
    />
  );
}

function textoDaPosicao(posicao) {
  if (posicao <= 5) return "Só com a Pulse";
  if (posicao >= 95) return "Só sem a Pulse";
  return `${posicao}% sem a Pulse, ${100 - posicao}% com a Pulse`;
}

// Cores fixas, porque a etiqueta fica sobre a imagem nos dois temas.
const ESTILO_ETIQUETA = "rotulo-mono absolute top-3 rounded-full px-2.5 py-1.5 text-[#1A1A1D]";

export default function AntesDepois() {
  const [posicao, setPosicao] = useState(50);
  const { refContainer, propsVideo, tocando, falhou, alternarPausa } = useVideoPulse({ quantidade: 2 });

  return (
    <>
      <p className="max-w-texto">
        Arraste a barra, ou use as setas do teclado, para comparar a mesma
        travessia sem e com a Pulse.
      </p>

      <div
        ref={refContainer}
        style={{ "--posicao": `${posicao}%` }}
        className="relative aspect-video w-full max-w-[56rem] touch-pan-y overflow-hidden rounded-[1.5rem] border-2 border-borda bg-[var(--cor-cortina)] has-[input:focus-visible]:outline-3 has-[input:focus-visible]:outline-offset-3 has-[input:focus-visible]:outline-marca"
      >
        <div aria-hidden="true" className="absolute inset-0">
          <LadoVideo caminhos={SEM} propsVideo={propsVideo(0)} falhou={falhou} texto="Vídeo animacao-antes-sem (a definir)" />
          <span className={`${ESTILO_ETIQUETA} left-3 bg-[#FFFFFF]`}>Sem a Pulse</span>
        </div>

        <div aria-hidden="true" className="absolute inset-0 [clip-path:inset(0_0_0_var(--posicao))]">
          <LadoVideo caminhos={COM} propsVideo={propsVideo(1)} falhou={falhou} texto="Vídeo animacao-antes-com (a definir)" />
          <span className={`${ESTILO_ETIQUETA} right-3 bg-[#FC4C02]`}>Com a Pulse</span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-(--posicao) -ml-0.5 w-1 bg-[#FFFFFF]"
        >
          <span className="absolute top-1/2 left-1/2 grid size-12 -translate-1/2 place-items-center rounded-full border-3 border-[#1A1A1D] bg-[#FFFFFF] text-[#1A1A1D]">
            <span className="flex items-center">
              <EspacoIcone nome="CaretLeft" />
              <EspacoIcone nome="CaretRight" />
            </span>
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={posicao}
          onChange={(evento) => setPosicao(Number(evento.target.value))}
          aria-label="Comparar sem a Pulse e com a Pulse"
          aria-describedby="antes-depois-textos"
          aria-valuetext={textoDaPosicao(posicao)}
          className="absolute inset-0 m-0 size-full cursor-ew-resize opacity-0"
        />
      </div>

      {!falhou && <ControlesVideo tocando={tocando} aoAlternarPausa={alternarPausa} />}

      <div id="antes-depois-textos" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Cartao compacto className="grid content-start gap-1.5">
          <h3>Sem a Pulse</h3>
          <p className="text-texto-2">
            A pessoa espera o barulho dos carros parar para adivinhar se pode
            atravessar. Muitos semáforos não têm sinal sonoro.
          </p>
        </Cartao>
        <Cartao compacto className="grid content-start gap-1.5">
          <h3>Com a Pulse</h3>
          <p className="text-texto-2">
            A pulseira usa os dados do semáforo: “Aguardar” com três
            vibrações curtas e “Continuar” quando é seguro atravessar.
          </p>
        </Cartao>
      </div>
    </>
  );
}
