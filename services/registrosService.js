import { ErroConexao, requisitar } from "@/services/apiClient";

// Regra: hooks não importam o apiClient; só o serviço conversa com a API (14.2).
export { foiCancelado } from "@/services/apiClient";

const CAMINHO = "/registros";

// A API pode mandar campos a mais ou o id como número; o site recebe sempre o mesmo formato.
function paraRegistro(dados) {
  if (!dados || typeof dados !== "object") {
    throw new ErroConexao("a API devolveu um registro em formato inesperado");
  }
  return {
    id: String(dados.id),
    data: dados.data,
    meio: dados.meio,
    chegouSemSePerder: dados.chegouSemSePerder,
    precisouDeAjuda: dados.precisouDeAjuda,
    travessias: dados.travessias,
    orientacoes: dados.orientacoes,
    observacoes: dados.observacoes ?? "",
    criadoEm: dados.criadoEm,
    atualizadoEm: dados.atualizadoEm,
  };
}

// Sem id nem datas de controle: quem gera esses campos é a API.
function paraCorpo(dados) {
  return {
    data: dados.data,
    meio: dados.meio,
    chegouSemSePerder: dados.chegouSemSePerder,
    precisouDeAjuda: dados.precisouDeAjuda,
    travessias: dados.travessias,
    orientacoes: dados.orientacoes,
    observacoes: dados.observacoes ?? "",
  };
}

export async function listar({ sinal } = {}) {
  const resposta = await requisitar(CAMINHO, { sinal });
  const lista = resposta;

  if (!Array.isArray(lista)) {
    throw new ErroConexao("a API não devolveu uma lista de registros");
  }
  return lista.map(paraRegistro);
}

export async function obter(id, { sinal } = {}) {
  const resposta = await requisitar(`${CAMINHO}/${encodeURIComponent(id)}`, { sinal });

  if (resposta?.naoEncontrado) return null;
  return paraRegistro(resposta);
}

export async function criar(dados, { sinal } = {}) {
  const resposta = await requisitar(CAMINHO, {
    metodo: "POST",
    corpo: paraCorpo(dados),
    sinal,
  });

  if (resposta?.naoEncontrado) {
    throw new ErroConexao("o endereço /registros não existe na API");
  }
  return paraRegistro(resposta);
}

export async function atualizar(id, dados, { sinal } = {}) {
  const resposta = await requisitar(`${CAMINHO}/${encodeURIComponent(id)}`, {
    metodo: "PUT",
    corpo: paraCorpo(dados),
    sinal,
  });

  if (resposta?.naoEncontrado) {
    throw new ErroConexao("o registro não existe mais na API");
  }
  return paraRegistro(resposta);
}

export async function excluir(id, { sinal } = {}) {
  const resposta = await requisitar(`${CAMINHO}/${encodeURIComponent(id)}`, {
    metodo: "DELETE",
    sinal,
  });

  if (resposta?.naoEncontrado) {
    throw new ErroConexao("o registro não existe mais na API");
  }
}
