// Regra: único arquivo do site que faz fetch; toda falha vira { codigo: "conexao" } (14.2).

// Armadilha: sem o prefixo NEXT_PUBLIC_, o Next não entrega a variável ao navegador,
// e o Diário roda no navegador.
const URL_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ErroConexao extends Error {
  constructor(detalhe, causa) {
    super(`Falha de conexão com a API: ${detalhe}`, { cause: causa });
    this.name = "ErroConexao";
    this.codigo = "conexao";
  }
}

export function foiCancelado(erro) {
  return erro?.name === "AbortError";
}

export async function requisitar(caminho, { metodo = "GET", corpo, sinal } = {}) {
  if (!URL_BASE) {
    throw new ErroConexao("a variável NEXT_PUBLIC_API_URL não foi configurada");
  }

  let resposta;
  try {
    resposta = await fetch(`${URL_BASE}${caminho}`, {
      method: metodo,
      headers: corpo ? { "Content-Type": "application/json" } : undefined,
      body: corpo ? JSON.stringify(corpo) : undefined,
      signal: sinal,
    });
  } catch (erro) {
    // Cancelamento não é falha de conexão: devolve como veio.
    if (foiCancelado(erro)) throw erro;
    throw new ErroConexao("a requisição não chegou à API", erro);
  }

  if (resposta.status === 404) return { naoEncontrado: true };

  if (!resposta.ok) {
    throw new ErroConexao(`a API respondeu com o status ${resposta.status}`);
  }

  const texto = await resposta.text();
  if (!texto) return null;

  try {
    return JSON.parse(texto);
  } catch (erro) {
    throw new ErroConexao("a resposta da API não é um JSON válido", erro);
  }
}
