import { useEffect, useState } from "react";

// Seções fixas (data-secao-fixa): o título fica preso no meio da tela e nunca
// chega à linha de leitura, então elas contam a partir do começo.

function medirSecaoAtual(ids) {
  const raiz = document.documentElement;
  const linha = parseFloat(getComputedStyle(raiz).scrollPaddingTop) || 0;
  let atual = null;
  for (const id of ids) {
    const titulo = document.getElementById(id);
    if (!titulo) continue;
    const secaoFixa = titulo.closest("[data-secao-fixa]");
    // Títulos com rótulo param um pouco mais abaixo (scroll-margin-top),
    // para o rótulo aparecer: essa margem também conta.
    const margem = secaoFixa ? 0 : parseFloat(getComputedStyle(titulo).scrollMarginTop) || 0;
    const topo = (secaoFixa ?? titulo).getBoundingClientRect().top;
    if (topo - margem <= linha + 2) atual = id;
  }
  const noFim = window.innerHeight + window.scrollY >= raiz.scrollHeight - 2;
  if (noFim && ids.length) atual = ids[ids.length - 1];
  return atual;
}

export function useSecaoAtual(itens) {
  const [atual, setAtual] = useState(null);

  useEffect(() => {
    const ids = itens.map((item) => item.id);
    let quadro = 0;

    function medir() {
      quadro = 0;
      setAtual(medirSecaoAtual(ids));
    }
    function agendar() {
      if (!quadro) quadro = requestAnimationFrame(medir);
    }

    agendar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, [itens]);

  return atual;
}
