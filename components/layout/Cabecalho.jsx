"use client";

import { useEffect, useRef } from "react";
import LinkInterno from "@/components/ui/LinkInterno";
import EspacoIcone from "@/components/ui/EspacoIcone";
import InterruptorEfeitos from "@/components/layout/InterruptorEfeitos";
import BarraProgresso from "@/components/layout/BarraProgresso";
import { useDirecaoRolagem } from "@/hooks/useDirecaoRolagem";

export default function Cabecalho() {
  const escondido = useDirecaoRolagem();
  const refCabecalho = useRef(null);

  // --altura-cabecalho desconta as âncoras (scroll-padding-top): se o rótulo quebrar
  // linha, o título de destino continua aparecendo inteiro.
  useEffect(() => {
    const cabecalho = refCabecalho.current;
    if (!cabecalho) return;
    const raiz = document.documentElement;

    const observador = new ResizeObserver(() => {
      raiz.style.setProperty("--altura-cabecalho", `${cabecalho.offsetHeight}px`);
    });
    observador.observe(cabecalho);

    return () => {
      observador.disconnect();
      raiz.style.removeProperty("--altura-cabecalho");
    };
  }, []);

  return (
    <header
      ref={refCabecalho}
      data-barra-rolagem
      className={`sticky top-0 z-30 border-b border-borda bg-superficie transition-transform duration-200 ${
        escondido ? "max-md:-translate-y-full" : ""
      }`}
    >
      {/* Regra: no celular, o rótulo desce com order; a ordem do HTML e do foco não muda. */}
      <div className="margem-lateral mx-auto flex min-h-16 w-full max-w-pagina flex-wrap items-center gap-x-4 gap-y-1 py-2">
        <LinkInterno
          href="/"
          className="inline-flex min-h-12 items-center gap-2 font-titulo text-logo text-marca"
        >
          <EspacoIcone nome="Pulse" />
          <span>Pulse</span>
        </LinkInterno>
        <p className="rotulo-mono text-texto-2 max-sm:order-last max-sm:basis-full max-sm:pb-1 max-sm:text-right sm:ml-auto">
          GS 2026.2 · CitizenTech
        </p>
        <div className="ml-auto sm:ml-0">
          <InterruptorEfeitos />
        </div>
      </div>
      <BarraProgresso />
    </header>
  );
}
