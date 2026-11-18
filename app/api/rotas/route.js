import { randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";

// Rotas salvas do Simulador (CRUD no Postgres da Neon). Cada pessoa vê só as próprias
// rotas, pelo identificador local que o navegador manda em x-pulseira-usuario.
// Precisa da variável DATABASE_URL (ou POSTGRES_URL / NEON_DATABASE_URL) no ambiente.
export const dynamic = "force-dynamic";

const rotaExemplo = {
  id: "rota-1",
  nome: "Rota 1",
  inicio: { texto: "Alameda Santos, São Paulo - SP", lat: -23.5654, lon: -46.6572 },
  destino: { texto: "FIAP Paulista · Av. Paulista, 1106", lat: -23.5640843, lon: -46.6523865 },
};
const idValido = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i;

function validarPonto(ponto) {
  return (
    ponto &&
    typeof ponto.texto === "string" &&
    ponto.texto.trim().length > 0 &&
    ponto.texto.length <= 240 &&
    Number.isFinite(Number(ponto.lat)) &&
    Number.isFinite(Number(ponto.lon)) &&
    Math.abs(Number(ponto.lat)) <= 90 &&
    Math.abs(Number(ponto.lon)) <= 180
  );
}

function dadosValidos(dados) {
  return (
    typeof dados.nome === "string" &&
    dados.nome.trim() &&
    dados.nome.trim().length <= 80 &&
    validarPonto(dados.inicio) &&
    validarPonto(dados.destino)
  );
}

function mapear(linha) {
  return {
    id: linha.id,
    nome: linha.nome,
    exemplo: linha.exemplo,
    inicio: { texto: linha.inicio_texto, lat: Number(linha.inicio_lat), lon: Number(linha.inicio_lon) },
    destino: {
      texto: linha.destino_texto,
      lat: Number(linha.destino_lat),
      lon: Number(linha.destino_lon),
    },
    criadoEm: linha.criado_em,
  };
}

function responder(codigo, dados, cabecalhos) {
  return Response.json(dados, { status: codigo, headers: cabecalhos });
}

async function lerCorpo(req) {
  try {
    return (await req.json()) || {};
  } catch {
    return {};
  }
}

async function tratar(req) {
  const urlBanco =
    process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL;
  if (!urlBanco) return responder(503, { message: "Banco não configurado." });
  const usuario = req.headers.get("x-pulseira-usuario") || "";
  if (!idValido.test(usuario)) return responder(400, { message: "Identificador local inválido." });

  try {
    const sql = neon(urlBanco);
    await sql`CREATE TABLE IF NOT EXISTS rotas_salvas (
      id TEXT NOT NULL, usuario_id TEXT NOT NULL, nome TEXT NOT NULL,
      inicio_texto TEXT NOT NULL, inicio_lat DOUBLE PRECISION NOT NULL, inicio_lon DOUBLE PRECISION NOT NULL,
      destino_texto TEXT NOT NULL, destino_lat DOUBLE PRECISION NOT NULL, destino_lon DOUBLE PRECISION NOT NULL,
      exemplo BOOLEAN NOT NULL DEFAULT FALSE, criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      atualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(), PRIMARY KEY (usuario_id, id)
    )`;
    await sql`INSERT INTO rotas_salvas (id, usuario_id, nome, inicio_texto, inicio_lat, inicio_lon, destino_texto, destino_lat, destino_lon, exemplo)
      VALUES ('rota-1', ${usuario}, ${rotaExemplo.nome}, ${rotaExemplo.inicio.texto}, ${rotaExemplo.inicio.lat}, ${rotaExemplo.inicio.lon}, ${rotaExemplo.destino.texto}, ${rotaExemplo.destino.lat}, ${rotaExemplo.destino.lon}, TRUE)
      ON CONFLICT (usuario_id, id) DO NOTHING`;

    if (req.method === "GET") {
      const linhas = await sql`SELECT id, nome, inicio_texto, inicio_lat, inicio_lon, destino_texto, destino_lat, destino_lon, exemplo, criado_em FROM rotas_salvas WHERE usuario_id = ${usuario} ORDER BY exemplo DESC, criado_em DESC`;
      return responder(200, { rotas: linhas.map(mapear) });
    }

    if (req.method === "POST") {
      const dados = await lerCorpo(req);
      if (!dadosValidos(dados)) {
        return responder(400, { message: "Informe nome, início e destino válidos." });
      }
      const id = randomUUID();
      const [linha] = await sql`INSERT INTO rotas_salvas (id, usuario_id, nome, inicio_texto, inicio_lat, inicio_lon, destino_texto, destino_lat, destino_lon)
        VALUES (${id}, ${usuario}, ${dados.nome.trim()}, ${dados.inicio.texto.trim()}, ${Number(dados.inicio.lat)}, ${Number(dados.inicio.lon)}, ${dados.destino.texto.trim()}, ${Number(dados.destino.lat)}, ${Number(dados.destino.lon)})
        RETURNING id, nome, inicio_texto, inicio_lat, inicio_lon, destino_texto, destino_lat, destino_lon, exemplo, criado_em`;
      return responder(201, { rota: mapear(linha) });
    }

    const id = String(new URL(req.url).searchParams.get("id") || "");
    if (!id) return responder(400, { message: "Informe o identificador da rota." });
    if (id === "rota-1") {
      return responder(409, { message: "A rota de exemplo não pode ser editada ou excluída." });
    }

    if (req.method === "PUT") {
      const dados = await lerCorpo(req);
      if (!dadosValidos(dados)) {
        return responder(400, { message: "Informe nome, início e destino válidos." });
      }
      const [linha] = await sql`UPDATE rotas_salvas SET nome = ${dados.nome.trim()}, inicio_texto = ${dados.inicio.texto.trim()}, inicio_lat = ${Number(dados.inicio.lat)}, inicio_lon = ${Number(dados.inicio.lon)}, destino_texto = ${dados.destino.texto.trim()}, destino_lat = ${Number(dados.destino.lat)}, destino_lon = ${Number(dados.destino.lon)}, atualizado_em = NOW()
        WHERE usuario_id = ${usuario} AND id = ${id} AND exemplo = FALSE
        RETURNING id, nome, inicio_texto, inicio_lat, inicio_lon, destino_texto, destino_lat, destino_lon, exemplo, criado_em`;
      if (!linha) return responder(404, { message: "Rota não encontrada." });
      return responder(200, { rota: mapear(linha) });
    }

    if (req.method === "DELETE") {
      const removidas = await sql`DELETE FROM rotas_salvas WHERE usuario_id = ${usuario} AND id = ${id} AND exemplo = FALSE RETURNING id`;
      if (!removidas.length) return responder(404, { message: "Rota não encontrada." });
      return responder(200, { removida: true, id });
    }

    return responder(405, { message: "Método não permitido." }, { Allow: "GET, POST, PUT, DELETE" });
  } catch (erro) {
    console.error("Falha na API de rotas:", erro);
    return responder(500, { message: "Não foi possível acessar as rotas salvas. Verifique o banco." });
  }
}

export const GET = tratar;
export const POST = tratar;
export const PUT = tratar;
export const DELETE = tratar;
