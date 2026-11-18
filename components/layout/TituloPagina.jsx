// tabIndex={-1}: recebe o foco na troca de página (FocoNaTroca) sem entrar no Tab.
export default function TituloPagina({ titulo, resumo, rotulo }) {
  return (
    <div>
      {rotulo && <p className="rotulo-mono mb-3 text-destaque">{rotulo}</p>}
      <h1 tabIndex={-1} className="max-w-[16ch]">
        {titulo}
      </h1>
      {resumo && <p className="mt-4 max-w-[46ch] text-texto-2">{resumo}</p>}
    </div>
  );
}
