import EspacoIcone from "@/components/ui/EspacoIcone";

const FORMATOS = {
  paisagem: "aspect-video w-full",
  quadrado: "aspect-square",
  retrato: "aspect-[4/5] w-full",
  livre: "size-full",
};

export default function EspacoImagem({ texto, formato = "paisagem", className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-cartao border-2 border-dashed border-borda bg-superficie text-center text-auxiliar text-texto-2 ${
        texto ? "p-6" : "p-2"
      } ${FORMATOS[formato]} ${className}`}
    >
      <EspacoIcone nome="Image" />
      {texto && <p>{texto}</p>}
    </div>
  );
}
