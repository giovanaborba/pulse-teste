import Cartao from "@/components/ui/Cartao";

// As palavras longas podem ser hifenizadas, para caber a 320 px sem rolagem lateral.
export default function ResumoIndicadores({ indicadores }) {
  return (
    <section className="mt-12">
      <h2>Resumo</h2>
      <p className="mt-4">
        Esses números somam todos os registros e mostram quantos
        deslocamentos foram feitos com autonomia e segurança. É assim que
        medimos se a Pulse está ajudando.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {indicadores.map((indicador) => (
          <Cartao as="li" compacto key={indicador.chave}>
            <p className="hyphens-auto break-words">
              <span className="block font-titulo text-[2.5rem] leading-tight font-normal text-destaque tabular-nums">
                {indicador.numero}
              </span>{" "}
              {indicador.rotulo}
            </p>
          </Cartao>
        ))}
      </ul>
    </section>
  );
}
