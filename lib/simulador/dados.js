// Dados fixos do simulador: modos da pulseira, rota de exemplo, partidas de
// transporte e os pontos do Braille (números 0 a 6, usados no tempo de espera).

// Mesmos nomes dos modos da pulseira (seção 6.3).
export const modos = ["Sonoro e tátil", "Exclusivamente tátil"];
export const MODO_PADRAO = modos[1];

export const rotaExemplo = {
  id: "rota-1",
  nome: "Rota 1",
  exemplo: true,
  inicio: { texto: "Alameda Santos, São Paulo - SP", lat: -23.5654, lon: -46.6572 },
  destino: {
    texto: "FIAP Paulista · Av. Paulista, 1106",
    lat: -23.5640843,
    lon: -46.6523865,
  },
};

export const partidas = [
  { id: "onibus-875a", tipo: "Ônibus", linha: "875A", destino: "Metrô Ana Rosa" },
  { id: "metro-verde", tipo: "Metrô", linha: "Linha 2 · Verde", destino: "Vila Madalena" },
  { id: "trem-esmeralda", tipo: "Trem", linha: "Linha 9 · Esmeralda", destino: "Osasco" },
  { id: "onibus-477p", tipo: "Ônibus", linha: "477P", destino: "Ipiranga" },
];

// Usada quando o navegador não libera a localização da pessoa.
export const origemReserva = { lat: -23.5614, lon: -46.6562 };

// Pontos erguidos de cada número na célula Braille (1 a 6).
export const braille = {
  0: [2, 4, 5],
  1: [1],
  2: [1, 2],
  3: [1, 4],
  4: [1, 4, 5],
  5: [1, 5],
  6: [1, 2, 4],
};
