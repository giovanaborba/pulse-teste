export default function Preloader({ refPreloader, refContador, aoTocar }) {
  return (
    // O clique só pede a saída; a mesma ação existe pelo teclado (qualquer
    // tecla) e pelo foco, então nada depende só do mouse (seção 19.1).
    <div ref={refPreloader} aria-hidden="true" onClick={aoTocar} className="preloader">
      <span
        ref={refContador}
        className="font-titulo text-[clamp(5rem,26vw,14rem)] leading-none text-[#FC4C02] tabular-nums"
      >
        0
      </span>
      <span className="rotulo-mono absolute bottom-[calc(2rem+env(safe-area-inset-bottom))] text-[#C9C9CF]">
        Pulse · carregando
      </span>
    </div>
  );
}
