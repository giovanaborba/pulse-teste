"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Regra: foco no <h1> da página nova (4.1), menos no primeiro carregamento, para o
// "Pular para o conteúdo" ser o primeiro focável. Com âncora, foca o título dela.

function destinoDoFoco() {
  const ancora = window.location.hash.slice(1);
  if (ancora) {
    const alvo = document.getElementById(decodeURIComponent(ancora));
    if (alvo) return { elemento: alvo, veioDaAncora: true };
  }
  return { elemento: document.querySelector("#conteudo h1"), veioDaAncora: false };
}
export default function FocoNaTroca() {
  const caminho = usePathname();
  const caminhoAnterior = useRef(caminho);

  useEffect(() => {
    // Mesmo caminho = primeiro carregamento (ou o React rodando o efeito
    // duas vezes no modo de desenvolvimento): não faz nada.
    if (caminhoAnterior.current === caminho) return;
    caminhoAnterior.current = caminho;

    const { elemento, veioDaAncora } = destinoDoFoco();
    if (!elemento) return;
    // Garante que o destino aceite foco, mesmo se a página esquecer o tabIndex
    if (!elemento.hasAttribute("tabindex")) elemento.setAttribute("tabindex", "-1");
    elemento.focus(veioDaAncora ? { preventScroll: true } : undefined);
  }, [caminho]);

  return null;
}
