"use client";

import { useEffect } from "react";
import { useAnimate } from "motion/react";
import LinkInterno from "@/components/ui/LinkInterno";
import { formatarData } from "@/lib/datas";
import { etiquetasDoRegistro, rotuloDe } from "@/lib/rotulos";
import { useEfeitos } from "@/hooks/useEfeitos";
import { pulso } from "@/lib/presetsMovimento";

// Regra: cada "Ver registro" tem um trecho oculto com a data, para o leitor de tela
// ouvir nomes únicos, e não uma lista de links iguais.
export default function CartaoRegistro({ registro, destaque = false }) {
  const data = formatarData(registro.data);
  const etiquetas = etiquetasDoRegistro(registro);
  const { efeitosLigados } = useEfeitos();
  const [refCartao, animar] = useAnimate();

  useEffect(() => {
    if (!destaque || !efeitosLigados) return;
    const animacao = animar(refCartao.current, { scale: pulso.scale }, pulso.transition);
    return () => animacao.stop();
  }, [destaque, efeitosLigados, animar, refCartao]);

  return (
    <div
      ref={refCartao}
      className="h-full rounded-cartao border border-borda bg-superficie p-6 shadow-cartao"
    >
      <h3>
        {data} · {rotuloDe("meio", registro.meio)}
      </h3>

      <ul className="mt-4 flex flex-wrap gap-2">
        {etiquetas.map((etiqueta) => (
          <li
            key={etiqueta}
            className="rounded-campo border border-borda bg-fundo px-2 text-auxiliar"
          >
            {etiqueta}
          </li>
        ))}
      </ul>

      <p className="mt-4">
        <LinkInterno href={`/diario/${registro.id}`} className="inline-flex min-h-12 items-center">
          Ver registro<span className="sr-only"> de {data}</span>
        </LinkInterno>
      </p>
    </div>
  );
}
