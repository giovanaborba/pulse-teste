import ErroCampo from "@/components/ui/ErroCampo";
import Tremor from "@/components/ui/Tremor";

// aria-invalid não vai nas opções: a ARIA não o aceita no papel "radio". O erro fica
// ligado ao <fieldset> por aria-describedby (7.3).
export default function GrupoOpcoes({ nome, legenda, opcoes, valor, aoMudar, erro, tremer = 0 }) {
  const idErro = `erro-${nome}`;

  return (
    <fieldset aria-describedby={erro ? idErro : undefined}>
      <legend className="font-bold">{legenda}</legend>
      {erro && (
        <ErroCampo id={idErro} className="mt-2">
          {erro}
        </ErroCampo>
      )}

      <Tremor gatilho={tremer} ativo={Boolean(erro)} className="mt-2 grid gap-2">
        {opcoes.map((opcao) => {
          const id = `campo-${nome}-${String(opcao.valor)}`;
          const marcada = valor === opcao.valor;
          return (
            <label
              key={id}
              htmlFor={id}
              className={`flex min-h-14 cursor-pointer items-center gap-4 rounded-campo bg-superficie py-2 ${
                marcada
                  ? "border-2 border-marca px-[calc(1rem-1px)] font-bold"
                  : "border border-borda px-4"
              }`}
            >
              <input
                id={id}
                type="radio"
                name={nome}
                value={String(opcao.valor)}
                checked={marcada}
                onChange={() => aoMudar(opcao.valor)}
                className="size-6 shrink-0 accent-marca"
              />
              <span>{opcao.rotulo}</span>
            </label>
          );
        })}
      </Tremor>
    </fieldset>
  );
}
