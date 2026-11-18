(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/pulseira/CenaPulseira.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CenaPulseira
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseira3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePulseira3D.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CenaPulseira(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "43b2c67b0229e0f8aabf0e7767928ac1596c908faaa2adce3f359109f04181b2") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "43b2c67b0229e0f8aabf0e7767928ac1596c908faaa2adce3f359109f04181b2";
    }
    let giro;
    let idDescricao;
    let interativo;
    let modo;
    let opcoes;
    let pronta;
    if ($[1] !== t0) {
        ({ modo, interativo, pronta, idDescricao, giro, ...opcoes } = t0);
        $[1] = t0;
        $[2] = giro;
        $[3] = idDescricao;
        $[4] = interativo;
        $[5] = modo;
        $[6] = opcoes;
        $[7] = pronta;
    } else {
        giro = $[2];
        idDescricao = $[3];
        interativo = $[4];
        modo = $[5];
        opcoes = $[6];
        pronta = $[7];
    }
    const refCaixa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t1 = giro?.conexao;
    let t2;
    if ($[8] !== modo || $[9] !== opcoes || $[10] !== t1) {
        t2 = {
            modo,
            giro: t1,
            ...opcoes
        };
        $[8] = modo;
        $[9] = opcoes;
        $[10] = t1;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseira3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePulseira3D"])(refCaixa, t2);
    const ehPalco = interativo && pronta;
    let t3;
    if ($[12] !== ehPalco || $[13] !== giro?.propsPalco || $[14] !== idDescricao) {
        t3 = ehPalco ? {
            role: "group",
            "aria-roledescription": "modelo 3D",
            "aria-label": "Pulseira Pulse em 3D. Use as setas do teclado para girar.",
            "aria-describedby": idDescricao,
            tabIndex: 0,
            ...giro?.propsPalco
        } : {};
        $[12] = ehPalco;
        $[13] = giro?.propsPalco;
        $[14] = idDescricao;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    const propsPalco = t3;
    const t4 = interativo ? undefined : "true";
    const t5 = `absolute inset-0 ${ehPalco ? `touch-pan-y rounded-cartao ${giro?.arrastando ? "cursor-grabbing" : "cursor-grab"}` : ""}`;
    let t6;
    if ($[16] !== propsPalco || $[17] !== t4 || $[18] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refCaixa,
            "aria-hidden": t4,
            ...propsPalco,
            className: t5
        }, void 0, false, {
            fileName: "[project]/components/pulseira/CenaPulseira.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[16] = propsPalco;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    return t6;
}
_s(CenaPulseira, "oeNLPPRgzWiQOCgwTwXi09neUQ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseira3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePulseira3D"]
    ];
});
_c = CenaPulseira;
var _c;
__turbopack_context__.k.register(_c, "CenaPulseira");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/pulseira/CenaPulseira.jsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/pulseira/CenaPulseira.jsx [app-client] (ecmascript)"));
}),
"[project]/hooks/usePulseira3D.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePulseira3D",
    ()=>usePulseira3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$cena$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/cena.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/partes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/sinais.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// O <canvas> é criado aqui, e não no JSX: no desenvolvimento o React monta duas
