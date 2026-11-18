// Regra: fica atrás do conteúdo (z-index: -1), para o contraste do texto nunca cair.
export default function Granulado() {
  return <div aria-hidden="true" className="grao grao-pagina" />;
}
