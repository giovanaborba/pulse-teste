import TelaRegistro from "@/components/diario/TelaRegistro";

// A data só chega quando a API responde no navegador: até lá, a aba mostra
// "Registro — Pulse", e a TelaRegistro troca o título depois.
export const metadata = {
  title: "Registro",
};

// No Next 16, "params" é uma Promise: é preciso esperar (await) para ler o id.
export default async function PaginaRegistro({ params }) {
  const { id } = await params;
  return <TelaRegistro id={id} />;
}
