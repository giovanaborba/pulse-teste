(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/abertura/AberturaPulseira.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AberturaPulseira
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pulseira$2f$Pulseira3D$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pulseira/Pulseira3D.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$CapaIntro$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/abertura/CapaIntro.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$Preloader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/abertura/Preloader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$PartesSolucao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/abertura/PartesSolucao.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PalavraFundo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PalavraFundo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IconeAlternado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/IconeAlternado.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCapaIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCapaIntro.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEncaixe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEncaixe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGiroPulseira$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGiroPulseira.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLinhasPartes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLinhasPartes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/sinais.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Regra: "Girar sozinha" para o giro, os sinais e o Braille (WCAG 2.2.2, decisão da 9.0).
// Ordem no HTML = ordem do leitor de tela (18.15): H1 → resumo → palco → giro → links.
const ESTILO_BOTAO_GIRO = "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-borda bg-superficie px-4 font-bold text-texto hover:border-marca";
function AberturaPulseira() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "55e79d6d65ff09e049efd0beee8b5f25efe377f9f357782a36e0ef1da41de38d") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "55e79d6d65ff09e049efd0beee8b5f25efe377f9f357782a36e0ef1da41de38d";
    }
    const [sinalAtual, setSinalAtual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$sinais$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINAIS_DA_ABERTURA"][0]);
    const [cenaPronta, setCenaPronta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [parteAtiva, setParteAtiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const capa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCapaIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCapaIntro"])();
    const giro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGiroPulseira$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGiroPulseira"])();
    const { refPalco, refSvg, registrarNo, aoDesenhar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLinhasPartes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinhasPartes"])(parteAtiva);
    const parada = !efeitosLigados || !cenaPronta;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEncaixe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncaixe"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = function aoCenaPronta() {
            setCenaPronta(true);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const aoCenaPronta = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = function aoCenaFalhar() {
            setCenaPronta(false);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const aoCenaFalhar = t1;
    let t2;
    if ($[3] !== capa.capaNaTela) {
        t2 = function revelacao(t3) {
            const atraso = t3 === undefined ? 0 : t3;
            if (capa.capaNaTela) {
                return {
                    initial: false,
                    animate: {
                        opacity: 0,
                        y: 12
                    },
                    transition: {
                        duration: 0
                    }
                };
            }
            return {
                initial: false,
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].padrao,
                    delay: atraso
                }
            };
        };
        $[3] = capa.capaNaTela;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const revelacao = t2;
    const palavra = parada || capa.capaNaTela ? "Pulse" : sinalAtual.palavra;
    let t3;
    if ($[5] !== capa.capaNaTela || $[6] !== capa.preloaderNaTela || $[7] !== capa.refCapa || $[8] !== capa.refContador || $[9] !== capa.refPreloader || $[10] !== capa.saindo || $[11] !== capa.sair) {
        t3 = capa.capaNaTela && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$CapaIntro$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    refCapa: capa.refCapa,
                    saindo: capa.saindo,
                    aoTocar: capa.sair
                }, void 0, false, {
                    fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                    lineNumber: 107,
                    columnNumber: 44
                }, this),
                capa.preloaderNaTela && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$Preloader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    refPreloader: capa.refPreloader,
                    refContador: capa.refContador,
                    aoTocar: capa.sair
                }, void 0, false, {
                    fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                    lineNumber: 107,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 107,
            columnNumber: 42
        }, this), document.body);
        $[5] = capa.capaNaTela;
        $[6] = capa.preloaderNaTela;
        $[7] = capa.refCapa;
        $[8] = capa.refContador;
        $[9] = capa.refPreloader;
        $[10] = capa.saindo;
        $[11] = capa.sair;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== revelacao) {
        t4 = revelacao();
        $[13] = revelacao;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    let t6;
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "rotulo-mono text-destaque",
            children: "Pulseira de navegação"
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            id: "titulo-inicio",
            tabIndex: -1,
            className: "max-w-[18ch] text-h1-abertura",
            children: "Inovação que chega a quem precisa"
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "max-w-[46ch] text-texto-2",
            children: "A Pulse é uma pulseira que guia pessoas cegas e com baixa visão pela cidade. Conheça o problema que ela resolve."
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t5 = $[15];
        t6 = $[16];
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t4) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ...t4,
            className: "grid justify-items-center gap-3 text-center",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[18] = t4;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$PartesSolucao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTES_DA_SOLUCAO"].map(_AberturaPulseiraPARTES_DA_SOLUCAOMap);
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== refSvg) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: refSvg,
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 hidden size-full overflow-visible abertura-larga:block",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[21] = refSvg;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "textura-piso textura-centro absolute -inset-6"
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== palavra) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PalavraFundo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            texto: palavra,
            animarTroca: true,
            className: "inset-y-0 left-1/2 w-screen -translate-x-1/2"
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[24] = palavra;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== aoDesenhar || $[27] !== capa.capaNaTela || $[28] !== capa.preloaderNaTela || $[29] !== giro || $[30] !== parteAtiva) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pulseira$2f$Pulseira3D$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            modo: "abertura",
            giro: giro,
            parteAtiva: parteAtiva,
            aguardarEntrada: capa.capaNaTela,
            adiar: capa.preloaderNaTela,
            aoTrocarSinal: setSinalAtual,
            aoDesenhar: aoDesenhar,
            aoPronta: aoCenaPronta,
            aoFalhar: aoCenaFalhar,
            className: "mx-auto aspect-[1/0.92] w-full max-w-[30rem]"
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[26] = aoDesenhar;
        $[27] = capa.capaNaTela;
        $[28] = capa.preloaderNaTela;
        $[29] = giro;
        $[30] = parteAtiva;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t12 || $[33] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative abertura-larga:col-start-2 abertura-larga:row-span-3 abertura-larga:row-start-1",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[32] = t12;
        $[33] = t13;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] !== revelacao) {
        t15 = revelacao(0.06);
        $[35] = revelacao;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    const t16 = parada ? "Sinais da Pulse" : `Sinal · ${sinalAtual.nome}`;
    let t17;
    if ($[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: "rotulo-mono text-destaque",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    const t18 = parada ? "Veja cada sinal explicado na p\xE1gina Solu\xE7\xE3o." : sinalAtual.descricao;
    let t19;
    if ($[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: "text-auxiliar text-texto-2",
            children: t18
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== cenaPronta || $[42] !== efeitosLigados || $[43] !== giro) {
        t20 = cenaPronta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "group",
            "aria-label": "Girar a pulseira",
            className: "flex flex-wrap justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AberturaPulseira[<button>.onClick]": ()=>giro.girar(-45)
                    }["AberturaPulseira[<button>.onClick]"],
                    className: ESTILO_BOTAO_GIRO,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nome: "ArrowCounterClockwise"
                        }, void 0, false, {
                            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                            lineNumber: 231,
                            columnNumber: 78
                        }, this),
                        "Girar para a esquerda"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 121
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "AberturaPulseira[<button>.onClick]": ()=>giro.girar(45)
                    }["AberturaPulseira[<button>.onClick]"],
                    className: ESTILO_BOTAO_GIRO,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nome: "ArrowClockwise"
                        }, void 0, false, {
                            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                            lineNumber: 233,
                            columnNumber: 78
                        }, this),
                        "Girar para a direita"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                    lineNumber: 231,
                    columnNumber: 152
                }, this),
                efeitosLigados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-pressed": giro.girando,
                    onClick: giro.alternarGiro,
                    className: ESTILO_BOTAO_GIRO,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IconeAlternado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            chave: giro.girando ? "pausar" : "girar",
                            children: giro.girando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                nome: "Pause"
                            }, void 0, false, {
                                fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                                lineNumber: 233,
                                columnNumber: 345
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                nome: "Play"
                            }, void 0, false, {
                                fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                                lineNumber: 233,
                                columnNumber: 376
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                            lineNumber: 233,
                            columnNumber: 271
                        }, this),
                        "Girar sozinha"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                    lineNumber: 233,
                    columnNumber: 163
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 229,
            columnNumber: 25
        }, this);
        $[41] = cenaPronta;
        $[42] = efeitosLigados;
        $[43] = giro;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t15 || $[46] !== t17 || $[47] !== t19 || $[48] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ...t15,
            className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center abertura-larga:col-start-2 abertura-larga:row-start-4",
            children: [
                t17,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[45] = t15;
        $[46] = t17;
        $[47] = t19;
        $[48] = t20;
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] !== revelacao) {
        t22 = revelacao(0.12);
        $[50] = revelacao;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== parteAtiva || $[53] !== registrarNo || $[54] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$abertura$2f$PartesSolucao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            parteAtiva: parteAtiva,
            aoMudarParte: setParteAtiva,
            registrarNo: registrarNo,
            animacao: t22
        }, void 0, false, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[52] = parteAtiva;
        $[53] = registrarNo;
        $[54] = t22;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== refPalco || $[57] !== t10 || $[58] !== t14 || $[59] !== t21 || $[60] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refPalco,
            className: "relative mt-2 abertura-larga:grid abertura-larga:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] abertura-larga:grid-rows-[auto_auto_auto_auto] abertura-larga:items-center abertura-larga:gap-x-6 abertura-larga:gap-y-8",
            children: [
                t10,
                t14,
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[56] = refPalco;
        $[57] = t10;
        $[58] = t14;
        $[59] = t21;
        $[60] = t23;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] !== t24 || $[63] !== t8) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto grid max-w-pagina gap-2",
            children: [
                t8,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[62] = t24;
        $[63] = t8;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    let t26;
    if ($[65] !== t25 || $[66] !== t3) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            "aria-labelledby": "titulo-inicio",
            "data-encaixe": "",
            className: "relative overflow-x-clip margem-lateral pt-8 pb-10",
            children: [
                t3,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/AberturaPulseira.jsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[65] = t25;
        $[66] = t3;
        $[67] = t26;
    } else {
        t26 = $[67];
    }
    return t26;
}
_s(AberturaPulseira, "DvK0m0lFcngFOZRmxBM6ffi+V9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCapaIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCapaIntro"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGiroPulseira$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGiroPulseira"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLinhasPartes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinhasPartes"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEncaixe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEncaixe"]
    ];
});
_c = AberturaPulseira;
function _AberturaPulseiraPARTES_DA_SOLUCAOMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                "data-linha": item.parte,
                className: "fill-none stroke-destaque opacity-55 [stroke-dasharray:3_7] [stroke-width:1.6] [&.ativa]:opacity-100 [&.ativa]:[stroke-width:2.4]"
            }, void 0, false, {
                fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                lineNumber: 303,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                "data-ponto": item.parte,
                r: "4",
                className: "fill-destaque"
            }, void 0, false, {
                fileName: "[project]/components/abertura/AberturaPulseira.jsx",
                lineNumber: 303,
                columnNumber: 204
            }, this)
        ]
    }, item.parte, true, {
        fileName: "[project]/components/abertura/AberturaPulseira.jsx",
        lineNumber: 303,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AberturaPulseira");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/abertura/CapaIntro.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CapaIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VideoPulse$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/VideoPulse.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsultaMidia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useConsultaMidia.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CapaIntro(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "2bebe8ef1cbfdd7c926cd3d81e6230b89b6b6759178a83c0746ecfd1c4930f9e") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2bebe8ef1cbfdd7c926cd3d81e6230b89b6b6759178a83c0746ecfd1c4930f9e";
    }
    const { refCapa, saindo, aoTocar } = t0;
    const retrato = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsultaMidia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsultaMidia"])("(orientation: portrait)");
    const t1 = saindo ? "" : undefined;
    const t2 = retrato ? "animacao-capa-vertical" : "animacao-capa";
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VideoPulse$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: t2,
            fundo: true,
            className: "absolute inset-0"
        }, void 0, false, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[rgba(26,26,29,0.6)]"
        }, void 0, false, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "capa-logo absolute inset-0 grid place-items-center efeitos-desligados:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 100 100",
                fill: "none",
                stroke: "#FC4C02",
                strokeWidth: "6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "size-22",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "capa-logo-onda",
                        cx: "50",
                        cy: "50",
                        r: "34",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/abertura/CapaIntro.jsx",
                        lineNumber: 43,
                        columnNumber: 241
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: "34"
                    }, void 0, false, {
                        fileName: "[project]/components/abertura/CapaIntro.jsx",
                        lineNumber: 43,
                        columnNumber: 317
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 52h14l6-14 10 26 6-12h16"
                    }, void 0, false, {
                        fileName: "[project]/components/abertura/CapaIntro.jsx",
                        lineNumber: 43,
                        columnNumber: 350
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/abertura/CapaIntro.jsx",
                lineNumber: 43,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    let t7;
    let t8;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rotulo-mono rounded-[0.625rem] bg-[#1A1A1D] px-3 py-1.5 text-[#FC4C02]",
            children: "GS 2026.2 · CitizenTech"
        }, void 0, false, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-titulo text-[clamp(5.5rem,24vw,17rem)] leading-[0.85] tracking-[0.01em] uppercase",
            children: "Pulse"
        }, void 0, false, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "max-w-[26ch] rounded-[0.625rem] bg-[#1A1A1D] px-4 py-1.5 text-xl",
            children: "Um guia no pulso para atravessar a cidade."
        }, void 0, false, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[5] = t6;
        $[6] = t7;
        $[7] = t8;
    } else {
        t6 = $[5];
        t7 = $[6];
        t8 = $[7];
    }
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "capa-conteudo absolute inset-0 grid content-center justify-items-center gap-4 overflow-hidden px-[max(1rem,env(safe-area-inset-left))] py-6 text-center",
            children: [
                t6,
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-4 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#FC4C02] px-6 font-bold text-[#242428]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nome: "ArrowDown"
                        }, void 0, false, {
                            fileName: "[project]/components/abertura/CapaIntro.jsx",
                            lineNumber: 65,
                            columnNumber: 312
                        }, this),
                        "Toque, role ou aperte uma tecla"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/abertura/CapaIntro.jsx",
                    lineNumber: 65,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] !== aoTocar || $[10] !== refCapa || $[11] !== t1 || $[12] !== t3) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refCapa,
            "aria-hidden": "true",
            "data-saindo": t1,
            onClick: aoTocar,
            className: "capa-intro",
            children: [
                t3,
                t4,
                t5,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/CapaIntro.jsx",
            lineNumber: 72,
            columnNumber: 11
        }, this);
        $[9] = aoTocar;
        $[10] = refCapa;
        $[11] = t1;
        $[12] = t3;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    return t10;
}
_s(CapaIntro, "2Ugn9js1Hw0dI23xfzuKVm5LlOg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsultaMidia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsultaMidia"]
    ];
});
_c = CapaIntro;
var _c;
__turbopack_context__.k.register(_c, "CapaIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/abertura/FraseAcende.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FraseAcende
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFraseAcende$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFraseAcende.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// O leitor de tela lê a frase inteira de uma vez (sr-only); as palavras separadas,
// que acendem uma a uma, ficam com aria-hidden.
const PALAVRAS = [
    "Atravessar",
    "a",
    "rua",
    "não",
    "deveria",
    "depender",
    "de"
];
const DESTAQUE = "adivinhar.";
function FraseAcende() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "d8554b20482e9bbb570ce010261525d5674fd193501fcb0a3e220510cde75be3") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8554b20482e9bbb570ce010261525d5674fd193501fcb0a3e220510cde75be3";
    }
    const refFrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFraseAcende$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFraseAcende"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Atravessar a rua não deveria depender de adivinhar."
        }, void 0, false, {
            fileName: "[project]/components/abertura/FraseAcende.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = PALAVRAS.map(_FraseAcendePALAVRASMap);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "data-palavra": "",
            "data-destaque": "",
            children: DESTAQUE
        }, void 0, false, {
            fileName: "[project]/components/abertura/FraseAcende.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] !== refFrase) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            "aria-label": "Frase de abertura",
            className: "mt-20 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "frase-acende max-w-[20ch] text-[clamp(1.9rem,5.6vw,3.6rem)] leading-[1.18] font-bold tracking-[-0.01em]",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: refFrase,
                        "aria-hidden": "true",
                        children: [
                            t1,
                            t2
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/abertura/FraseAcende.jsx",
                        lineNumber: 39,
                        columnNumber: 197
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/abertura/FraseAcende.jsx",
                lineNumber: 39,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/abertura/FraseAcende.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = refFrase;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(FraseAcende, "7c4KPF8X4UjDE6VplZ0y3KThWe8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFraseAcende$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFraseAcende"]
    ];
});
_c = FraseAcende;
function _FraseAcendePALAVRASMap(palavra, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-palavra": "",
                children: palavra
            }, void 0, false, {
                fileName: "[project]/components/abertura/FraseAcende.jsx",
                lineNumber: 48,
                columnNumber: 24
            }, this),
            " "
        ]
    }, i, true, {
        fileName: "[project]/components/abertura/FraseAcende.jsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "FraseAcende");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/abertura/PartesSolucao.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PARTES_DA_SOLUCAO",
    ()=>PARTES_DA_SOLUCAO,
    "default",
    ()=>PartesSolucao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LinkInterno.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const PARTES_DA_SOLUCAO = [
    {
        parte: "destino",
        texto: "Como funciona",
        href: "/solucao#como-funciona",
        descricao: "Aperte o botão e diga o destino."
    },
    {
        parte: "esquerdo",
        texto: "Os sinais",
        href: "/solucao#os-sinais",
        descricao: "Cada comando tem uma vibração própria."
    },
    {
        parte: "faixa",
        texto: "Transporte público",
        href: "/solucao#transporte-publico",
        descricao: "Avisa a hora de embarcar no veículo certo."
    },
    {
        parte: "modo",
        texto: "Dois modos",
        href: "/solucao#dois-modos",
        descricao: "Sonoro e tátil, ou só tátil."
    },
    {
        parte: "direito",
        texto: "Semáforos",
        href: "/solucao#semaforos",
        descricao: "Dados reais para saber quando atravessar."
    },
    {
        parte: "pressao",
        texto: "Tecnologias",
        href: "/solucao#tecnologias",
        descricao: "GPS, ESP32, motores e atuadores."
    }
];
// Lugar de cada link na grade do computador (classes escritas por
// inteiro, para o Tailwind encontrá-las)
const POSICAO_NO_COMPUTADOR = [
    "abertura-larga:col-start-1 abertura-larga:row-start-1",
    "abertura-larga:col-start-1 abertura-larga:row-start-2",
    "abertura-larga:col-start-1 abertura-larga:row-start-3",
    "abertura-larga:col-start-3 abertura-larga:row-start-1",
    "abertura-larga:col-start-3 abertura-larga:row-start-2",
    "abertura-larga:col-start-3 abertura-larga:row-start-3"
];
function PartesSolucao(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "54cc2143a8517cd312f8dd0b236a3f44f262be0fed0e99faae12342ef3b7a57a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54cc2143a8517cd312f8dd0b236a3f44f262be0fed0e99faae12342ef3b7a57a";
    }
    const { parteAtiva, aoMudarParte, registrarNo, animacao } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: "titulo-partes",
            className: "sr-only",
            children: "Partes da solução"
        }, void 0, false, {
            fileName: "[project]/components/abertura/PartesSolucao.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== aoMudarParte || $[3] !== parteAtiva || $[4] !== registrarNo) {
        t2 = PARTES_DA_SOLUCAO.map({
            "PartesSolucao[PARTES_DA_SOLUCAO.map()]": (item, indice)=>{
                const ativa = parteAtiva === item.parte;
                const naEsquerda = indice < 3;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: `abertura-larga:pointer-events-auto abertura-larga:self-center ${POSICAO_NO_COMPUTADOR[indice]}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        onMouseEnter: {
                            "PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onMouseEnter]": ()=>aoMudarParte(item.parte)
                        }["PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onMouseEnter]"],
                        onMouseLeave: {
                            "PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onMouseLeave]": ()=>aoMudarParte(null)
                        }["PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onMouseLeave]"],
                        onFocus: {
                            "PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onFocus]": ()=>aoMudarParte(item.parte)
                        }["PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onFocus]"],
                        onBlur: {
                            "PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onBlur]": ()=>aoMudarParte(null)
                        }["PartesSolucao[PARTES_DA_SOLUCAO.map() > <LinkInterno>.onBlur]"],
                        className: `grid min-h-16 grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 rounded-[0.875rem] border px-4 py-3 text-texto no-underline transition-[translate,background-color,border-color] duration-200 abertura-larga:px-3 abertura-larga:py-2 ${naEsquerda ? "abertura-larga:grid-cols-[1fr_auto] abertura-larga:text-right" : ""} ${ativa ? "border-marca bg-superficie efeitos-ligados:-translate-y-0.5" : "border-borda bg-superficie abertura-larga:border-transparent abertura-larga:bg-transparent"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                ref: registrarNo(item.parte),
                                className: `row-span-2 size-3 rounded-full bg-acao shadow-[0_0_0_4px_color-mix(in_srgb,var(--cor-acao)_25%,transparent)] ${naEsquerda ? "abertura-larga:col-start-2 abertura-larga:row-start-1" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/abertura/PartesSolucao.jsx",
                                lineNumber: 81,
                                columnNumber: 576
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex items-center gap-1 text-lg leading-tight font-bold ${naEsquerda ? "abertura-larga:col-start-1 abertura-larga:row-start-1 abertura-larga:justify-end" : ""}`,
                                children: [
                                    item.texto,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        nome: "ArrowRight"
                                    }, void 0, false, {
                                        fileName: "[project]/components/abertura/PartesSolucao.jsx",
                                        lineNumber: 81,
                                        columnNumber: 1032
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/abertura/PartesSolucao.jsx",
                                lineNumber: 81,
                                columnNumber: 833
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-auxiliar leading-snug text-texto-2 ${naEsquerda ? "abertura-larga:col-start-1 abertura-larga:row-start-2" : ""}`,
                                children: item.descricao
                            }, void 0, false, {
                                fileName: "[project]/components/abertura/PartesSolucao.jsx",
                                lineNumber: 81,
                                columnNumber: 1072
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/abertura/PartesSolucao.jsx",
                        lineNumber: 73,
                        columnNumber: 146
                    }, this)
                }, item.parte, false, {
                    fileName: "[project]/components/abertura/PartesSolucao.jsx",
                    lineNumber: 73,
                    columnNumber: 16
                }, this);
            }
        }["PartesSolucao[PARTES_DA_SOLUCAO.map()]"]);
        $[2] = aoMudarParte;
        $[3] = parteAtiva;
        $[4] = registrarNo;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "grid gap-2.5 sm:grid-cols-2 abertura-larga:col-span-full abertura-larga:row-span-3 abertura-larga:grid-cols-subgrid abertura-larga:grid-rows-subgrid",
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/abertura/PartesSolucao.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== animacao || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].nav, {
            "aria-labelledby": "titulo-partes",
            ...animacao,
            className: "mt-6 abertura-larga:pointer-events-none abertura-larga:col-span-full abertura-larga:row-span-3 abertura-larga:row-start-1 abertura-larga:mt-0 abertura-larga:grid abertura-larga:grid-cols-subgrid abertura-larga:grid-rows-subgrid",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/PartesSolucao.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = animacao;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c = PartesSolucao;
var _c;
__turbopack_context__.k.register(_c, "PartesSolucao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/abertura/Preloader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Preloader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "63f6228f88277b664200fe1c2b05526ac72273b4ce26f9be2a20926c58bbde32") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "63f6228f88277b664200fe1c2b05526ac72273b4ce26f9be2a20926c58bbde32";
    }
    const { refPreloader, refContador, aoTocar } = t0;
    let t1;
    if ($[1] !== refContador) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: refContador,
            className: "font-titulo text-[clamp(5rem,26vw,14rem)] leading-none text-[#FC4C02] tabular-nums",
            children: "0"
        }, void 0, false, {
            fileName: "[project]/components/abertura/Preloader.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = refContador;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rotulo-mono absolute bottom-[calc(2rem+env(safe-area-inset-bottom))] text-[#C9C9CF]",
            children: "Pulse · carregando"
        }, void 0, false, {
            fileName: "[project]/components/abertura/Preloader.jsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== aoTocar || $[5] !== refPreloader || $[6] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refPreloader,
            "aria-hidden": "true",
            onClick: aoTocar,
            className: "preloader",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/Preloader.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = aoTocar;
        $[5] = refPreloader;
        $[6] = t1;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/abertura/TrajetoPulse.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrajetoPulse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$RotuloSecao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/RotuloSecao.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTrajeto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTrajeto.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// O mapa é decorativo (aria-hidden); a lista <ol> das paradas é o conteúdo de verdade.
// Rota no mapa (viewBox 600 × 400): 770 unidades de comprimento
const CAMINHO = "M60 350 H200 V245 H370 V100 H540 V60";
// Onde cada parada fica ao longo da rota (0 = saída; 1 = destino)
const FRACOES = [
    0,
    0.26,
    0.5,
    0.78,
    1
];
// Posição de cada parada no mapa, calculada a partir de CAMINHO e de
// FRACOES (assim o mapa já vem certo do servidor, sem JavaScript)
const POSICOES = [
    [
        60,
        350
    ],
    [
        200,
        289.8
    ],
    [
        340,
        245
    ],
    [
        410.6,
        100
    ],
    [
        540,
        60
    ]
];
const PARADAS = [
    {
        nome: "Saída",
        texto: "Continuar: pressão no pulso até você andar."
    },
    {
        nome: "Esquina",
        texto: "Virar à esquerda: vibração no lado esquerdo."
    },
    {
        nome: "Semáforo fechado",
        texto: "Parar. Quando o sinal abre, Continuar."
    },
    {
        nome: "Ponto de ônibus",
        texto: "Aguardar: três vibrações curtas até o ônibus certo chegar."
    },
    {
        nome: "Destino",
        texto: "Chegada sem precisar olhar o celular."
    }
];
function TrajetoPulse() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "a22d057b4e556ed39e8300a8692323d32959f7e1a79d406aa642f51427b94251") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a22d057b4e556ed39e8300a8692323d32959f7e1a79d406aa642f51427b94251";
    }
    const { refSecao, refTrilho, refPalco, refCaminho, refPonto, refLista } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTrajeto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrajeto"])(FRACOES);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-3 lg:col-span-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$RotuloSecao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: "No caminho"
                }, void 0, false, {
                    fileName: "[project]/components/abertura/TrajetoPulse.jsx",
                    lineNumber: 50,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "um-trajeto-com-a-pulse",
                    tabIndex: -1,
                    className: "scroll-mt-10",
                    children: "Um trajeto com a Pulse"
                }, void 0, false, {
                    fileName: "[project]/components/abertura/TrajetoPulse.jsx",
                    lineNumber: 50,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            className: "quadra",
            x: "30",
            y: "30",
            width: "140",
            height: "110",
            rx: "10"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            className: "quadra",
            x: "230",
            y: "30",
            width: "110",
            height: "60",
            rx: "10"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            className: "quadra",
            x: "30",
            y: "200",
            width: "140",
            height: "120",
            rx: "10"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            className: "quadra",
            x: "230",
            y: "150",
            width: "100",
            height: "60",
            rx: "10"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            className: "quadra",
            x: "400",
            y: "120",
            width: "170",
            height: "90",
            rx: "10"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            className: "quadra",
            x: "230",
            y: "270",
            width: "340",
            height: "100",
            rx: "10"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            className: "rua",
            d: "M10 175 H590 M200 10 V390 M370 10 V390 M10 245 H590"
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] !== refCaminho) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            ref: refCaminho,
            className: "caminho",
            d: CAMINHO
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = refCaminho;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = POSICOES.map(_TrajetoPulsePOSICOESMap);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== refPonto) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            ref: refPonto,
            className: "ponto",
            r: "11",
            cx: POSICOES[4][0],
            cy: POSICOES[4][1]
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[12] = refPonto;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 600 400",
            "aria-hidden": "true",
            focusable: "false",
            className: "trajeto-mapa aspect-[3/2] max-h-[46svh] w-full rounded-[1.375rem] border-2 border-borda bg-superficie lg:max-h-[70svh]",
            children: [
                t1,
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t8;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = PARADAS.map(_TrajetoPulsePARADASMap);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== refLista) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            ref: refLista,
            className: "trajeto-paradas grid grid-cols-1 gap-2",
            children: t12
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[18] = refLista;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== refPalco || $[21] !== t11 || $[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refPalco,
            className: "trajeto-palco grid grid-cols-1 gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-x-10",
            children: [
                t0,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[20] = refPalco;
        $[21] = t11;
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== refTrilho || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refTrilho,
            className: "trajeto-trilho",
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[24] = refTrilho;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== refSecao || $[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: refSecao,
            "data-secao-fixa": "",
            className: "trajeto mt-20",
            children: t15
        }, void 0, false, {
            fileName: "[project]/components/abertura/TrajetoPulse.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[27] = refSecao;
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    return t16;
}
_s(TrajetoPulse, "3SPltN3g31LNk6LVxSkvxINqJJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTrajeto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrajeto"]
    ];
});
_c = TrajetoPulse;
function _TrajetoPulsePARADASMap(parada) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: parada.nome
            }, void 0, false, {
                fileName: "[project]/components/abertura/TrajetoPulse.jsx",
                lineNumber: 164,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: parada.texto
            }, void 0, false, {
                fileName: "[project]/components/abertura/TrajetoPulse.jsx",
                lineNumber: 164,
                columnNumber: 62
            }, this)
        ]
    }, parada.nome, true, {
        fileName: "[project]/components/abertura/TrajetoPulse.jsx",
        lineNumber: 164,
        columnNumber: 10
    }, this);
}
function _TrajetoPulsePOSICOESMap(t0, i) {
    const [x, y] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        "data-parada-mapa": "",
        "data-chegou": "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                className: "parada",
                cx: x,
                cy: y,
                r: "15"
            }, void 0, false, {
                fileName: "[project]/components/abertura/TrajetoPulse.jsx",
                lineNumber: 168,
                columnNumber: 56
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                className: "numero",
                x: x,
                y: y + 5,
                children: i + 1
            }, void 0, false, {
                fileName: "[project]/components/abertura/TrajetoPulse.jsx",
                lineNumber: 168,
                columnNumber: 106
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/components/abertura/TrajetoPulse.jsx",
        lineNumber: 168,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TrajetoPulse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/IndiceNestaPagina.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndiceNestaPagina
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSecaoAtual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSecaoAtual.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Regra: a pílula da seção atual fica laranja, com aria-current (decisão 1 da Fase 8).
// Só gruda a partir de 1024 × 700 px, para não tirar espaço da tela.
const CONSULTA_FAIXA_FIXA = "(min-width: 64rem) and (min-height: 43.75rem)";
function IndiceNestaPagina(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "89905b907c916579c24c2fde4a6f831101a15adbdacd76aac2052f3d4c99e961") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89905b907c916579c24c2fde4a6f831101a15adbdacd76aac2052f3d4c99e961";
    }
    const { itens } = t0;
    const atual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSecaoAtual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSecaoAtual"])(itens);
    const refIndice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "IndiceNestaPagina[useEffect()]": ()=>{
                const indice = refIndice.current;
                if (!indice) {
                    return;
                }
                const raiz = document.documentElement;
                const consulta = window.matchMedia(CONSULTA_FAIXA_FIXA);
                const atualizar = function atualizar() {
                    const altura = consulta.matches ? indice.offsetHeight : 0;
                    raiz.style.setProperty("--altura-indice", `${altura}px`);
                };
                const observador = new ResizeObserver(atualizar);
                observador.observe(indice);
                consulta.addEventListener("change", atualizar);
                atualizar();
                return ()=>{
                    observador.disconnect();
                    consulta.removeEventListener("change", atualizar);
                    raiz.style.removeProperty("--altura-indice");
                };
            }
        })["IndiceNestaPagina[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: "titulo-nesta-pagina",
            className: "sr-only",
            children: "Nesta página"
        }, void 0, false, {
            fileName: "[project]/components/layout/IndiceNestaPagina.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== atual || $[5] !== itens) {
        let t5;
        if ($[7] !== atual) {
            t5 = ({
                "IndiceNestaPagina[itens.map()]": (item)=>{
                    const ehAtual = atual === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${item.id}`,
                            "aria-current": ehAtual ? "true" : undefined,
                            className: `inline-flex min-h-12 items-center rounded-full border px-4 text-auxiliar font-bold no-underline transicao-fundo ${ehAtual ? "border-acao bg-acao text-sobre-acao" : "border-borda bg-superficie text-texto hover:bg-hover"}`,
                            children: item.texto
                        }, void 0, false, {
                            fileName: "[project]/components/layout/IndiceNestaPagina.jsx",
                            lineNumber: 71,
                            columnNumber: 36
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/components/layout/IndiceNestaPagina.jsx",
                        lineNumber: 71,
                        columnNumber: 18
                    }, this);
                }
            })["IndiceNestaPagina[itens.map()]"];
            $[7] = atual;
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        t4 = itens.map(t5);
        $[4] = atual;
        $[5] = itens;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            ref: refIndice,
            "aria-labelledby": "titulo-nesta-pagina",
            className: "margem-lateral z-20 bg-fundo py-3 faixa-fixa:sticky faixa-fixa:top-[var(--altura-cabecalho)] faixa-fixa:border-b faixa-fixa:border-borda",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-pagina",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap gap-2",
                        children: t4
                    }, void 0, false, {
                        fileName: "[project]/components/layout/IndiceNestaPagina.jsx",
                        lineNumber: 88,
                        columnNumber: 260
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/IndiceNestaPagina.jsx",
                lineNumber: 88,
                columnNumber: 218
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/IndiceNestaPagina.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(IndiceNestaPagina, "Kw1XCsMh0W6qbwshyWjbTuxayWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSecaoAtual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSecaoAtual"]
    ];
});
_c = IndiceNestaPagina;
var _c;
__turbopack_context__.k.register(_c, "IndiceNestaPagina");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/RotuloSecao.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RotuloSecao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLinhaRotulo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLinhaRotulo.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RotuloSecao(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "ca1058c43a5abfdc706322d02d10da46a877cb8bef713217a1dc99f572ecb4e2") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ca1058c43a5abfdc706322d02d10da46a877cb8bef713217a1dc99f572ecb4e2";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const refLinha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLinhaRotulo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinhaRotulo"])();
    const t2 = `rotulo-mono flex items-center gap-3 text-destaque ${className}`;
    let t3;
    if ($[1] !== refLinha) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: refLinha,
            "aria-hidden": "true",
            className: "h-[3px] w-6 shrink-0 origin-left rounded-full bg-acao"
        }, void 0, false, {
            fileName: "[project]/components/layout/RotuloSecao.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = refLinha;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== children || $[4] !== t2 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t2,
            children: [
                t3,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/RotuloSecao.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_s(RotuloSecao, "q1JDDPyEsUeRCRFAWEXIQV2+gRA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLinhaRotulo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLinhaRotulo"]
    ];
});
_c = RotuloSecao;
var _c;
__turbopack_context__.k.register(_c, "RotuloSecao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/pulseira/Pulseira3D.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESCRICAO_DA_PULSEIRA",
    ()=>DESCRICAO_DA_PULSEIRA,
    "default",
    ()=>Pulseira3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DESCRICAO_DA_PULSEIRA = "Pulseira Pulse: tira esportiva laranja de silicone, com fecho embaixo do pulso. Na frente, um módulo com face grafite e, de cima para baixo: os furos do microfone, o botão grande do destino (côncavo, com anéis em relevo), a célula Braille com 6 pinos que sobem e descem e o botão pequeno de modo (com um ponto em relevo). Por dentro da tira ficam as zonas de vibração, nos dois lados do pulso, e o atuador de pressão, embaixo do módulo. Nas laterais da face, cinco pontos de luz de cada lado acendem junto com a vibração. Os contatos de carga ficam na ponta de baixo do módulo.";
const CenaPulseira = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/pulseira/CenaPulseira.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/pulseira/CenaPulseira.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
_c = CenaPulseira;
function Pulseira3D(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "ee6284b5a30c8cf8bbc898df167eae78404b1802a4e99aca384ad204795618dc") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee6284b5a30c8cf8bbc898df167eae78404b1802a4e99aca384ad204795618dc";
    }
    const { modo: t1, giro, sinal, pausado: t2, parteAtiva: t3, sinalAtivo: t4, aguardarEntrada: t5, adiar: t6, aoTrocarSinal, aoDesenhar, aoPronta, aoFalhar, className: t7 } = t0;
    const modo = t1 === undefined ? "abertura" : t1;
    const pausado = t2 === undefined ? false : t2;
    const parteAtiva = t3 === undefined ? null : t3;
    const sinalAtivo = t4 === undefined ? null : t4;
    const aguardarEntrada = t5 === undefined ? false : t5;
    const adiar = t6 === undefined ? false : t6;
    const className = t7 === undefined ? "" : t7;
    const [pronta, setPronta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [falhou, setFalhou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idDescricao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const interativo = modo === "abertura" || modo === "explorar";
    let t8;
    if ($[1] !== aoPronta) {
        t8 = function aoFicarPronta() {
            setPronta(true);
            aoPronta?.();
        };
        $[1] = aoPronta;
        $[2] = t8;
    } else {
        t8 = $[2];
    }
    const aoFicarPronta = t8;
    let t9;
    if ($[3] !== aoFalhar) {
        t9 = function aoFalharCena() {
            setFalhou(true);
            aoFalhar?.();
        };
        $[3] = aoFalhar;
        $[4] = t9;
    } else {
        t9 = $[4];
    }
    const aoFalharCena = t9;
    const mostrarReserva = (!pronta || falhou) && modo !== "sinal";
    const t10 = `relative ${className}`;
    let t11;
    if ($[5] !== adiar || $[6] !== aguardarEntrada || $[7] !== aoDesenhar || $[8] !== aoFalharCena || $[9] !== aoFicarPronta || $[10] !== aoTrocarSinal || $[11] !== falhou || $[12] !== giro || $[13] !== idDescricao || $[14] !== interativo || $[15] !== modo || $[16] !== parteAtiva || $[17] !== pausado || $[18] !== pronta || $[19] !== sinal || $[20] !== sinalAtivo) {
        t11 = !falhou && !adiar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CenaPulseira, {
            modo: modo,
            interativo: interativo,
            pronta: pronta,
            idDescricao: idDescricao,
            giro: giro,
            sinal: sinal,
            pausado: pausado,
            parteAtiva: parteAtiva,
            sinalAtivo: sinalAtivo,
            aguardarEntrada: aguardarEntrada,
            aoTrocarSinal: aoTrocarSinal,
            aoDesenhar: aoDesenhar,
            aoPronta: aoFicarPronta,
            aoFalhar: aoFalharCena
        }, void 0, false, {
            fileName: "[project]/components/pulseira/Pulseira3D.jsx",
            lineNumber: 77,
            columnNumber: 32
        }, this);
        $[5] = adiar;
        $[6] = aguardarEntrada;
        $[7] = aoDesenhar;
        $[8] = aoFalharCena;
        $[9] = aoFicarPronta;
        $[10] = aoTrocarSinal;
        $[11] = falhou;
        $[12] = giro;
        $[13] = idDescricao;
        $[14] = interativo;
        $[15] = modo;
        $[16] = parteAtiva;
        $[17] = pausado;
        $[18] = pronta;
        $[19] = sinal;
        $[20] = sinalAtivo;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== idDescricao || $[23] !== interativo || $[24] !== mostrarReserva) {
        t12 = (mostrarReserva || interativo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: idDescricao,
            "aria-hidden": interativo ? undefined : "true",
            className: mostrarReserva ? "grid h-full place-items-center p-6 text-center text-auxiliar text-texto-2" : "sr-only",
            children: DESCRICAO_DA_PULSEIRA
        }, void 0, false, {
            fileName: "[project]/components/pulseira/Pulseira3D.jsx",
            lineNumber: 100,
            columnNumber: 45
        }, this);
        $[22] = idDescricao;
        $[23] = interativo;
        $[24] = mostrarReserva;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t10 || $[27] !== t11 || $[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/pulseira/Pulseira3D.jsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    return t13;
}
_s(Pulseira3D, "XqE+ePtsYUiJehIsEtB0RQeap0A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = Pulseira3D;
var _c, _c1;
__turbopack_context__.k.register(_c, "CenaPulseira");
__turbopack_context__.k.register(_c1, "Pulseira3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/EspacoImagem.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EspacoImagem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
;
;
;
const FORMATOS = {
    paisagem: "aspect-video w-full",
    quadrado: "aspect-square",
    retrato: "aspect-[4/5] w-full",
    livre: "size-full"
};
function EspacoImagem(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "5090e51961838c68aedfb4f8447bda5113649be50fe535c88a3fc64800932798") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5090e51961838c68aedfb4f8447bda5113649be50fe535c88a3fc64800932798";
    }
    const { texto, formato: t1, className: t2 } = t0;
    const formato = t1 === undefined ? "paisagem" : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = `flex flex-col items-center justify-center gap-2 rounded-cartao border-2 border-dashed border-borda bg-superficie text-center text-auxiliar text-texto-2 ${texto ? "p-6" : "p-2"} ${FORMATOS[formato]} ${className}`;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: "Image"
        }, void 0, false, {
            fileName: "[project]/components/ui/EspacoImagem.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    let t5;
    if ($[2] !== texto) {
        t5 = texto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: texto
        }, void 0, false, {
            fileName: "[project]/components/ui/EspacoImagem.jsx",
            lineNumber: 34,
            columnNumber: 19
        }, this);
        $[2] = texto;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== t3 || $[5] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/EspacoImagem.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    return t6;
}
_c = EspacoImagem;
var _c;
__turbopack_context__.k.register(_c, "EspacoImagem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/FaixaTexto.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaixaTexto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaixaTexto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFaixaTexto.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TEXTO = "Pulse · um guia no pulso · Pulse · um guia no pulso ·";
function FaixaTexto() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e2614202856e1e25b0c11dfecdc7d3253c1fa1ab1d20883c215b8bd6d0be3afc") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e2614202856e1e25b0c11dfecdc7d3253c1fa1ab1d20883c215b8bd6d0be3afc";
    }
    const refTrilho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaixaTexto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaixaTexto"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: TEXTO
        }, void 0, false, {
            fileName: "[project]/components/ui/FaixaTexto.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: TEXTO
        }, void 0, false, {
            fileName: "[project]/components/ui/FaixaTexto.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] !== refTrilho) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "faixa-texto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: refTrilho,
                className: "faixa-texto-trilho",
                children: [
                    t0,
                    t1
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/FaixaTexto.jsx",
                lineNumber: 28,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/FaixaTexto.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = refTrilho;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(FaixaTexto, "eVNirTVs6husk3+IMjjJ15HXddU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaixaTexto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaixaTexto"]
    ];
});
_c = FaixaTexto;
var _c;
__turbopack_context__.k.register(_c, "FaixaTexto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/NumeroContado.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NumeroContado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useContagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useContagem.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function NumeroContado(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "07cf3a983adc3f785ba7b2f69674caab4e8d4b2cbdc80261e4e31c75ab5bb7f6") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07cf3a983adc3f785ba7b2f69674caab4e8d4b2cbdc80261e4e31c75ab5bb7f6";
    }
    const { valor, casas: t1, antes: t2, depois: t3, textoReal, className: t4 } = t0;
    const casas = t1 === undefined ? 0 : t1;
    const antes = t2 === undefined ? "" : t2;
    const depois = t3 === undefined ? "" : t3;
    const className = t4 === undefined ? "" : t4;
    let t5;
    if ($[1] !== antes || $[2] !== casas || $[3] !== depois || $[4] !== valor) {
        t5 = {
            valor,
            casas,
            antes,
            depois
        };
        $[1] = antes;
        $[2] = casas;
        $[3] = depois;
        $[4] = valor;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const refNumero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useContagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContagem"])(t5);
    let t6;
    if ($[6] !== antes || $[7] !== casas || $[8] !== depois || $[9] !== valor) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useContagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatarNumero"])(valor, casas, antes, depois);
        $[6] = antes;
        $[7] = casas;
        $[8] = depois;
        $[9] = valor;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== refNumero || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: refNumero,
            "aria-hidden": "true",
            children: t6
        }, void 0, false, {
            fileName: "[project]/components/ui/NumeroContado.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[11] = refNumero;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== textoReal) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: textoReal
        }, void 0, false, {
            fileName: "[project]/components/ui/NumeroContado.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[14] = textoReal;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== className || $[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: className,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/NumeroContado.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[16] = className;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    return t9;
}
_s(NumeroContado, "uuhVgpTdqz6Fe4fTyuuCLF8TRZY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useContagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContagem"]
    ];
});
_c = NumeroContado;
var _c;
__turbopack_context__.k.register(_c, "NumeroContado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PalavraFundo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PalavraFundo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Regra: tamanho min(21rem, 150vw ÷ letras), contando no mínimo 5 letras (18.6), para
// caber na tela sem rolagem lateral.
function tamanhoDaPalavra(texto) {
    const letras = Math.max(5, texto.length);
    return `min(21rem, ${(150 / letras).toFixed(1)}vw)`;
}
function PalavraFundo(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "ec46a9c6eb2c3977675d713df850dd04f6d5b9f0cb31cadd43531756b4105ec9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec46a9c6eb2c3977675d713df850dd04f6d5b9f0cb31cadd43531756b4105ec9";
    }
    const { texto, animarTroca: t1, className: t2, tamanho } = t0;
    const animarTroca = t1 === undefined ? false : t1;
    const className = t2 === undefined ? "inset-0" : t2;
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const duracao = animarTroca && efeitosLigados ? 0.35 : 0;
    const t3 = `pointer-events-none absolute flex items-center justify-center overflow-hidden ${className}`;
    let t4;
    if ($[1] !== tamanho || $[2] !== texto) {
        t4 = tamanho ?? tamanhoDaPalavra(texto);
        $[1] = tamanho;
        $[2] = texto;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== t4) {
        t5 = {
            fontSize: t4
        };
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    let t7;
    let t8;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0
        };
        t7 = {
            opacity: 1
        };
        t8 = {
            opacity: 0
        };
        $[6] = t6;
        $[7] = t7;
        $[8] = t8;
    } else {
        t6 = $[6];
        t7 = $[7];
        t8 = $[8];
    }
    let t9;
    if ($[9] !== duracao) {
        t9 = {
            duration: duracao
        };
        $[9] = duracao;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== t5 || $[12] !== t9 || $[13] !== texto) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            initial: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                className: "palavra-fundo",
                style: t5,
                initial: t6,
                animate: t7,
                exit: t8,
                transition: t9,
                children: texto
            }, texto, false, {
                fileName: "[project]/components/ui/PalavraFundo.jsx",
                lineNumber: 87,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/PalavraFundo.jsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[11] = t5;
        $[12] = t9;
        $[13] = texto;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: t3,
            children: t10
        }, void 0, false, {
            fileName: "[project]/components/ui/PalavraFundo.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t3;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    return t11;
}
_s(PalavraFundo, "Mj3NimG2TEuMOw8Crfq1OJXL/CU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
_c = PalavraFundo;
var _c;
__turbopack_context__.k.register(_c, "PalavraFundo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/TextoConstroi.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextoConstroi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTextoConstroi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTextoConstroi.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TextoConstroi(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "90e027df939a30072b4ae95024740e0b2b2a25ada4d994b93c5814048e7fdd08") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "90e027df939a30072b4ae95024740e0b2b2a25ada4d994b93c5814048e7fdd08";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const refBloco = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTextoConstroi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextoConstroi"])();
    let t2;
    if ($[1] !== children || $[2] !== className || $[3] !== refBloco) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refBloco,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/TextoConstroi.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = className;
        $[3] = refBloco;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(TextoConstroi, "J/xcncW2baQvdCrVqi13+yzafCk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTextoConstroi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextoConstroi"]
    ];
});
_c = TextoConstroi;
var _c;
__turbopack_context__.k.register(_c, "TextoConstroi");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/VideoPulse.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlesVideo",
    ()=>ControlesVideo,
    "caminhosDoVideo",
    ()=>caminhosDoVideo,
    "default",
    ()=>VideoPulse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IconeAlternado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/IconeAlternado.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoImagem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoImagem.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVideoPulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVideoPulse.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Regra: "Pausar" sempre visível (WCAG 2.2.2); o texto do botão diz a ação, sem
