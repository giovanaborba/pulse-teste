import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { MODO_PADRAO, modos } from "@/lib/simulador/dados";

const CHAVE_MODO = "modo-pulseira";

// O modo escolhido fica no localStorage e é lido por useSyncExternalStore: o servidor
// e a hidratação usam o modo padrão, e o navegador troca para o salvo sem erro de
// hidratação e sem setState dentro de efeito.
let modoEscolhido = null;
const ouvintes = new Set();

function assinarModo(aoMudar) {
  ouvintes.add(aoMudar);
  window.addEventListener("storage", aoMudar);
  return () => {
    ouvintes.delete(aoMudar);
    window.removeEventListener("storage", aoMudar);
  };
}

function lerModo() {
  if (modoEscolhido) return modoEscolhido;
  try {
    const salvo = localStorage.getItem(CHAVE_MODO);
    return modos.includes(salvo) ? salvo : MODO_PADRAO;
  } catch {
    return MODO_PADRAO;
  }
}

const lerModoNoServidor = () => MODO_PADRAO;

function gravarModo(valor) {
  modoEscolhido = valor;
  try {
    localStorage.setItem(CHAVE_MODO, valor);
  } catch {}
  for (const aoMudar of ouvintes) aoMudar();
}

function criarContexto() {
  const AudioApi = window.AudioContext || window.webkitAudioContext;
  return AudioApi ? new AudioApi() : null;
}

// Modo da pulseira, menu de modos e som de "continuar".
export function usePulseiraSimulador() {
  const modo = useSyncExternalStore(assinarModo, lerModo, lerModoNoServidor);
  const [menuAberto, definirMenu] = useState(false);

  const escolherModo = useCallback((valor) => {
    gravarModo(valor);
    definirMenu(false);
  }, []);

  const emitirContinuar = useCallback(() => {
    if (modo !== modos[0]) return;
    const contexto = criarContexto();
    if (!contexto) return;
    if (contexto.state === "suspended") contexto.resume().catch(() => {});
    const oscilador = contexto.createOscillator();
    const volume = contexto.createGain();
    oscilador.type = "square";
    oscilador.frequency.value = 210;
    volume.gain.value = 0.028;
    oscilador.connect(volume);
    volume.connect(contexto.destination);
    oscilador.start();
    oscilador.stop(contexto.currentTime + 0.22);
    oscilador.onended = () => contexto.close();
  }, [modo]);

  return { modo, menuAberto, definirMenu, escolherModo, emitirContinuar };
}

// Som agudo e contínuo enquanto o semáforo está aberto para os carros (modo sonoro).
// Só toca depois de a pessoa ter iniciado o trajeto, nunca sozinho (seção 6.3).
export function useSomSemaforo(modo, estado) {
  useEffect(() => {
    if (modo !== modos[0] || estado !== "semaforo") return undefined;
    const contexto = criarContexto();
    if (!contexto) return undefined;
    const oscilador = contexto.createOscillator();
    const volume = contexto.createGain();
    oscilador.type = "sine";
    oscilador.frequency.value = 1050;
    volume.gain.value = 0.045;
    oscilador.connect(volume);
    volume.connect(contexto.destination);
    oscilador.start();
    return () => {
      try {
        oscilador.stop();
      } catch {}
      contexto.close();
    };
  }, [modo, estado]);
}
