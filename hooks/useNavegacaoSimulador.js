import { useCallback, useEffect, useRef, useState } from "react";
import * as Servicos from "@/services/simuladorService";
import { modos, partidas, rotaExemplo } from "@/lib/simulador/dados";

function distanciaGeo(a, b) {
  const rad = Math.PI / 180;
  const dLat = (b[1] - a[1]) * rad;
  const dLon = (b[0] - a[0]) * rad;
  const x =
    Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * rad) * Math.cos(b[1] * rad) * Math.sin(dLon / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function criarPassos(rota, pronta = false) {
  const coords = rota.geometry.coordinates;
  const acumuladas = [0];
  for (let i = 1; i < coords.length; i++) {
    acumuladas.push(acumuladas[i - 1] + distanciaGeo(coords[i - 1], coords[i]));
  }
  const total = acumuladas.at(-1) || 1;
  const bruto = rota.legs?.flatMap((perna) => perna.steps || []) || [];
  const curvas = bruto.flatMap((passo) => {
    const modificador = passo.maneuver?.modifier || "";
    const tipo = modificador.includes("left")
      ? "esquerda"
      : modificador.includes("right")
        ? "direita"
        : "";
    const retorno = modificador.includes("uturn") ? "esquerda" : tipo;
    if (!retorno || !passo.maneuver?.location) return [];
    let maisPerto = 0;
    let menor = Infinity;
    coords.forEach((ponto, i) => {
      const distancia = distanciaGeo(ponto, passo.maneuver.location);
      if (distancia < menor) {
        menor = distancia;
        maisPerto = i;
      }
    });
    const progresso = acumuladas[maisPerto] / total;
    return progresso > 0.012 && progresso < 0.985 ? [{ tipo: retorno, progresso }] : [];
  });

  if (pronta) {
    if (!curvas.some((curva) => curva.tipo === "esquerda")) {
      curvas.push({ tipo: "esquerda", progresso: 0.2 });
    }
    if (!curvas.some((curva) => curva.tipo === "direita")) {
      curvas.push({ tipo: "direita", progresso: 0.56 });
    }
  }
  const travessias = pronta ? [0.36, 0.78] : [0.5];
  const eventos = [
    { tipo: "continuar", progresso: 0 },
    ...curvas,
    ...travessias.map((progresso) => ({ tipo: "semaforo", progresso })),
    { tipo: "chegada", progresso: 1 },
  ].sort((a, b) => a.progresso - b.progresso);
  return eventos.reduce((lista, evento) => {
    const anterior = lista.at(-1);
    const repetido =
      ["esquerda", "direita"].includes(evento.tipo) &&
      anterior?.tipo === evento.tipo &&
      Math.abs(evento.progresso - anterior.progresso) < 0.004;
    if (!repetido) lista.push(evento);
    return lista;
  }, []);
}

function mensagemFalha(falha, padrao) {
  const detalhe = String(falha?.message || "");
  if (!detalhe || /failed to fetch|networkerror|network request|load failed|fetch|http \d+/i.test(detalhe)) {
    return padrao;
  }
  return detalhe;
}

function pontoRota(coords, progresso) {
  const distancias = [0];
  for (let i = 1; i < coords.length; i++) {
    distancias.push(distancias[i - 1] + distanciaGeo(coords[i - 1], coords[i]));
  }
  const alvo = (distancias.at(-1) || 0) * Math.max(0, Math.min(1, progresso));
  let indice = 1;
  while (indice < distancias.length - 1 && distancias[indice] < alvo) indice++;
  const a = coords[indice - 1];
  const b = coords[indice];
  const parte = (alvo - distancias[indice - 1]) / (distancias[indice] - distancias[indice - 1] || 1);
  return [a[0] + (b[0] - a[0]) * parte, a[1] + (b[1] - a[1]) * parte, indice];
}

// Tempo do semáforo: curto na simulação pronta, de 18 a 30 s no trajeto livre.
function sortearTempoSemaforo(simulacaoPronta) {
  return simulacaoPronta ? 6 + Math.floor(Math.random() * 4) : 18 + Math.floor(Math.random() * 13);
}

const normalizar = (valor) =>
  valor
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLocaleLowerCase("pt-BR")
    .trim()
    .replace(/[.,!?]+$/g, "");

// Estado e regras da navegação: tela atual, rota, passos, semáforo e transporte.
export function useNavegacaoSimulador(modo, emitirContinuar) {
  const [tela, definirTela] = useState("inicio");
  const [estado, definirEstado] = useState("inicial");
  const [erro, definirErro] = useState("");
  const [destino, definirDestino] = useState(null);
  const [origem, definirOrigem] = useState(null);
  const [rota, definirRota] = useState(null);
  const [passos, definirPassos] = useState([]);
  const [indice, definirIndice] = useState(0);
  const [progresso, definirProgresso] = useState(0);
  const [segundos, definirSegundos] = useState(0);
  const [partidasAtivas, definirPartidas] = useState([]);
  const [selecionada, definirSelecionada] = useState(0);
  const [brailleAberto, definirBraille] = useState(false);
  const [chegouTransporte, definirChegouTransporte] = useState(false);
  const [simulacaoPronta, definirSimulacaoPronta] = useState(false);
  const esperaRef = useRef(false);
  const chegadaFalouRef = useRef(false);
  const partidasRef = useRef([]);
  const selecionadaRef = useRef(0);
  const chegouTransporteRef = useRef(false);
  const modoRef = useRef(modo);
  const progressoRef = useRef(0);
  const segundosRef = useRef(0);

  useEffect(() => {
    partidasRef.current = partidasAtivas;
  }, [partidasAtivas]);
  useEffect(() => {
    selecionadaRef.current = selecionada;
  }, [selecionada]);
  useEffect(() => {
    modoRef.current = modo;
  }, [modo]);
  useEffect(() => {
    progressoRef.current = progresso;
  }, [progresso]);
  useEffect(() => {
    segundosRef.current = segundos;
  }, [segundos]);

  const instalarRota = useCallback((novaOrigem, novoDestino, novaRota, pronta = false) => {
    definirOrigem(novaOrigem);
    definirDestino(novoDestino);
    definirRota(novaRota);
    definirPassos(criarPassos(novaRota, pronta));
    definirIndice(0);
    definirProgresso(0);
    definirSimulacaoPronta(pronta);
    chegadaFalouRef.current = false;
    definirEstado("andando");
    definirErro("");
    definirTela("rota");
  }, []);

  const iniciarVoz = useCallback(async () => {
    // Se já estava ouvindo ou calculando, o mais seguro é voltar a andar.
    const estadoAntes = estado === "ouvindo" || estado === "calculando" ? "andando" : estado;
    definirErro("");
    definirEstado("ouvindo");
    try {
      const fala = (await Servicos.ouvirDestino()).trim();
      if (/^salvar\s+rota\b/i.test(fala.normalize("NFD").replace(/[̀-ͯ]/g, ""))) {
        definirEstado("ouvindo");
        const textoCampo = async (pergunta, rotulo) => {
          const resposta = await Servicos.ouvirCampo(pergunta);
          return resposta.replace(new RegExp(`^\\s*${rotulo}\\s*:?\\s*`, "i"), "").trim();
        };
        const inicioFalado = await textoCampo("Diga o endereço de início.", "in[ií]cio");
        const destinoFalado = await textoCampo("Diga o endereço de destino.", "destino");
        const nome = await textoCampo("Diga um nome para esta rota.", "nome");
        if (!inicioFalado || !destinoFalado || !nome) {
          throw new Error("Não reconheci todos os dados. Tente dizer “salvar rota” novamente.");
        }
        definirEstado("calculando");
        const [pontoInicio, pontoDestino] = await Promise.all([
          Servicos.buscarDestino(inicioFalado),
          Servicos.buscarDestino(destinoFalado),
        ]);
        const criada = await Servicos.criarRota({
          nome,
          inicio: { texto: pontoInicio.nome, lat: pontoInicio.lat, lon: pontoInicio.lon },
          destino: { texto: pontoDestino.nome, lat: pontoDestino.lat, lon: pontoDestino.lon },
        });
        await Servicos.falarEEsperar(`Rota ${criada.nome} salva.`);
        definirEstado("inicial");
        return;
      }
      let rotas = [];
      try {
        rotas = await Servicos.listarRotas();
      } catch {}
      const consultaSalva = normalizar(fala).replace(/^(?:destino|rota)\s+/, "");
      const salva = rotas.find((item) => normalizar(item.nome) === consultaSalva);
      if (salva) {
        definirEstado("calculando");
        const novaOrigem = { lat: salva.inicio.lat, lon: salva.inicio.lon, nome: salva.inicio.texto };
        const novoDestino = {
          lat: salva.destino.lat,
          lon: salva.destino.lon,
          nome: salva.destino.texto,
        };
        const novaRota = await Servicos.buscarRota(novaOrigem, novoDestino);
        instalarRota(novaOrigem, novoDestino, novaRota);
        return;
      }
      const novoDestino = await Servicos.buscarDestino(fala);
      const novaOrigem = await Servicos.obterOrigem();
      const novaRota = await Servicos.buscarRota(novaOrigem, novoDestino);
      instalarRota(novaOrigem, novoDestino, novaRota);
    } catch (falha) {
      definirErro(
        mensagemFalha(falha, "Não foi possível concluir a solicitação por voz. Tente novamente."),
      );
      // Falhou: volta ao que estava acontecendo, para a navegação não travar.
      definirEstado(tela === "inicio" ? "inicial" : estadoAntes);
    }
  }, [estado, instalarRota, tela]);

  const iniciarRotaSalva = useCallback(
    async (salva) => {
      definirErro("");
      definirEstado("calculando");
      try {
        const novaOrigem = { lat: salva.inicio.lat, lon: salva.inicio.lon, nome: salva.inicio.texto };
        const novoDestino = {
          lat: salva.destino.lat,
          lon: salva.destino.lon,
          nome: salva.destino.texto,
        };
        const novaRota = await Servicos.buscarRota(novaOrigem, novoDestino);
        instalarRota(novaOrigem, novoDestino, novaRota);
      } catch (falha) {
        definirErro(mensagemFalha(falha, "Não foi possível carregar esta rota."));
        definirTela("inicio");
        definirEstado("inicial");
      }
    },
    [instalarRota],
  );

  const iniciarSimulacao = useCallback(async () => {
    definirErro("");
    definirEstado("calculando");
    try {
      let exemplo = rotaExemplo;
      try {
        exemplo = (await Servicos.listarRotas()).find((item) => item.id === rotaExemplo.id) || rotaExemplo;
      } catch {}
      const novaOrigem = { lat: exemplo.inicio.lat, lon: exemplo.inicio.lon, nome: exemplo.inicio.texto };
      const novoDestino = {
        lat: exemplo.destino.lat,
        lon: exemplo.destino.lon,
        nome: exemplo.destino.texto,
      };
      const novaRota = await Servicos.buscarRota(novaOrigem, novoDestino);
      instalarRota(novaOrigem, novoDestino, novaRota, true);
    } catch (falha) {
      definirErro(
        mensagemFalha(falha, "Não foi possível carregar a simulação pronta. Tente novamente."),
      );
      definirEstado("inicial");
    }
  }, [instalarRota]);

  const recalcular = useCallback(
    async (acao) => {
      if (!rota || !destino) return;
      definirErro("");
      definirEstado("calculando");
      try {
        const coords = rota.geometry.coordinates;
        const [lon, lat, indicePonto] = pontoRota(coords, progresso);
        const novaOrigem = { lon, lat };
        const anterior = coords[Math.max(0, indicePonto - 1)];
        const proximo = coords[Math.min(coords.length - 1, indicePonto)];
        const dx = proximo[0] - anterior[0];
        const dy = proximo[1] - anterior[1];
        const tamanho = Math.hypot(dx, dy) || 1;
        const passo = 0.00028 / tamanho;
        const desvio =
          acao === "esquerda"
            ? [-dy * passo, dx * passo]
            : acao === "direita"
              ? [dy * passo, -dx * passo]
              : acao === "continuar"
                ? [dx * passo, dy * passo]
                : [0, 0];
        const pontos = acao ? [{ lon: lon + desvio[0], lat: lat + desvio[1] }] : [];
        const novaRota = await Servicos.buscarRota(novaOrigem, destino, pontos);
        instalarRota(novaOrigem, destino, novaRota, simulacaoPronta);
      } catch {
        definirErro("");
        definirEstado("andando");
      }
    },
    [rota, destino, progresso, instalarRota, simulacaoPronta],
  );

  // Anda pela rota até o próximo passo (curva, semáforo ou chegada).
  useEffect(() => {
    if (estado !== "andando" || !rota || !passos[indice + 1]) return undefined;
    const alvo = passos[indice + 1];
    let quadro = 0;
    let anterior = performance.now();
    let atual = progressoRef.current;
    const mover = (agora) => {
      const decorrido = Math.min((agora - anterior) / 1000, 0.08);
      anterior = agora;
      const avancado = atual + (decorrido * 60) / Math.max(rota.distance, 1);
      if (avancado >= alvo.progresso) {
        definirProgresso(alvo.progresso);
        definirIndice((valor) => valor + 1);
        if (alvo.tipo === "semaforo") definirSegundos(sortearTempoSemaforo(simulacaoPronta));
        definirEstado(
          alvo.tipo === "semaforo" ? "semaforo" : alvo.tipo === "chegada" ? "chegada" : "orientacao",
        );
        return;
      }
      atual = avancado;
      definirProgresso(avancado);
      quadro = requestAnimationFrame(mover);
    };
    quadro = requestAnimationFrame(mover);
    return () => cancelAnimationFrame(quadro);
  }, [estado, rota, passos, indice, simulacaoPronta]);

  // Semáforo aberto: depois de um tempo, avisa por voz (só no modo sonoro).
  useEffect(() => {
    if (estado !== "semaforo") {
      esperaRef.current = false;
      return undefined;
    }
    esperaRef.current = false;
    const forcar = setTimeout(
      () => {
        if (!esperaRef.current) {
          esperaRef.current = true;
          if (modo === modos[0]) Servicos.emitirFala("Semáforo à frente");
        }
      },
      simulacaoPronta ? 4000 : 9000,
    );
    return () => clearTimeout(forcar);
  }, [estado, modo, simulacaoPronta]);

  // Contagem regressiva depois do comando "parar"; em zero, a pulseira pressiona.
  useEffect(() => {
    if (estado !== "contando") return undefined;
    const relogio = setInterval(() => {
      const restante = Math.max(0, segundosRef.current - 1);
      segundosRef.current = restante;
      definirSegundos(restante);
      if (restante === 0) definirEstado("pressionando");
    }, 1000);
    return () => clearInterval(relogio);
  }, [estado]);

  useEffect(() => {
    if (estado !== "chegada") {
      chegadaFalouRef.current = false;
      return;
    }
    if (modo === modos[0] && !chegadaFalouRef.current) {
      chegadaFalouRef.current = true;
      Servicos.emitirFala("Você chegou ao seu destino");
    }
  }, [estado, modo]);

  useEffect(() => {
    if (estado === "pressionando" && modo === modos[0]) emitirContinuar();
  }, [estado, modo, emitirContinuar]);

  const comando = useCallback(
    async (acao) => {
      const esperado = passos[indice]?.tipo;
      if (estado === "chegada" || estado === "calculando" || estado === "contando") return;
      if (estado === "semaforo") {
        if (acao === "parar") {
          esperaRef.current = true;
          definirEstado("contando");
        }
        return;
      }
      if (estado === "pressionando") {
        if (acao === "continuar") definirEstado("andando");
        return;
      }
      if (estado === "orientacao") {
        if (acao === esperado) definirEstado("andando");
        else if (acao === "parar") definirEstado("andando");
        else await recalcular(acao);
        return;
      }
      if (estado === "andando" && ["esquerda", "direita"].includes(acao)) await recalcular(acao);
    },
    [estado, passos, indice, recalcular],
  );

  const abrirTransporte = useCallback(() => {
    const novasPartidas = partidas.map((item) => ({
      ...item,
      minutos: 1 + Math.floor(Math.random() * 6),
    }));
    partidasRef.current = novasPartidas;
    selecionadaRef.current = 0;
    chegouTransporteRef.current = false;
    definirPartidas(novasPartidas);
    definirSelecionada(0);
    definirBraille(false);
    definirChegouTransporte(false);
    definirTela("transporte");
    definirEstado("transporte");
  }, []);

  const selecionarPartida = useCallback((indiceNovo) => {
    selecionadaRef.current = indiceNovo;
    definirSelecionada(indiceNovo);
    definirBraille(false);
  }, []);

  const voltarMapa = useCallback(() => {
    chegouTransporteRef.current = false;
    definirChegouTransporte(false);
    definirTela("rota");
    definirEstado("andando");
    definirIndice(0);
    definirProgresso(0);
  }, []);

  const voltarInicio = useCallback(() => {
    chegouTransporteRef.current = false;
    definirChegouTransporte(false);
    definirTela("inicio");
    definirEstado("inicial");
    definirErro("");
    definirDestino(null);
    definirOrigem(null);
    definirRota(null);
    definirPassos([]);
    definirIndice(0);
    definirProgresso(0);
    definirSegundos(0);
    definirBraille(false);
  }, []);

  // Tela de transporte: a cada 8 s a partida escolhida chega 1 minuto mais perto.
  useEffect(() => {
    if (tela !== "transporte") return undefined;
    const relogio = setInterval(() => {
      if (chegouTransporteRef.current) return;
      const indiceAtivo = selecionadaRef.current;
      const ativaAntes = partidasRef.current[indiceAtivo];
      if (!ativaAntes) return;
      const novoMinuto = Math.max(0, ativaAntes.minutos - 1);
      const atualizadas = partidasRef.current.map((partida, i) =>
        i === indiceAtivo ? { ...partida, minutos: novoMinuto } : partida,
      );
      partidasRef.current = atualizadas;
      definirPartidas(atualizadas);
      const ativa = atualizadas[indiceAtivo];
      if (novoMinuto === 0) {
        chegouTransporteRef.current = true;
        definirChegouTransporte(true);
        if (modoRef.current === modos[0]) Servicos.emitirFala(`${ativa.tipo} na plataforma`);
      } else if (modoRef.current === modos[0]) {
        Servicos.emitirFala(`${ativa.linha} a ${novoMinuto} ${novoMinuto === 1 ? "minuto" : "minutos"}`);
      }
    }, 8000);
    return () => clearInterval(relogio);
  }, [tela]);

  // Depois da chegada, escolhe outra partida do mesmo tipo e recomeça.
  useEffect(() => {
    if (tela !== "transporte" || !chegouTransporte) return undefined;
    const proximo = setTimeout(() => {
      const anterior = selecionadaRef.current;
      const tipoAnterior = partidasRef.current[anterior]?.tipo;
      const opcoesMesmoTipo = partidasRef.current
        .map((item, i) => (i !== anterior && item.tipo === tipoAnterior ? i : -1))
        .filter((i) => i >= 0);
      const opcoes = opcoesMesmoTipo.length
        ? opcoesMesmoTipo
        : partidasRef.current.map((_, i) => i).filter((i) => i !== anterior);
      const indiceProximo = opcoes[Math.floor(Math.random() * opcoes.length)] ?? anterior;
      const atualizadas = partidasRef.current.map((partida, i) =>
        i === indiceProximo ? { ...partida, minutos: 1 + Math.floor(Math.random() * 6) } : partida,
      );
      partidasRef.current = atualizadas;
      selecionadaRef.current = indiceProximo;
      chegouTransporteRef.current = false;
      definirPartidas(atualizadas);
      definirSelecionada(indiceProximo);
      definirChegouTransporte(false);
    }, 3500);
    return () => clearTimeout(proximo);
  }, [tela, chegouTransporte]);

  return {
    tela,
    estado,
    erro,
    destino,
    origem,
    rota,
    indice,
    passos,
    progresso,
    segundos,
    partidas: partidasAtivas,
    selecionada,
    brailleAberto,
    chegouTransporte,
    iniciarVoz,
    iniciarRotaSalva,
    iniciarSimulacao,
    abrirTransporte,
    comando,
    selecionarPartida,
    definirBraille,
    voltarMapa,
    voltarInicio,
  };
}