// aria-pressed (decisão da 9.8).
const ESTILO_BOTAO = "inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-borda bg-superficie px-4 text-center font-bold text-texto hover:border-marca";
function caminhosDoVideo(nome) {
    return {
        video: `/videos/${nome}.mp4`,
        quadroParado: `/videos/${nome}-quadro-parado.jpg`,
        legendas: `/videos/${nome}-legendas.vtt`
    };
}
function ControlesVideo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "0d58045e259966d028f9efe78499ccd05318b6e9fb975dc54456ced96c6487cc") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0d58045e259966d028f9efe78499ccd05318b6e9fb975dc54456ced96c6487cc";
    }
    const { tocando, aoAlternarPausa, comSom: t1, somLigado: t2, aoAlternarSom, className: t3 } = t0;
    const comSom = t1 === undefined ? false : t1;
    const somLigado = t2 === undefined ? false : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `flex flex-wrap gap-2 ${className}`;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            scale: 0.97
        };
        $[1] = t5;
    } else {
        t5 = $[1];
    }
    const t6 = tocando ? "pausar" : "reproduzir";
    let t7;
    if ($[2] !== tocando) {
        t7 = tocando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: "Pause"
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 53,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: "Play"
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 53,
            columnNumber: 51
        }, this);
        $[2] = tocando;
        $[3] = t7;
    } else {
        t7 = $[3];
    }
    let t8;
    if ($[4] !== t6 || $[5] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IconeAlternado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            chave: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t6;
        $[5] = t7;
        $[6] = t8;
    } else {
        t8 = $[6];
    }
    const t9 = tocando ? "Pausar" : "Reproduzir";
    let t10;
    if ($[7] !== aoAlternarPausa || $[8] !== t8 || $[9] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
            type: "button",
            whileTap: t5,
            onClick: aoAlternarPausa,
            className: ESTILO_BOTAO,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 71,
            columnNumber: 11
        }, this);
        $[7] = aoAlternarPausa;
        $[8] = t8;
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== aoAlternarSom || $[12] !== comSom || $[13] !== somLigado) {
        t11 = comSom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
            type: "button",
            whileTap: {
                scale: 0.97
            },
            onClick: aoAlternarSom,
            className: ESTILO_BOTAO,
            children: [
                somLigado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nome: "SpeakerSlash"
                }, void 0, false, {
                    fileName: "[project]/components/ui/VideoPulse.jsx",
                    lineNumber: 83,
                    columnNumber: 70
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nome: "SpeakerHigh"
                }, void 0, false, {
                    fileName: "[project]/components/ui/VideoPulse.jsx",
                    lineNumber: 83,
                    columnNumber: 108
                }, this),
                somLigado ? "Desativar som" : "Ativar som"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 81,
            columnNumber: 21
        }, this);
        $[11] = aoAlternarSom;
        $[12] = comSom;
        $[13] = somLigado;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t10 || $[16] !== t11 || $[17] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
        $[17] = t4;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    return t12;
}
_c = ControlesVideo;
function VideoPulse(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "0d58045e259966d028f9efe78499ccd05318b6e9fb975dc54456ced96c6487cc") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0d58045e259966d028f9efe78499ccd05318b6e9fb975dc54456ced96c6487cc";
    }
    const { nome, comSom: t1, fundo: t2, ativo: t3, idTitulo, idDescricao, className: t4, classeCaixa: t5, classeControles: t6 } = t0;
    const comSom = t1 === undefined ? false : t1;
    const fundo = t2 === undefined ? false : t2;
    const ativo = t3 === undefined ? true : t3;
    const className = t4 === undefined ? "" : t4;
    const classeCaixa = t5 === undefined ? "" : t5;
    const classeControles = t6 === undefined ? "" : t6;
    let t7;
    if ($[1] !== ativo || $[2] !== nome) {
        t7 = {
            ativo,
            chave: nome
        };
        $[1] = ativo;
        $[2] = nome;
        $[3] = t7;
    } else {
        t7 = $[3];
    }
    const { refContainer, propsVideo, tocando, somLigado, falhou, alternarPausa, alternarSom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVideoPulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoPulse"])(t7);
    let t8;
    if ($[4] !== nome) {
        t8 = caminhosDoVideo(nome);
        $[4] = nome;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const caminhos = t8;
    let t9;
    if ($[6] !== propsVideo) {
        t9 = propsVideo(0);
        $[6] = propsVideo;
        $[7] = t9;
    } else {
        t9 = $[7];
    }
    const t10 = fundo ? undefined : idTitulo;
    const t11 = fundo ? undefined : idDescricao;
    let t12;
    if ($[8] !== caminhos.legendas || $[9] !== comSom) {
        t12 = comSom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
            kind: "captions",
            srcLang: "pt-BR",
            label: "Portugu\xEAs",
            src: caminhos.legendas
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 170,
            columnNumber: 21
        }, this);
        $[8] = caminhos.legendas;
        $[9] = comSom;
        $[10] = t12;
    } else {
        t12 = $[10];
    }
    let t13;
    if ($[11] !== caminhos.quadroParado || $[12] !== caminhos.video || $[13] !== t10 || $[14] !== t11 || $[15] !== t12 || $[16] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ...t9,
            src: caminhos.video,
            "data-src": caminhos.video,
            poster: caminhos.quadroParado,
            muted: true,
            playsInline: true,
            preload: "none",
            "aria-labelledby": t10,
            "aria-describedby": t11,
            className: "size-full object-cover",
            children: t12
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[11] = caminhos.quadroParado;
        $[12] = caminhos.video;
        $[13] = t10;
        $[14] = t11;
        $[15] = t12;
        $[16] = t9;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    const elementoVideo = t13;
    if (fundo) {
        const t14 = !falhou && elementoVideo;
        let t15;
        if ($[18] !== className || $[19] !== refContainer || $[20] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: refContainer,
                "aria-hidden": "true",
                className: className,
                children: t14
            }, void 0, false, {
                fileName: "[project]/components/ui/VideoPulse.jsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            $[18] = className;
            $[19] = refContainer;
            $[20] = t14;
            $[21] = t15;
        } else {
            t15 = $[21];
        }
        return t15;
    }
    const t14 = `grid gap-3 ${className}`;
    const t15 = `relative aspect-video overflow-hidden rounded-cartao bg-[var(--cor-cortina)] ${classeCaixa}`;
    let t16;
    if ($[22] !== elementoVideo || $[23] !== falhou || $[24] !== nome) {
        t16 = falhou ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoImagem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            texto: `Vídeo ${nome} (a definir)`,
            formato: "livre",
            className: "absolute inset-0"
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 209,
            columnNumber: 20
        }, this) : elementoVideo;
        $[22] = elementoVideo;
        $[23] = falhou;
        $[24] = nome;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t15 || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== alternarPausa || $[30] !== alternarSom || $[31] !== classeControles || $[32] !== comSom || $[33] !== falhou || $[34] !== somLigado || $[35] !== tocando) {
        t18 = !falhou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlesVideo, {
            tocando: tocando,
            aoAlternarPausa: alternarPausa,
            comSom: comSom,
            somLigado: somLigado,
            aoAlternarSom: alternarSom,
            className: classeControles
        }, void 0, false, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 228,
            columnNumber: 22
        }, this);
        $[29] = alternarPausa;
        $[30] = alternarSom;
        $[31] = classeControles;
        $[32] = comSom;
        $[33] = falhou;
        $[34] = somLigado;
        $[35] = tocando;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== refContainer || $[38] !== t14 || $[39] !== t17 || $[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refContainer,
            className: t14,
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/VideoPulse.jsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[37] = refContainer;
        $[38] = t14;
        $[39] = t17;
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    return t19;
}
_s(VideoPulse, "kmbLwCa3vickGKhOhPNAbiX0pI4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVideoPulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoPulse"]
    ];
});
_c1 = VideoPulse;
var _c, _c1;
__turbopack_context__.k.register(_c, "ControlesVideo");
__turbopack_context__.k.register(_c1, "VideoPulse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCapaIntro.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCapaIntro",
    ()=>useCapaIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRolagemSuave.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Regra: só na primeira visita da sessão e com os efeitos ligados (18.6, 18.14).
// Qualquer gesto, tecla ou foco abre o site, para o foco nunca ficar escondido.
const CHAVE = "pulse-capa-vista";
const RAIO_INICIAL = 22; // px
const DURACAO_DA_SAIDA = 1; // s
const DURACAO_DA_CONTAGEM = 1.4; // s (PADRAO_MOVIMENTO_PULSE, item 5c)
const DURACAO_DO_SUMICO = 0.35; // s (seção 19.6)
function precisaDaCapa() {
    try {
        return !window.sessionStorage.getItem(CHAVE);
    } catch  {
        return true;
    }
}
function marcarCapaVista() {
    try {
        window.sessionStorage.setItem(CHAVE, "1");
    } catch  {
    // Sem armazenamento: a capa volta na próxima visita, e tudo bem.
    }
}
// O sessionStorage não avisa mudanças; quem muda a chave é este hook.
const naoAssina = ()=>()=>{};
const noServidor = ()=>false;
function useCapaIntro() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "039972705f49db4b03e938017245ced432bdccdceca3cf9d29dd3ac0b4f4115d") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "039972705f49db4b03e938017245ced432bdccdceca3cf9d29dd3ac0b4f4115d";
    }
    const precisa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(naoAssina, precisaDaCapa, noServidor);
    const [fase, setFase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("preloader");
    const refCapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refPreloader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refContador = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refAnimacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRolagemSuave"])();
    const { efeitosLigados, efeitosConhecidos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const capaNaTela = precisa && efeitosLigados && fase !== "fim";
    const saindo = capaNaTela && fase === "saindo";
    const preloaderNaTela = capaNaTela && fase === "preloader";
    let t0;
    if ($[1] !== capaNaTela || $[2] !== fase) {
        t0 = function sair() {
            if (!capaNaTela || fase !== "ativa" && fase !== "preloader") {
                return;
            }
            setFase("saindo");
        };
        $[1] = capaNaTela;
        $[2] = fase;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const sair = t0;
    let t1;
    let t2;
    if ($[4] !== efeitosConhecidos || $[5] !== efeitosLigados || $[6] !== precisa) {
        t1 = ({
            "useCapaIntro[useEffect()]": ()=>{
                if (efeitosConhecidos && !efeitosLigados && precisa) {
                    marcarCapaVista();
                }
            }
        })["useCapaIntro[useEffect()]"];
        t2 = [
            efeitosConhecidos,
            efeitosLigados,
            precisa
        ];
        $[4] = efeitosConhecidos;
        $[5] = efeitosLigados;
        $[6] = precisa;
        $[7] = t1;
        $[8] = t2;
    } else {
        t1 = $[7];
        t2 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[9] !== capaNaTela) {
        t3 = ({
            "useCapaIntro[useEffect()]": ()=>{
                if (capaNaTela || !precisaDaCapa()) {
                    document.documentElement.removeAttribute("data-capa-pendente");
                }
            }
        })["useCapaIntro[useEffect()]"];
        t4 = [
            capaNaTela
        ];
        $[9] = capaNaTela;
        $[10] = t3;
        $[11] = t4;
    } else {
        t3 = $[10];
        t4 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[12] !== capaNaTela || $[13] !== lenis) {
        t5 = ({
            "useCapaIntro[useEffect()]": ()=>{
                if (!capaNaTela || !lenis) {
                    return;
                }
                lenis.stop();
                return ()=>lenis.start();
            }
        })["useCapaIntro[useEffect()]"];
        t6 = [
            capaNaTela,
            lenis
        ];
        $[12] = capaNaTela;
        $[13] = lenis;
        $[14] = t5;
        $[15] = t6;
    } else {
        t5 = $[14];
        t6 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[16] !== preloaderNaTela) {
        t7 = ({
            "useCapaIntro[useEffect()]": ()=>{
                const preloader = refPreloader.current;
                const contador = refContador.current;
                if (!preloaderNaTela || !preloader || !contador) {
                    return;
                }
                const valor = {
                    n: 0
                };
                const linhaDoTempo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                    onComplete: ()=>setFase("ativa")
                });
                linhaDoTempo.to(valor, {
                    n: 100,
                    duration: DURACAO_DA_CONTAGEM,
                    ease: "power1.out",
                    onUpdate: ()=>{
                        contador.textContent = String(Math.round(valor.n));
                    }
                });
                linhaDoTempo.to(preloader, {
                    opacity: 0,
                    duration: DURACAO_DO_SUMICO,
                    ease: "power1.out"
                });
                return ()=>linhaDoTempo.kill();
            }
        })["useCapaIntro[useEffect()]"];
        t8 = [
            preloaderNaTela
        ];
        $[16] = preloaderNaTela;
        $[17] = t7;
        $[18] = t8;
    } else {
        t7 = $[17];
        t8 = $[18];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[19] !== capaNaTela || $[20] !== fase) {
        t9 = ({
            "useCapaIntro[useEffect()]": ()=>{
                if (!capaNaTela || fase !== "ativa" && fase !== "preloader") {
                    return;
                }
                const pedirSaida = {
                    "useCapaIntro[useEffect() > pedirSaida]": ()=>setFase("saindo")
                }["useCapaIntro[useEffect() > pedirSaida]"];
                const opcoes = {
                    passive: true
                };
                window.addEventListener("wheel", pedirSaida, opcoes);
                window.addEventListener("touchmove", pedirSaida, opcoes);
                window.addEventListener("keydown", pedirSaida);
                window.addEventListener("focusin", pedirSaida);
                return ()=>{
                    window.removeEventListener("wheel", pedirSaida, opcoes);
                    window.removeEventListener("touchmove", pedirSaida, opcoes);
                    window.removeEventListener("keydown", pedirSaida);
                    window.removeEventListener("focusin", pedirSaida);
                };
            }
        })["useCapaIntro[useEffect()]"];
        t10 = [
            capaNaTela,
            fase
        ];
        $[19] = capaNaTela;
        $[20] = fase;
        $[21] = t10;
        $[22] = t9;
    } else {
        t10 = $[21];
        t9 = $[22];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    let t12;
    if ($[23] !== saindo) {
        t11 = ({
            "useCapaIntro[useEffect()]": ()=>{
                const capa = refCapa.current;
                if (!saindo || !capa) {
                    return;
                }
                refAnimacao.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(capa, {
                    "--d": `${RAIO_INICIAL}px`
                }, {
                    "--d": "0px",
                    duration: DURACAO_DA_SAIDA,
                    ease: "power3.inOut",
                    onComplete: ()=>{
                        marcarCapaVista();
                        setFase("fim");
                    }
                });
                return ()=>refAnimacao.current?.kill();
            }
        })["useCapaIntro[useEffect()]"];
        t12 = [
            saindo
        ];
        $[23] = saindo;
        $[24] = t11;
        $[25] = t12;
    } else {
        t11 = $[24];
        t12 = $[25];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    let t13;
    if ($[26] !== capaNaTela || $[27] !== preloaderNaTela || $[28] !== saindo || $[29] !== sair) {
        t13 = {
            capaNaTela,
            preloaderNaTela,
            saindo,
            refCapa,
            refPreloader,
            refContador,
            sair
        };
        $[26] = capaNaTela;
        $[27] = preloaderNaTela;
        $[28] = saindo;
        $[29] = sair;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    return t13;
}
_s(useCapaIntro, "38O22JVYZJd4da0qU6xjly8Tpz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRolagemSuave"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useContagem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatarNumero",
    ()=>formatarNumero,
    "useContagem",
    ()=>useContagem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Regra: o número que conta é decorativo; o leitor de tela lê o valor real, que
// nunca muda. Sem JavaScript ou sem efeitos, aparece o valor final.
const DURACAO = 1.2; // segundos (19.6)
function formatarNumero(numero, casas, antes = "", depois = "") {
    return `${antes}${numero.toFixed(casas).replace(".", ",")}${depois}`;
}
function useContagem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "399249790025ab4bba15a1a1c41c60000c6e3d70fc5a7e58d5761fa02ca8ffc0") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "399249790025ab4bba15a1a1c41c60000c6e3d70fc5a7e58d5761fa02ca8ffc0";
    }
    const { valor, casas: t1, antes: t2, depois: t3 } = t0;
    const casas = t1 === undefined ? 0 : t1;
    const antes = t2 === undefined ? "" : t2;
    const depois = t3 === undefined ? "" : t3;
    const refNumero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t4;
    let t5;
    if ($[1] !== antes || $[2] !== casas || $[3] !== depois || $[4] !== efeitosLigados || $[5] !== valor) {
        t4 = ({
            "useContagem[useEffect()]": ()=>{
                const numero = refNumero.current;
                if (!numero || !efeitosLigados) {
                    return;
                }
                const formatar = {
                    "useContagem[useEffect() > formatar]": (valorAtual)=>formatarNumero(valorAtual, casas, antes, depois)
                }["useContagem[useEffect() > formatar]"];
                const textoFinal = formatar(valor);
                if (numero.getBoundingClientRect().top < window.innerHeight * 0.9) {
                    return;
                }
                numero.textContent = formatar(0);
                let animacao = null;
                const pararDeObservar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(numero, {
                    "useContagem[useEffect() > inView()]": ()=>{
                        animacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, valor, {
                            duration: DURACAO,
                            ease: [
                                0.33,
                                1,
                                0.68,
                                1
                            ],
                            onUpdate: (atual)=>{
                                numero.textContent = formatar(atual);
                            }
                        });
                        pararDeObservar();
                    }
                }["useContagem[useEffect() > inView()]"], {
                    amount: 0.6
                });
                return ()=>{
                    pararDeObservar();
                    animacao?.stop();
                    numero.textContent = textoFinal;
                };
            }
        })["useContagem[useEffect()]"];
        t5 = [
            efeitosLigados,
            valor,
            casas,
            antes,
            depois
        ];
        $[1] = antes;
        $[2] = casas;
        $[3] = depois;
        $[4] = efeitosLigados;
        $[5] = valor;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    return refNumero;
}
_s(useContagem, "iIbmfdcKQZzbFHSALT60hjdThb4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useEncaixe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEncaixe",
    ()=>useEncaixe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRolagemSuave.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Regra: encaixe só por proximidade e só depois da roda do mouse; nunca com zoom
// alto, arrasto, teclado ou foco num campo (19.6).
const ESPERA = 160; // ms
const LIMITE = 0.3; // fração da altura da tela
const CONSULTA = "(min-width: 64rem) and (min-height: 37.5rem)";
function alturaDoTopo() {
    const estilo = getComputedStyle(document.documentElement);
    const cabecalho = parseFloat(estilo.getPropertyValue("--altura-cabecalho")) || 0;
    const indice = parseFloat(estilo.getPropertyValue("--altura-indice")) || 0;
    return cabecalho + indice;
}
function useEncaixe() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "803a2968f231057d77bf07a2cd9dd12323bfeb1a56992c8e3e87bd6cf47ff205") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "803a2968f231057d77bf07a2cd9dd12323bfeb1a56992c8e3e87bd6cf47ff205";
    }
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRolagemSuave"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados || $[2] !== lenis) {
        t0 = ({
            "useEncaixe[useEffect()]": ()=>{
                if (!efeitosLigados || !lenis) {
                    return;
                }
                const consulta = window.matchMedia(CONSULTA);
                let ultimaEntrada = "nenhuma";
                let espera = 0;
                const tentarEncaixe = function tentarEncaixe() {
                    if (!consulta.matches || ultimaEntrada !== "roda") {
                        return;
                    }
                    const ativo = document.activeElement;
                    if (ativo?.matches("input, textarea, select")) {
                        return;
                    }
                    const topo = alturaDoTopo();
                    let melhor = null;
                    for (const secao of document.querySelectorAll("[data-encaixe]")){
                        const distancia = secao.getBoundingClientRect().top - topo;
                        if (melhor === null || Math.abs(distancia) < Math.abs(melhor)) {
                            melhor = distancia;
                        }
                    }
                    if (melhor === null) {
                        return;
                    }
                    if (Math.abs(melhor) > 2 && Math.abs(melhor) < window.innerHeight * LIMITE) {
                        ultimaEntrada = "encaixe";
                        lenis.scrollTo(window.scrollY + melhor);
                    }
                };
                const aoRolar = function aoRolar() {
                    clearTimeout(espera);
                    espera = setTimeout(tentarEncaixe, ESPERA);
                };
                const marcarRoda = {
                    "useEncaixe[useEffect() > marcarRoda]": ()=>ultimaEntrada = "roda"
                }["useEncaixe[useEffect() > marcarRoda]"];
                const marcarOutra = {
                    "useEncaixe[useEffect() > marcarOutra]": ()=>ultimaEntrada = "outra"
                }["useEncaixe[useEffect() > marcarOutra]"];
                const opcoes = {
                    capture: true,
                    passive: true
                };
                window.addEventListener("wheel", marcarRoda, opcoes);
                window.addEventListener("keydown", marcarOutra, true);
                window.addEventListener("pointerdown", marcarOutra, true);
                window.addEventListener("touchstart", marcarOutra, opcoes);
                const pararDeOuvir = lenis.on("scroll", aoRolar);
                return ()=>{
                    clearTimeout(espera);
                    pararDeOuvir();
                    window.removeEventListener("wheel", marcarRoda, opcoes);
                    window.removeEventListener("keydown", marcarOutra, true);
                    window.removeEventListener("pointerdown", marcarOutra, true);
                    window.removeEventListener("touchstart", marcarOutra, opcoes);
                };
            }
        })["useEncaixe[useEffect()]"];
        t1 = [
            efeitosLigados,
            lenis
        ];
        $[1] = efeitosLigados;
        $[2] = lenis;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
