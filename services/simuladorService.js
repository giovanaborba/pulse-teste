// Serviços do simulador: mapa, rota, voz e rotas salvas.
// Regra do site: o apiClient.js é o único que fala com a API do Diário. Este arquivo
// fala com outros serviços (OpenStreetMap, rota a pé e /api/rotas) e é só do simulador.
import { origemReserva, rotaExemplo } from "@/lib/simulador/dados";

const baseMapa = "https://nominatim.openstreetmap.org/search";
const baseRota = "https://routing.openstreetmap.de/routed-foot/route/v1/driving";
const chaveUsuario = "pulseira-usuario-id";
const chaveRotas = "pulseira-rotas-salvas";

// Em desenvolvimento, sem banco configurado, as rotas ficam no navegador.
const emDesenvolvimento = process.env.NODE_ENV !== "production";

function obterIdUsuario() {
  let id = localStorage.getItem(chaveUsuario);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(chaveUsuario, id);
  }
  return id;
}

function rotasLocais() {
  try {
    const salvas = JSON.parse(localStorage.getItem(chaveRotas) || "null");
    if (Array.isArray(salvas) && !salvas.some((rota) => rota.id === rotaExemplo.id)) {
      return [rotaExemplo, ...salvas];
    }
    if (Array.isArray(salvas)) return salvas;
  } catch {}
  return [rotaExemplo];
}

function gravarRotasLocais(rotas) {
  localStorage.setItem(chaveRotas, JSON.stringify(rotas));
}

async function requisitarRotas(metodo = "GET", id, dados) {
  const consulta = id ? `?id=${encodeURIComponent(id)}` : "";
  const resposta = await fetch(`/api/rotas${consulta}`, {
    method: metodo,
    headers: { "Content-Type": "application/json", "x-pulseira-usuario": obterIdUsuario() },
    ...(dados ? { body: JSON.stringify(dados) } : {}),
  });
  const tipo = resposta.headers.get("content-type") || "";
  if (!tipo.includes("application/json")) {
    throw new Error("API de rotas indisponível neste ambiente");
  }
  const corpo = await resposta.json().catch(() => ({}));
  if (!resposta.ok) {
    throw new Error(
      corpo.statusMessage || corpo.message || `falha ao salvar rotas (${resposta.status}).`,
    );
  }
  return corpo;
}

async function obterJson(url, opcoes) {
  const resposta = await fetch(url, opcoes);
  if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
  return resposta.json();
}

export async function ouvirDestino() {
  const Reconhecedor = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Reconhecedor) throw new Error("Reconhecimento de voz indisponível neste navegador.");

  return new Promise((resolver, rejeitar) => {
    const ouvinte = new Reconhecedor();
    ouvinte.lang = "pt-BR";
    ouvinte.interimResults = false;
    ouvinte.maxAlternatives = 1;
    ouvinte.onresult = (evento) => resolver(evento.results[0][0].transcript);
    ouvinte.onerror = (evento) =>
      rejeitar(
        new Error(
          evento.error === "not-allowed"
            ? "Permita o uso do microfone."
            : "Não foi possível reconhecer o endereço.",
        ),
      );
    ouvinte.start();
  });
}

export function falarEEsperar(texto) {
  return new Promise((resolver) => {
    if (!("speechSynthesis" in window)) return resolver();
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.onend = resolver;
    fala.onerror = resolver;
    window.speechSynthesis.speak(fala);
  });
}

export async function ouvirCampo(texto) {
  await falarEEsperar(texto);
  return ouvirDestino();
}

export function obterOrigem() {
  return new Promise((resolver) => {
    if (!navigator.geolocation) return resolver(origemReserva);
    navigator.geolocation.getCurrentPosition(
      (posicao) => resolver({ lat: posicao.coords.latitude, lon: posicao.coords.longitude }),
      () => resolver(origemReserva),
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 15000 },
    );
  });
}

export async function buscarDestino(endereco) {
  const consulta = new URLSearchParams({
    format: "jsonv2",
    limit: "1",
    "accept-language": "pt-BR",
    q: endereco,
  });
  const lugares = await obterJson(`${baseMapa}?${consulta}`);
  if (!lugares.length) throw new Error("Endereço não encontrado. Tente falar novamente.");
  return {
    lat: Number(lugares[0].lat),
    lon: Number(lugares[0].lon),
    nome: lugares[0].display_name.split(",").slice(0, 3).join(","),
  };
}

export async function buscarRota(origem, destino, intermediarios = []) {
  const pontos = [origem, ...intermediarios, destino]
    .map((ponto) => `${ponto.lon},${ponto.lat}`)
    .join(";");
  const consulta = new URLSearchParams({ overview: "full", geometries: "geojson", steps: "true" });
  const dados = await obterJson(`${baseRota}/${pontos}?${consulta}`);
  if (dados.code !== "Ok" || !dados.routes?.length) {
    throw new Error("Não foi possível calcular a rota.");
  }
  return dados.routes[0];
}

export async function listarRotas() {
  if (emDesenvolvimento) {
    try {
      const rotas = (await requisitarRotas()).rotas;
      if (!Array.isArray(rotas)) throw new Error("Resposta de rotas inválida.");
      return rotas;
    } catch {
      return rotasLocais();
    }
  }
  const rotas = (await requisitarRotas()).rotas;
  if (!Array.isArray(rotas)) throw new Error("Não foi possível consultar as rotas salvas.");
  return rotas;
}

export async function criarRota(rota) {
  if (emDesenvolvimento) {
    try {
      const criada = (await requisitarRotas("POST", null, rota)).rota;
      if (!criada?.id) throw new Error("Resposta inválida.");
      return criada;
    } catch {
      const novas = [...rotasLocais(), { ...rota, id: crypto.randomUUID(), exemplo: false }];
      gravarRotasLocais(novas);
      return novas.at(-1);
    }
  }
  const criada = (await requisitarRotas("POST", null, rota)).rota;
  if (!criada?.id) throw new Error("Não foi possível salvar a rota.");
  return criada;
}

export async function atualizarRota(id, rota) {
  if (id === rotaExemplo.id) throw new Error("A rota de exemplo não pode ser editada.");
  if (emDesenvolvimento) {
    try {
      return (await requisitarRotas("PUT", id, rota)).rota;
    } catch {
      const novas = rotasLocais().map((item) => (item.id === id ? { ...item, ...rota } : item));
      gravarRotasLocais(novas);
      return novas.find((item) => item.id === id);
    }
  }
  return (await requisitarRotas("PUT", id, rota)).rota;
}

export async function apagarRota(id) {
  if (id === rotaExemplo.id) throw new Error("A rota de exemplo não pode ser excluída.");
  if (emDesenvolvimento) {
    try {
      await requisitarRotas("DELETE", id);
    } catch {
      gravarRotasLocais(rotasLocais().filter((item) => item.id !== id));
    }
    return true;
  }
  await requisitarRotas("DELETE", id);
  return true;
}

export function emitirFala(texto) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  window.speechSynthesis.speak(fala);
}