// vezes, e um canvas com o WebGL liberado não pode ser usado de novo.
const DURACAO_DA_ENTRADA = 1.6; // s
const LIMITE_DO_PARAR = 4.6; // s: para antes de 5 s (WCAG 2.2.2)
const VELOCIDADE_DO_GIRO = 0.45; // radianos por segundo
const INTERVALO_DA_LETRA = 1.1; // s
const VISTA_DA_FRENTE = {
    y: -0.35,
    x: 0.12
};
function usePulseira3D(refCaixa, opcoes) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "723432dfe40ed8c07499e29c8fb210b76bee6ef3492a1ed06b198197d860b4d6") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "723432dfe40ed8c07499e29c8fb210b76bee6ef3492a1ed06b198197d860b4d6";
    }
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    if ($[1] !== efeitosLigados || $[2] !== opcoes) {
        t0 = {
            ...opcoes,
            efeitosLigados
        };
        $[1] = efeitosLigados;
        $[2] = opcoes;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const refOpcoes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const refControle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[4] !== efeitosLigados || $[5] !== opcoes) {
        t1 = ({
            "usePulseira3D[useLayoutEffect()]": ()=>{
                refOpcoes.current = {
                    ...opcoes,
                    efeitosLigados
                };
            }
        })["usePulseira3D[useLayoutEffect()]"];
        $[4] = efeitosLigados;
        $[5] = opcoes;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t1);
    const { modo, pausado, parteAtiva, aguardarEntrada, sinal, sinalAtivo } = opcoes;
    let t2;
    if ($[7] !== modo || $[8] !== refCaixa.current) {
        t2 = ({
            "usePulseira3D[useEffect()]": ()=>{
                const caixa = refCaixa.current;
                if (!caixa) {
                    return;
                }
                const canvas = document.createElement("canvas");
                canvas.className = "block size-full";
                canvas.setAttribute("aria-hidden", "true");
                caixa.appendChild(canvas);
                const montar = function montar(cena) {
                    const { modelo, pivo } = cena;
                    const interativo = modo === "abertura" || modo === "explorar";
                    const giro = {
                        "usePulseira3D[useEffect() > montar > giro]": ()=>refOpcoes.current.giro
                    }["usePulseira3D[useEffect() > montar > giro]"];
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
                        primeiroQuadro: true
                    };
                    const girandoSozinha = {
                        "usePulseira3D[useEffect() > montar > girandoSozinha]": ()=>interativo && !!giro()?.refGirando.current
                    }["usePulseira3D[useEffect() > montar > girandoSozinha]"];
                    const aCaminho = function aCaminho() {
                        const alvo = giro()?.refAlvo.current;
                        if (!interativo || !alvo) {
                            return false;
                        }
                        return Math.abs(alvo.y - estado.rotY) > 0.001 || Math.abs(alvo.x - estado.rotX) > 0.001;
                    };
                    const avisarSinal = function avisarSinal(chave) {
                        if (modo === "abertura") {
                            refOpcoes.current.aoTrocarSinal?.(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINAIS_DA_ABERTURA"][estado.indiceDoSinal]);
                        } else {
                            refOpcoes.current.aoTrocarSinal?.({
                                chave,
                                movimento: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOVIMENTO_DO_SINAL"][chave]
                            });
                        }
                    };
                    const chaveDoSinalFixo = function chaveDoSinalFixo() {
                        const pedido = refOpcoes.current.sinal ?? "continuar";
                        if (pedido !== "virar") {
                            return pedido;
                        }
                        return estado.ciclo % 2 === 0 ? "esquerda" : "direita";
                    };
                    const sinalEParte = function sinalEParte() {
                        const op = refOpcoes.current;
                        if (modo === "abertura") {
                            const atual = estado.indiceDoSinal >= 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINAIS_DA_ABERTURA"][estado.indiceDoSinal].chave : null;
                            return {
                                sinal: op.efeitosLigados ? atual : null,
                                parte: modelo.parteDoLink[op.parteAtiva] ?? null
                            };
                        }
                        if (modo === "explorar") {
                            const sinalEscolhido = op.sinalAtivo ?? (op.parteAtiva === "luzes" ? "continuar" : null);
                            return {
                                sinal: sinalEscolhido,
                                parte: op.parteAtiva ?? null
                            };
                        }
                        if (modo === "sinal") {
                            return {
                                sinal: chaveDoSinalFixo(),
                                parte: null
                            };
                        }
                        return {
                            sinal: estado.terminou || !op.efeitosLigados ? null : "parar",
                            parte: null
                        };
                    };
                    const passo = function passo(dt) {
                        const op_0 = refOpcoes.current;
                        estado.tempo = estado.tempo + dt;
                        if (interativo) {
                            const alvo_0 = giro()?.refAlvo.current;
                            if (alvo_0) {
                                if (girandoSozinha() && !(modo === "abertura" && op_0.aguardarEntrada)) {
                                    alvo_0.y = alvo_0.y + dt * VELOCIDADE_DO_GIRO;
                                }
                                const suave = Math.min(1, dt * 6);
                                estado.rotY = estado.rotY + (alvo_0.y - estado.rotY) * suave;
                                estado.rotX = estado.rotX + (alvo_0.x - estado.rotX) * suave;
                            }
                        } else {
                            estado.rotY = VISTA_DA_FRENTE.y + Math.sin(estado.tempo * 0.5) * 0.25;
                            estado.rotX = VISTA_DA_FRENTE.x;
                        }
                        if (modo === "abertura") {
                            if (op_0.aguardarEntrada) {
                                pivo.scale.setScalar(0.35);
                            } else {
                                if (estado.entrada < 0) {
                                    estado.entrada = 0;
                                }
                                estado.entrada = Math.min(DURACAO_DA_ENTRADA, estado.entrada + dt);
                                const progresso = 1 - Math.pow(1 - estado.entrada / DURACAO_DA_ENTRADA, 3);
                                pivo.scale.setScalar(0.35 + 0.65 * progresso);
                                if (girandoSozinha()) {
                                    estado.tempoDoSinal = estado.tempoDoSinal + dt;
                                    if (estado.indiceDoSinal < 0 || estado.tempoDoSinal > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURACAO_DO_CICLO"]) {
                                        estado.indiceDoSinal = (estado.indiceDoSinal + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINAIS_DA_ABERTURA"].length;
                                        estado.tempoDoSinal = 0;
                                        avisarSinal();
                                    }
                                }
                            }
                        }
                        if (modo === "sinal") {
                            const pedido_0 = op_0.sinal ?? "continuar";
                            if (pedido_0 !== estado.sinalFixo) {
                                estado.sinalFixo = pedido_0;
                                estado.ciclo = 0;
                                estado.tempoDoSinal = 0;
                                avisarSinal(chaveDoSinalFixo());
                            }
                            estado.tempoDoSinal = estado.tempoDoSinal + dt;
                            if (estado.tempoDoSinal > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DURACAO_DO_CICLO"]) {
                                estado.ciclo = estado.ciclo + 1;
                                estado.tempoDoSinal = 0;
                                avisarSinal(chaveDoSinalFixo());
                            }
                        }
                        if (modo === "parar") {
                            const agora = performance.now();
                            if (estado.inicioDoParar === null) {
                                estado.inicioDoParar = agora;
                            }
                            if ((agora - estado.inicioDoParar) / 1000 >= LIMITE_DO_PARAR) {
                                estado.terminou = true;
                            }
                        }
                        const escrevendo = modo === "abertura" ? girandoSozinha() : modo === "explorar" ? girandoSozinha() || op_0.parteAtiva === "braille" : false;
                        if (escrevendo) {
                            estado.tempoDaLetra = estado.tempoDaLetra + dt;
                            if (estado.tempoDaLetra > INTERVALO_DA_LETRA) {
                                estado.tempoDaLetra = 0;
                                estado.letra = (estado.letra + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PULSE_EM_BRAILLE"].length;
                                modelo.escreverBraille(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PULSE_EM_BRAILLE"][estado.letra]);
                            }
                        }
                        const congelado = modo === "abertura" && !girandoSozinha();
                        modelo.atualizar({
                            t: estado.tempo,
                            dt,
                            ...sinalEParte(),
                            semMovimento: congelado
                        });
                        pivo.rotation.set(estado.rotX, estado.rotY, 0);
                    };
                    const quadroParado = function quadroParado() {
                        const alvo_1 = interativo ? giro()?.refAlvo.current : null;
                        estado.rotY = alvo_1?.y ?? VISTA_DA_FRENTE.y;
                        estado.rotX = alvo_1?.x ?? VISTA_DA_FRENTE.x;
                        pivo.scale.setScalar(1);
                        pivo.rotation.set(estado.rotX, estado.rotY, 0);
                        modelo.escreverBraille("p");
                        modelo.atualizar({
                            t: 0,
                            dt: 0,
                            ...sinalEParte(),
                            semMovimento: true
                        });
                    };
                    const desenhar = function desenhar() {
                        cena.desenhar();
                        refOpcoes.current.aoDesenhar?.(cena.projetar);
                        if (estado.primeiroQuadro) {
                            estado.primeiroQuadro = false;
                            refOpcoes.current.aoPronta?.();
                        }
                    };
                    const deveAnimar = function deveAnimar() {
                        const op_1 = refOpcoes.current;
                        if (!estado.visivel || !op_1.efeitosLigados || estado.terminou) {
                            return false;
                        }
                        if (modo === "abertura") {
                            if (op_1.aguardarEntrada) {
                                return false;
                            }
                            return girandoSozinha() || aCaminho() || estado.entrada < DURACAO_DA_ENTRADA || !!op_1.parteAtiva;
                        }
                        if (modo === "explorar") {
                            return girandoSozinha() || aCaminho() || !!op_1.sinalAtivo || !!op_1.parteAtiva;
                        }
                        if (modo === "sinal") {
                            return !op_1.pausado;
                        }
                        return true;
                    };
                    function quadro(instante) {
                        const dt_0 = Math.min((instante - estado.ultimoInstante) / 1000, 0.05);
                        estado.ultimoInstante = instante;
                        passo(dt_0);
                        desenhar();
                        if (deveAnimar()) {
                            estado.idQuadro = requestAnimationFrame(quadro);
                        } else {
                            estado.rodando = false;
                            if (estado.terminou) {
                                modelo.atualizar({
                                    t: estado.tempo,
                                    dt: 0,
                                    sinal: null,
                                    parte: null,
                                    semMovimento: true
                                });
                                desenhar();
                            }
                        }
                    }
                    const atualizar = function atualizar() {
                        if (!refOpcoes.current.efeitosLigados) {
                            cancelAnimationFrame(estado.idQuadro);
                            estado.rodando = false;
                            quadroParado();
                            desenhar();
                            return;
                        }
                        if (modo === "abertura" && refOpcoes.current.aguardarEntrada) {
                            pivo.scale.setScalar(0.35);
                        }
                        if (deveAnimar()) {
                            if (!estado.rodando) {
                                estado.rodando = true;
                                estado.ultimoInstante = performance.now();
                                estado.idQuadro = requestAnimationFrame(quadro);
                            }
                        } else {
                            if (!estado.rodando) {
                                modelo.atualizar({
                                    t: estado.tempo,
                                    dt: 0,
                                    ...sinalEParte(),
                                    semMovimento: true
                                });
                                pivo.rotation.set(estado.rotX, estado.rotY, 0);
                                desenhar();
                            }
                        }
                    };
                    refControle.current = atualizar;
                    const pararDeOuvirGiro = interativo ? giro()?.assinar(atualizar) : null;
                    const observadorTamanho = new ResizeObserver(()=>{
                        cena.redimensionar(canvas.clientWidth, canvas.clientHeight);
                        if (!estado.rodando) {
                            desenhar();
                        }
                    });
                    observadorTamanho.observe(canvas);
                    cena.redimensionar(canvas.clientWidth, canvas.clientHeight);
                    const observadorVisibilidade = new IntersectionObserver((t3)=>{
                        const [registro] = t3;
                        estado.visivel = registro.isIntersecting;
                        atualizar();
                    });
                    observadorVisibilidade.observe(canvas);
                    const aoPerderContexto = {
                        "usePulseira3D[useEffect() > montar > aoPerderContexto]": (evento)=>{
                            evento.preventDefault();
                            cancelAnimationFrame(estado.idQuadro);
                            refOpcoes.current.aoFalhar?.();
                        }
                    }["usePulseira3D[useEffect() > montar > aoPerderContexto]"];
                    canvas.addEventListener("webglcontextlost", aoPerderContexto);
                    if (!refOpcoes.current.efeitosLigados) {
                        quadroParado();
                    } else {
                        if (modo === "abertura" && refOpcoes.current.aguardarEntrada) {
                            pivo.scale.setScalar(0.35);
                        }
                        modelo.atualizar({
                            t: 0,
                            dt: 0,
                            ...sinalEParte(),
                            semMovimento: true
                        });
                        pivo.rotation.set(estado.rotX, estado.rotY, 0);
                    }
                    desenhar();
                    return ()=>{
                        refControle.current = null;
                        cancelAnimationFrame(estado.idQuadro);
                        pararDeOuvirGiro?.();
                        observadorTamanho.disconnect();
                        observadorVisibilidade.disconnect();
                        canvas.removeEventListener("webglcontextlost", aoPerderContexto);
                        cena.liberar();
                    };
                };
                let cancelado = false;
                let desmontar = null;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$cena$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["criarCena"])(canvas, modo).then({
                    "usePulseira3D[useEffect() > (anonymous)()]": (cena_0)=>{
                        if (cancelado) {
                            cena_0.liberar();
                            return;
                        }
                        desmontar = montar(cena_0);
                    }
                }["usePulseira3D[useEffect() > (anonymous)()]"]).catch({
                    "usePulseira3D[useEffect() > (anonymous)()]": ()=>{
                        if (cancelado) {
                            return;
                        }
                        canvas.remove();
                        refOpcoes.current.aoFalhar?.();
                    }
                }["usePulseira3D[useEffect() > (anonymous)()]"]);
                return ()=>{
                    cancelado = true;
                    refControle.current = null;
                    desmontar?.();
                    canvas.remove();
                };
            }
        })["usePulseira3D[useEffect()]"];
        $[7] = modo;
        $[8] = refCaixa.current;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== modo || $[11] !== refCaixa) {
        t3 = [
            refCaixa,
            modo
        ];
        $[10] = modo;
        $[11] = refCaixa;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "usePulseira3D[useEffect()]": ()=>{
                refControle.current?.();
            }
        })["usePulseira3D[useEffect()]"];
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== aguardarEntrada || $[15] !== efeitosLigados || $[16] !== parteAtiva || $[17] !== pausado || $[18] !== sinal || $[19] !== sinalAtivo) {
        t5 = [
            pausado,
            parteAtiva,
            aguardarEntrada,
            sinal,
            sinalAtivo,
            efeitosLigados
        ];
        $[14] = aguardarEntrada;
        $[15] = efeitosLigados;
        $[16] = parteAtiva;
        $[17] = pausado;
        $[18] = sinal;
        $[19] = sinalAtivo;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
}
_s(usePulseira3D, "q3+zD6NnIR/UaGAp0IzFvU6PL+A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pulseira3d/cena.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "criarCena",
    ()=>criarCena,
    "lerCorDaFaixa",
    ()=>lerCorDaFaixa
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/environments/RoomEnvironment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$modelo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/modelo.js [app-client] (ecmascript)");
;
;
;
// criarCena é assíncrona para compilar os shaders em paralelo: de uma vez, isso
// travava a página por até 1,6 s (opção B da equipe, 9.5).
const CAMERA_POR_MODO = {
    abertura: {
        posicao: [
            0,
            0.25,
            6.6
        ],
        abertura: 30
    },
    explorar: {
        posicao: [
            0,
            0.25,
            7.2
        ],
        abertura: 30
    },
    sinal: {
        posicao: [
            0,
            0.15,
            5.6
        ],
        abertura: 30
    },
    parar: {
        posicao: [
            0,
            0.2,
            6.4
        ],
        abertura: 30
    }
};
function lerCorDaFaixa() {
    const cor = getComputedStyle(document.documentElement).getPropertyValue("--cor-faixa-3d").trim();
    return cor || "#FC4C02";
}
// Pede o WebGL2 antes do Three.js: se ele tentasse sozinho, escreveria um erro no
// console antes de a descrição em texto aparecer.
function criarRenderizador(canvas) {
    const contexto = canvas.getContext("webgl2", {
        antialias: true,
        alpha: true
    });
    if (!contexto) throw new Error("sem-webgl");
    const renderizador = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        canvas,
        context: contexto,
        antialias: true,
        alpha: true
    });
    // Regra: densidade de pixels limitada a 1,75 (19.1, item 9).
    renderizador.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderizador.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    renderizador.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
    renderizador.toneMappingExposure = 1.05;
    renderizador.setClearColor(0x000000, 0);
    // Só no desenvolvimento: publicada, compila mais rápido e não escreve no console os
    // avisos "warning X4122" do Windows, que não são erros.
    renderizador.debug.checkShaderErrors = ("TURBOPACK compile-time value", "development") !== "production";
    return renderizador;
}
// Sem KHR_parallel_shader_compile, o compileAsync só escreveria um aviso no console, sem ganho.
function compilaEmParalelo(renderizador) {
    return renderizador.extensions.has("KHR_parallel_shader_compile");
}
// Compila antes os shaders do gerador de reflexos, para travar menos a página.
// Armadilha: usa campos internos do Three.js 0.186.1; se mudarem, o try/catch volta ao normal.
async function criarAmbiente(renderizador) {
    const gerador = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](renderizador);
    const sala = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$environments$2f$RoomEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEnvironment"]();
    if (compilaEmParalelo(renderizador)) {
        try {
            gerador._setSize(256); // o mesmo tamanho que o fromScene usa (padrão)
            const alvoTemporario = gerador._allocateTargets();
            const cenaDeCompilacao = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            for (const material of [
                gerador._blurMaterial,
                gerador._ggxMaterial
            ]){
                if (material) cenaDeCompilacao.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"](), material));
            }
            // O gerador desenha numa textura intermediária, e não na tela: os shaders
            // compilados para a tela seriam outros.
            renderizador.setRenderTarget(alvoTemporario);
            try {
                await renderizador.compileAsync(cenaDeCompilacao, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"]());
                await renderizador.compileAsync(sala, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](90, 1, 0.1, 100));
            } finally{
                renderizador.setRenderTarget(null);
                alvoTemporario.dispose();
                cenaDeCompilacao.traverse((objeto)=>objeto.geometry?.dispose());
            }
        } catch  {
        // segue sem a compilação antecipada
        }
    }
    const ambiente = gerador.fromScene(sala, 0.04).texture;
    return {
        gerador,
        sala,
        ambiente
    };
}
async function criarCena(canvas, modo) {
    const renderizador = criarRenderizador(canvas);
    const cena = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    const { gerador, sala, ambiente } = await criarAmbiente(renderizador);
    cena.environment = ambiente;
    const principal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.6);
    principal.position.set(3, 4, 5);
    const contorno = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffb088, 1.2);
    contorno.position.set(-4, 1, -3);
    cena.add(principal, contorno);
    const { posicao, abertura } = CAMERA_POR_MODO[modo] ?? CAMERA_POR_MODO.abertura;
    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](abertura, 1, 0.1, 50);
    camera.position.set(...posicao);
    camera.lookAt(0, 0, 0);
    const modelo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$modelo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["criarPulseira"])(lerCorDaFaixa());
    const pivo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    pivo.add(modelo.grupo);
    cena.add(pivo);
    const posicaoTemporaria = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    if (compilaEmParalelo(renderizador)) {
        try {
            await renderizador.compileAsync(cena, camera);
        } catch  {
        // segue sem a compilação antecipada
        }
    }
    function redimensionar(largura, altura) {
        if (!largura || !altura) return;
        renderizador.setSize(largura, altura, false);
        camera.aspect = largura / altura;
        camera.updateProjectionMatrix();
    }
    function projetar(nomeDaAncora) {
        const objeto = modelo.ancoras[nomeDaAncora];
        if (!objeto) return null;
        objeto.getWorldPosition(posicaoTemporaria);
        posicaoTemporaria.project(camera);
        const { left, top, width, height } = canvas.getBoundingClientRect();
        return {
            x: left + (posicaoTemporaria.x + 1) / 2 * width,
            y: top + (1 - posicaoTemporaria.y) / 2 * height
        };
    }
    function desenhar() {
        renderizador.render(cena, camera);
    }
    // Regra: libera a memória da placa de vídeo (19.1, item 9).
    function liberar() {
        const materiais = new Set();
        const geometrias = new Set();
        cena.traverse((objeto)=>{
            if (objeto.geometry) geometrias.add(objeto.geometry);
            if (objeto.material) materiais.add(objeto.material);
        });
        for (const geometria of geometrias)geometria.dispose();
        for (const material of materiais)material.dispose();
        modelo.liberar();
        ambiente.dispose();
        sala.dispose?.();
        gerador.dispose();
        renderizador.dispose();
        // Os navegadores só deixam algumas dezenas de contextos WebGL abertos ao mesmo tempo.
        renderizador.forceContextLoss();
    }
    return {
        modelo,
        pivo,
        redimensionar,
        projetar,
        desenhar,
        liberar
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pulseira3d/modelo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "criarPulseira",
    ()=>criarPulseira
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/partes.js [app-client] (ecmascript)");
;
;
;
// Regra: módulo único da pulseira (19.12). O site e as animações em vídeo usam
// o mesmo modelo, que segue criarPulseira() do protótipo.
const COR = {
    modulo: 0xcc4200,
    face: 0x242428,
    poco: 0x141416,
    metal: 0xb0b0b8,
    laranja: 0xfc4c02,
    luzApagada: 0x4e4e57,
    luzAcesa: 0xff8a50
};
const RAIO_Y = 1.1;
const RAIO_Z = 0.86;
const LARGURA = 0.5;
const ESPESSURA = 0.09;
const LETRAS_BRAILLE = {
    p: [
        1,
        2,
        3,
        4
    ],
    u: [
        1,
        3,
        6
    ],
    l: [
        1,
        2,
        3
    ],
    s: [
        2,
        3,
        4
    ],
    e: [
        1,
        5
    ]
};
function naTira(angulo) {
    const ponto = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, RAIO_Y * Math.sin(angulo), RAIO_Z * Math.cos(angulo));
    const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, ponto.y / (RAIO_Y * RAIO_Y), ponto.z / (RAIO_Z * RAIO_Z)).normalize();
    return {
        ponto,
        normal
    };
}
function orientar(objeto, normal) {
    objeto.quaternion.setFromUnitVectors(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), normal);
}
function criarTexturaDoBrilho() {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const contexto = canvas.getContext("2d");
    const degrade = contexto.createRadialGradient(32, 32, 0, 32, 32, 32);
    degrade.addColorStop(0, "rgba(255,255,255,1)");
    degrade.addColorStop(0.4, "rgba(255,255,255,.45)");
    degrade.addColorStop(1, "rgba(255,255,255,0)");
    contexto.fillStyle = degrade;
    contexto.fillRect(0, 0, 64, 64);
    const textura = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    textura.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    return textura;
}
function criarPulseira(corDaTira = "#FC4C02") {
    const grupo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const partes = {};
    const pontos = [];
    for(let i = 0; i < 160; i++)pontos.push(naTira(i / 160 * Math.PI * 2).ponto);
    const caminho = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](pontos, true);
    const forma = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    const hx = LARGURA / 2;
    const hy = ESPESSURA / 2;
    const r = 0.04;
    forma.moveTo(-hx + r, -hy);
    forma.lineTo(hx - r, -hy);
    forma.quadraticCurveTo(hx, -hy, hx, -hy + r);
    forma.lineTo(hx, hy - r);
    forma.quadraticCurveTo(hx, hy, hx - r, hy);
    forma.lineTo(-hx + r, hy);
    forma.quadraticCurveTo(-hx, hy, -hx, hy - r);
    forma.lineTo(-hx, -hy + r);
    forma.quadraticCurveTo(-hx, -hy, -hx + r, -hy);
    const materialTira = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: corDaTira,
        roughness: 0.58,
        sheen: 0.5,
        sheenRoughness: 0.6,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff9a66)
    });
    grupo.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](forma, {
        steps: 320,
        bevelEnabled: false,
        extrudePath: caminho
    }), materialTira));
    const materialFriso = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xd94200,
        roughness: 0.7
    });
    const geometriaFriso = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](LARGURA * 0.78, 0.012, 0.01);
    for (const lado of [
        -1,
        1
    ]){
        for(let k = 0; k < 9; k++){
            const { ponto, normal } = naTira(lado * (0.42 + k * 0.075));
            const friso = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaFriso, materialFriso);
            friso.position.copy(ponto).addScaledVector(normal, ESPESSURA / 2 + 0.002);
            orientar(friso, normal);
            grupo.add(friso);
        }
    }
    const materialEscuro = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color: COR.poco
    });
    const geometriaFuro = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.03, 20);
    for(let k = 0; k < 6; k++){
        const { ponto, normal } = naTira(Math.PI + 0.38 + k * 0.12);
        const furo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaFuro, materialEscuro);
        furo.position.copy(ponto).addScaledVector(normal, ESPESSURA / 2 + 0.003);
        orientar(furo, normal);
        grupo.add(furo);
    }
    const fecho = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const moldura = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](LARGURA + 0.08, 0.26, 0.07, 4, 0.025), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: COR.face,
        metalness: 0.6,
        roughness: 0.35,
        emissive: COR.laranja,
        emissiveIntensity: 0
    }));
    fecho.add(moldura);
    const lingueta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.05, 0.2, 0.05, 3, 0.02), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: COR.metal,
        metalness: 0.8,
        roughness: 0.3,
        emissive: COR.laranja,
        emissiveIntensity: 0
    }));
    lingueta.position.z = 0.03;
    fecho.add(lingueta);
    const noFecho = naTira(Math.PI);
    fecho.position.copy(noFecho.ponto).addScaledVector(noFecho.normal, ESPESSURA / 2 + 0.03);
    orientar(fecho, noFecho.normal);
    grupo.add(fecho);
    const passador = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](LARGURA + 0.06, 0.08, 0.05, 3, 0.02), materialTira);
    const noPassador = naTira(Math.PI - 0.32);
    passador.position.copy(noPassador.ponto).addScaledVector(noPassador.normal, ESPESSURA / 2 + 0.02);
    orientar(passador, noPassador.normal);
    grupo.add(passador);
    partes.fecho = {
        objetos: [
            moldura,
            lingueta
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].fecho
    };
    const zModulo = RAIO_Z + 0.05;
    const corpo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.66, 1.14, 0.24, 6, 0.09), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: COR.modulo,
        roughness: 0.32,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2
    }));
    corpo.position.set(0, 0, zModulo);
    grupo.add(corpo);
    const face = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.56, 1.04, 0.04, 5, 0.018), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: COR.face,
        roughness: 0.45,
        clearcoat: 0.5,
        clearcoatRoughness: 0.3
    }));
    face.position.set(0, 0, zModulo + 0.11);
    grupo.add(face);
    const superficie = zModulo + 0.13;
    const geometriaMicrofone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.014, 16);
    for (const x of [
        -0.05,
        0,
        0.05
    ]){
        const furo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaMicrofone, materialEscuro);
        furo.position.set(x, 0.44, superficie + 0.001);
        grupo.add(furo);
    }
    // Colar laranja para o contraste; topo côncavo e anéis em relevo para o tato.
    const materialClaro = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xf4f4f5,
        roughness: 0.35,
        emissive: COR.laranja,
        emissiveIntensity: 0
    });
    const materialRelevo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0x9a9aa4,
        roughness: 0.45
    });
    const botaoDestino = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const aro = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.175, 0.185, 0.03, 64).rotateX(Math.PI / 2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: COR.laranja,
        roughness: 0.35,
        emissive: COR.laranja,
        emissiveIntensity: 0.2
    }));
    aro.position.z = 0.012;
    aro.userData.brilhoBase = 0.2;
    botaoDestino.add(aro);
    const disco = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.14, 0.15, 0.075, 64).rotateX(Math.PI / 2), materialClaro);
    disco.position.z = 0.05;
    botaoDestino.add(disco);
    const fundoConcavo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.105, 48), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xdadadf,
        roughness: 0.5
    }));
    fundoConcavo.position.z = 0.0885;
    botaoDestino.add(fundoConcavo);
    for (const raio of [
        0.05,
        0.1
    ]){
        const anel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](raio, 0.008, 10, 56), materialRelevo);
        anel.position.z = 0.09;
        botaoDestino.add(anel);
    }
    botaoDestino.position.set(0, 0.22, superficie);
    grupo.add(botaoDestino);
    partes.destino = {
        objetos: [
            disco,
            aro
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].destino
    };
    const poco = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.17, 0.25, 0.02, 3, 0.008), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: COR.poco,
        roughness: 0.6,
        emissive: COR.laranja,
        emissiveIntensity: 0
    }));
    poco.position.set(0, -0.08, superficie - 0.004);
    grupo.add(poco);
    const pinos = [];
    const materialPino = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xffffff,
        roughness: 0.35,
        emissive: COR.laranja,
        emissiveIntensity: 0
    });
    const geometriaPino = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapsuleGeometry"](0.019, 0.02, 4, 12).rotateX(Math.PI / 2);
    for(let coluna = 0; coluna < 2; coluna++){
        for(let linha = 0; linha < 3; linha++){
            const pino = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaPino, materialPino);
            pino.position.set(-0.035 + coluna * 0.07, -0.08 + 0.068 - linha * 0.068, superficie - 0.02);
            pino.userData.alvo = 0;
            grupo.add(pino);
            pinos[coluna * 3 + linha] = pino; // índice 0..5 = pontos 1..6
        }
    }
    partes.braille = {
        objetos: [
            poco
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].braille
    };
    const botaoModo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const colar = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.3, 0.15, 0.03, 4, 0.012), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: COR.laranja,
        roughness: 0.35,
        emissive: COR.laranja,
        emissiveIntensity: 0.2
    }));
    colar.position.z = 0.012;
    colar.userData.brilhoBase = 0.2;
    botaoModo.add(colar);
    const pilula = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.25, 0.11, 0.07, 5, 0.045), materialClaro.clone());
    pilula.position.z = 0.045;
    botaoModo.add(pilula);
    const ponto = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.022, 20, 14), materialRelevo);
    ponto.position.z = 0.082;
    botaoModo.add(ponto);
    botaoModo.position.set(0, -0.37, superficie);
    grupo.add(botaoModo);
    partes.modo = {
        objetos: [
            pilula,
            colar
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].modo
    };
    const geometriaFresta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.01, 0.07, 0.016);
    for (const lado of [
        -1,
        1
    ]){
        for(let k = 0; k < 4; k++){
            const fresta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaFresta, materialEscuro);
            fresta.position.set(lado * 0.331, -0.05 - k * 0.05, zModulo + 0.02);
            grupo.add(fresta);
        }
    }
    const luzes = {
        esquerda: [],
        direita: []
    };
    const geometriaLuz = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.042, 0.095, 0.022, 2, 0.014);
    const geometriaBrilho = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](0.2, 0.24);
    const texturaBrilho = criarTexturaDoBrilho();
    for (const [lado, sinalX] of [
        [
            "esquerda",
            -1
        ],
        [
            "direita",
            1
        ]
    ]){
        for(let k = 0; k < 5; k++){
            const luz = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaLuz, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: COR.luzApagada,
                roughness: 0.3,
                emissive: COR.laranja,
                emissiveIntensity: 0
            }));
            luz.position.set(sinalX * 0.302, -0.3 + k * 0.15, zModulo + 0.123);
            grupo.add(luz);
            const brilho = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometriaBrilho, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0xff6a1a,
                map: texturaBrilho,
                transparent: true,
                opacity: 0,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            }));
            brilho.position.set(sinalX * 0.302, -0.3 + k * 0.15, zModulo + 0.14);
            grupo.add(brilho);
            luz.userData.brilho = brilho;
            luzes[lado].push(luz);
        }
    }
    partes.luzes = {
        objetos: [
            ...luzes.esquerda,
            ...luzes.direita
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].luzes,
        ehLuz: true
    };
    const contatos = [];
    for (const x of [
        -0.07,
        0.07
    ]){
        const contato = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.022, 0.022, 0.02, 24), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: COR.metal,
            metalness: 0.9,
            roughness: 0.25,
            emissive: COR.laranja,
            emissiveIntensity: 0
        }));
        contato.position.set(x, -0.575, zModulo + 0.02);
        grupo.add(contato);
        contatos.push(contato);
    }
    partes.carga = {
        objetos: contatos,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].carga
    };
    const zonas = {};
    for (const [nome, angulo] of [
        [
            "direita",
            1.25
        ],
        [
            "esquerda",
            -1.25
        ]
    ]){
        const { ponto: p, normal } = naTira(angulo);
        const zona = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](LARGURA * 0.7, 0.32, 0.024, 4, 0.01), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xd9d9de,
            roughness: 0.5,
            emissive: COR.laranja,
            emissiveIntensity: 0.05
        }));
        zona.position.copy(p).addScaledVector(normal, -ESPESSURA / 2 - 0.01);
        orientar(zona, normal.clone().negate());
        zona.userData.base = zona.position.clone();
        zona.userData.normal = normal.clone();
        zona.userData.brilhoBase = 0.05;
        grupo.add(zona);
        zonas[nome] = zona;
    }
    partes.vibracao = {
        objetos: [
            zonas.esquerda,
            zonas.direita
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].vibracao
    };
    const naFrente = naTira(0);
    const atuador = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.15, 0.15, 0.03, 48).rotateX(Math.PI / 2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: 0xd9d9de,
        roughness: 0.5,
        emissive: COR.laranja,
        emissiveIntensity: 0.05
    }));
    atuador.position.copy(naFrente.ponto).addScaledVector(naFrente.normal, -ESPESSURA / 2 - 0.012);
    atuador.userData.base = atuador.position.clone();
    atuador.userData.brilhoBase = 0.05;
    grupo.add(atuador);
    partes.pressao = {
        objetos: [
            atuador
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].pressao
    };
    partes.zonaEsquerda = {
        objetos: [
            zonas.esquerda
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].zonaEsquerda
    };
    partes.zonaDireita = {
        objetos: [
            zonas.direita
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"].zonaDireita
    };
    const ancoras = {
        destino: botaoDestino,
        esquerdo: zonas.esquerda,
        faixa: fecho,
        modo: botaoModo,
        direito: zonas.direita,
        pressao: atuador
    };
    const parteDoLink = {
        destino: "destino",
        esquerdo: "zonaEsquerda",
        faixa: "fecho",
        modo: "modo",
        direito: "zonaDireita",
        pressao: "pressao"
    };
    const destacaveis = [
        ...new Set(Object.values(partes).flatMap((parte)=>parte.objetos))
    ];
    function escreverBraille(letra) {
        const pontosDaLetra = LETRAS_BRAILLE[letra] ?? [];
        pinos.forEach((pino, i)=>{
            pino.userData.alvo = pontosDaLetra.includes(i + 1) ? 1 : 0;
        });
    }
    function acenderLuzes(lista, forca) {
        for (const luz of lista){
            luz.material.emissiveIntensity = forca * 2.4;
            luz.material.color.setHex(forca > 0.05 ? COR.luzAcesa : COR.luzApagada);
            luz.userData.brilho.material.opacity = forca * 0.8;
        }
    }
    function atualizar({ t, dt, sinal = null, parte = null, semMovimento = false }) {
        for (const pino of pinos){
            const alvoZ = superficie - 0.02 + pino.userData.alvo * 0.034;
            pino.position.z = semMovimento ? alvoZ : pino.position.z + (alvoZ - pino.position.z) * Math.min(1, dt * 10);
        }
        for (const objeto of destacaveis){
            if (objeto.material.emissiveIntensity !== undefined && !partes.luzes.objetos.includes(objeto)) {
                objeto.material.emissiveIntensity = objeto.userData.brilhoBase ?? 0;
            }
        }
        for (const zona of Object.values(zonas))zona.position.copy(zona.userData.base);
        atuador.position.copy(atuador.userData.base);
        acenderLuzes(luzes.esquerda, 0);
        acenderLuzes(luzes.direita, 0);
        // Regra: a vibração é a informação principal; as luzes complementam (19.12).
        const vibrar = (zona, forca)=>{
            zona.material.emissiveIntensity = 0.4 + 0.6 * forca;
            if (!semMovimento) zona.position.addScaledVector(zona.userData.normal, Math.sin(t * 70) * 0.006 * forca);
        };
        // Regra: três pulsos no primeiro segundo de cada ciclo de 1,6 s; nunca mais de 3
        // piscadas por segundo (WCAG 2.3.1).
        const cicloAguardar = t % 1.6;
        const pulsoAguardar = semMovimento ? 1 : cicloAguardar < 1 && cicloAguardar % 0.34 < 0.17 ? 1 : 0;
        const forteVirar = semMovimento ? 1 : 0.75 + 0.25 * Math.sin(t * 9);
        if (sinal === "esquerda") {
            vibrar(zonas.esquerda, 1);
            acenderLuzes(luzes.esquerda, forteVirar);
        } else if (sinal === "direita") {
            vibrar(zonas.direita, 1);
            acenderLuzes(luzes.direita, forteVirar);
        } else if (sinal === "parar") {
            vibrar(zonas.esquerda, 1);
            vibrar(zonas.direita, 1);
            acenderLuzes(luzes.esquerda, 1);
            acenderLuzes(luzes.direita, 1);
        } else if (sinal === "aguardar") {
            vibrar(zonas.esquerda, pulsoAguardar);
            vibrar(zonas.direita, pulsoAguardar);
            acenderLuzes(luzes.esquerda, pulsoAguardar);
            acenderLuzes(luzes.direita, pulsoAguardar);
        } else if (sinal === "continuar") {
            const aperto = semMovimento ? 1 : 0.5 + 0.5 * Math.sin(t * 2.4);
            atuador.material.emissiveIntensity = 0.4 + 0.6 * aperto;
            atuador.position.addScaledVector(naFrente.normal, -0.012 * aperto);
            for (const lado of [
                "esquerda",
                "direita"
            ]){
                luzes[lado].forEach((luz, k)=>{
                    const fase = semMovimento ? 1 : Math.max(0, 1 - Math.abs(t * 1.6 % 1.4 - k * 0.22) / 0.22);
                    acenderLuzes([
                        luz
                    ], fase);
                });
            }
        }
        if (parte && partes[parte] && !partes[parte].ehLuz) {
            const brilho = semMovimento ? 0.75 : 0.55 + 0.35 * Math.sin(t * 4);
            for (const objeto of partes[parte].objetos){
                if (objeto.material.emissive) {
                    objeto.material.emissiveIntensity = Math.max(objeto.material.emissiveIntensity, brilho);
                }
            }
        }
    }
    // Geometrias e materiais saem junto com a cena (cena.js); aqui, só o que é deste modelo.
    function liberar() {
        texturaBrilho.dispose();
    }
    escreverBraille("p");
    return {
        grupo,
        partes,
        ancoras,
        parteDoLink,
        escreverBraille,
        atualizar,
        liberar
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pulseira3d/partes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Armadilha: este arquivo não pode importar "three". Os hooks do giro o importam
// direto, e o Three.js iria para o carregamento inicial da página.
__turbopack_context__.s([
    "PULSE_EM_BRAILLE",
    ()=>PULSE_EM_BRAILLE,
    "VISTA_DAS_PARTES",
    ()=>VISTA_DAS_PARTES
]);
const PULSE_EM_BRAILLE = [
    "p",
    "u",
    "l",
    "s",
    "e"
];
const VISTA_DAS_PARTES = {
    destino: {
        angulo: 0
    },
    modo: {
        angulo: 0
    },
    braille: {
        angulo: 0
    },
    vibracao: {
        angulo: Math.PI - 0.75,
        inclinar: 0.5
    },
    pressao: {
        angulo: Math.PI - 0.45,
        inclinar: 0.1
    },
    luzes: {
        angulo: 0
    },
    carga: {
        angulo: 0,
        inclinar: -0.9
    },
    fecho: {
        angulo: Math.PI
    },
    zonaEsquerda: {
        angulo: -1.25
    },
    zonaDireita: {
        angulo: 1.25
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pulseira3d/sinais.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DURACAO_DO_CICLO",
    ()=>DURACAO_DO_CICLO,
    "MOVIMENTO_DO_SINAL",
    ()=>MOVIMENTO_DO_SINAL,
    "SINAIS_DA_ABERTURA",
    ()=>SINAIS_DA_ABERTURA
]);
const DURACAO_DO_CICLO = 2.8; // segundos
const SINAIS_DA_ABERTURA = [
    {
        chave: "esquerda",
        nome: "Virar à esquerda",
        descricao: "Vibração no lado esquerdo do pulso",
        palavra: "Esquerda"
    },
    {
        chave: "direita",
        nome: "Virar à direita",
        descricao: "Vibração no lado direito do pulso",
        palavra: "Direita"
    },
    {
        chave: "aguardar",
        nome: "Aguardar",
        descricao: "Três vibrações curtas, repetidas",
        palavra: "Aguardar"
    },
    {
        chave: "parar",
        nome: "Parar",
        descricao: "Vibração contínua até você parar",
        palavra: "Parar"
    },
    {
        chave: "continuar",
        nome: "Continuar",
        descricao: "Pressão contínua no pulso até você andar",
        palavra: "Continuar"
    }
];
const MOVIMENTO_DO_SINAL = {
    continuar: "Pressão contínua",
    parar: "Vibração contínua",
    esquerda: "Vira à esquerda",
    direita: "Vira à direita",
    aguardar: "Três vibrações curtas"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1iz_2j9os1qkn._.js.map