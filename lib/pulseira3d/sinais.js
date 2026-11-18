export const DURACAO_DO_CICLO = 2.8; // segundos

export const SINAIS_DA_ABERTURA = [
  { chave: "esquerda", nome: "Virar à esquerda", descricao: "Vibração no lado esquerdo do pulso", palavra: "Esquerda" },
  { chave: "direita", nome: "Virar à direita", descricao: "Vibração no lado direito do pulso", palavra: "Direita" },
  { chave: "aguardar", nome: "Aguardar", descricao: "Três vibrações curtas, repetidas", palavra: "Aguardar" },
  { chave: "parar", nome: "Parar", descricao: "Vibração contínua até você parar", palavra: "Parar" },
  { chave: "continuar", nome: "Continuar", descricao: "Pressão contínua no pulso até você andar", palavra: "Continuar" },
];

export const MOVIMENTO_DO_SINAL = {
  continuar: "Pressão contínua",
  parar: "Vibração contínua",
  esquerda: "Vira à esquerda",
  direita: "Vira à direita",
  aguardar: "Três vibrações curtas",
};
