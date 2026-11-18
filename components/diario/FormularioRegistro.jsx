"use client";

import Botao from "@/components/ui/Botao";
import Campo from "@/components/ui/Campo";
import ErroCampo from "@/components/ui/ErroCampo";
import GrupoOpcoes from "@/components/ui/GrupoOpcoes";
import { useFormularioRegistro } from "@/hooks/useFormularioRegistro";
import { useGuardaDeSaida } from "@/hooks/useGuardaDeSaida";
import { useEsperaLonga } from "@/hooks/useEsperaLonga";
import { useHoje } from "@/hooks/useHoje";
import { OPCOES, PERGUNTAS } from "@/lib/rotulos";

// Regra: sem "Parar" no "Salvando…": o servidor pode gravar mesmo se a espera for
// interrompida (11.1).
const GRUPOS = ["meio", "chegouSemSePerder", "precisouDeAjuda", "travessias", "orientacoes"];

export default function FormularioRegistro({ valoresIniciais, aoSalvar, destinoCancelar }) {
  const { valores, erros, enviando, falhouAoSalvar, falhasAoSalvar, enviosComErro, alterar, enviar } =
    useFormularioRegistro({ valoresIniciais, aoSalvar });
  const { aoNavegar } = useGuardaDeSaida();
  const hoje = useHoje();
  const demorando = useEsperaLonga(enviando);

  function aoCancelar(evento) {
    aoNavegar(evento, destinoCancelar);
  }

  return (
    // noValidate: desliga os balões de erro do navegador; a validação
    // é a nossa, só ao enviar, com as mensagens da especificação.
    <form noValidate onSubmit={enviar} className="mt-8 space-y-8">
      <Campo
        nome="data"
        tipo="date"
        rotulo={`${PERGUNTAS.data} (obrigatório)`}
        max={hoje || undefined}
        valor={valores.data}
        aoMudar={(valor) => alterar("data", valor)}
        erro={erros.data}
        tremer={enviosComErro}
      />

      {GRUPOS.map((campo) => (
        <GrupoOpcoes
          key={campo}
          nome={campo}
          legenda={`${PERGUNTAS[campo]} (obrigatório)`}
          opcoes={OPCOES[campo]}
          valor={valores[campo]}
          aoMudar={(valor) => alterar(campo, valor)}
          erro={erros[campo]}
          tremer={enviosComErro}
        />
      ))}

      <Campo
        nome="observacoes"
        tipo="textarea"
        rotulo={`${PERGUNTAS.observacoes} (opcional)`}
        dica="Até 300 caracteres. Não escreva nomes ou endereços."
        valor={valores.observacoes}
        aoMudar={(valor) => alterar("observacoes", valor)}
        erro={erros.observacoes}
        tremer={enviosComErro}
      />

      <div>
        {falhouAoSalvar && (
          // key: a cada nova falha a mensagem é recriada e anunciada de novo
          <ErroCampo key={falhasAoSalvar} papel="alert" className="mb-4">
            Não foi possível salvar. Verifique a conexão e tente de novo.
          </ErroCampo>
        )}

        <p role="status" className="sr-only">
          {enviando ? (demorando ? "Está demorando mais que o normal. Aguarde mais um pouco." : "Salvando") : ""}
        </p>

        <div className="flex flex-wrap gap-4">
          <Botao type="submit" aria-disabled={enviando || undefined}>
            {enviando ? "Salvando…" : "Salvar registro"}
          </Botao>
          <Botao variante="secundario" href={destinoCancelar} onNavigate={aoCancelar}>
            Cancelar
          </Botao>
        </div>
      </div>
    </form>
  );
}
