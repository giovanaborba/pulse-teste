import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useEfeitos } from "@/hooks/useEfeitos";

// Regra (9.3): só em Início e Solução, abaixo de 768 px. Quem usa esconde só com
// transform, nunca display: none, para o leitor de tela alcançar as barras.
const ROTAS_COM_BARRAS_QUE_SOMEM = ["/", "/solucao"];
const CONSULTA_CELULAR = "(max-width: 47.99rem)";

export function useDirecaoRolagem() {
  const caminho = usePathname();
  const { efeitosLigados } = useEfeitos();
  const ativo = ROTAS_COM_BARRAS_QUE_SOMEM.includes(caminho);

  // Guarda EM QUAL rota as barras foram escondidas. Ao trocar de página,
  // a rota nova é diferente, então as barras voltam sozinhas.
  const [rotaEscondida, setRotaEscondida] = useState(null);

  useEffect(() => {
    if (!ativo || !efeitosLigados) return;

    const consultaCelular = window.matchMedia(CONSULTA_CELULAR);
    // Distância mínima = altura do cabeçalho (4rem), em pixels
    const tamanhoTexto = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const distanciaMinima = 4 * tamanhoTexto;

    let ultimaPosicao = window.scrollY;
    let pontoDeVirada = window.scrollY;
    let direcao = null;

    const esconder = () => setRotaEscondida(caminho);
    const mostrar = () => setRotaEscondida(null);

    function aoRolar() {
      const posicao = window.scrollY;

      if (!consultaCelular.matches) {
        mostrar();
        ultimaPosicao = posicao;
        return;
      }

      const noTopo = posicao <= distanciaMinima;
      const pertoDoFim =
        window.innerHeight + posicao >=
        document.documentElement.scrollHeight - distanciaMinima;

      if (noTopo || pertoDoFim) {
        mostrar();
        pontoDeVirada = posicao;
        ultimaPosicao = posicao;
        return;
      }

      if (posicao > ultimaPosicao) {
        if (direcao !== "baixo") {
          direcao = "baixo";
          pontoDeVirada = ultimaPosicao;
        }
        if (posicao - pontoDeVirada > distanciaMinima) esconder();
      } else if (posicao < ultimaPosicao) {
        if (direcao !== "cima") {
          direcao = "cima";
          pontoDeVirada = ultimaPosicao;
        }
        if (pontoDeVirada - posicao > distanciaMinima) mostrar();
      }

      ultimaPosicao = posicao;
    }

    function aoReceberFoco(evento) {
      if (evento.target instanceof Element && evento.target.closest("[data-barra-rolagem]")) {
        mostrar();
      }
    }

    window.addEventListener("scroll", aoRolar, { passive: true });
    document.addEventListener("focusin", aoReceberFoco);

    return () => {
      window.removeEventListener("scroll", aoRolar);
      document.removeEventListener("focusin", aoReceberFoco);
    };
  }, [ativo, efeitosLigados, caminho]);

  return ativo && efeitosLigados && rotaEscondida === caminho;
}
