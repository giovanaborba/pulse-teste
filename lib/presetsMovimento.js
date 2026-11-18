// Regra: toda animação de interface com o Motion usa estes valores (PADRAO_MOVIMENTO_PULSE, item 3).

// Regra: molas pela duração visual, para garantir o limite de 0,5 s.
// rapida: toque e ícones; padrao: quase tudo; suave: diálogos, painéis e cartões que viram.
export const spring = {
  rapida: { type: "spring", visualDuration: 0.18, bounce: 0.15 },
  padrao: { type: "spring", visualDuration: 0.3, bounce: 0.12 },
  suave: { type: "spring", visualDuration: 0.42, bounce: 0.06 },
};
export const saida = { type: "spring", visualDuration: 0.16, bounce: 0 }; // Regra: saídas mais rápidas que as entradas.
export const cascata = { staggerChildren: 0.045, delayChildren: 0.03 };

export const pulso = {
  scale: [1, 1.035, 1, 1.02, 1],
  transition: { duration: 0.42, times: [0, 0.2, 0.45, 0.7, 1], ease: "easeOut" },
};
export const guia = (direcao = 1) => ({
  initial: { opacity: 0, x: 14 * direcao },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -8 * direcao, transition: saida },
});
export const tremor = { x: [0, -4, 4, -3, 3, 0], transition: { duration: 0.3 } };

// Armadilha: com vários quadros-chave o Motion não usa spring; por isso pulso e
// tremor têm duração fixa e curta (única exceção ao "spring sempre").
