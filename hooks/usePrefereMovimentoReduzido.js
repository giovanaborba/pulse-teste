import { useSyncExternalStore } from "react";

// Regra: só o ProvedorMovimento usa este hook; os componentes usam useEfeitos() (19.2).
const CONSULTA = "(prefers-reduced-motion: reduce)";

function assinar(aoMudar) {
  const consulta = window.matchMedia(CONSULTA);
  consulta.addEventListener("change", aoMudar);
  return () => consulta.removeEventListener("change", aoMudar);
}

function lerNoNavegador() {
  return window.matchMedia(CONSULTA).matches;
}

function lerNoServidor() {
  return false;
}

export function usePrefereMovimentoReduzido() {
  return useSyncExternalStore(assinar, lerNoNavegador, lerNoServidor);
}
