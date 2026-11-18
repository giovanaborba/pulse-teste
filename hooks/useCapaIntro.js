import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { useEfeitos } from "@/hooks/useEfeitos";
import { useRolagemSuave } from "@/hooks/useRolagemSuave";

// Regra: só na primeira visita da sessão e com os efeitos ligados (18.6, 18.14).
// Qualquer gesto, tecla ou foco abre o site, para o foco nunca ficar escondido.

const CHAVE = "pulse-capa-vista";
const RAIO_INICIAL = 22; // px
const DURACAO_DA_SAIDA = 1; // s
const DURACAO_DA_CONTAGEM = 1.4; // s (PADRAO_MOVIMENTO_PULSE, item 5c)
const DURACAO_DO_SUMICO = 0.35; // s (seção 19.6)

function precisaDaCapa() {
  try {
    return !window.sessionStorage.getItem(CHAVE);
  } catch {
    return true;
  }
}

function marcarCapaVista() {
  try {
    window.sessionStorage.setItem(CHAVE, "1");
  } catch {
    // Sem armazenamento: a capa volta na próxima visita, e tudo bem.
  }
}

// O sessionStorage não avisa mudanças; quem muda a chave é este hook.
const naoAssina = () => () => {};
const noServidor = () => false;

export function useCapaIntro() {
  const precisa = useSyncExternalStore(naoAssina, precisaDaCapa, noServidor);
  const [fase, setFase] = useState("preloader");
  const refCapa = useRef(null);
  const refPreloader = useRef(null);
  const refContador = useRef(null);
  const refAnimacao = useRef(null);
  const lenis = useRolagemSuave();
  const { efeitosLigados, efeitosConhecidos } = useEfeitos();

  const capaNaTela = precisa && efeitosLigados && fase !== "fim";
  const saindo = capaNaTela && fase === "saindo";
  const preloaderNaTela = capaNaTela && fase === "preloader";

  function terminar() {
    marcarCapaVista();
    setFase("fim");
  }

  function sair() {
    if (!capaNaTela || (fase !== "ativa" && fase !== "preloader")) return;
    setFase("saindo");
  }

  // Efeitos desligados de verdade: a capa conta como vista, para não "pular" na
  // frente se a pessoa ligar os efeitos depois.
  useEffect(() => {
    if (efeitosConhecidos && !efeitosLigados && precisa) marcarCapaVista();
  }, [efeitosConhecidos, efeitosLigados, precisa]);

  useEffect(() => {
    if (capaNaTela || !precisaDaCapa()) {
      document.documentElement.removeAttribute("data-capa-pendente");
    }
  }, [capaNaTela]);

  // Enquanto a capa está na tela, a rolagem suave fica parada (a roda do
  // mouse abre o site, em vez de rolar a página por baixo da capa).
  useEffect(() => {
    if (!capaNaTela || !lenis) return;
    lenis.stop();
    return () => lenis.start();
  }, [capaNaTela, lenis]);

  // Escreve direto no texto do número, sem redesenhar o componente a cada quadro.
  useEffect(() => {
    const preloader = refPreloader.current;
    const contador = refContador.current;
    if (!preloaderNaTela || !preloader || !contador) return;
    const valor = { n: 0 };
    const linhaDoTempo = gsap.timeline({ onComplete: () => setFase("ativa") });
    linhaDoTempo.to(valor, {
      n: 100,
      duration: DURACAO_DA_CONTAGEM,
      ease: "power1.out",
      onUpdate: () => {
        contador.textContent = String(Math.round(valor.n));
      },
    });
    linhaDoTempo.to(preloader, { opacity: 0, duration: DURACAO_DO_SUMICO, ease: "power1.out" });
    return () => linhaDoTempo.kill();
  }, [preloaderNaTela]);

  useEffect(() => {
    if (!capaNaTela || (fase !== "ativa" && fase !== "preloader")) return;
    const pedirSaida = () => setFase("saindo");
    const opcoes = { passive: true };
    window.addEventListener("wheel", pedirSaida, opcoes);
    window.addEventListener("touchmove", pedirSaida, opcoes);
    window.addEventListener("keydown", pedirSaida);
    window.addEventListener("focusin", pedirSaida);
    return () => {
      window.removeEventListener("wheel", pedirSaida, opcoes);
      window.removeEventListener("touchmove", pedirSaida, opcoes);
      window.removeEventListener("keydown", pedirSaida);
      window.removeEventListener("focusin", pedirSaida);
    };
  }, [capaNaTela, fase]);

  useEffect(() => {
    const capa = refCapa.current;
    if (!saindo || !capa) return;
    refAnimacao.current = gsap.fromTo(
      capa,
      { "--d": `${RAIO_INICIAL}px` },
      {
        "--d": "0px",
        duration: DURACAO_DA_SAIDA,
        ease: "power3.inOut",
        onComplete: () => {
          marcarCapaVista();
          setFase("fim");
        },
      },
    );
    return () => refAnimacao.current?.kill();
  }, [saindo]);

  return { capaNaTela, preloaderNaTela, saindo, refCapa, refPreloader, refContador, sair };
}
