import { braille, modos } from "@/lib/simulador/dados";

function BotaoPulseira({ nome, acao, ativo, piscar = false, dica }) {
  return (
    <button
      type="button"
      className={`botao-pulseira ${ativo ? "botao-ativo" : ""} ${piscar && ativo ? "botao-pisca" : ""}`}
      onClick={acao}
      aria-label={dica || nome}
      data-dica={dica || nome}
    />
  );
}

function MenuModos({ modo, aberto, escolher }) {
  if (!aberto) return null;
  return (
    <div className="menu-modos" role="group" aria-label="Modos da pulseira">
      {modos.map((item) => (
        <button
          key={item}
          type="button"
          className={item === modo ? "modo-selecionado" : ""}
          aria-pressed={item === modo}
          onClick={() => escolher(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function PontosBraille({ numero, chegada = false }) {
  const ativos = braille[String(numero)] || [];
  return (
    <div
      className="pontos-braille"
      role="img"
      aria-label={`Braille ${numero}`}
      data-dica="Pinos retráteis para Braille"
    >
      {[1, 2, 3, 4, 5, 6].map((ponto) => (
        <i key={ponto} className={chegada || ativos.includes(ponto) ? "ponto-erguido" : ""} />
      ))}
    </div>
  );
}

function JanelaBraille({ completo = false }) {
  return (
    <div
      className="janela-braille-pulseira"
      role="img"
      aria-label="Pinos retráteis para Braille"
      data-dica="Pinos retráteis para Braille"
    >
      {[1, 2, 3, 4, 5, 6].map((ponto) => (
        <i key={ponto} className={completo ? "pino-braille-erguido" : ""} />
      ))}
    </div>
  );
}

function IconeFalante() {
  return (
    <span className="icone-falante-pulseira" data-dica="Alto-falante" aria-label="Alto-falante" role="img">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Pulseira({
  modo,
  menuAberto,
  alternarMenu,
  escolherModo,
  iniciarVoz,
  estado,
  lado,
  legenda = "",
  erro,
  transporte = false,
  horizontal = false,
  numero,
  focarBraille,
  mostrarFalante = false,
  chegouTransporte = false,
}) {
  const Tela = transporte ? "button" : "div";
  const vibrarParada = estado === "semaforo" && modo === modos[1];
  const pressaoAtiva = estado === "pressionando" && modo === modos[1];
  const classePulseira = [
    "pulseira-conjunto",
    transporte ? "pulseira-transporte" : "",
    chegouTransporte ? "pulseira-chegou-transporte" : "",
    horizontal ? "pulseira-horizontal" : "",
    pressaoAtiva ? "pulseira-sinal-pressao" : "",
    vibrarParada ? "pulseira-sinal-parada" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classePulseira} aria-label="Pulseira Pulse">
      <p className="somente-leitor" role="status">
        {legenda}
      </p>
      {legenda && (
        <div className="sinal-pulseira" aria-hidden="true">
          {legenda}
        </div>
      )}
      <div className="pulseira-faixa">
        <div className="pulseira-fivela" />
        <div className={`pulseira-corpo ${pressaoAtiva ? "pulseira-aperta" : ""}`}>
          <Tela
            type={transporte ? "button" : undefined}
            className="tela-pulseira"
            onClick={transporte ? focarBraille : undefined}
            aria-label={transporte ? "Mostrar pinos Braille" : undefined}
          >
            {transporte ? (
              <>
                <PontosBraille numero={numero} chegada={chegouTransporte} />
                {mostrarFalante && <IconeFalante />}
                <span className="luz-lado luz-esquerda pulso-transporte" />
                <span className="luz-lado luz-direita pulso-transporte" />
              </>
            ) : (
              <>
                <JanelaBraille completo={estado === "chegada" && modo === modos[1]} />
                {mostrarFalante && <IconeFalante />}
                {lado === "esquerda" ? <span className="luz-lado luz-esquerda luz-ativa" /> : null}
                {lado === "direita" ? <span className="luz-lado luz-direita luz-ativa" /> : null}
              </>
            )}
          </Tela>
        </div>
        <div className="pulseira-fivela pulseira-base" />
        <div className="botoes-pulseira">
          <div className="seletor-embrulho">
            <BotaoPulseira
              nome="Modo"
              dica="Troca de modo"
              acao={alternarMenu}
              ativo={menuAberto}
              piscar
            />
            <MenuModos modo={modo} aberto={menuAberto} escolher={escolherModo} />
          </div>
          <BotaoPulseira
            nome="Voz"
            dica="Reconhecimento de voz"
            acao={iniciarVoz}
            ativo={estado === "ouvindo"}
          />
        </div>
      </div>
      {transporte && <span className="legenda-aguarde-transporte">3 vibrações rápidas</span>}
      {erro && (
        <div className="erro-voz" role="alert">
          {erro}
        </div>
      )}
    </section>
  );
}
