import Botao from "@/components/ui/Botao";
import { PERGUNTAS, rotuloDe, textoObservacoes } from "@/lib/rotulos";

// <dl>: o leitor de tela lê a pergunta e a resposta como um par.
const CAMPOS = ["meio", "chegouSemSePerder", "precisouDeAjuda", "travessias", "orientacoes"];

export default function DetalheRegistro({ registro, aoPedirExclusao }) {
  return (
    <>
      <dl className="mt-8 space-y-6">
        {CAMPOS.map((campo) => (
          <div key={campo}>
            <dt className="font-bold">{PERGUNTAS[campo]}</dt>
            <dd className="mt-1">{rotuloDe(campo, registro[campo])}</dd>
          </div>
        ))}
        <div>
          <dt className="font-bold">{PERGUNTAS.observacoes}</dt>
          <dd className="mt-1 whitespace-pre-line break-words">
            {textoObservacoes(registro.observacoes)}
          </dd>
        </div>
      </dl>

      <div className="mt-10 flex flex-wrap gap-4">
        <Botao href={`/diario/${registro.id}/editar`} icone="PencilSimple">
          Editar registro
        </Botao>
        <Botao variante="perigo" icone="Trash" onClick={aoPedirExclusao}>
          Excluir registro
        </Botao>
      </div>
    </>
  );
}
