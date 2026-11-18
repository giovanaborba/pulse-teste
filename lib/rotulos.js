// Todos os textos num lugar só, para o formulário, a lista e o registro falarem igual.

export const PERGUNTAS = {
  data: "Data do deslocamento",
  meio: "Meio de transporte",
  chegouSemSePerder: "Chegou ao destino sem se perder?",
  precisouDeAjuda: "Precisou de ajuda de outra pessoa?",
  travessias: "Como se sentiu nas travessias?",
  orientacoes: "As orientações da pulseira estavam certas?",
  observacoes: "Observações",
};

// A ordem de cada lista é a ordem do formulário.
export const OPCOES = {
  meio: [
    { valor: "pe", rotulo: "A pé" },
    { valor: "onibus", rotulo: "Ônibus" },
    { valor: "metro", rotulo: "Metrô ou trem" },
  ],
  chegouSemSePerder: [
    { valor: true, rotulo: "Sim" },
    { valor: false, rotulo: "Não" },
  ],
  precisouDeAjuda: [
    { valor: true, rotulo: "Sim" },
    { valor: false, rotulo: "Não" },
  ],
  travessias: [
    { valor: "seguro", rotulo: "Seguro" },
    { valor: "medio", rotulo: "Mais ou menos" },
    { valor: "inseguro", rotulo: "Inseguro" },
  ],
  orientacoes: [
    { valor: "sim", rotulo: "Sim" },
    { valor: "parte", rotulo: "Em parte" },
    { valor: "nao", rotulo: "Não" },
  ],
};

// Valor desconhecido devolve texto vazio, para a tela não quebrar.
export function rotuloDe(campo, valor) {
  const opcao = OPCOES[campo]?.find((item) => item.valor === valor);
  return opcao ? opcao.rotulo : "";
}

const ETIQUETAS = {
  chegouSemSePerder: { true: "Sem se perder", false: "Se perdeu" },
  precisouDeAjuda: { false: "Sem ajuda", true: "Precisou de ajuda" },
  travessias: {
    seguro: "Travessias seguras",
    medio: "Travessias mais ou menos",
    inseguro: "Travessias inseguras",
  },
};

export function etiquetasDoRegistro(registro) {
  return [
    ETIQUETAS.chegouSemSePerder[String(registro.chegouSemSePerder)],
    ETIQUETAS.precisouDeAjuda[String(registro.precisouDeAjuda)],
    ETIQUETAS.travessias[registro.travessias],
  ].filter(Boolean);
}

export function textoObservacoes(observacoes) {
  const texto = (observacoes ?? "").trim();
  return texto || "Nenhuma";
}

export function rotuloTotal(total) {
  return total === 1 ? "deslocamento registrado" : "deslocamentos registrados";
}

export const ROTULOS_INDICADORES = {
  semAjuda: "sem precisar de ajuda",
  semSePerder: "chegaram sem se perder",
  travessiasSeguras: "com travessias seguras",
};
