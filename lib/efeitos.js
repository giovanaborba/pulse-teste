// O estado fica no <html>: o script do <head> grava o valor antes de a página
// aparecer, e o CSS já nasce certo, sem piscar.

export const CHAVE_EFEITOS = "pulse-efeitos";
export const LIGADOS = "ligados";
export const DESLIGADOS = "desligados";
// No servidor e na hidratação o valor ainda não é conhecido; os componentes o
// tratam como desligado, para nada se mexer antes da hora.
export const DESCONHECIDO = "desconhecido";

const ouvintes = new Set();

export function lerEfeitos() {
  const valor = document.documentElement.getAttribute("data-efeitos");
  return valor === LIGADOS ? LIGADOS : DESLIGADOS;
}

export function lerEfeitosNoServidor() {
  return DESCONHECIDO;
}

export function efeitosLigadosAgora() {
  return typeof document !== "undefined" && lerEfeitos() === LIGADOS;
}

export function assinarEfeitos(aoMudar) {
  ouvintes.add(aoMudar);
  return () => ouvintes.delete(aoMudar);
}

// O armazenamento pode falhar (modo privado de alguns navegadores): aí vale null.
export function lerEscolhaSalva() {
  try {
    const valor = window.localStorage.getItem(CHAVE_EFEITOS);
    return valor === LIGADOS || valor === DESLIGADOS ? valor : null;
  } catch {
    return null;
  }
}

// "salvar" só quando a escolha veio do interruptor: sem escolha salva, o aparelho
// continua mandando.
export function definirEfeitos(ligados, { salvar }) {
  const valor = ligados ? LIGADOS : DESLIGADOS;
  document.documentElement.setAttribute("data-efeitos", valor);
  if (salvar) {
    try {
      window.localStorage.setItem(CHAVE_EFEITOS, valor);
    } catch {
      // Sem armazenamento: a escolha vale até recarregar a página.
    }
  }
  for (const aoMudar of ouvintes) aoMudar();
}
