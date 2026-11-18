// Armadilha: este arquivo não pode importar "three". Os hooks do giro o importam
// direto, e o Three.js iria para o carregamento inicial da página.

export const PULSE_EM_BRAILLE = ["p", "u", "l", "s", "e"];

export const VISTA_DAS_PARTES = {
  destino: { angulo: 0 },
  modo: { angulo: 0 },
  braille: { angulo: 0 },
  vibracao: { angulo: Math.PI - 0.75, inclinar: 0.5 },
  pressao: { angulo: Math.PI - 0.45, inclinar: 0.1 },
  luzes: { angulo: 0 },
  carga: { angulo: 0, inclinar: -0.9 },
  fecho: { angulo: Math.PI },
  zonaEsquerda: { angulo: -1.25 },
  zonaDireita: { angulo: 1.25 },
};
