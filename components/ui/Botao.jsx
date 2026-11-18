import LinkInterno from "@/components/ui/LinkInterno";
import EspacoIcone from "@/components/ui/EspacoIcone";
import BotaoMagnetico from "@/components/ui/BotaoMagnetico";

// aria-disabled, e não disabled, no "Salvando…": com disabled, o navegador tiraria o
// foco do botão, e quem usa teclado ou leitor de tela se perderia.
// Regra: no hover, o secundário usa texto grafite (o laranja ficaria em 4,1:1). O
// "secundario-sobre-cor" tem fundo sólido: sobre os fundos de status, ficaria abaixo de 4,5:1.
const ESTILO_BASE =
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 px-7 py-2 text-center font-bold no-underline transition-[background-color,color,box-shadow,translate] duration-200 aria-disabled:cursor-wait";

const ESTILO_VARIANTE = {
  principal:
    "border-acao bg-acao text-sobre-acao hover:shadow-barra efeitos-ligados:hover:-translate-y-0.5",
  secundario: "border-marca bg-transparent text-marca hover:bg-hover hover:text-texto",
  "secundario-sobre-cor": "border-marca bg-superficie text-marca hover:text-texto",
  perigo: "border-erro bg-transparent text-erro hover:bg-erro-fundo",
  "perigo-preenchido": "border-erro bg-erro text-perigo-texto",
};

export default function Botao({
  variante = "principal",
  href,
  icone,
  className = "",
  children,
  type = "button",
  ...resto
}) {
  const classes = `${ESTILO_BASE} ${ESTILO_VARIANTE[variante]} ${className}`;

  if (variante === "principal") {
    return (
      <BotaoMagnetico href={href} icone={icone} type={type} className={classes} {...resto}>
        {children}
      </BotaoMagnetico>
    );
  }

  const conteudo = (
    <>
      {icone && <EspacoIcone nome={icone} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <LinkInterno href={href} className={classes} {...resto}>
        {conteudo}
      </LinkInterno>
    );
  }

  return (
    <button type={type} className={classes} {...resto}>
      {conteudo}
    </button>
  );
}
