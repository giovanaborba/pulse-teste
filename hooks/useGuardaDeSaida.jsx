"use client";

import { createContext, useContext, useRef, useState } from "react";
import DialogoConfirmacao from "@/components/ui/DialogoConfirmacao";
import { useNavegacaoComTransicao } from "@/hooks/useTransicaoPagina";

// O App Router não bloqueia a navegação; por isso os links internos passam por aoNavegar.
// Armadilha: o Voltar do navegador não pode ser bloqueado de forma confiável.
const ContextoGuarda = createContext(null);

export function ProvedorGuardaDeSaida({ children }) {
  const { navegar, irPara } = useNavegacaoComTransicao();
  // Ref (e não state): mudar o bloqueio não precisa redesenhar a tela
  const bloqueado = useRef(false);
  const [destinoPendente, setDestinoPendente] = useState(null);

  function definirBloqueio(valor) {
    bloqueado.current = valor;
  }

  function aoNavegar(evento, destino) {
    if (!bloqueado.current) {
      navegar(evento, destino);
      return;
    }
    evento.preventDefault();
    setDestinoPendente(destino);
  }

  function aoDescartar() {
    const destino = destinoPendente;
    bloqueado.current = false;
    setDestinoPendente(null);
    // Regra: dentro do Diário a troca é instantânea; ao sair dele, a cortina anima.
    irPara(destino);
  }

  function aoContinuar() {
    setDestinoPendente(null);
  }

  return (
    <ContextoGuarda.Provider value={{ definirBloqueio, aoNavegar }}>
      {children}
      <DialogoConfirmacao
        aberto={destinoPendente !== null}
        titulo="Descartar as respostas?"
        texto="As respostas deste registro não serão salvas."
        textoConfirmar="Descartar respostas"
        textoCancelar="Continuar preenchendo"
        aoConfirmar={aoDescartar}
        aoCancelar={aoContinuar}
      />
    </ContextoGuarda.Provider>
  );
}

export function useGuardaDeSaida() {
  const contexto = useContext(ContextoGuarda);
  if (!contexto) {
    throw new Error("useGuardaDeSaida precisa estar dentro de <ProvedorGuardaDeSaida>.");
  }
  return contexto;
}
