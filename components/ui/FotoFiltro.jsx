// Decisão da equipe: a foto aparece normal, sem filtro, zoom nem parallax. O nome e
// as props ficaram iguais, para não mexer em quem o usa.
export default function FotoFiltro({ className = "", children }) {
  return (
    <div className={`foto-filtro ${className}`}>
      <div className="size-full">{children}</div>
    </div>
  );
}
