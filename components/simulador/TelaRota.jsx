"use client";

import dynamic from "next/dynamic";
import Pulseira from "@/components/simulador/Pulseira";
import { modos } from "@/lib/simulador/dados";

// O mapa usa o Leaflet, que só funciona no navegador.
const MapaRota = dynamic(() => import("@/components/simulador/MapaRota"), {
  ssr: false,
  loading: () => (
    <div className="mapa-rota mapa-carregando" role="status">
      Carregando mapa...
    </div>
  ),
});

function BotoesRota({ comando, bloqueados }) {
  return (
    <div className="botoes-rota">
      {[
        ["continuar", "CONTINUAR"],
        ["parar", "PARAR"],
        ["esquerda", "ESQUERDA"],
        ["direita", "DIREITA"],
      ].map(([id, texto]) => (
        <button
          key={id}
          type="button"
          disabled={bloqueados && id !== "continuar"}
          onClick={() => comando(id)}
        >
          {texto}
        </button>
      ))}
    </div>
  );
}

function AvisoSemaforo({ estado, segundos }) {
  if (!["semaforo", "contando", "pressionando"].includes(estado)) return null;
  return (
    <div className="aviso-semaforo" role="status" aria-live="assertive">
      <span className="luz-semaforo" />
      <span>FECHA EM</span>
      <strong>{estado === "pressionando" ? 0 : segundos}</strong>
      <span>SEGUNDOS</span>
    </div>
  );
}

// Texto do sinal que a pulseira está dando agora (em cada modo).
function legendaDoSinal(nav, modo, evento) {
  const { estado } = nav;
  const sonoro = modo === modos[0];
  if (estado === "orientacao") return `VIBRAÇÃO À ${evento === "esquerda" ? "ESQUERDA" : "DIREITA"}`;
  if (estado === "semaforo") return sonoro ? "SOM AGUDO CONTÍNUO" : "VIBRANDO CONSTANTEMENTE";
  if (estado === "pressionando") return sonoro ? "SOM GRAVE CURTO" : "PRESSÃO";
  if (estado === "chegada") return sonoro ? "VOCÊ CHEGOU AO SEU DESTINO" : "CHEGADA";
  return "";
}

export default function TelaRota({ pulso, nav }) {
  const evento = nav.passos[nav.indice]?.tipo;
  const lado = nav.estado === "orientacao" ? evento : "";
  const legenda = legendaDoSinal(nav, pulso.modo, evento);

  return (
    <div className="tela-rota">
      <header className="barra-tela">
        <button type="button" className="botao-voltar-inicio" onClick={nav.voltarInicio}>
          VOLTAR
        </button>
      </header>
      <div className="arranjo-rota">
        <Pulseira
          modo={pulso.modo}
          menuAberto={pulso.menuAberto}
          alternarMenu={() => pulso.definirMenu((v) => !v)}
          escolherModo={pulso.escolherModo}
          iniciarVoz={nav.iniciarVoz}
          estado={nav.estado}
          lado={lado}
          legenda={legenda}
          horizontal
          erro={nav.erro}
        />
        <div className="area-mapa">
          <MapaRota
            rota={nav.rota}
            origem={nav.origem}
            destino={nav.destino}
            progresso={nav.progresso}
            passos={nav.passos}
          />
          <AvisoSemaforo estado={nav.estado} segundos={nav.segundos} />
          <button type="button" className="botao-transporte" onClick={nav.abrirTransporte}>
            ÔNIBUS E TREM
          </button>
        </div>
      </div>
      <BotoesRota comando={nav.comando} bloqueados={nav.estado === "calculando"} />
    </div>
  );
}
