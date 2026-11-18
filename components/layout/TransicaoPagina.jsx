"use client";

import { ContextoTransicao, useTransicaoPagina } from "@/hooks/useTransicaoPagina";

export default function TransicaoPagina({ children }) {
  const { refCortina, navegar, irPara } = useTransicaoPagina();

  return (
    <ContextoTransicao.Provider value={{ navegar, irPara }}>
      {children}
      <canvas ref={refCortina} aria-hidden="true" className="cortina-piso" />
    </ContextoTransicao.Provider>
  );
}
