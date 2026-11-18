import Link from "next/link";
import EspacoIcone from "@/components/ui/EspacoIcone";

// O texto em negrito invisível reserva a largura, para a barra não pular quando o
// ativo muda. A borda transparente aparece no alto contraste do Windows.
export default function ItemBarra({ href, texto, icone, ativo, aoNavegar }) {
  return (
    // flex-auto: em uma linha, cada item tem a largura do texto e divide o
    // espaço que sobra; em 2 × 2 (grade), não tem efeito
    <li className="flex flex-auto">
      <Link
        href={href}
        onNavigate={aoNavegar}
        aria-current={ativo ? "page" : undefined}
        className={`flex min-h-14 w-full flex-col items-center justify-center gap-0.5 rounded-[1.25rem] border px-1 py-1 text-auxiliar md:rounded-full no-underline transicao-fundo md:min-h-12 md:flex-row md:gap-2 md:px-4 ${
          ativo
            ? "border-acao bg-acao font-bold text-sobre-acao"
            : "border-transparent bg-superficie text-texto hover:bg-hover"
        }`}
      >
        <EspacoIcone nome={icone} />
        <span className="grid">
          <span className="col-start-1 row-start-1">{texto}</span>
          <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">
            {texto}
          </span>
        </span>
      </Link>
    </li>
  );
}
