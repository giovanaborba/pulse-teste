import { useSyncExternalStore } from "react";

// No servidor devolve false: a página vem no modo mais simples, e o efeito só
// liga no navegador.

// Uma função de "assinatura" por consulta, sempre a mesma, para o React
// não refazer a assinatura a cada renderização.
const assinaturas = new Map();

function assinaturaDa(consulta) {
  if (!assinaturas.has(consulta)) {
    assinaturas.set(consulta, (aoMudar) => {
      const lista = window.matchMedia(consulta);
      lista.addEventListener("change", aoMudar);
      return () => lista.removeEventListener("change", aoMudar);
    });
  }
  return assinaturas.get(consulta);
}

export function useConsultaMidia(consulta) {
  return useSyncExternalStore(
    assinaturaDa(consulta),
    () => window.matchMedia(consulta).matches,
    () => false,
  );
}
