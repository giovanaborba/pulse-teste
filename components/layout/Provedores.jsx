"use client";

import TransicaoPagina from "@/components/layout/TransicaoPagina";
import { ProvedorGuardaDeSaida } from "@/hooks/useGuardaDeSaida";
import { ProvedorMensagemDiario } from "@/hooks/useMensagemDiario";

// A transição fica por fora, porque a guarda de saída a usa.
export default function Provedores({ children }) {
  return (
    <TransicaoPagina>
      <ProvedorGuardaDeSaida>
        <ProvedorMensagemDiario>{children}</ProvedorMensagemDiario>
      </ProvedorGuardaDeSaida>
    </TransicaoPagina>
  );
}
