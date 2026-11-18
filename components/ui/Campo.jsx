import ErroCampo from "@/components/ui/ErroCampo";
import Tremor from "@/components/ui/Tremor";

export default function Campo({ nome, rotulo, tipo = "date", valor, aoMudar, erro, dica, max, tremer = 0 }) {
  const idCampo = `campo-${nome}`;
  const idDica = `dica-${nome}`;
  const idErro = `erro-${nome}`;

  const descricao = [dica && idDica, erro && idErro].filter(Boolean).join(" ") || undefined;

  const classesControle = `mt-2 block w-full rounded-campo bg-superficie px-4 py-3 text-texto ${
    erro ? "border-2 border-erro" : "border border-borda"
  }`;

  function aoDigitar(evento) {
    aoMudar(evento.target.value);
  }

  return (
    <div>
      <label htmlFor={idCampo} className="block font-bold">
        {rotulo}
      </label>
      {dica && (
        <p id={idDica} className="mt-1 text-auxiliar text-texto-2">
          {dica}
        </p>
      )}
      {erro && (
        <ErroCampo id={idErro} className="mt-2">
          {erro}
        </ErroCampo>
      )}

      <Tremor gatilho={tremer} ativo={Boolean(erro)}>
        {tipo === "textarea" ? (
          <textarea
            id={idCampo}
            name={nome}
            rows={5}
            value={valor}
            onChange={aoDigitar}
            aria-invalid={erro ? true : undefined}
            aria-describedby={descricao}
            className={`${classesControle} resize-y`}
          />
        ) : (
          <input
            id={idCampo}
            name={nome}
            type={tipo}
            max={max}
            value={valor}
            onChange={aoDigitar}
            aria-invalid={erro ? true : undefined}
            aria-describedby={descricao}
            className={`${classesControle} min-h-14`}
          />
        )}
      </Tremor>
    </div>
  );
}
