import Pulseira from "@/components/simulador/Pulseira";

// Tela inicial: a pulseira no centro, uma dica de uso de cada lado e as três opções.
export default function TelaInicial({ pulso, nav, abrirVitrine, abrirRotas }) {
  return (
    <div className="tela-inicial">
      <section className="inicio-apresentacao" aria-label="Como usar a pulseira">
        <aside className="post-it post-it-esquerdo">
          <p>
            Para armazenar um caminho recorrente, toque no botão de reconhecimento de voz e diga{" "}
            <strong>“salvar rota”</strong>. Será solicitado o início, destino e nome, você pode nomear
            como quiser, por exemplo <strong>“casa”</strong> ou <strong>“trabalho”</strong>. Depois,
            diga <strong>“destino [nome dado a rota]”</strong> para carregar a rota salva.
          </p>
        </aside>
        <Pulseira
          modo={pulso.modo}
          menuAberto={pulso.menuAberto}
          alternarMenu={() => pulso.definirMenu((v) => !v)}
          escolherModo={pulso.escolherModo}
          iniciarVoz={nav.iniciarVoz}
          estado={nav.estado}
          erro={nav.erro}
          lado=""
          numero={nav.segundos}
          mostrarFalante
        />
        <aside className="post-it post-it-direito">
          <p>
            Para ir a um destino sem salvar a rota, toque no botão de reconhecimento de voz e diga o
            endereço de destino. A rota será carregada automaticamente.
          </p>
        </aside>
      </section>
      <nav className="inicio-acoes" aria-label="Opções iniciais">
        <button type="button" className="botao-rotas-salvas" onClick={abrirRotas}>
          Rotas salvas
        </button>
        <button type="button" className="botao-vitrine" onClick={abrirVitrine}>
          Conheça como cada comando é feito
        </button>
        <button type="button" className="botao-simulacao-pronta" onClick={nav.iniciarSimulacao}>
          Testar simulação pronta
        </button>
      </nav>
    </div>
  );
}
