"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TituloPagina from "@/components/layout/TituloPagina";
import EstadoTela from "@/components/ui/EstadoTela";
import LinkVoltar from "@/components/ui/LinkVoltar";
import FormularioRegistro from "@/components/diario/FormularioRegistro";
import RegistroNaoEncontrado from "@/components/diario/RegistroNaoEncontrado";
import { useMensagemDiario } from "@/hooks/useMensagemDiario";
import { useRegistro } from "@/hooks/useRegistro";
import { useRegistros } from "@/hooks/useRegistros";
import { useTituloDaAba } from "@/hooks/useTituloDaAba";
import { formatarData } from "@/lib/datas";
import { valoresDoRegistro } from "@/lib/validacao";

export default function TelaEditarRegistro({ id }) {
  const router = useRouter();
  const { registro, carregando, erro, naoEncontrado, recarregar, parar } = useRegistro(id);
  const { atualizar } = useRegistros({ carregarAoIniciar: false });
  const { definirMensagem } = useMensagemDiario();
  const [tentativas, setTentativas] = useState(0);

  useTituloDaAba(naoEncontrado ? "Registro não encontrado" : null);

  function aoTentarDeNovo() {
    setTentativas((anterior) => anterior + 1);
    recarregar();
  }

  async function aoSalvar(dados) {
    const atualizado = await atualizar(id, dados);
    definirMensagem({ tipo: "sucesso", texto: "Registro salvo.", idDestaque: atualizado.id });
    router.push("/diario");
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
        <LinkVoltar href={`/diario/${id}`}>Voltar ao registro</LinkVoltar>
      </p>

      <TituloPagina
        titulo={registro ? `Editar registro de ${formatarData(registro.data)}` : "Editar registro"}
        resumo="Conte como foi um deslocamento que você já fez."
      />

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
        <FormularioRegistro
          valoresIniciais={valoresDoRegistro(registro)}
          aoSalvar={aoSalvar}
          destinoCancelar={`/diario/${id}`}
        />
      )}
    </div>
  );
}
