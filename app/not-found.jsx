import Pulseira3D from "@/components/pulseira/Pulseira3D";
import PalavraFundo from "@/components/ui/PalavraFundo";
import Botao from "@/components/ui/Botao";

export const metadata = {
  title: "Página não encontrada",
};

// Regra: a pulseira para antes de 5 s (WCAG 2.2.2). A palavra "Parar" mede pela
// coluna (cqw), para nenhum texto ficar sobre ela (18.2, item 1).
export default function PaginaNaoEncontrada() {
  return (
    <section aria-labelledby="titulo-404" className="margem-lateral py-12">
      <div className="mx-auto grid max-w-pagina items-center gap-10 min-[56.25rem]:grid-cols-[1.2fr_1fr]">
        <div className="grid justify-items-start gap-4">
          <p className="rotulo-mono text-destaque">Erro 404</p>
          <h1 id="titulo-404" tabIndex={-1}>
            Você saiu da rota
          </h1>
          <p className="max-w-[46ch] text-texto-2">Esta página não existe ou mudou de endereço.</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Botao href="/">Voltar ao Início</Botao>
            <Botao href="/solucao" variante="secundario">
              Ir para a Solução
            </Botao>
          </div>
        </div>

        <div className="@container relative grid gap-3">
          <div aria-hidden="true" className="textura-piso textura-centro absolute -inset-4" />
          <PalavraFundo texto="Parar" tamanho="min(21rem, 38cqw)" />
          <Pulseira3D modo="parar" className="mx-auto aspect-square w-full max-w-[22rem]" />
          <p aria-hidden="true" className="relative text-center text-auxiliar text-texto-2">
            A pulseira faz o sinal de parar.
          </p>
        </div>
      </div>
    </section>
  );
}
