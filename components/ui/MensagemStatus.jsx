"use client";

import { useEffect, useState } from "react";
import EspacoIcone from "@/components/ui/EspacoIcone";
import Botao from "@/components/ui/Botao";
import CertoDesenhado from "@/components/ui/CertoDesenhado";

// O texto entra um instante depois: o leitor de tela só anuncia mudanças dentro de
// uma região de status que já existia. Regra: não some sozinha (11.3).
const ESTILOS = {
  sucesso: { icone: null, classes: "border-sucesso bg-sucesso-fundo text-sucesso" },
  erro: { icone: "WarningCircle", classes: "border-erro bg-erro-fundo text-erro" },
  aviso: { icone: "Warning", classes: "border-aviso bg-aviso-fundo text-aviso" },
};

export default function MensagemStatus({ tipo = "sucesso", texto, aoFechar, acao }) {
  const estilo = ESTILOS[tipo];
  const [pronta, setPronta] = useState(false);

  useEffect(() => {
    const espera = setTimeout(() => setPronta(true), 100);
    return () => clearTimeout(espera);
  }, []);

  return (
    <div className={`rounded-cartao border-2 p-4 ${estilo.classes}`}>
      <div role={tipo === "erro" ? "alert" : "status"}>
        {pronta && (
          <p className="flex items-start gap-2 font-bold">
            {estilo.icone ? <EspacoIcone nome={estilo.icone} /> : <CertoDesenhado key={texto} />}
            <span>{texto}</span>
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {acao && (
          <Botao
            variante="secundario-sobre-cor"
            icone={acao.icone}
            aria-disabled={acao.ocupada || undefined}
            onClick={acao.aoClicar}
          >
            {acao.texto}
          </Botao>
        )}
        <Botao variante="secundario-sobre-cor" icone="X" aria-label="Fechar mensagem" onClick={aoFechar}>
          Fechar
        </Botao>
      </div>
    </div>
  );
}
