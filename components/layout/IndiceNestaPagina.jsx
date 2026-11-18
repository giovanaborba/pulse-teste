"use client";

import { useEffect, useRef } from "react";
import { useSecaoAtual } from "@/hooks/useSecaoAtual";

// Regra: a pílula da seção atual fica laranja, com aria-current (decisão 1 da Fase 8).
// Só gruda a partir de 1024 × 700 px, para não tirar espaço da tela.
const CONSULTA_FAIXA_FIXA = "(min-width: 64rem) and (min-height: 43.75rem)";

export default function IndiceNestaPagina({ itens }) {
  const atual = useSecaoAtual(itens);
  const refIndice = useRef(null);

  useEffect(() => {
    const indice = refIndice.current;
    if (!indice) return;
    const raiz = document.documentElement;
    const consulta = window.matchMedia(CONSULTA_FAIXA_FIXA);

    function atualizar() {
      const altura = consulta.matches ? indice.offsetHeight : 0;
      raiz.style.setProperty("--altura-indice", `${altura}px`);
    }

    const observador = new ResizeObserver(atualizar);
    observador.observe(indice);
    consulta.addEventListener("change", atualizar);
    atualizar();

    return () => {
      observador.disconnect();
      consulta.removeEventListener("change", atualizar);
      raiz.style.removeProperty("--altura-indice");
    };
  }, []);

  return (
    <nav
      ref={refIndice}
      aria-labelledby="titulo-nesta-pagina"
      className="margem-lateral z-20 bg-fundo py-3 faixa-fixa:sticky faixa-fixa:top-[var(--altura-cabecalho)] faixa-fixa:border-b faixa-fixa:border-borda"
    >
      <div className="mx-auto max-w-pagina">
        <h2 id="titulo-nesta-pagina" className="sr-only">
          Nesta página
        </h2>
        <ul className="flex flex-wrap gap-2">
          {itens.map((item) => {
            const ehAtual = atual === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={ehAtual ? "true" : undefined}
                  className={`inline-flex min-h-12 items-center rounded-full border px-4 text-auxiliar font-bold no-underline transicao-fundo ${
                    ehAtual
                      ? "border-acao bg-acao text-sobre-acao"
                      : "border-borda bg-superficie text-texto hover:bg-hover"
                  }`}
                >
                  {item.texto}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
