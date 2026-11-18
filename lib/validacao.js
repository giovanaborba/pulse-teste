import { ehDataFutura, ehDataValida, hojeISO } from "@/lib/datas";
import { OPCOES } from "@/lib/rotulos";

export const LIMITE_OBSERVACOES = 300;

// A ordem da tela: define qual é o primeiro campo com erro.
export const ORDEM_DOS_CAMPOS = [
  "data",
  "meio",
  "chegouSemSePerder",
  "precisouDeAjuda",
  "travessias",
  "orientacoes",
  "observacoes",
];

// Regra: mensagens exatas da seção 7.3.
export const MENSAGENS_DE_ERRO = {
  dataVazia: "Escolha a data do deslocamento.",
  dataFutura:
    "Escolha uma data de hoje ou de antes. O Diário registra deslocamentos que já aconteceram.",
  meio: "Escolha o meio de transporte.",
  chegouSemSePerder: "Responda se chegou ao destino sem se perder.",
  precisouDeAjuda: "Responda se precisou de ajuda de outra pessoa.",
  travessias: "Responda como se sentiu nas travessias.",
  orientacoes: "Responda se as orientações da pulseira estavam certas.",
  observacoes: "Use no máximo 300 caracteres nas observações.",
};

export function valoresIniciais() {
  return {
    data: "",
    meio: "",
    chegouSemSePerder: null,
    precisouDeAjuda: null,
    travessias: "",
    orientacoes: "",
    observacoes: "",
  };
}

export function valoresDoRegistro(registro) {
  return {
    data: registro.data ?? "",
    meio: registro.meio ?? "",
    chegouSemSePerder: registro.chegouSemSePerder ?? null,
    precisouDeAjuda: registro.precisouDeAjuda ?? null,
    travessias: registro.travessias ?? "",
    orientacoes: registro.orientacoes ?? "",
    observacoes: registro.observacoes ?? "",
  };
}

// Conta como a pessoa vê: um acento ou um emoji conta como 1.
export function contarCaracteres(texto) {
  return Array.from(texto ?? "").length;
}

function ehOpcaoValida(campo, valor) {
  return OPCOES[campo].some((opcao) => opcao.valor === valor);
}

export function validarRegistro(valores, hoje = hojeISO()) {
  const erros = {};

  if (!valores.data || !ehDataValida(valores.data)) {
    erros.data = MENSAGENS_DE_ERRO.dataVazia;
  } else if (ehDataFutura(valores.data, hoje)) {
    erros.data = MENSAGENS_DE_ERRO.dataFutura;
  }

  for (const campo of ["meio", "chegouSemSePerder", "precisouDeAjuda", "travessias", "orientacoes"]) {
    if (!ehOpcaoValida(campo, valores[campo])) {
      erros[campo] = MENSAGENS_DE_ERRO[campo];
    }
  }

  if (contarCaracteres(valores.observacoes) > LIMITE_OBSERVACOES) {
    erros.observacoes = MENSAGENS_DE_ERRO.observacoes;
  }

  return erros;
}

export function estaValido(erros) {
  return Object.keys(erros).length === 0;
}

export function primeiroCampoComErro(erros) {
  return ORDEM_DOS_CAMPOS.find((campo) => campo in erros) ?? null;
}

export function foiAlterado(valores, referencia) {
  return ORDEM_DOS_CAMPOS.some((campo) => valores[campo] !== referencia[campo]);
}

export function dadosParaSalvar(valores) {
  return { ...valores, observacoes: (valores.observacoes ?? "").trim() };
}
