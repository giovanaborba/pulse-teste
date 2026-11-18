"use client";

import { motion } from "motion/react";
import RotuloSecao from "@/components/layout/RotuloSecao";
import EspacoIcone from "@/components/ui/EspacoIcone";
import EspacoImagem from "@/components/ui/EspacoImagem";
import FotoFiltro from "@/components/ui/FotoFiltro";
import { useGaleriaCanvas } from "@/hooks/useGaleriaCanvas";

// x e y: onde cada foto fica no plano de 2400 × 1500 px (protótipo)
const FOTOS = [
  {
    reserva: "Foto: faixa de pedestres (a definir)",
    src: "/imagens/galeria-faixa-pedestres.webp",
    alt: "Faixa de pedestres numa avenida movimentada.",
    legenda: "Travessias sem sinal sonoro",
    x: 140,
    y: 120,
  },
  {
    reserva: "Foto: calçada com obstáculo (a definir)",
    src: "/imagens/galeria-calcada-obstaculo.webp",
    alt: "Calçada com placas de concreto quebradas e desniveladas.",
    legenda: "Calçadas com obstáculos",
    x: 620,
    y: 330,
  },
  {
    reserva: "Foto: semáforo de pedestres (a definir)",
    src: "/imagens/galeria-semaforo-pedestres.webp",
    alt: "Semáforo de pedestres com o boneco vermelho aceso.",
    legenda: "Semáforos de pedestres",
    x: 1080,
    y: 90,
  },
  {
    reserva: "Foto: ponto de ônibus (a definir)",
    src: "/imagens/galeria-ponto-onibus.webp",
    alt: "Pessoa esperando o ônibus no ponto.",
    legenda: "Embarque no transporte",
    x: 1540,
    y: 380,
  },
  {
    reserva: "Foto: plataforma do metrô (a definir)",
    src: "/imagens/galeria-plataforma-metro.webp",
    alt: "Plataforma do metrô com piso tátil na borda.",
    legenda: "Plataformas de metrô e trem",
    x: 360,
    y: 800,
  },
  {
    reserva: "Foto: esquina com rampa (a definir)",
    src: "/imagens/galeria-esquina-rampa.webp",
    alt: "Esquina em ladeira, com calçada estreita e sem rampa de acesso.",
    legenda: "Esquinas e rampas",
    x: 1220,
    y: 860,
  },
];

const ESTILO_BOTAO =
  "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-borda bg-superficie px-4 text-center font-bold text-texto hover:border-marca";

function ConteudoFoto({ foto }) {
  return (
    <>
      <FotoFiltro className="aspect-[4/3]">
        {foto.src ? (
          <img src={foto.src} alt={foto.alt} loading="lazy" decoding="async" className="size-full object-cover" />
        ) : (
          <EspacoImagem texto={foto.reserva} formato="livre" />
        )}
      </FotoFiltro>
      <figcaption className="mx-1 text-auxiliar text-texto-2">{foto.legenda}</figcaption>
    </>
  );
}

export default function GaleriaCanvas() {
  const { modoCanvas, x, y, arrastando, refJanela, eventosJanela, aoTeclarControles, mover, centralizar, aoFocarFoto } =
    useGaleriaCanvas();

  return (
    <section className="mt-20">
      <RotuloSecao>A cidade</RotuloSecao>
      <h2 id="galeria" tabIndex={-1} className="mt-3 scroll-mt-10">
        Galeria
      </h2>
      <p className="mt-6 max-w-texto">
        Onde a Pulse faz diferença: calçadas, travessias e transporte público.
      </p>

      {modoCanvas ? (
        <div className="mt-8 grid gap-3">
          <p id="instrucao-galeria" className="text-auxiliar text-texto-2">
            Arraste a área para explorar as fotos. Pelo teclado, entre na área
            com Tab e use as setas.
          </p>

          <div
            ref={refJanela}
            role="region"
            aria-label="Galeria para explorar"
            aria-describedby="instrucao-galeria"
            tabIndex={0}
            {...eventosJanela}
            className={`textura-piso relative h-[min(72svh,44rem)] touch-pan-y overflow-hidden rounded-[1.5rem] border-2 border-borda select-none ${
              arrastando ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <motion.ul
              style={{ x, y }}
              className="absolute top-0 left-0 h-[1500px] w-[2400px]"
            >
              {FOTOS.map((foto) => (
                <li key={foto.legenda} style={{ left: foto.x, top: foto.y }} className="absolute w-[300px]">
                  <figure
                    tabIndex={0}
                    onFocus={aoFocarFoto}
                    className="grid gap-2 rounded-cartao border border-borda bg-superficie p-2.5 shadow-cartao"
                  >
                    <ConteudoFoto foto={foto} />
                  </figure>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Alternativas ao arrasto (WCAG 2.5.7) */}
          <div role="group" aria-label="Mover a galeria" onKeyDown={aoTeclarControles} className="flex flex-wrap gap-2">
            <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={() => mover(-1, 0)} className={ESTILO_BOTAO}>
              <EspacoIcone nome="ArrowLeft" />
              Esquerda
            </motion.button>
            <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={() => mover(0, -1)} className={ESTILO_BOTAO}>
              <EspacoIcone nome="ArrowUp" />
              Cima
            </motion.button>
            <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={() => mover(0, 1)} className={ESTILO_BOTAO}>
              <EspacoIcone nome="ArrowDown" />
              Baixo
            </motion.button>
            <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={() => mover(1, 0)} className={ESTILO_BOTAO}>
              <EspacoIcone nome="ArrowRight" />
              Direita
            </motion.button>
            <motion.button type="button" whileTap={{ scale: 0.97 }} onClick={centralizar} className={ESTILO_BOTAO}>
              <EspacoIcone nome="ArrowsOutCardinal" />
              Centralizar
            </motion.button>
          </div>
        </div>
      ) : (
        <ul className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,15rem),1fr))] gap-4">
          {FOTOS.map((foto) => (
            <li key={foto.legenda}>
              <figure className="grid gap-2">
                <ConteudoFoto foto={foto} />
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
