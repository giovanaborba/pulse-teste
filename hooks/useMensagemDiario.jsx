"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";

// Fica no layout para sobreviver à troca de página. Regra: a mensagem não some
// sozinha e é apagada ao ir para outra página (7.5, 11.2, 11.3).
const ContextoMensagem = createContext(null);

export function ProvedorMensagemDiario({ children }) {
  const caminho = usePathname();
  const [estado, setEstado] = useState({ mensagem: null, caminho });

  // Ajustar o estado durante a renderização é o jeito recomendado pelo React para
  // reiniciar um valor quando outro muda.
  if (estado.caminho !== caminho) {
    setEstado({
      mensagem: estado.mensagem?.rota === caminho ? estado.mensagem : null,
      caminho,
    });
  }

  function definirMensagem(mensagem, rota = "/diario") {
    setEstado((anterior) => ({ ...anterior, mensagem: { ...mensagem, rota } }));
  }

  function limparMensagem() {
    setEstado((anterior) => ({ ...anterior, mensagem: null }));
  }

  const mensagem = estado.mensagem?.rota === caminho ? estado.mensagem : null;

  return (
    <ContextoMensagem.Provider value={{ mensagem, definirMensagem, limparMensagem }}>
      {children}
    </ContextoMensagem.Provider>
  );
}

export function useMensagemDiario() {
  const contexto = useContext(ContextoMensagem);
  if (!contexto) {
    throw new Error("useMensagemDiario precisa estar dentro de <ProvedorMensagemDiario>.");
  }
  return contexto;
}
