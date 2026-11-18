import Pulseira from "@/components/simulador/Pulseira";

function Partida({ partida, selecionada, clicar }) {
  return (
    <button
      type="button"
      className={`partida ${selecionada ? "partida-selecionada" : ""}`}
      aria-pressed={selecionada}
      onClick={clicar}
    >
      <span className="partida-tipo">{partida.tipo}</span>
      <span className="partida-linha">{partida.linha}</span>
      <span className="partida-destino">{partida.destino}</span>
      <span className="partida-tempo">{partida.minutos} min</span>
    </button>
  );
}

// Ônibus, metrô e trem chegando: a pulseira avisa a partida escolhida com Braille.
export default function TelaTransporte({ pulso, nav }) {
  const item = nav.partidas[nav.selecionada];

  return (
    <div className="tela-transporte">
      <header className="barra-tela">
        <button type="button" className="botao-voltar-inicio" onClick={nav.voltarInicio}>
          VOLTAR
        </button>
      </header>
      <div className="arranjo-transporte">
        <Pulseira
          modo={pulso.modo}
          menuAberto={pulso.menuAberto}
          alternarMenu={() => pulso.definirMenu((v) => !v)}
          escolherModo={pulso.escolherModo}
          iniciarVoz={nav.iniciarVoz}
          estado="transporte"
          transporte
          horizontal
          focarBraille={() => nav.definirBraille((v) => !v)}
          numero={item?.minutos ?? 0}
          mostrarFalante
          chegouTransporte={nav.chegouTransporte}
          legenda={nav.chegouTransporte ? "CHEGADA" : ""}
        />
        <section className="app-transporte" aria-label="Horários de ônibus, trem e metrô">
          <h2 className="titulo-chegando">Chegando Agora</h2>
          {nav.partidas.map((partida, indice) => (
            <Partida
              key={partida.id}
              partida={partida}
              selecionada={indice === nav.selecionada}
              clicar={() => nav.selecionarPartida(indice)}
            />
          ))}
        </section>
      </div>
      <button type="button" className="voltar-mapa" onClick={nav.voltarMapa}>
        MAPA
      </button>
    </div>
  );
}
