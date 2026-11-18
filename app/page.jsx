import AberturaPulseira from "@/components/abertura/AberturaPulseira";
import FraseAcende from "@/components/abertura/FraseAcende";
import TrajetoPulse from "@/components/abertura/TrajetoPulse";
import FaixaTexto from "@/components/ui/FaixaTexto";
import PaginaComIndice from "@/components/layout/PaginaComIndice";
import RotuloSecao from "@/components/layout/RotuloSecao";
import Secao from "@/components/layout/Secao";
import Cartao from "@/components/ui/Cartao";
import VideoPulse from "@/components/ui/VideoPulse";
import FotoFiltro from "@/components/ui/FotoFiltro";
import NumeroContado from "@/components/ui/NumeroContado";
import TextoConstroi from "@/components/ui/TextoConstroi";
import Botao from "@/components/ui/Botao";

// O modelo "%s — Pulse" do layout não vale para a página da mesma pasta
// (regra do Next), então a Início escreve o título completo.
export const metadata = {
  title: "Início — Pulse",
};

const SECOES = [
  { id: "tema-citizentech", texto: "Tema CitizenTech" },
  { id: "o-problema", texto: "O problema" },
  { id: "quem-vive-o-problema", texto: "Quem vive o problema" },
  { id: "um-trajeto-com-a-pulse", texto: "Um trajeto com a Pulse" },
];

const ESTILO_NUMERO = "block font-titulo text-[3.25rem] leading-none font-normal text-destaque uppercase";

export default function PaginaInicio() {
  return (
    <>
      <AberturaPulseira />

      <FaixaTexto />

      <PaginaComIndice
        itensIndice={SECOES}
        acaoFinal={<Botao href="/solucao">Conheça a solução</Botao>}
      >
        <Secao
          id="tema-citizentech"
          titulo="Tecnologia que nasce de uma necessidade real"
          rotulo="CitizenTech"
          banda
          duasColunas
          encaixe
        >
          <TextoConstroi className="space-y-6">
            <p>
              CitizenTech é tecnologia criada a partir das necessidades reais das
              pessoas, para ampliar direitos e reduzir desigualdades. É o tema da
              Global Solution 2026 da FIAP.
            </p>
            <p>Nosso ponto de partida é a acessibilidade nas ruas de São Paulo.</p>
          </TextoConstroi>
        </Secao>

        <FraseAcende />

        <section className="mt-20">
          {/* grid-cols-1 = minmax(0, 1fr): a coluna encolhe com a tela, em
              vez de crescer até o conteúdo mais largo (texto ampliado) */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="grid grid-cols-1 content-start gap-4 efeitos-ligados:secao-fixa:sticky efeitos-ligados:secao-fixa:top-[calc(var(--altura-cabecalho)+var(--altura-indice,0px)+1.5rem)]">
              <RotuloSecao>O problema</RotuloSecao>
              <h2 id="o-problema" tabIndex={-1} className="scroll-mt-10">
                Atravessar sem saber quando
              </h2>
              <TextoConstroi className="max-w-texto">
                <p id="texto-o-problema">
                  Sem enxergar as cores do semáforo, a pessoa depende da audição para
                  atravessar. Muitos semáforos não têm sinal sonoro, e o risco de
                  atropelamento é diário.
                </p>
              </TextoConstroi>
              <figure className="rounded-r-cartao border-l-4 border-acao bg-superficie p-5">
                <blockquote>
                  <p className="text-h3 font-bold">
                    “Não sabemos quando o sinal abriu ou fechou para nós.”
                  </p>
                </blockquote>
                <figcaption className="mt-2 text-auxiliar text-texto-2">
                  — <cite>Depoimento em reportagem da Unicentro, 2024</cite>
                </figcaption>
              </figure>
            </div>

            <div className="grid grid-cols-1 gap-7 efeitos-ligados:secao-fixa:pt-[24vh] efeitos-ligados:secao-fixa:pb-[12vh]">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Cartao as="li">
                  <p>
                    <NumeroContado
                      valor={90}
                      antes="Cerca de "
                      depois="%"
                      textoReal="Cerca de 90%"
                      className={ESTILO_NUMERO}
                    />{" "}
                    <span className="mt-2 block">
                      dos paulistanos consideram as calçadas não acessíveis para
                      pessoas com deficiência.
                    </span>
                  </p>
                  <p className="rotulo-mono mt-3 text-texto-2">Fonte: G1, 2019</p>
                </Cartao>
                <Cartao as="li">
                  <p>
                    <NumeroContado
                      valor={7.9}
                      casas={1}
                      depois=" milhões"
                      textoReal="7,9 milhões"
                      className={ESTILO_NUMERO}
                    />{" "}
                    <span className="mt-2 block">
                      de pessoas no Brasil têm dificuldade para enxergar.
                    </span>
                  </p>
                  <p className="rotulo-mono mt-3 text-texto-2">Fonte: IBGE, Censo 2022</p>
                </Cartao>
              </ul>

              <VideoPulse
                nome="animacao-o-problema"
                comSom
                idTitulo="o-problema"
                idDescricao="texto-o-problema"
              />

              <Cartao>
                <h3>O que a Pulse quer reduzir</h3>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-texto-2">
                  <li>A dependência de ajuda de outras pessoas.</li>
                  <li>A necessidade de identificar travessias só pelo som do trânsito.</li>
                  <li>O tempo perdido por falta de acessibilidade ou por erros de caminho.</li>
                </ul>
              </Cartao>
            </div>
          </div>
        </section>

        <Secao id="quem-vive-o-problema" titulo="Quem vive o problema" rotulo="As pessoas" banda encaixe larga>
          <TextoConstroi className="max-w-texto">
            <p>
              Pessoas cegas ou com qualquer nível de deficiência visual que
              dificulte os deslocamentos, especialmente quem usa as ruas e o
              transporte público.
            </p>
          </TextoConstroi>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Cartao as="li" compacto className="grid grid-cols-1 content-start gap-3">
              <FotoFiltro className="aspect-[4/3]">
                <img
                  src="/imagens/pessoa-cega-celular.webp"
                  alt="Pessoa cega usando o celular com leitor de tela."
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </FotoFiltro>
              <h3>Pessoa cega</h3>
              <p className="text-texto-2">
                Usa leitor de tela no celular e se orienta pela audição e pela
                bengala. Sem sinal sonoro, não sabe quando pode atravessar.
              </p>
            </Cartao>
            <Cartao as="li" compacto className="grid grid-cols-1 content-start gap-3 md:mt-16">
              <FotoFiltro className="aspect-[4/3]">
                <img
                  src="/imagens/pessoa-baixa-visao-ampliando.webp"
                  alt="Pessoa com baixa visão ampliando a tela do celular."
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </FotoFiltro>
              <h3>Pessoa com baixa visão</h3>
              <p className="text-texto-2">
                Usa ampliação e alto contraste. Pode ter dificuldade para ver o
                semáforo de longe, a placa do ônibus ou o meio-fio.
              </p>
            </Cartao>
          </ul>
        </Secao>

        <TrajetoPulse />
      </PaginaComIndice>
    </>
  );
}
