import { useEffect, useLayoutEffect, useRef } from "react";
import { criarCena } from "@/lib/pulseira3d/cena";
import { PULSE_EM_BRAILLE } from "@/lib/pulseira3d/partes";
import { useEfeitos } from "@/hooks/useEfeitos";
import { DURACAO_DO_CICLO, MOVIMENTO_DO_SINAL, SINAIS_DA_ABERTURA } from "@/lib/pulseira3d/sinais";

// O <canvas> é criado aqui, e não no JSX: no desenvolvimento o React monta duas
// vezes, e um canvas com o WebGL liberado não pode ser usado de novo.

const DURACAO_DA_ENTRADA = 1.6; // s
const LIMITE_DO_PARAR = 4.6; // s: para antes de 5 s (WCAG 2.2.2)
const VELOCIDADE_DO_GIRO = 0.45; // radianos por segundo
const INTERVALO_DA_LETRA = 1.1; // s
const VISTA_DA_FRENTE = { y: -0.35, x: 0.12 };

export function usePulseira3D(refCaixa, opcoes) {
  // As opções mudam a cada renderização, mas a cena é montada uma vez só.
  // Por isso elas ficam numa ref, lida a cada quadro da animação.
  const { efeitosLigados } = useEfeitos();
  const refOpcoes = useRef({ ...opcoes, efeitosLigados });
  const refControle = useRef(null);

  useLayoutEffect(() => {
    refOpcoes.current = { ...opcoes, efeitosLigados };
  });

  const { modo, pausado, parteAtiva, aguardarEntrada, sinal, sinalAtivo } = opcoes;

  useEffect(() => {
    const caixa = refCaixa.current;
    if (!caixa) return;

    const canvas = document.createElement("canvas");
    canvas.className = "block size-full";
    canvas.setAttribute("aria-hidden", "true"); // quem descreve é a caixa
    caixa.appendChild(canvas);

    function montar(cena) {
      const { modelo, pivo } = cena;
      const interativo = modo === "abertura" || modo === "explorar";
      const giro = () => refOpcoes.current.giro;
      const inicio = interativo ? giro()?.refAlvo.current ?? VISTA_DA_FRENTE : VISTA_DA_FRENTE;

      const estado = {
        rodando: false,
        idQuadro: 0,
        ultimoInstante: 0,
        tempo: 0,
        visivel: false,
        rotY: inicio.y,
        rotX: inicio.x,
        indiceDoSinal: -1,
        tempoDoSinal: 0,
        ciclo: 0,
        sinalFixo: null,
        letra: 0,
        tempoDaLetra: 0,
        entrada: refOpcoes.current.aguardarEntrada ? -1 : DURACAO_DA_ENTRADA,
        terminou: false,
        inicioDoParar: null,
        primeiroQuadro: true,
      };

      const girandoSozinha = () => interativo && !!giro()?.refGirando.current;

      function aCaminho() {
        const alvo = giro()?.refAlvo.current;
        if (!interativo || !alvo) return false;
        return Math.abs(alvo.y - estado.rotY) > 0.001 || Math.abs(alvo.x - estado.rotX) > 0.001;
      }

      function avisarSinal(chave) {
        if (modo === "abertura") refOpcoes.current.aoTrocarSinal?.(SINAIS_DA_ABERTURA[estado.indiceDoSinal]);
        else refOpcoes.current.aoTrocarSinal?.({ chave, movimento: MOVIMENTO_DO_SINAL[chave] });
      }

      function chaveDoSinalFixo() {
        const pedido = refOpcoes.current.sinal ?? "continuar";
        if (pedido !== "virar") return pedido;
        return estado.ciclo % 2 === 0 ? "esquerda" : "direita";
      }

      function sinalEParte() {
        const op = refOpcoes.current;
        if (modo === "abertura") {
          const atual = estado.indiceDoSinal >= 0 ? SINAIS_DA_ABERTURA[estado.indiceDoSinal].chave : null;
          return { sinal: op.efeitosLigados ? atual : null, parte: modelo.parteDoLink[op.parteAtiva] ?? null };
        }
        if (modo === "explorar") {
          const sinalEscolhido = op.sinalAtivo ?? (op.parteAtiva === "luzes" ? "continuar" : null);
          return { sinal: sinalEscolhido, parte: op.parteAtiva ?? null };
        }
        if (modo === "sinal") return { sinal: chaveDoSinalFixo(), parte: null };
        return { sinal: estado.terminou || !op.efeitosLigados ? null : "parar", parte: null };
      }

      function passo(dt) {
        const op = refOpcoes.current;
        estado.tempo += dt;

        if (interativo) {
          const alvo = giro()?.refAlvo.current;
          if (alvo) {
            if (girandoSozinha() && !(modo === "abertura" && op.aguardarEntrada)) alvo.y += dt * VELOCIDADE_DO_GIRO;
            const suave = Math.min(1, dt * 6);
            estado.rotY += (alvo.y - estado.rotY) * suave;
            estado.rotX += (alvo.x - estado.rotX) * suave;
          }
        } else {
          estado.rotY = VISTA_DA_FRENTE.y + Math.sin(estado.tempo * 0.5) * 0.25;
          estado.rotX = VISTA_DA_FRENTE.x;
        }

        if (modo === "abertura") {
          if (op.aguardarEntrada) {
            pivo.scale.setScalar(0.35);
          } else {
            if (estado.entrada < 0) estado.entrada = 0;
            estado.entrada = Math.min(DURACAO_DA_ENTRADA, estado.entrada + dt);
            const progresso = 1 - Math.pow(1 - estado.entrada / DURACAO_DA_ENTRADA, 3);
            pivo.scale.setScalar(0.35 + 0.65 * progresso);
            if (girandoSozinha()) {
              estado.tempoDoSinal += dt;
              if (estado.indiceDoSinal < 0 || estado.tempoDoSinal > DURACAO_DO_CICLO) {
                estado.indiceDoSinal = (estado.indiceDoSinal + 1) % SINAIS_DA_ABERTURA.length;
                estado.tempoDoSinal = 0;
                avisarSinal();
              }
            }
          }
        }

        if (modo === "sinal") {
          const pedido = op.sinal ?? "continuar";
          if (pedido !== estado.sinalFixo) {
            estado.sinalFixo = pedido;
            estado.ciclo = 0;
            estado.tempoDoSinal = 0;
            avisarSinal(chaveDoSinalFixo());
          }
          estado.tempoDoSinal += dt;
          if (estado.tempoDoSinal > DURACAO_DO_CICLO) {
            estado.ciclo += 1;
            estado.tempoDoSinal = 0;
            avisarSinal(chaveDoSinalFixo());
          }
        }

        // Conta o tempo real, e não o da animação: num aparelho lento, cada passo é
        // limitado a 0,05 s, e o tempo da animação andaria mais devagar.
        if (modo === "parar") {
          const agora = performance.now();
          if (estado.inicioDoParar === null) estado.inicioDoParar = agora;
          if ((agora - estado.inicioDoParar) / 1000 >= LIMITE_DO_PARAR) estado.terminou = true;
        }

        const escrevendo = modo === "abertura" ? girandoSozinha() : modo === "explorar" ? girandoSozinha() || op.parteAtiva === "braille" : false;
        if (escrevendo) {
          estado.tempoDaLetra += dt;
          if (estado.tempoDaLetra > INTERVALO_DA_LETRA) {
            estado.tempoDaLetra = 0;
            estado.letra = (estado.letra + 1) % PULSE_EM_BRAILLE.length;
            modelo.escreverBraille(PULSE_EM_BRAILLE[estado.letra]);
          }
        }

        const congelado = modo === "abertura" && !girandoSozinha();
        modelo.atualizar({ t: estado.tempo, dt, ...sinalEParte(), semMovimento: congelado });
        pivo.rotation.set(estado.rotX, estado.rotY, 0);
      }

      function quadroParado() {
        const alvo = interativo ? giro()?.refAlvo.current : null;
        estado.rotY = alvo?.y ?? VISTA_DA_FRENTE.y;
        estado.rotX = alvo?.x ?? VISTA_DA_FRENTE.x;
        pivo.scale.setScalar(1);
        pivo.rotation.set(estado.rotX, estado.rotY, 0);
        modelo.escreverBraille("p");
        modelo.atualizar({ t: 0, dt: 0, ...sinalEParte(), semMovimento: true });
      }

      function desenhar() {
        cena.desenhar();
        refOpcoes.current.aoDesenhar?.(cena.projetar);
        if (estado.primeiroQuadro) {
          estado.primeiroQuadro = false;
          refOpcoes.current.aoPronta?.();
        }
      }

      function deveAnimar() {
        const op = refOpcoes.current;
        if (!estado.visivel || !op.efeitosLigados || estado.terminou) return false;
        if (modo === "abertura") {
          if (op.aguardarEntrada) return false;
          return girandoSozinha() || aCaminho() || estado.entrada < DURACAO_DA_ENTRADA || !!op.parteAtiva;
        }
        if (modo === "explorar") return girandoSozinha() || aCaminho() || !!op.sinalAtivo || !!op.parteAtiva;
        if (modo === "sinal") return !op.pausado;
        return true;
      }

      function quadro(instante) {
        const dt = Math.min((instante - estado.ultimoInstante) / 1000, 0.05);
        estado.ultimoInstante = instante;
        passo(dt);
        desenhar();
        if (deveAnimar()) {
          estado.idQuadro = requestAnimationFrame(quadro);
        } else {
          estado.rodando = false;
          if (estado.terminou) {
            modelo.atualizar({ t: estado.tempo, dt: 0, sinal: null, parte: null, semMovimento: true });
            desenhar();
          }
        }
      }

      function atualizar() {
        if (!refOpcoes.current.efeitosLigados) {
          cancelAnimationFrame(estado.idQuadro);
          estado.rodando = false;
          quadroParado();
          desenhar();
          return;
        }
        if (modo === "abertura" && refOpcoes.current.aguardarEntrada) pivo.scale.setScalar(0.35);
        if (deveAnimar()) {
          if (!estado.rodando) {
            estado.rodando = true;
            estado.ultimoInstante = performance.now();
            estado.idQuadro = requestAnimationFrame(quadro);
          }
        } else if (!estado.rodando) {
          modelo.atualizar({ t: estado.tempo, dt: 0, ...sinalEParte(), semMovimento: true });
          pivo.rotation.set(estado.rotX, estado.rotY, 0);
          desenhar();
        }
      }
      refControle.current = atualizar;

      const pararDeOuvirGiro = interativo ? giro()?.assinar(atualizar) : null;

      const observadorTamanho = new ResizeObserver(() => {
        cena.redimensionar(canvas.clientWidth, canvas.clientHeight);
        if (!estado.rodando) desenhar();
      });
      observadorTamanho.observe(canvas);
      cena.redimensionar(canvas.clientWidth, canvas.clientHeight);

      const observadorVisibilidade = new IntersectionObserver(([registro]) => {
        estado.visivel = registro.isIntersecting;
        atualizar();
      });
      observadorVisibilidade.observe(canvas);

      const aoPerderContexto = (evento) => {
        evento.preventDefault();
        cancelAnimationFrame(estado.idQuadro);
        refOpcoes.current.aoFalhar?.();
      };
      canvas.addEventListener("webglcontextlost", aoPerderContexto);

      if (!refOpcoes.current.efeitosLigados) quadroParado();
      else {
        if (modo === "abertura" && refOpcoes.current.aguardarEntrada) pivo.scale.setScalar(0.35);
        modelo.atualizar({ t: 0, dt: 0, ...sinalEParte(), semMovimento: true });
        pivo.rotation.set(estado.rotX, estado.rotY, 0);
      }
      desenhar();

      return () => {
        refControle.current = null;
        cancelAnimationFrame(estado.idQuadro);
        pararDeOuvirGiro?.();
        observadorTamanho.disconnect();
        observadorVisibilidade.disconnect();
        canvas.removeEventListener("webglcontextlost", aoPerderContexto);
        cena.liberar();
      };
    }

    // Se o componente sair antes de a cena ficar pronta, ela é liberada ao terminar.
    let cancelado = false;
    let desmontar = null;
    criarCena(canvas, modo)
      .then((cena) => {
        if (cancelado) {
          cena.liberar();
          return;
        }
        desmontar = montar(cena);
      })
      .catch(() => {
        if (cancelado) return;
        canvas.remove();
        refOpcoes.current.aoFalhar?.();
      });

    return () => {
      cancelado = true;
      refControle.current = null;
      desmontar?.();
      canvas.remove();
    };
  }, [refCaixa, modo]);

  useEffect(() => {
    refControle.current?.();
  }, [pausado, parteAtiva, aguardarEntrada, sinal, sinalAtivo, efeitosLigados]);
}
