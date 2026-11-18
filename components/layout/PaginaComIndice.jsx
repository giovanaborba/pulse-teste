import TituloPagina from "@/components/layout/TituloPagina";
import IndiceNestaPagina from "@/components/layout/IndiceNestaPagina";

// overflow-x-clip, e não overflow: hidden: o "clip" corta a sobra lateral sem
// desligar o position: sticky do índice.
export default function PaginaComIndice({
  titulo,
  resumo,
  rotulo,
  itensIndice,
  children,
  secaoLarga,
  acaoFinal,
}) {
  return (
    <div className="overflow-x-clip pb-8">
      {titulo && (
        <div className="relative margem-lateral pt-10 pb-6">
          <div
            aria-hidden="true"
            className="textura-piso textura-lado absolute inset-y-0 right-0 hidden w-[45%] lg:block"
          />
          <div className="relative mx-auto max-w-pagina">
            <TituloPagina titulo={titulo} resumo={resumo} rotulo={rotulo} />
          </div>
        </div>
      )}

      <IndiceNestaPagina itens={itensIndice} />

      <div className="margem-lateral">
        <div className="mx-auto max-w-pagina">
          {children}
          {secaoLarga}
          {acaoFinal && <p className="mt-16">{acaoFinal}</p>}
        </div>
      </div>
    </div>
  );
}
