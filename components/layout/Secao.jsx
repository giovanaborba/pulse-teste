import RotuloSecao from "@/components/layout/RotuloSecao";

// A banda tem a própria camada de grão: o grão da página fica atrás de tudo, e o fundo
// opaco o cobriria. "isolate" deixa o fundo atrás do conteúdo, nunca da página.
export default function Secao({
  id,
  titulo,
  rotulo,
  larga = false,
  banda = false,
  duasColunas = false,
  encaixe = false,
  className = "",
  children,
}) {
  const classesSecao = banda ? "relative isolate mt-20 py-18" : "mt-20";
  const classesGrade = duasColunas ? "lg:grid lg:grid-cols-2 lg:gap-x-12" : "";
  const classesRotulo = duasColunas ? "lg:col-start-1 lg:row-start-1" : "";
  const classesTitulo = `${rotulo ? "mt-3 scroll-mt-10" : ""} ${duasColunas ? "lg:col-start-1 lg:row-start-2 lg:self-start" : ""}`;
  // Nas duas colunas, o texto começa na altura do título: com rótulo, o
  // título tem 12 px de margem em cima (mt-3), e o texto ganha a mesma.
  const classesConteudo = `mt-6 space-y-6 ${larga ? "" : "max-w-texto"} ${
    duasColunas ? `lg:col-start-2 lg:row-span-2 lg:row-start-2 ${rotulo ? "lg:mt-3" : "lg:mt-0"}` : ""
  }`;

  return (
    <section
      data-encaixe={encaixe ? "" : undefined}
      className={`${classesSecao} ${classesGrade} ${className}`}
    >
      {banda && (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-faixa"
          />
          <span
            aria-hidden="true"
            className="grao absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
          />
          <span
            aria-hidden="true"
            className="divisor-piso absolute top-0 left-1/2 w-screen -translate-x-1/2"
          />
        </>
      )}
      {rotulo && <RotuloSecao className={classesRotulo}>{rotulo}</RotuloSecao>}
      <h2 id={id} tabIndex={-1} className={classesTitulo}>
        {titulo}
      </h2>
      <div className={classesConteudo}>{children}</div>
    </section>
  );
}
