"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ItemBarra from "@/components/layout/ItemBarra";
import { useDirecaoRolagem } from "@/hooks/useDirecaoRolagem";
import { useDigitandoNoCelular } from "@/hooks/useDigitandoNoCelular";
import { useGuardaDeSaida } from "@/hooks/useGuardaDeSaida";
import { useCabeEmUmaLinha } from "@/hooks/useCabeEmUmaLinha";

const LAYOUT_CELULAR = {
  // reserva antes de medir: 2 × 2, ou 1 linha se houver ~20em livres
  null: "grid grid-cols-2 @min-[20em]:flex",
  true: "flex",
  false: "grid grid-cols-2",
};

// A <nav> ocupa a largura da tela, mas só a pílula recebe o mouse (pointer-events):
// as áreas transparentes dos lados bloqueariam o clique no conteúdo atrás.
const ITENS = [
  { href: "/", texto: "Início", icone: "House" },
  { href: "/solucao", texto: "Solução", icone: "Watch" },
  { href: "/simulador", texto: "Simulador", icone: "Play" },
  { href: "/diario", texto: "Diário", icone: "Notebook" },
];

function estaAtivo(caminho, href) {
  if (href === "/") return caminho === "/";
  return caminho === href || caminho.startsWith(`${href}/`);
}

export default function BarraNavegacao() {
  const caminho = usePathname();
  const escondidaPelaRolagem = useDirecaoRolagem();
  const digitando = useDigitandoNoCelular();
  const escondida = escondidaPelaRolagem || digitando;
  const { aoNavegar } = useGuardaDeSaida();
  const refLista = useRef(null);
  const cabeEmUmaLinha = useCabeEmUmaLinha(refLista);

  // --altura-barra guarda a altura real, para o espaço no fim da página ter sempre o
  // tamanho certo (1 linha, 2 × 2 ou texto ampliado).
  useEffect(() => {
    const lista = refLista.current;
    if (!lista) return;
    const raiz = document.documentElement;

    const observador = new ResizeObserver(() => {
      raiz.style.setProperty("--altura-barra", `${lista.offsetHeight}px`);
    });
    observador.observe(lista);

    return () => {
      observador.disconnect();
      raiz.style.removeProperty("--altura-barra");
    };
  }, []);

  return (
    <nav
      aria-label="Navegação principal"
      data-barra-rolagem
      className={`margem-lateral pointer-events-none fixed inset-x-0 bottom-[calc(var(--distancia-barra)+env(safe-area-inset-bottom))] z-40 transition-transform duration-200 pouca-altura:static pouca-altura:mt-8 pouca-altura:translate-y-0! ${
        escondida
          ? "max-md:translate-y-[calc(100%+var(--distancia-barra)+env(safe-area-inset-bottom))]"
          : ""
      }`}
    >
      <div className="@container">
        <ul
          ref={refLista}
          className={`pointer-events-auto mx-auto gap-1.5 rounded-[calc(1.25rem+7px)] border border-borda bg-superficie p-1.5 shadow-barra md:flex md:rounded-[calc(1.5rem+7px)] md:w-fit md:flex-wrap md:justify-center ${
            LAYOUT_CELULAR[String(cabeEmUmaLinha)]
          }`}
        >
          {ITENS.map((item) => (
            <ItemBarra
              key={item.href}
              href={item.href}
              texto={item.texto}
              icone={item.icone}
              ativo={estaAtivo(caminho, item.href)}
              aoNavegar={(evento) => aoNavegar(evento, item.href)}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
