import { createContext, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { efeitosLigadosAgora } from "@/lib/efeitos";
import { desenharDomos, limparDomos } from "@/lib/cortinaDomos";

// Regra: dentro do Diário a troca é instantânea; a cortina só anima ao entrar e ao
// sair dele. Se a página nova não chegar em 3 s, a cortina some.

const DURACAO_ENTRADA = 0.42; // s (PADRAO_MOVIMENTO_PULSE, item 5c)
const DURACAO_SAIDA = 0.42; // s
const LIMITE_DE_ESPERA = 3000; // ms

export const ContextoTransicao = createContext(null);

export function estaNoDiario(caminho) {
  return caminho === "/diario" || caminho.startsWith("/diario/");
}

export function deveAnimarTroca(origem, destino) {
  if (origem === destino) return false;
  return !(estaNoDiario(origem) && estaNoDiario(destino));
}

function semMovimento() {
  return (
    !efeitosLigadosAgora() || window.matchMedia("(forced-colors: active)").matches
  );
}

function caminhoDe(destino) {
  return new URL(destino, window.location.href).pathname;
}

function corDaCortina() {
  return getComputedStyle(document.documentElement).getPropertyValue("--cor-cortina").trim() || "#242428";
}

// 0 = vazia; 1 = cobrindo
function mostrarCortina(cortina, cobrindo) {
  cortina.dataset.ativa = "";
  desenharDomos(cortina, cobrindo ? 1 : 0, true, corDaCortina());
}

function varrer(cortina, entrando, duracao, aoTerminar) {
  const cor = corDaCortina();
  const valor = { progresso: 0 };
  return gsap.to(valor, {
    progresso: 1,
    duration: duracao,
    ease: "none", // cada domo já cresce aos poucos; o conjunto anda reto
    onUpdate: () => desenharDomos(cortina, valor.progresso, entrando, cor),
    onComplete: aoTerminar,
  });
}

function encolherCortina(cortina, estado) {
  clearTimeout(estado.limite);
  estado.animacao?.kill();
  estado.animacao = varrer(cortina, false, DURACAO_SAIDA, () => {
    delete cortina.dataset.ativa;
    limparDomos(cortina);
    estado.cobrindo = false;
  });
}

function cobrirETrocar(cortina, estado, trocarDePagina) {
  estado.cobrindo = true;
  estado.animacao?.kill();
  mostrarCortina(cortina, false);
  estado.animacao = varrer(cortina, true, DURACAO_ENTRADA, () => {
    trocarDePagina();
    estado.limite = setTimeout(() => encolherCortina(cortina, estado), LIMITE_DE_ESPERA);
  });
}

export function useTransicaoPagina() {
  const router = useRouter();
  const caminho = usePathname();
  const refCortina = useRef(null);
  const caminhoAnterior = useRef(caminho);
  const estado = useRef({ cobrindo: false, animacao: null, limite: null });

  function navegar(evento, destino) {
    const cortina = refCortina.current;
    if (!cortina || semMovimento() || !deveAnimarTroca(caminho, caminhoDe(destino))) {
      return;
    }
    evento.preventDefault();
    if (estado.current.cobrindo) return;
    cobrirETrocar(cortina, estado.current, () => router.push(destino));
  }

  function irPara(destino) {
    const cortina = refCortina.current;
    if (
      !cortina ||
      semMovimento() ||
      estado.current.cobrindo ||
      !deveAnimarTroca(caminho, caminhoDe(destino))
    ) {
      router.push(destino);
      return;
    }
    cobrirETrocar(cortina, estado.current, () => router.push(destino));
  }

  // useLayoutEffect roda antes da pintura: no Voltar do navegador, a cortina já
  // aparece cobrindo, sem a página nova "piscar" antes.
  useLayoutEffect(() => {
    const origem = caminhoAnterior.current;
    if (origem === caminho) return;
    caminhoAnterior.current = caminho;

    const cortina = refCortina.current;
    if (!cortina) return;

    if (estado.current.cobrindo) {
      encolherCortina(cortina, estado.current);
      return;
    }
    // Troca que não passou por um link (Voltar/Avançar): só a saída
    if (semMovimento() || !deveAnimarTroca(origem, caminho)) return;
    estado.current.cobrindo = true;
    mostrarCortina(cortina, true);
    encolherCortina(cortina, estado.current);
  }, [caminho]);

  useEffect(() => {
    const atual = estado.current;
    return () => {
      atual.animacao?.kill();
      clearTimeout(atual.limite);
    };
  }, []);

  return { refCortina, navegar, irPara };
}

export function useNavegacaoComTransicao() {
  const contexto = useContext(ContextoTransicao);
  if (!contexto) {
    throw new Error("useNavegacaoComTransicao precisa estar dentro de <TransicaoPagina>.");
  }
  return contexto;
}
