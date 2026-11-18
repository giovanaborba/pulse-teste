import { useEffect } from "react";

// Armadilha: o Next 16 pode aplicar o título do metadata depois que a página abre;
// por isso o hook observa o <head> e reaplica o título.
export function useTituloDaAba(titulo) {
  useEffect(() => {
    if (!titulo) return;
    const caminhoDaPagina = window.location.pathname;

    function aplicar() {
      if (window.location.pathname !== caminhoDaPagina) return;
      if (document.title !== titulo) document.title = titulo;
    }

    aplicar();
    const observador = new MutationObserver(aplicar);
    observador.observe(document.head, { subtree: true, childList: true, characterData: true });
    return () => observador.disconnect();
  }, [titulo]);
}
