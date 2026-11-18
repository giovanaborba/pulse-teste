"use client";

import dynamic from "next/dynamic";
import { useId, useState } from "react";

// "adiar": montar a cena compila os shaders e trava a página por um instante; a
// abertura adia durante o preloader, para a contagem não pular.

export const DESCRICAO_DA_PULSEIRA =
  "Pulseira Pulse: tira esportiva laranja de silicone, com fecho embaixo do pulso. Na frente, um módulo com face grafite e, de cima para baixo: os furos do microfone, o botão grande do destino (côncavo, com anéis em relevo), a célula Braille com 6 pinos que sobem e descem e o botão pequeno de modo (com um ponto em relevo). Por dentro da tira ficam as zonas de vibração, nos dois lados do pulso, e o atuador de pressão, embaixo do módulo. Nas laterais da face, cinco pontos de luz de cada lado acendem junto com a vibração. Os contatos de carga ficam na ponta de baixo do módulo.";

const CenaPulseira = dynamic(() => import("@/components/pulseira/CenaPulseira"), {
  ssr: false,
  loading: () => null,
});

export default function Pulseira3D({
  modo = "abertura",
  giro,
  sinal,
  pausado = false,
  parteAtiva = null,
  sinalAtivo = null,
  aguardarEntrada = false,
  adiar = false,
  aoTrocarSinal,
  aoDesenhar,
  aoPronta,
  aoFalhar,
  className = "",
}) {
  const [pronta, setPronta] = useState(false);
  const [falhou, setFalhou] = useState(false);
  const idDescricao = useId();
  const interativo = modo === "abertura" || modo === "explorar";

  function aoFicarPronta() {
    setPronta(true);
    aoPronta?.();
  }

  function aoFalharCena() {
    setFalhou(true);
    aoFalhar?.();
  }

  const mostrarReserva = (!pronta || falhou) && modo !== "sinal";

  return (
    <div className={`relative ${className}`}>
      {!falhou && !adiar && (
        <CenaPulseira
          modo={modo}
          interativo={interativo}
          pronta={pronta}
          idDescricao={idDescricao}
          giro={giro}
          sinal={sinal}
          pausado={pausado}
          parteAtiva={parteAtiva}
          sinalAtivo={sinalAtivo}
          aguardarEntrada={aguardarEntrada}
          aoTrocarSinal={aoTrocarSinal}
          aoDesenhar={aoDesenhar}
          aoPronta={aoFicarPronta}
          aoFalhar={aoFalharCena}
        />
      )}
      {/* No fluxo normal, e não sobreposta: com texto ampliado, a caixa cresce junto. */}
      {(mostrarReserva || interativo) && (
        <p
          id={idDescricao}
          aria-hidden={interativo ? undefined : "true"}
          className={
            mostrarReserva
              ? "grid h-full place-items-center p-6 text-center text-auxiliar text-texto-2"
              : "sr-only"
          }
        >
          {DESCRICAO_DA_PULSEIRA}
        </p>
      )}
    </div>
  );
}
