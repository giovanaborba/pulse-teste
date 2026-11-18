import TituloPagina from "@/components/layout/TituloPagina";
import Simulador from "@/components/simulador/Simulador";

export const metadata = {
  title: "Simulador",
};

export default function PaginaSimulador() {
  return (
    <div className="overflow-x-clip pb-8">
      <div className="relative margem-lateral pt-10 pb-6">
        <div
          aria-hidden="true"
          className="textura-piso textura-lado absolute inset-y-0 right-0 hidden w-[45%] lg:block"
        />
        <div className="relative mx-auto max-w-pagina">
          <TituloPagina
            rotulo="Experimente"
            titulo="Simulador"
            resumo="Experimente os sinais da Pulse antes de usar a pulseira na rua."
          />
        </div>
      </div>

      <div className="margem-lateral">
        <div className="mx-auto max-w-pagina">
          {/* O simulador usa a largura toda da página (o espaço dele é medido por
              container query, em simulador.css); o requisito de som + texto para
              cada sinal vale dentro dele (seção 6.3 da especificação). */}
          <Simulador />
        </div>
      </div>
    </div>
  );
}
