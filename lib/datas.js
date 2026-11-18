// Armadilha: new Date("AAAA-MM-DD") lê a data como meia-noite em UTC e, no Brasil,
// ela vira o dia anterior. Por isso estas funções trabalham com o texto.

const FORMATO_ISO = /^(\d{4})-(\d{2})-(\d{2})$/;

function doisDigitos(numero) {
  return String(numero).padStart(2, "0");
}

export function hojeISO(agora = new Date()) {
  return `${agora.getFullYear()}-${doisDigitos(agora.getMonth() + 1)}-${doisDigitos(agora.getDate())}`;
}

// Recusa datas que não existem, como 2026-02-30.
export function ehDataValida(textoISO) {
  const partes = FORMATO_ISO.exec(textoISO ?? "");
  if (!partes) return false;

  const ano = Number(partes[1]);
  const mes = Number(partes[2]);
  const dia = Number(partes[3]);
  const data = new Date(ano, mes - 1, dia);

  return data.getFullYear() === ano && data.getMonth() === mes - 1 && data.getDate() === dia;
}

// Datas "AAAA-MM-DD" podem ser comparadas como texto: "2026-11-06" > "2026-11-05".
export function ehDataFutura(textoISO, hoje = hojeISO()) {
  return textoISO > hoje;
}

export function formatarData(textoISO) {
  const partes = FORMATO_ISO.exec(textoISO ?? "");
  if (!partes) return textoISO ?? "";
  return `${partes[3]}/${partes[2]}/${partes[1]}`;
}

// Regra: mais recente primeiro; no mesmo dia, o criado por último (7.1).
export function ordenarDoMaisRecente(registros) {
  return [...registros].sort((a, b) => {
    if (a.data !== b.data) return a.data < b.data ? 1 : -1;
    const criadoA = a.criadoEm ?? "";
    const criadoB = b.criadoEm ?? "";
    if (criadoA === criadoB) return 0;
    return criadoA < criadoB ? 1 : -1;
  });
}
