import { createContext, useContext } from "react";

// efeitosLigados começa false no servidor e na hidratação; use efeitosConhecidos
// quando "ainda não sei" e "desligado" precisam ser diferentes.

export const ContextoEfeitos = createContext(null);

export function useEfeitos() {
  const contexto = useContext(ContextoEfeitos);
  if (!contexto) {
    throw new Error("useEfeitos precisa estar dentro do <ProvedorMovimento>.");
  }
  return contexto;
}
