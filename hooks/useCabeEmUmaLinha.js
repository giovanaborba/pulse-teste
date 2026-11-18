import { useEffect, useState } from "react";

// Mede no navegador porque a largura dos textos depende da fonte e do tamanho e
// espaçamento escolhidos pela pessoa (WCAG 1.4.12).
const px = (valor) => parseFloat(valor) || 0;

function larguraNecessaria(lista) {
  const estiloLista = getComputedStyle(lista);
  const links = [...lista.querySelectorAll("a")];

  let total =
    px(estiloLista.paddingLeft) +
    px(estiloLista.paddingRight) +
    px(estiloLista.borderLeftWidth) +
    px(estiloLista.borderRightWidth) +
    px(estiloLista.columnGap) * (links.length - 1);

  for (const link of links) {
    const estilo = getComputedStyle(link);
    // No celular o ícone fica em cima do texto: vale o mais largo dos dois
    const conteudo = Math.max(...[...link.children].map((filho) => filho.getBoundingClientRect().width));
    total +=
      conteudo +
      px(estilo.paddingLeft) +
      px(estilo.paddingRight) +
      px(estilo.borderLeftWidth) +
      px(estilo.borderRightWidth);
  }
  return total;
}

export function useCabeEmUmaLinha(refLista) {
  const [cabe, setCabe] = useState(null);

  useEffect(() => {
    const lista = refLista.current;
    const espacoDisponivel = lista?.parentElement;
    if (!lista || !espacoDisponivel) return;

    function medir() {
      // Arredonda para cima: evita "caber por meio pixel" e transbordar
      setCabe(Math.ceil(larguraNecessaria(lista)) <= espacoDisponivel.clientWidth);
    }

    const observador = new ResizeObserver(medir);
    observador.observe(espacoDisponivel);
    // O conteúdo de cada item (ícone e texto) tem a largura natural do
    // texto: se o texto muda de largura, a medição é refeita.
    lista.querySelectorAll("a > *").forEach((conteudo) => observador.observe(conteudo));
    document.fonts?.addEventListener("loadingdone", medir);

    return () => {
      observador.disconnect();
      document.fonts?.removeEventListener("loadingdone", medir);
    };
  }, [refLista]);

  return cabe;
}
