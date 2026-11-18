import { createContext, useContext } from "react";

// Com os efeitos desligados não há Lenis (null): quem usa precisa de um plano B,
// como window.scrollTo.

export const ContextoRolagemSuave = createContext(null);

export function useRolagemSuave() {
  return useContext(ContextoRolagemSuave);
}
