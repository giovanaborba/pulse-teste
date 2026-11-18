// A borda é o que separa; a sombra só reforça e some no alto contraste do Windows.
export default function Cartao({
  as: Elemento = "div",
  destaque = false,
  compacto = false,
  className = "",
  children,
}) {
  return (
    <Elemento
      className={`rounded-cartao bg-superficie shadow-cartao ${compacto ? "p-4" : "p-6"} ${
        destaque ? "border-2 border-marca" : "border border-borda"
      } ${className}`}
    >
      {children}
    </Elemento>
  );
}
