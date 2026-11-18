import { DM_Sans } from "next/font/google";

// Fonte do simulador (a mesma do protótipo original). Pelo next/font, ela é servida
// pelo próprio site: a página não chama o Google. Só carrega na página do Simulador.
export const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-simulador",
});
