"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TituloPagina from "@/components/layout/TituloPagina";
import DialogoConfirmacao from "@/components/ui/DialogoConfirmacao";
import EstadoTela from "@/components/ui/EstadoTela";
import LinkVoltar from "@/components/ui/LinkVoltar";
import DetalheRegistro from "@/components/diario/DetalheRegistro";
import RegistroNaoEncontrado from "@/components/diario/RegistroNaoEncontrado";
import { useMensagemDiario } from "@/hooks/useMensagemDiario";
import { useRegistro } from "@/hooks/useRegistro";
import { useRegistros } from "@/hooks/useRegistros";
import { useTituloDaAba } from "@/hooks/useTituloDaAba";
import { formatarData } from "@/lib/datas";

export default function TelaRegistro({ id }) {
  const router = useRouter();
  const { registro, carregando, erro, naoEncontrado, recarregar, parar } = useRegistro(id);
  const { excluir } = useRegistros({ carregarAoIniciar: false });
  const { definirMensagem } = useMensagemDiario();
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [excluindo, setExcluindo] = useState(false);
  const [falhouAoExcluir, setFalhouAoExcluir] = useState(false);
  const [tentativas, setTentativas] = useState(0);

  const data = registro ? formatarData(registro.data) : "";

  // Regra: "Registro não encontrado" no título quando ele não existe (decisão da equipe).
  useTituloDaAba(
    registro ? `Registro de ${data} — Pulse` : naoEncontrado ? "Registro não encontrado" : null,
  );

  function aoTentarDeNovo() {
    setTentativas((anterior) => anterior + 1);
    recarregar();
  }

  function aoPedirExclusao() {
    setFalhouAoExcluir(false);
    setDialogoAberto(true);
  }

  function aoManter() {
    setDialogoAberto(false);
  }

  async function aoConfirmarExclusao() {
    setExcluindo(true);
    setFalhouAoExcluir(false);
    try {
      await excluir(registro.id);
      definirMensagem({ tipo: "sucesso", texto: "Registro excluído.", registroExcluido: registro });
      router.push("/diario");
    } catch {
      setFalhouAoExcluir(true);
      setExcluindo(false);
    }
  }

  if (naoEncontrado) {
    return (
      <div className="margem-lateral mx-auto max-w-texto py-8">
        <RegistroNaoEncontrado />
      </div>
    );
  }

  return (
    <div className="margem-lateral mx-auto max-w-texto py-8">
      <p className="mb-6">
        <LinkVoltar href="/diario">Voltar ao Diário</LinkVoltar>
      </p>

      <TituloPagina titulo={registro ? `Registro de ${data}` : "Registro"} />

      {carregando && <EstadoTela tipo="carregando" aoParar={parar} />}
      {erro && (
        <EstadoTela
          key={tentativas}
          tipo="erro"
          aoTentarDeNovo={aoTentarDeNovo}
          // O botão de parar some: o foco vai para "Tentar de novo", e a pessoa não se perde.
          focarAoMontar={tentativas > 0 || erro?.codigo === "interrompido"}
          interrompido={erro?.codigo === "interrompido"}
        />
      )}
      {registro && (
        <>
          <DetalheRegistro registro={registro} aoPedirExclusao={aoPedirExclusao} />
          <DialogoConfirmacao
            aberto={dialogoAberto}
            titulo={`Excluir o registro de ${data}?`}
            texto="Essa ação não pode ser desfeita."
            textoConfirmar="Excluir registro"
            textoCancelar="Manter registro"
            aoConfirmar={aoConfirmarExclusao}
            aoCancelar={aoManter}
            processando={excluindo}
            textoProcessando="Excluindo…"
            erro={
              falhouAoExcluir
                ? "Não foi possível excluir. Verifique a conexão e tente de novo."
                : null
            }
          />
        </>
      )}
    </div>
  );
}
