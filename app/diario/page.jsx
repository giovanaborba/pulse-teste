import TelaDiario from "@/components/diario/TelaDiario";

export const metadata = {
  title: "Diário",
};

// Uma página com "use client" não pode exportar metadata: por isso o conteúdo fica
// em TelaDiario.
export default function PaginaDiario() {
  return <TelaDiario />;
}
