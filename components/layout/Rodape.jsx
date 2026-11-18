"use client";

import { usePathname } from "next/navigation";
import LinkInterno from "@/components/ui/LinkInterno";
import FaixaODS from "@/components/solucao/FaixaODS";
import { useRodapeRevelado } from "@/hooks/useRodapeRevelado";

// O espaço do fim da página fica aqui dentro, para o último link nunca ficar atrás
// da barra flutuante (WCAG 2.4.11).
const LINKS = [
  { href: "/", texto: "Início" },
  { href: "/solucao", texto: "Solução" },
  { href: "/simulador", texto: "Simulador" },
  { href: "/diario", texto: "Diário" },
];

export default function Rodape() {
  const naSolucao = usePathname() === "/solucao";
  const refRodape = useRodapeRevelado();

  return (
    <footer
      ref={refRodape}
      className="rodape mt-16 bg-rodape-fundo pt-14 pb-[var(--espaco-fim)] text-rodape-texto"
    >
      <div className="margem-lateral mx-auto w-full max-w-pagina">
        <p
          aria-hidden="true"
          className="mb-6 overflow-hidden font-titulo text-[clamp(5.5rem,27vw,21rem)] leading-[0.8] tracking-[0.01em] whitespace-nowrap text-rodape-destaque uppercase"
        >
          Pulse
        </p>

        {naSolucao && <FaixaODS />}

        <div className="grid gap-4 border-t border-rodape-borda/50 pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <LinkInterno
                  href={link.href}
                  className="inline-flex min-h-12 items-center font-bold text-rodape-texto"
                >
                  {link.texto}
                </LinkInterno>
              </li>
            ))}
          </ul>
          <p className="pb-6 text-auxiliar text-rodape-texto-2">
            Pulse · Global Solution 2026.2 · FIAP · Giovana, Giovane, Mie, Pedro e Thiago.
            Protótipo acadêmico com dados públicos e simulados.
          </p>
        </div>
      </div>
    </footer>
  );
}
