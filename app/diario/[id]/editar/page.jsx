import TelaEditarRegistro from "@/components/diario/TelaEditarRegistro";

export const metadata = {
  title: "Editar registro",
};

// No Next 16, "params" é uma Promise: é preciso esperar (await) para ler o id.
export default async function PaginaEditarRegistro({ params }) {
  const { id } = await params;
  return <TelaEditarRegistro id={id} />;
}
