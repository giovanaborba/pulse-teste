"use client";

import { useState } from "react";
import TituloPagina from "@/components/layout/TituloPagina";
import Botao from "@/components/ui/Botao";
import Cartao from "@/components/ui/Cartao";
import ErroCampo from "@/components/ui/ErroCampo";
import EstadoTela from "@/components/ui/EstadoTela";
import MensagemStatus from "@/components/ui/MensagemStatus";
import ResumoIndicadores from "@/components/diario/ResumoIndicadores";
import ListaRegistros from "@/components/diario/ListaRegistros";
import { useMensagemDiario } from "@/hooks/useMensagemDiario";
import { useRegistros } from "@/hooks/useRegistros";
import { useResumoIndicadores } from "@/hooks/useResumoIndicadores";

export default function TelaDiario() {
  const { registros, carregando, erro, recarregar, parar, restaurar } = useRegistros();
  const indicadores = useResumoIndicadores(registros);
  const { mensagem, definirMensagem, limparMensagem } = useMensagemDiario();
  const [restaurando, setRestaurando] = useState(false);
  const [falhasAoDesfazer, setFalhasAoDesfazer] = useState(0);
  const [tentativas, setTentativas] = useState(0);

  function aoTentarDeNovo() {
    setTentativas((anterior) => anterior + 1);
    recarregar();
  }

  async function aoDesfazer() {
    if (restaurando || !mensagem?.registroExcluido) return;
    setRestaurando(true);
    try {
      const restaurado = await restaurar(mensagem.registroExcluido);
      setFalhasAoDesfazer(0);
      definirMensagem({ tipo: "sucesso", texto: "Registro restaurado.", idDestaque: restaurado.id });
    } catch {
      setFalhasAoDesfazer((anterior) => anterior + 1);
    } finally {
      setRestaurando(false);
    }
  }

  function aoFecharMensagem() {
    setFalhasAoDesfazer(0);
    limparMensagem();
  }

  const situacao = carregando
    ? "carregando"
    : erro
      ? "erro"
      : registros.length === 0
        ? "vazio"
        : "lista";

  return (
    <div className="margem-lateral mx-auto max-w-texto py-8">
      <TituloPagina
        titulo="Diário de deslocamentos"
        resumo="Registre como foi cada trajeto. Os registros ajudam a medir o impacto da Pulse."
      />

      <Cartao className="mt-8 text-auxiliar">
        <p>
          Os registros são anônimos e compartilhados por todas as pessoas que
          usam o site. Não escreva nomes ou endereços.
        </p>
      </Cartao>

      {mensagem && (
        <div className="mt-8">
          <MensagemStatus
            tipo={mensagem.tipo}
            texto={mensagem.texto}
            aoFechar={aoFecharMensagem}
            acao={
              mensagem.registroExcluido
                ? {
                    texto: "Desfazer",
                    icone: "ArrowCounterClockwise",
                    aoClicar: aoDesfazer,
                    ocupada: restaurando,
                  }
                : undefined
            }
          />
          {falhasAoDesfazer > 0 && (
            <ErroCampo key={falhasAoDesfazer} papel="alert" className="mt-4">
              Não foi possível salvar. Verifique a conexão e tente de novo.
            </ErroCampo>
          )}
        </div>
      )}

      {situacao === "carregando" && <EstadoTela tipo="carregando" aoParar={parar} />}
      {situacao === "erro" && (
        <EstadoTela
          key={tentativas}
          tipo="erro"
          aoTentarDeNovo={aoTentarDeNovo}
          // O botão de parar some: o foco vai para "Tentar de novo", e a pessoa não se perde.
          focarAoMontar={tentativas > 0 || erro?.codigo === "interrompido"}
          interrompido={erro?.codigo === "interrompido"}
        />
      )}
      {situacao === "vazio" && <EstadoTela tipo="vazio" />}
      {situacao === "lista" && (
        <>
          <ResumoIndicadores indicadores={indicadores} />
          <p className="mt-8">
            <Botao href="/diario/novo" icone="Plus">
              Novo registro
            </Botao>
          </p>
          <ListaRegistros registros={registros} idDestaque={mensagem?.idDestaque} />
        </>
      )}
    </div>
  );
}
