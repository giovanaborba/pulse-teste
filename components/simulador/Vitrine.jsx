"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Os sinais da pulseira, um por cartão. O texto de cada cartão descreve o sinal e,
// nos sonoros, o botão "Som" toca o som (só depois do toque, nunca sozinho).
const SINAIS_VITRINE = [
  { grupo: "Tátil", nome: "Continue", tipo: "pressao", detalhe: "Pressão contínua no pulso." },
  { grupo: "Tátil", nome: "Pare", tipo: "parar", detalhe: "Vibração contínua até parar." },
  { grupo: "Tátil", nome: "Vire à esquerda", tipo: "esquerda", detalhe: "Vibração no lado esquerdo." },
  { grupo: "Tátil", nome: "Vire à direita", tipo: "direita", detalhe: "Vibração no lado direito." },
  {
    grupo: "Tátil",
    nome: "Aguarde",
    tipo: "aguarde",
    detalhe: "Três vibrações curtas, repetidas após uma pausa.",
  },
  { grupo: "Sonoro", nome: "Continue", tipo: "grave", detalhe: "Som grosso e curto." },
  { grupo: "Sonoro", nome: "Pare", tipo: "agudo", detalhe: "Som agudo e contínuo." },
];

function PulseiraVitrine({ tipo, somAtivo = false }) {
  return (
    <div className={`vitrine-pulseira vitrine-${tipo}`} aria-hidden="true">
      <div className="vitrine-faixa" />
      <div className="vitrine-corpo">
        <div className="vitrine-tela">
          <span className="vitrine-luz vitrine-luz-esq" />
          <span className="vitrine-luz vitrine-luz-dir" />
          <div className="vitrine-braille">
            {[1, 2, 3, 4, 5, 6].map((p) => (
              <i key={p} />
            ))}
          </div>
          <span className={`vitrine-falante ${somAtivo ? "vitrine-falante-ativo" : ""}`}>
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <span className="vitrine-botao vitrine-modo" />
      <span className="vitrine-botao vitrine-voz" />
    </div>
  );
}

function CartaoVitrine({ sinal }) {
  const [somLigado, definirSom] = useState(false);
  const audioRef = useRef(null);
  const sonoro = sinal.tipo === "grave" || sinal.tipo === "agudo";

  const encerrarSom = useCallback(() => {
    const som = audioRef.current;
    if (!som) return;
    if (som.intervalo) clearInterval(som.intervalo);
    try {
      som.oscilador.stop();
      som.contexto.close();
    } catch {}
    audioRef.current = null;
  }, []);

  const alternarSom = () => {
    if (audioRef.current) {
      encerrarSom();
      definirSom(false);
      return;
    }
    const AudioApi = window.AudioContext || window.webkitAudioContext;
    if (!AudioApi) return;
    const contexto = new AudioApi();
    if (contexto.state === "suspended") contexto.resume().catch(() => {});
    if (sinal.tipo === "agudo") {
      const oscilador = contexto.createOscillator();
      const ganho = contexto.createGain();
      oscilador.type = "sine";
      oscilador.frequency.value = 980;
      ganho.gain.value = 0.035;
      oscilador.connect(ganho);
      ganho.connect(contexto.destination);
      oscilador.start();
      audioRef.current = { contexto, oscilador };
    } else {
      const tocar = () => {
        const oscilador = contexto.createOscillator();
        const ganho = contexto.createGain();
        oscilador.type = "square";
        oscilador.frequency.value = 185;
        ganho.gain.value = 0.04;
        oscilador.connect(ganho);
        ganho.connect(contexto.destination);
        oscilador.start();
        oscilador.stop(contexto.currentTime + 0.22);
      };
      tocar();
      const intervalo = setInterval(tocar, 1700);
      audioRef.current = { contexto, intervalo, oscilador: { stop: () => clearInterval(intervalo) } };
    }
    definirSom(true);
  };

  // Ao sair da tela, o som para.
  useEffect(() => encerrarSom, [encerrarSom]);

  return (
    <article className="cartao-vitrine">
      <header>
        <span>{sinal.grupo}</span>
        <h2>{sinal.nome}</h2>
        {sonoro && (
          <button
            type="button"
            className={`controle-vitrine ${somLigado ? "ligado" : ""}`}
            onClick={alternarSom}
            aria-pressed={somLigado}
            aria-label={`Som do sinal ${sinal.nome}`}
          >
            <i />
            Som
            <span />
          </button>
        )}
      </header>
      <div className="vitrine-cena">
        <PulseiraVitrine tipo={sinal.tipo} somAtivo={somLigado} />
      </div>
      <p>{sinal.detalhe}</p>
    </article>
  );
}

export default function Vitrine({ voltar }) {
  return (
    <div className="tela-vitrine">
      <header className="topo-vitrine">
        <button type="button" onClick={voltar} aria-label="Voltar">
          ‹
        </button>
      </header>
      <section className="grade-vitrine" aria-label="Comandos da pulseira">
        {SINAIS_VITRINE.map((sinal) => (
          <CartaoVitrine key={`${sinal.grupo}-${sinal.tipo}`} sinal={sinal} />
        ))}
      </section>
    </div>
  );
}