_s(useEncaixe, "14MZLrzU4L0sQOo3fYhlLTlRd1k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRolagemSuave"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useFaixaTexto.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFaixaTexto",
    ()=>useFaixaTexto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Regra: o botão "Efeitos" do cabeçalho é o controle de pausa da faixa (19.6,
// WCAG 2.2.2).
const VELOCIDADE = 60; // px por segundo
const PESO_DA_ROLAGEM = 0.6;
const SUAVIZACAO = 0.2;
function useFaixaTexto() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "2f6a708992f9c1a0153b136d3fb4e685707b202da634fecb607e926ab2dc9b01") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f6a708992f9c1a0153b136d3fb4e685707b202da634fecb607e926ab2dc9b01";
    }
    const refTrilho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados) {
        t0 = ({
            "useFaixaTexto[useEffect()]": ()=>{
                const trilho = refTrilho.current;
                if (!trilho || !efeitosLigados) {
                    return;
                }
                let x = 0;
                let velocidadeRolagem = 0;
                let rolagemAnterior = window.scrollY;
                let naTela = false;
                const quadro = function quadro(_tempo, deltaTime) {
                    const passo = window.scrollY - rolagemAnterior;
                    rolagemAnterior = window.scrollY;
                    velocidadeRolagem = velocidadeRolagem + (passo - velocidadeRolagem) * SUAVIZACAO;
                    velocidadeRolagem;
                    if (!naTela) {
                        return;
                    }
                    const dt = Math.min(64, deltaTime);
                    x = x - (dt / 1000 * VELOCIDADE + Math.abs(velocidadeRolagem) * PESO_DA_ROLAGEM);
                    x;
                    const metade = trilho.scrollWidth / 2;
                    if (metade && -x > metade) {
                        x = x + metade;
                        x;
                    }
                    trilho.style.transform = `translateX(${x.toFixed(1)}px)`;
                };
                const observador = new IntersectionObserver((t2)=>{
                    const [entrada] = t2;
                    naTela = entrada.isIntersecting;
                });
                observador.observe(trilho);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(quadro);
                return ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(quadro);
                    observador.disconnect();
                    trilho.style.transform = "";
                };
            }
        })["useFaixaTexto[useEffect()]"];
        t1 = [
            efeitosLigados
        ];
        $[1] = efeitosLigados;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return refTrilho;
}
_s(useFaixaTexto, "U4n++QdweBOErnMYmoOq4NOJnXM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useFraseAcende.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFraseAcende",
    ()=>useFraseAcende
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useFraseAcende() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "11d79d666fae92454405ec6446bf898ac34c130b2ccd9ac093d3e199ae7da06b") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11d79d666fae92454405ec6446bf898ac34c130b2ccd9ac093d3e199ae7da06b";
    }
    const refFrase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados) {
        t0 = ({
            "useFraseAcende[useEffect()]": ()=>{
                const frase = refFrase.current;
                if (!frase || !efeitosLigados) {
                    return;
                }
                const palavras = [
                    ...frase.querySelectorAll("[data-palavra]")
                ];
                let quadro = 0;
                const atualizar = function atualizar() {
                    quadro = 0;
                    const altura = window.innerHeight;
                    const topo = frase.getBoundingClientRect().top;
                    const fracao = Math.max(0, Math.min(1, (altura * 0.85 - topo) / (altura * 0.5)));
                    const acesas = Math.round(fracao * palavras.length);
                    palavras.forEach({
                        "useFraseAcende[useEffect() > atualizar > palavras.forEach()]": (palavra, i)=>palavra.toggleAttribute("data-acesa", i < acesas)
                    }["useFraseAcende[useEffect() > atualizar > palavras.forEach()]"]);
                };
                const pedirAtualizacao = function pedirAtualizacao() {
                    if (!quadro) {
                        quadro = requestAnimationFrame(atualizar);
                    }
                };
                frase.setAttribute("data-frase-ligada", "");
                atualizar();
                window.addEventListener("scroll", pedirAtualizacao, {
                    passive: true
                });
                window.addEventListener("resize", pedirAtualizacao);
                return ()=>{
                    cancelAnimationFrame(quadro);
                    window.removeEventListener("scroll", pedirAtualizacao);
                    window.removeEventListener("resize", pedirAtualizacao);
                    frase.removeAttribute("data-frase-ligada");
                    palavras.forEach(_useFraseAcendeUseEffectAnonymousPalavrasForEach);
                };
            }
        })["useFraseAcende[useEffect()]"];
        t1 = [
            efeitosLigados
        ];
        $[1] = efeitosLigados;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return refFrase;
}
_s(useFraseAcende, "xnAzE5n/2kEOSJ0tt8emX5wnWS8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
function _useFraseAcendeUseEffectAnonymousPalavrasForEach(palavra_0) {
    return palavra_0.removeAttribute("data-acesa");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useGiroPulseira.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGiroPulseira",
    ()=>useGiroPulseira
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pulseira3d/partes.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Guarda só o destino do giro; quem anima é a cena, sem redesenhar o React.
// Regra: nenhum jeito de girar depende só do mouse (WCAG 2.5.7).
const VISTA_TRES_QUARTOS = {
    y: -0.6,
    x: 0.18
};
const VISTA_DA_FRENTE = {
    y: -0.35,
    x: 0.12
};
const INCLINACAO_MAXIMA = 0.9; // radianos
const VOLTA = Math.PI * 2;
const limitar = (valor)=>Math.max(-INCLINACAO_MAXIMA, Math.min(INCLINACAO_MAXIMA, valor));
// A volta completa mais perto de onde a pulseira está (para não dar voltas
// a mais ao ir para uma parte)
const voltaAtual = (y)=>Math.round(y / VOLTA) * VOLTA;
function useGiroPulseira() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "183a48b165bef50389dd3cacadcc7c9dad1379cb0f9daf12ec2c3def994cf370") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "183a48b165bef50389dd3cacadcc7c9dad1379cb0f9daf12ec2c3def994cf370";
    }
    const { efeitosLigados, efeitosConhecidos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const [giroPedido, setGiroPedido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [arrastando, setArrastando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const girando = giroPedido && efeitosLigados;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            ...VISTA_TRES_QUARTOS
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const refAlvo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const refGirando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(girando);
    const refArrasto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set();
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const refOuvintes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function avisar() {
            for (const aoMudar of refOuvintes.current){
                aoMudar();
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const avisar = t2;
    let t3;
    let t4;
    if ($[4] !== girando) {
        t3 = ({
            "useGiroPulseira[useLayoutEffect()]": ()=>{
                refGirando.current = girando;
                avisar();
            }
        })["useGiroPulseira[useLayoutEffect()]"];
        t4 = [
            girando
        ];
        $[4] = girando;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== efeitosConhecidos || $[8] !== efeitosLigados) {
        t5 = ({
            "useGiroPulseira[useEffect()]": ()=>{
                if (!efeitosConhecidos || efeitosLigados) {
                    return;
                }
                refAlvo.current = {
                    y: voltaAtual(refAlvo.current.y) + VISTA_DA_FRENTE.y,
                    x: VISTA_DA_FRENTE.x
                };
                avisar();
            }
        })["useGiroPulseira[useEffect()]"];
        t6 = [
            efeitosConhecidos,
            efeitosLigados
        ];
        $[7] = efeitosConhecidos;
        $[8] = efeitosLigados;
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = function pararGiro() {
            refGirando.current = false;
            setGiroPedido(false);
        };
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const pararGiro = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = function alternarGiro() {
            setGiroPedido(_useGiroPulseiraAlternarGiroSetGiroPedido);
        };
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const alternarGiro = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = function mudarAlvo(y, x) {
            refAlvo.current = {
                y,
                x: limitar(x)
            };
            avisar();
        };
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const mudarAlvo = t9;
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = function girar(graus) {
            pararGiro();
            mudarAlvo(refAlvo.current.y + graus * Math.PI / 180, refAlvo.current.x);
        };
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const girar = t10;
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = function verFrente() {
            pararGiro();
            mudarAlvo(voltaAtual(refAlvo.current.y) + VISTA_DA_FRENTE.y, VISTA_DA_FRENTE.x);
        };
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const verFrente = t11;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = function verPorDentro() {
            girar(180);
        };
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    const verPorDentro = t12;
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = function irParaParte(nome) {
            const vista = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pulseira3d$2f$partes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VISTA_DAS_PARTES"][nome];
            if (!vista) {
                return;
            }
            pararGiro();
            const ajuste = vista.angulo === 0 ? VISTA_DA_FRENTE.y : 0;
            mudarAlvo(voltaAtual(refAlvo.current.y) + vista.angulo + ajuste, vista.inclinar ?? VISTA_DA_FRENTE.x);
        };
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    const irParaParte = t13;
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = function verSinal() {
            pararGiro();
            mudarAlvo(voltaAtual(refAlvo.current.y) - 0.3, VISTA_DA_FRENTE.x);
        };
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    const verSinal = t14;
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = function aoApertarTecla(evento) {
            const passos = {
                ArrowLeft: [
                    -0.3,
                    0
                ],
                ArrowRight: [
                    0.3,
                    0
                ],
                ArrowUp: [
                    0,
                    -0.15
                ],
                ArrowDown: [
                    0,
                    0.15
                ]
            };
            const passo = passos[evento.key];
            if (!passo) {
                return;
            }
            evento.preventDefault();
            pararGiro();
            mudarAlvo(refAlvo.current.y + passo[0], refAlvo.current.x + passo[1]);
        };
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    const aoApertarTecla = t15;
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = function aoApertar(evento_0) {
            if (evento_0.button !== undefined && evento_0.button !== 0) {
                return;
            }
            pararGiro();
            refArrasto.current = {
                x: evento_0.clientX,
                y: evento_0.clientY,
                alvoY: refAlvo.current.y,
                alvoX: refAlvo.current.x
            };
            evento_0.currentTarget.setPointerCapture?.(evento_0.pointerId);
            setArrastando(true);
        };
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    const aoApertar = t16;
    let t17;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = function aoMover(evento_1) {
            const arrasto = refArrasto.current;
            if (!arrasto) {
                return;
            }
            mudarAlvo(arrasto.alvoY + (evento_1.clientX - arrasto.x) * 0.012, arrasto.alvoX + (evento_1.clientY - arrasto.y) * 0.006);
        };
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    const aoMover = t17;
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = function aoSoltar() {
            refArrasto.current = null;
            setArrastando(false);
        };
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    const aoSoltar = t18;
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            refAlvo,
            refGirando,
            assinar (aoMudar_0) {
                refOuvintes.current.add(aoMudar_0);
                return ()=>refOuvintes.current.delete(aoMudar_0);
            }
        };
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    const conexao = t19;
    let t20;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            onKeyDown: aoApertarTecla,
            onPointerDown: aoApertar,
            onPointerMove: aoMover,
            onPointerUp: aoSoltar,
            onPointerCancel: aoSoltar,
            onLostPointerCapture: aoSoltar
        };
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] !== arrastando || $[26] !== girando) {
        t21 = {
            girando,
            alternarGiro,
            girar,
            verFrente,
            verPorDentro,
            irParaParte,
            verSinal,
            arrastando,
            propsPalco: t20,
            conexao
        };
        $[25] = arrastando;
        $[26] = girando;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    return t21;
}
_s(useGiroPulseira, "2O8u50u0SNS8XtAOcQ0xW3jjiCw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
function _useGiroPulseiraAlternarGiroSetGiroPedido(valor) {
    return !valor;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useLinhaRotulo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLinhaRotulo",
    ()=>useLinhaRotulo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Regra: só transform e opacity animam; por isso a linha cresce com scaleX, e não
// com a largura.
const MARGEM_DE_CHEGADA = "0px 0px -15% 0px"; // a seção "chegou" quando passa de 85% da altura da tela
function useLinhaRotulo() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6eee8f27d0a21cf25683b94f45e13b80f0436c88cfd1e9527f9ef9b6b3918b61") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6eee8f27d0a21cf25683b94f45e13b80f0436c88cfd1e9527f9ef9b6b3918b61";
    }
    const refLinha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados) {
        t0 = ({
            "useLinhaRotulo[useEffect()]": ()=>{
                const linha = refLinha.current;
                if (!linha || !efeitosLigados) {
                    return;
                }
                const jaNaTela = linha.getBoundingClientRect().top < window.innerHeight * 0.85;
                if (jaNaTela) {
                    return;
                }
                linha.style.transform = "scaleX(0)";
                let animacao = null;
                const pararDeObservar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(linha, {
                    "useLinhaRotulo[useEffect() > inView()]": ()=>{
                        animacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(linha, {
                            scaleX: [
                                0,
                                1
                            ]
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].padrao);
                        pararDeObservar();
                    }
                }["useLinhaRotulo[useEffect() > inView()]"], {
                    margin: MARGEM_DE_CHEGADA
                });
                return ()=>{
                    pararDeObservar();
                    animacao?.stop();
                    linha.style.transform = "";
                };
            }
        })["useLinhaRotulo[useEffect()]"];
        t1 = [
            efeitosLigados
        ];
        $[1] = efeitosLigados;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return refLinha;
}
_s(useLinhaRotulo, "XqWQUM9MQtzyTId6EielIP+evSs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useLinhasPartes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caminhoDaLinha",
    ()=>caminhoDaLinha,
    "useLinhasPartes",
    ()=>useLinhasPartes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/efeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// As linhas são escritas direto no SVG, sem estado do React, porque mudam até 60
// vezes por segundo.
const CONSULTA_TELA_LARGA = "(min-width: 62.5rem)";
const VELOCIDADE_DO_TRACEJADO = 18; // px por segundo
function caminhoDaLinha(ax, ay, lx, ly) {
    const meio = (ax + lx) / 2;
    const n = (valor)=>valor.toFixed(1);
    return `M${n(ax)},${n(ay)} C${n(meio)},${n(ay)} ${n(meio)},${n(ly)} ${n(lx)},${n(ly)}`;
}
function desenharLinhas({ svg, palco, nos, parteAtiva, projetar }) {
    if (!svg || !palco || !window.matchMedia(CONSULTA_TELA_LARGA).matches) return;
    const origem = palco.getBoundingClientRect();
    const deslocamento = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["efeitosLigadosAgora"])() ? -(performance.now() / 1000 * VELOCIDADE_DO_TRACEJADO) % 10 : 0;
    for (const linha of svg.querySelectorAll("[data-linha]")){
        const nome = linha.dataset.linha;
        const ponto = projetar(nome);
        const no = nos[nome];
        const marcaDaParte = svg.querySelector(`[data-ponto="${nome}"]`);
        if (!ponto || !no) continue;
        const caixaDoNo = no.getBoundingClientRect();
        const ax = ponto.x - origem.left;
        const ay = ponto.y - origem.top;
        const lx = caixaDoNo.left + caixaDoNo.width / 2 - origem.left;
        const ly = caixaDoNo.top + caixaDoNo.height / 2 - origem.top;
        linha.setAttribute("d", caminhoDaLinha(ax, ay, lx, ly));
        linha.style.strokeDashoffset = String(deslocamento);
        linha.classList.toggle("ativa", parteAtiva === nome);
        if (marcaDaParte) {
            marcaDaParte.setAttribute("cx", ax.toFixed(1));
            marcaDaParte.setAttribute("cy", ay.toFixed(1));
        }
    }
}
function useLinhasPartes(parteAtiva) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9b17e68ab8906b2f15892496f01a313e98074a51922feb8cda033aeaecda12a9") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b17e68ab8906b2f15892496f01a313e98074a51922feb8cda033aeaecda12a9";
    }
    const refPalco = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refSvg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const refNos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const refUltimaProjecao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refParteAtiva = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(parteAtiva);
    let t1;
    if ($[2] !== parteAtiva) {
        t1 = ({
            "useLinhasPartes[useLayoutEffect()]": ()=>{
                refParteAtiva.current = parteAtiva;
            }
        })["useLinhasPartes[useLayoutEffect()]"];
        $[2] = parteAtiva;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function registrarNo(nome) {
            return (elemento)=>{
                if (elemento) {
                    refNos.current[nome] = elemento;
                } else {
                    delete refNos.current[nome];
                }
            };
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const registrarNo = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = function aoDesenhar(projetar) {
            refUltimaProjecao.current = projetar;
            desenharLinhas({
                svg: refSvg.current,
                palco: refPalco.current,
                nos: refNos.current,
                parteAtiva: refParteAtiva.current,
                projetar
            });
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const aoDesenhar = t3;
    let t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "useLinhasPartes[useEffect()]": ()=>{
                const palco = refPalco.current;
                if (!palco) {
                    return;
                }
                const observador = new ResizeObserver(()=>{
                    const projetar_0 = refUltimaProjecao.current;
                    if (!projetar_0) {
                        return;
                    }
                    desenharLinhas({
                        svg: refSvg.current,
                        palco,
                        nos: refNos.current,
                        parteAtiva: refParteAtiva.current,
                        projetar: projetar_0
                    });
                });
                observador.observe(palco);
                return ()=>observador.disconnect();
            }
        })["useLinhasPartes[useEffect()]"];
        t5 = [];
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            refPalco,
            refSvg,
            registrarNo,
            aoDesenhar
        };
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_s(useLinhasPartes, "7mif1Hhn7IKV3hdSIfC6ORpzYPU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSecaoAtual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSecaoAtual",
    ()=>useSecaoAtual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Seções fixas (data-secao-fixa): o título fica preso no meio da tela e nunca
// chega à linha de leitura, então elas contam a partir do começo.
function medirSecaoAtual(ids) {
    const raiz = document.documentElement;
    const linha = parseFloat(getComputedStyle(raiz).scrollPaddingTop) || 0;
    let atual = null;
    for (const id of ids){
        const titulo = document.getElementById(id);
        if (!titulo) continue;
        const secaoFixa = titulo.closest("[data-secao-fixa]");
        // Títulos com rótulo param um pouco mais abaixo (scroll-margin-top),
        // para o rótulo aparecer: essa margem também conta.
        const margem = secaoFixa ? 0 : parseFloat(getComputedStyle(titulo).scrollMarginTop) || 0;
        const topo = (secaoFixa ?? titulo).getBoundingClientRect().top;
        if (topo - margem <= linha + 2) atual = id;
    }
    const noFim = window.innerHeight + window.scrollY >= raiz.scrollHeight - 2;
    if (noFim && ids.length) atual = ids[ids.length - 1];
    return atual;
}
function useSecaoAtual(itens) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6da48544f707295febe09a329206aea05a8f515e59f58dad8053f3c9255440ea") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6da48544f707295febe09a329206aea05a8f515e59f58dad8053f3c9255440ea";
    }
    const [atual, setAtual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] !== itens) {
        t0 = ({
            "useSecaoAtual[useEffect()]": ()=>{
                const ids = itens.map(_useSecaoAtualUseEffectItensMap);
                let quadro = 0;
                const medir = function medir() {
                    quadro = 0;
                    setAtual(medirSecaoAtual(ids));
                };
                const agendar = function agendar() {
                    if (!quadro) {
                        quadro = requestAnimationFrame(medir);
                    }
                };
                agendar();
                window.addEventListener("scroll", agendar, {
                    passive: true
                });
                window.addEventListener("resize", agendar);
                return ()=>{
                    cancelAnimationFrame(quadro);
                    window.removeEventListener("scroll", agendar);
                    window.removeEventListener("resize", agendar);
                };
            }
        })["useSecaoAtual[useEffect()]"];
        t1 = [
            itens
        ];
        $[1] = itens;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return atual;
}
_s(useSecaoAtual, "Cvdahx0HABjAGecMKpAHy2Wwkcs=");
function _useSecaoAtualUseEffectItensMap(item) {
    return item.id;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useTextoConstroi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextoConstroi",
    ()=>useTextoConstroi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Regra: entra com o gesto GUIA, e não com domos (decisão 3 da 9.0). Com o foco
// dentro, aparece na hora: nada invisível recebe foco.
const MARGEM_DE_CHEGADA = "0px 0px -12% 0px";
function useTextoConstroi() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c4a64412bdacdff8c2954f13329f37d020021301e4766f244e1e58d02de5d4a3") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4a64412bdacdff8c2954f13329f37d020021301e4766f244e1e58d02de5d4a3";
    }
    const refBloco = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados) {
        t0 = ({
            "useTextoConstroi[useEffect()]": ()=>{
                const bloco = refBloco.current;
                if (!bloco || !efeitosLigados) {
                    return;
                }
                if (bloco.getBoundingClientRect().top < window.innerHeight * 0.88) {
                    return;
                }
                const { initial } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guia"])(1);
                let animacao = null;
                bloco.style.opacity = String(initial.opacity);
                bloco.style.transform = `translateX(${initial.x}px)`;
                const mostrarNaHora = function mostrarNaHora() {
                    pararDeObservar();
                    animacao?.stop();
                    bloco.style.opacity = "";
                    bloco.style.transform = "";
                };
                const pararDeObservar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(bloco, {
                    "useTextoConstroi[useEffect() > inView()]": ()=>{
                        animacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(bloco, {
                            opacity: [
                                initial.opacity,
                                1
                            ],
                            x: [
                                initial.x,
                                0
                            ]
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].padrao);
                        pararDeObservar();
                        bloco.removeEventListener("focusin", mostrarNaHora);
                    }
                }["useTextoConstroi[useEffect() > inView()]"], {
                    margin: MARGEM_DE_CHEGADA
                });
                bloco.addEventListener("focusin", mostrarNaHora);
                return ()=>{
                    bloco.removeEventListener("focusin", mostrarNaHora);
                    mostrarNaHora();
                };
            }
        })["useTextoConstroi[useEffect()]"];
        t1 = [
            efeitosLigados
        ];
        $[1] = efeitosLigados;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return refBloco;
}
_s(useTextoConstroi, "K/MAKt/cFSu513mf4IO9OxDbcPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useTrajeto.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrajeto",
    ()=>useTrajeto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// Sem data-trajeto-ligado (sem JavaScript ou sem efeitos), a rota aparece inteira,
// com o ponto no destino.
const CONSULTA_FIXA = "(min-width: 64rem) and (min-height: 37.5rem)";
function alturaDoTopo() {
    const estilo = getComputedStyle(document.documentElement);
    return (parseFloat(estilo.getPropertyValue("--altura-cabecalho")) || 0) + (parseFloat(estilo.getPropertyValue("--altura-indice")) || 0);
}
function useTrajeto(fracoes) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "4cbe4c6e05b588157751d791cd190f20360e288c2b6f67a6bfd016d58d01879e") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4cbe4c6e05b588157751d791cd190f20360e288c2b6f67a6bfd016d58d01879e";
    }
    const refSecao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refTrilho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refPalco = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refCaminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refPonto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refLista = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados || $[2] !== fracoes) {
        t0 = ({
            "useTrajeto[useEffect()]": ()=>{
                const secao = refSecao.current;
                const trilho = refTrilho.current;
                const palco = refPalco.current;
                const caminho = refCaminho.current;
                const ponto = refPonto.current;
                const lista = refLista.current;
                if (!secao || !trilho || !palco || !caminho || !ponto || !lista || !efeitosLigados) {
                    return;
                }
                const comprimento = caminho.getTotalLength();
                const paradasNoMapa = [
                    ...secao.querySelectorAll("[data-parada-mapa]")
                ];
                const paradasNaLista = [
                    ...lista.children
                ];
                const consulta = window.matchMedia(CONSULTA_FIXA);
                let quadro = 0;
                const decidirModo = function decidirModo() {
                    secao.removeAttribute("data-trajeto-fixo");
                    const cabe = palco.scrollHeight <= window.innerHeight - alturaDoTopo();
                    secao.toggleAttribute("data-trajeto-fixo", consulta.matches && cabe);
                };
                const desenhar = function desenhar(fracao) {
                    const feito = fracao * comprimento;
                    caminho.style.strokeDasharray = `${comprimento}`;
                    caminho.style.strokeDashoffset = `${comprimento - feito}`;
                    const posicao = caminho.getPointAtLength(feito);
                    ponto.setAttribute("cx", posicao.x.toFixed(1));
                    ponto.setAttribute("cy", posicao.y.toFixed(1));
                    let atual = 0;
                    fracoes.forEach({
                        "useTrajeto[useEffect() > desenhar > fracoes.forEach()]": (alvo, i)=>{
                            const chegou = fracao >= alvo - 0.001;
                            if (chegou) {
                                atual = i;
                            }
                            paradasNoMapa[i]?.toggleAttribute("data-chegou", chegou);
                            paradasNaLista[i]?.toggleAttribute("data-chegou", chegou);
                        }
                    }["useTrajeto[useEffect() > desenhar > fracoes.forEach()]"]);
                    paradasNaLista.forEach({
                        "useTrajeto[useEffect() > desenhar > paradasNaLista.forEach()]": (item, i_0)=>item.toggleAttribute("data-atual", i_0 === atual)
                    }["useTrajeto[useEffect() > desenhar > paradasNaLista.forEach()]"]);
                };
                const atualizar = function atualizar() {
                    quadro = 0;
                    const altura = window.innerHeight;
                    let fracao_0;
                    if (secao.hasAttribute("data-trajeto-fixo")) {
                        const topo = alturaDoTopo();
                        const caixa = trilho.getBoundingClientRect();
                        fracao_0 = (topo - caixa.top) / (caixa.height - altura + topo);
                    } else {
                        const caixa_0 = palco.getBoundingClientRect();
                        fracao_0 = (altura * 0.75 - caixa_0.top) / caixa_0.height;
                    }
                    desenhar(Math.max(0, Math.min(1, fracao_0)));
                };
                const pedirAtualizacao = function pedirAtualizacao() {
                    if (!quadro) {
                        quadro = requestAnimationFrame(atualizar);
                    }
                };
                const aoMudarTamanho = function aoMudarTamanho() {
                    decidirModo();
                    pedirAtualizacao();
                };
                secao.setAttribute("data-trajeto-ligado", "");
                decidirModo();
                atualizar();
                window.addEventListener("scroll", pedirAtualizacao, {
                    passive: true
                });
                window.addEventListener("resize", aoMudarTamanho);
                consulta.addEventListener("change", aoMudarTamanho);
                return ()=>{
                    cancelAnimationFrame(quadro);
                    window.removeEventListener("scroll", pedirAtualizacao);
                    window.removeEventListener("resize", aoMudarTamanho);
                    consulta.removeEventListener("change", aoMudarTamanho);
                    secao.removeAttribute("data-trajeto-ligado");
                    secao.removeAttribute("data-trajeto-fixo");
                    caminho.style.strokeDasharray = "";
                    caminho.style.strokeDashoffset = "";
                    const fim = caminho.getPointAtLength(comprimento);
                    ponto.setAttribute("cx", fim.x.toFixed(1));
                    ponto.setAttribute("cy", fim.y.toFixed(1));
                    paradasNoMapa.forEach(_useTrajetoUseEffectAnonymousParadasNoMapaForEach);
                    paradasNaLista.forEach(_useTrajetoUseEffectAnonymousParadasNaListaForEach);
                };
            }
        })["useTrajeto[useEffect()]"];
        t1 = [
            efeitosLigados,
            fracoes
        ];
        $[1] = efeitosLigados;
        $[2] = fracoes;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            refSecao,
            refTrilho,
            refPalco,
            refCaminho,
            refPonto,
            refLista
        };
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_s(useTrajeto, "MwdSo94E1RK4Uo3WbUWrfp+rPVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
function _useTrajetoUseEffectAnonymousParadasNaListaForEach(item_0) {
    item_0.removeAttribute("data-chegou");
    item_0.removeAttribute("data-atual");
}
function _useTrajetoUseEffectAnonymousParadasNoMapaForEach(parada) {
    return parada.setAttribute("data-chegou", "");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useVideoPulse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVideoPulse",
    ()=>useVideoPulse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// Regra: começam mudos; o som só liga pelo botão, com legendas (WCAG 1.4.2 e 1.2.2).
// Ao sair da página, cada vídeo perde o src, o que libera o decodificador (19.1).
const LIMIAR_VISIVEL = 0.25;
const TOLERANCIA_GEMEOS = 0.15; // s
function mostrarLegendas(video, mostrar) {
    for (const faixa of video.textTracks)faixa.mode = mostrar ? "showing" : "disabled";
}
function useVideoPulse(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "cfa4b5d6b9c0b1611eac310a2d0d9538f73c0f8fe5036b8691c3597a217536a7") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfa4b5d6b9c0b1611eac310a2d0d9538f73c0f8fe5036b8691c3597a217536a7";
    }
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? {} : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { quantidade: t2, ativo: t3, chave: t4 } = t1;
    const quantidade = t2 === undefined ? 1 : t2;
    const ativo = t3 === undefined ? true : t3;
    const chave = t4 === undefined ? "" : t4;
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const refContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    const refVideos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t5);
    const refEfeitosAntes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(efeitosLigados);
    const [visivel, setVisivel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pausadoPelaPessoa, setPausadoPelaPessoa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pedidoUmaVez, setPedidoUmaVez] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [somLigado, setSomLigado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [falhou, setFalhou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t6;
    if ($[4] !== chave || $[5] !== efeitosLigados) {
        t6 = {
            efeitosLigados,
            chave
        };
        $[4] = chave;
        $[5] = efeitosLigados;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const [referencia, setReferencia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    if (referencia.efeitosLigados !== efeitosLigados || referencia.chave !== chave) {
        setReferencia({
            efeitosLigados,
            chave
        });
        setPedidoUmaVez(false);
        if (referencia.chave !== chave) {
            setFalhou(false);
        }
    }
    const tocando = !falhou && visivel && ativo && (efeitosLigados ? !pausadoPelaPessoa : pedidoUmaVez);
    let t7;
    if ($[7] !== quantidade) {
        t7 = ({
            "useVideoPulse[useState()]": ()=>Array.from({
                    length: quantidade
                }, {
                    "useVideoPulse[useState() > Array.from()]": (_, indice)=>(video)=>{
                            if (!video) {
                                return;
                            }
                            if (!video.getAttribute("src") && video.dataset.src) {
                                video.setAttribute("src", video.dataset.src);
                            }
                            refVideos.current[indice] = video;
                            if (video.error) {
                                queueMicrotask({
                                    "useVideoPulse[useState() > Array.from() > <anonymous> > queueMicrotask()]": ()=>setFalhou(true)
                                }["useVideoPulse[useState() > Array.from() > <anonymous> > queueMicrotask()]"]);
                            }
                            return ()=>{
                                video.pause();
                                video.removeAttribute("src");
                                video.load();
                                refVideos.current[indice] = null;
                            };
                        }
                }["useVideoPulse[useState() > Array.from()]"])
        })["useVideoPulse[useState()]"];
        $[7] = quantidade;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const [registradores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t7);
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "useVideoPulse[useEffect()]": ()=>{
                const container = refContainer.current;
                if (!container) {
                    return;
                }
                const observador = new IntersectionObserver((t10)=>{
                    const [registro] = t10;
                    return setVisivel(registro.isIntersecting);
                }, {
                    threshold: LIMIAR_VISIVEL
                });
                observador.observe(container);
                return ()=>observador.disconnect();
            }
        })["useVideoPulse[useEffect()]"];
        t9 = [];
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[11] !== efeitosLigados || $[12] !== somLigado || $[13] !== tocando) {
        t10 = ({
            "useVideoPulse[useEffect()]": ()=>{
                const videos = refVideos.current.filter(Boolean);
                if (!videos.length) {
                    return;
                }
                const [primeiro, ...outros] = videos;
                for (const video_0 of videos){
                    video_0.loop = efeitosLigados;
                    video_0.muted = !somLigado;
                }
                if (tocando) {
                    for (const video_1 of outros){
                        video_1.currentTime = primeiro.currentTime;
                    }
                    videos.forEach(_useVideoPulseUseEffectVideosForEach);
                } else {
                    videos.forEach(_useVideoPulseUseEffectVideosForEach2);
                }
            }
        })["useVideoPulse[useEffect()]"];
        $[11] = efeitosLigados;
        $[12] = somLigado;
        $[13] = tocando;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== chave || $[16] !== efeitosLigados || $[17] !== somLigado || $[18] !== tocando) {
        t11 = [
            tocando,
            efeitosLigados,
            somLigado,
            chave
        ];
        $[15] = chave;
        $[16] = efeitosLigados;
        $[17] = somLigado;
        $[18] = tocando;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    let t13;
    if ($[20] !== efeitosLigados) {
        t12 = ({
            "useVideoPulse[useEffect()]": ()=>{
                if (refEfeitosAntes.current && !efeitosLigados) {
                    for (const video_4 of refVideos.current){
                        if (video_4 && video_4.currentTime > 0) {
                            video_4.load();
                        }
                    }
                }
                refEfeitosAntes.current = efeitosLigados;
            }
        })["useVideoPulse[useEffect()]"];
        t13 = [
            efeitosLigados
        ];
        $[20] = efeitosLigados;
        $[21] = t12;
        $[22] = t13;
    } else {
        t12 = $[21];
        t13 = $[22];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    let t14;
    if ($[23] !== somLigado) {
        t14 = ({
            "useVideoPulse[useEffect()]": ()=>{
                for (const video_5 of refVideos.current){
                    if (!video_5) {
                        continue;
                    }
                    mostrarLegendas(video_5, somLigado);
                }
            }
        })["useVideoPulse[useEffect()]"];
        $[23] = somLigado;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== chave || $[26] !== somLigado) {
        t15 = [
            somLigado,
            chave
        ];
        $[25] = chave;
        $[26] = somLigado;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t14, t15);
    let t16;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "useVideoPulse[useEffect()]": ()=>{
                const [primeiro_0, ...outros_0] = refVideos.current;
                if (!primeiro_0 || !outros_0.length) {
                    return;
                }
                const sincronizar = function sincronizar() {
                    for (const video_6 of outros_0){
                        if (video_6 && Math.abs(video_6.currentTime - primeiro_0.currentTime) > TOLERANCIA_GEMEOS) {
                            video_6.currentTime = primeiro_0.currentTime;
                        }
                    }
                };
                primeiro_0.addEventListener("timeupdate", sincronizar);
                primeiro_0.addEventListener("seeked", sincronizar);
                return ()=>{
                    primeiro_0.removeEventListener("timeupdate", sincronizar);
                    primeiro_0.removeEventListener("seeked", sincronizar);
                };
            }
        })["useVideoPulse[useEffect()]"];
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== chave) {
        t17 = [
            chave
        ];
        $[29] = chave;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t16, t17);
    let t18;
    if ($[31] !== efeitosLigados || $[32] !== tocando) {
        t18 = function alternarPausa() {
            if (efeitosLigados) {
                setPausadoPelaPessoa(tocando);
            } else {
                setPedidoUmaVez(!tocando);
            }
        };
        $[31] = efeitosLigados;
        $[32] = tocando;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    const alternarPausa = t18;
    let t19;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = function alternarSom() {
            setSomLigado(_useVideoPulseAlternarSomSetSomLigado);
        };
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    const alternarSom = t19;
    let t20;
    if ($[35] !== registradores) {
        t20 = function propsVideo(indice_0) {
            return {
                ref: registradores[indice_0],
                onError: ()=>setFalhou(true),
                onEnded: indice_0 === 0 ? ()=>setPedidoUmaVez(false) : undefined
            };
        };
        $[35] = registradores;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    const propsVideo = t20;
    let t21;
    if ($[37] !== alternarPausa || $[38] !== falhou || $[39] !== propsVideo || $[40] !== somLigado || $[41] !== tocando) {
        t21 = {
            refContainer,
            propsVideo,
            tocando,
            somLigado,
            falhou,
            alternarPausa,
            alternarSom
        };
        $[37] = alternarPausa;
        $[38] = falhou;
        $[39] = propsVideo;
        $[40] = somLigado;
        $[41] = tocando;
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    return t21;
}
_s(useVideoPulse, "z7B9xbWzgh2cbG5dIXdwueu93Q8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
function _useVideoPulseAlternarSomSetSomLigado(ligado) {
    return !ligado;
}
function _useVideoPulseUseEffectVideosForEach2(video_3) {
    return video_3.pause();
}
function _useVideoPulseUseEffectVideosForEach(video_2) {
    return video_2.play().catch(_useVideoPulseUseEffectVideosForEachAnonymous);
}
function _useVideoPulseUseEffectVideosForEachAnonymous() {}
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

//# sourceMappingURL=_035uapln6d3l-._.js.map