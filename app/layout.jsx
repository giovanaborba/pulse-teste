import { Anton, Atkinson_Hyperlegible_Next, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LinkPular from "@/components/layout/LinkPular";
import Cabecalho from "@/components/layout/Cabecalho";
import Rodape from "@/components/layout/Rodape";
import BarraNavegacao from "@/components/layout/BarraNavegacao";
import FocoNaTroca from "@/components/layout/FocoNaTroca";
import Provedores from "@/components/layout/Provedores";
import ProvedorMovimento from "@/components/layout/ProvedorMovimento";
import Granulado from "@/components/ui/Granulado";

// next/font serve as fontes pelo próprio site: a página não chama o Google.
// "latin-ext" cobre todos os acentos; "swap" nunca deixa o texto invisível.
const anton = Anton({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-anton",
});
// Aviso conhecido no build ("Failed to find font override values"): o Next 16.4 não
// tem as medidas da Atkinson, e a reserva continua a Verdana. Não é erro.
const atkinson = Atkinson_Hyperlegible_Next({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-atkinson",
});
const mono = JetBrains_Mono({
  weight: ["500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-jetbrains",
});

// Regra: título "Nome da página — Pulse" (4.1); cada page.jsx define só o nome.
export const metadata = {
  title: {
    template: "%s — Pulse",
    default: "Pulse",
  },
};

// viewportFit "cover" ativa as áreas de segurança (env(safe-area-inset-*))
// em celulares com entalhe. Não bloqueamos o zoom (WCAG 1.4.4).
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Roda antes da pintura: grava data-efeitos e a marca da capa no <html>, para o CSS
// e o React nascerem certos. Se a capa não montar em 2 s, a marca sai sozinha.
const SCRIPT_INICIAL = `(function () {
  var raiz = document.documentElement;
  var ligados = true;
  try { ligados = !window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  try {
    var escolha = localStorage.getItem("pulse-efeitos");
    if (escolha === "ligados") ligados = true;
    else if (escolha === "desligados") ligados = false;
  } catch (e) {}
  raiz.setAttribute("data-efeitos", ligados ? "ligados" : "desligados");
  try {
    if (!ligados || location.pathname !== "/") return;
    var vista = null;
    try { vista = sessionStorage.getItem("pulse-capa-vista"); } catch (e) {}
    if (vista) return;
    raiz.setAttribute("data-capa-pendente", "");
    setTimeout(function () { raiz.removeAttribute("data-capa-pendente"); }, 2000);
  } catch (e) {}
})();`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: o script acima muda o <html> antes da hidratação. Vale
    // só para a própria tag.
    <html
      lang="pt-BR"
      className={`${anton.variable} ${atkinson.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_INICIAL }} />
      </head>
      <body>
        <ProvedorMovimento>
          <Provedores>
            {/* Regra: a ordem da seção 5 é a visual e a do leitor de tela. */}
            <LinkPular />
            <Cabecalho />
            {/* tabIndex={-1}: deixa o "Pular para o conteúdo" mover o foco para cá */}
            <main id="conteudo" tabIndex={-1}>
              <Granulado />
              {children}
            </main>
            <Rodape />
            <BarraNavegacao />
            <FocoNaTroca />
          </Provedores>
        </ProvedorMovimento>
      </body>
    </html>
  );
}
