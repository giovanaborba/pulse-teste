module.exports = [
"[next]/internal/font/google/dm_sans_6bcef329.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'DM Sans', 'DM Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/dm_sans_6bcef329.js [app-ssr] (ecmascript) <export default as dmSans>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dmSans",
    ()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.js [app-ssr] (ecmascript)");
}),
"[next]/internal/font/google/dm_sans_6bcef329.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "dm_sans_6bcef329-module__r87QuG__className",
  "variable": "dm_sans_6bcef329-module__r87QuG__variable",
});
}),
"[project]/components/simulador/Pulseira.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pulseira
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-ssr] (ecmascript)");
;
;
function BotaoPulseira({ nome, acao, ativo, piscar = false, dica }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `botao-pulseira ${ativo ? "botao-ativo" : ""} ${piscar && ativo ? "botao-pisca" : ""}`,
        onClick: acao,
        "aria-label": dica || nome,
        "data-dica": dica || nome
    }, void 0, false, {
        fileName: "[project]/components/simulador/Pulseira.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function MenuModos({ modo, aberto, escolher }) {
    if (!aberto) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "menu-modos",
        role: "group",
        "aria-label": "Modos da pulseira",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: item === modo ? "modo-selecionado" : "",
                "aria-pressed": item === modo,
                onClick: ()=>escolher(item),
                children: item
            }, item, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/simulador/Pulseira.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function PontosBraille({ numero, chegada = false }) {
    const ativos = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["braille"][String(numero)] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pontos-braille",
        role: "img",
        "aria-label": `Braille ${numero}`,
        "data-dica": "Pinos retráteis para Braille",
        children: [
            1,
            2,
            3,
            4,
            5,
            6
        ].map((ponto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: chegada || ativos.includes(ponto) ? "ponto-erguido" : ""
            }, ponto, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/simulador/Pulseira.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function JanelaBraille({ completo = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "janela-braille-pulseira",
        role: "img",
        "aria-label": "Pinos retráteis para Braille",
        "data-dica": "Pinos retráteis para Braille",
        children: [
            1,
            2,
            3,
            4,
            5,
            6
        ].map((ponto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: completo ? "pino-braille-erguido" : ""
            }, ponto, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 59,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/simulador/Pulseira.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function IconeFalante() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "icone-falante-pulseira",
        "data-dica": "Alto-falante",
        "aria-label": "Alto-falante",
        role: "img",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/Pulseira.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function Pulseira({ modo, menuAberto, alternarMenu, escolherModo, iniciarVoz, estado, lado, legenda = "", erro, transporte = false, horizontal = false, numero, focarBraille, mostrarFalante = false, chegouTransporte = false }) {
    const Tela = transporte ? "button" : "div";
    const vibrarParada = estado === "semaforo" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][1];
    const pressaoAtiva = estado === "pressionando" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][1];
    const classePulseira = [
        "pulseira-conjunto",
        transporte ? "pulseira-transporte" : "",
        chegouTransporte ? "pulseira-chegou-transporte" : "",
        horizontal ? "pulseira-horizontal" : "",
        pressaoAtiva ? "pulseira-sinal-pressao" : "",
        vibrarParada ? "pulseira-sinal-parada" : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: classePulseira,
        "aria-label": "Pulseira Pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "somente-leitor",
                role: "status",
                children: legenda
            }, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            legenda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sinal-pulseira",
                "aria-hidden": "true",
                children: legenda
            }, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pulseira-faixa",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pulseira-fivela"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/Pulseira.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `pulseira-corpo ${pressaoAtiva ? "pulseira-aperta" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tela, {
                            type: transporte ? "button" : undefined,
                            className: "tela-pulseira",
                            onClick: transporte ? focarBraille : undefined,
                            "aria-label": transporte ? "Mostrar pinos Braille" : undefined,
                            children: transporte ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PontosBraille, {
                                        numero: numero,
                                        chegada: chegouTransporte
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    mostrarFalante && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconeFalante, {}, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 131,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "luz-lado luz-esquerda pulso-transporte"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "luz-lado luz-direita pulso-transporte"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/Pulseira.jsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JanelaBraille, {
                                        completo: estado === "chegada" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][1]
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    mostrarFalante && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconeFalante, {}, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 138,
                                        columnNumber: 36
                                    }, this),
                                    lado === "esquerda" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "luz-lado luz-esquerda luz-ativa"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 139,
                                        columnNumber: 40
                                    }, this) : null,
                                    lado === "direita" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "luz-lado luz-direita luz-ativa"
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 140,
                                        columnNumber: 39
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/Pulseira.jsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/simulador/Pulseira.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/Pulseira.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pulseira-fivela pulseira-base"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/Pulseira.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "botoes-pulseira",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "seletor-embrulho",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BotaoPulseira, {
                                        nome: "Modo",
                                        dica: "Troca de modo",
                                        acao: alternarMenu,
                                        ativo: menuAberto,
                                        piscar: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuModos, {
                                        modo: modo,
                                        aberto: menuAberto,
                                        escolher: escolherModo
                                    }, void 0, false, {
                                        fileName: "[project]/components/simulador/Pulseira.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/Pulseira.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BotaoPulseira, {
                                nome: "Voz",
                                dica: "Reconhecimento de voz",
                                acao: iniciarVoz,
                                ativo: estado === "ouvindo"
                            }, void 0, false, {
                                fileName: "[project]/components/simulador/Pulseira.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador/Pulseira.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            transporte && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "legenda-aguarde-transporte",
                children: "3 vibrações rápidas"
            }, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 165,
                columnNumber: 22
            }, this),
            erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "erro-voz",
                role: "alert",
                children: erro
            }, void 0, false, {
                fileName: "[project]/components/simulador/Pulseira.jsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/Pulseira.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/RotasSalvas.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RotasSalvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/simuladorService.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function RotasSalvas({ voltar, nav }) {
    const [rotas, definirRotas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [carregando, definirCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [erro, definirErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editando, definirEditando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [salvando, definirSalvando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let ativo = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listarRotas"]().then((lista)=>{
            if (ativo) definirRotas(lista);
        }).catch((falha)=>{
            if (ativo) definirErro(falha.message || "Não foi possível consultar as rotas salvas.");
        }).finally(()=>{
            if (ativo) definirCarregando(false);
        });
        return ()=>{
            ativo = false;
        };
    }, []);
    const salvarEdicao = async (evento)=>{
        evento.preventDefault();
        const dados = new FormData(evento.currentTarget);
        definirSalvando(true);
        definirErro("");
        try {
            const [inicio, destino] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarDestino"](String(dados.get("inicio"))),
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarDestino"](String(dados.get("destino")))
            ]);
            const atualizada = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atualizarRota"](editando.id, {
                nome: String(dados.get("nome")).trim(),
                inicio: {
                    texto: inicio.nome,
                    lat: inicio.lat,
                    lon: inicio.lon
                },
                destino: {
                    texto: destino.nome,
                    lat: destino.lat,
                    lon: destino.lon
                }
            });
            definirRotas((lista)=>lista.map((item)=>item.id === atualizada.id ? atualizada : item));
            definirEditando(null);
        } catch (falha) {
            definirErro(falha.message || "Não foi possível atualizar a rota.");
        } finally{
            definirSalvando(false);
        }
    };
    const excluir = async (rota)=>{
        if (rota.exemplo) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apagarRota"](rota.id);
            definirRotas((lista)=>lista.filter((item)=>item.id !== rota.id));
        } catch (falha) {
            definirErro(falha.message || "Não foi possível excluir a rota.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tela-rotas",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "barra-tela",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "botao-voltar-inicio",
                    onClick: voltar,
                    children: "VOLTAR"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/RotasSalvas.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "erro-rotas",
                role: "alert",
                children: erro
            }, void 0, false, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            carregando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Carregando rotas..."
            }, void 0, false, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 78,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "lista-rotas",
                "aria-label": "Rotas salvas",
                children: [
                    rotas.map((rota)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "cartao-rota",
                            children: editando?.id === rota.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: salvarEdicao,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Nome",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "nome",
                                                defaultValue: rota.nome,
                                                required: true,
                                                maxLength: "80"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 87,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 85,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Início",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "inicio",
                                                defaultValue: rota.inicio.texto,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Destino",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "destino",
                                                defaultValue: rota.destino.texto,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 95,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "acoes-rota",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: salvando,
                                                children: salvando ? "SALVANDO..." : "SALVAR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>definirEditando(null),
                                                children: "CANCELAR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    rota.nome,
                                                    rota.exemplo ? " · EXEMPLO" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Início: ",
                                                    rota.inicio.texto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Destino: ",
                                                    rota.destino.texto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 114,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "acoes-rota",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    nav.iniciarRotaSalva(rota);
                                                    voltar();
                                                },
                                                children: "USAR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, this),
                                            !rota.exemplo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>definirEditando(rota),
                                                        children: "EDITAR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>excluir(rota),
                                                        children: "EXCLUIR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, this)
                        }, rota.id, false, {
                            fileName: "[project]/components/simulador/RotasSalvas.jsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)),
                    !rotas.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Nenhuma rota salva."
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                        lineNumber: 141,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/RotasSalvas.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/Simulador.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Simulador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$fonte$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/simulador/fonte.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dmSans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.js [app-ssr] (ecmascript) <export default as dmSans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaInicial$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/TelaInicial.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaRota$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/TelaRota.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaTransporte$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/TelaTransporte.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$RotasSalvas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/RotasSalvas.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Vitrine$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Vitrine.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePulseiraSimulador.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavegacaoSimulador$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useNavegacaoSimulador.js [app-ssr] (ecmascript)");
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
// Nome de cada tela, lido pelo leitor de tela quando a pessoa troca de tela.
const NOMES_DAS_TELAS = {
    inicio: "tela inicial",
    vitrine: "comandos da pulseira",
    rotas: "rotas salvas",
    rota: "rota no mapa",
    transporte: "ônibus e trem"
};
function Simulador() {
    const [vitrineAberta, definirVitrineAberta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotasAbertas, definirRotasAbertas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pulso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePulseiraSimulador"])();
    const nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavegacaoSimulador$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavegacaoSimulador"])(pulso.modo, pulso.emitirContinuar);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSomSemaforo"])(pulso.modo, nav.estado);
    const refRaiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tela = vitrineAberta ? "vitrine" : rotasAbertas ? "rotas" : nav.tela;
    const telaAnterior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(tela);
    // Ao trocar de tela, o foco vai para o simulador (o botão clicado some) e a página
    // volta ao topo dele, se ele tiver ficado para cima da tela.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (telaAnterior.current === tela) return;
        telaAnterior.current = tela;
        const raiz = refRaiz.current;
        if (!raiz) return;
        raiz.focus({
            preventScroll: true
        });
        if (raiz.getBoundingClientRect().top < 0) raiz.scrollIntoView({
            block: "start"
        });
    }, [
        tela
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: refRaiz,
        tabIndex: -1,
        role: "region",
        "aria-label": `Simulador da pulseira: ${NOMES_DAS_TELAS[tela]}`,
        className: `simulador ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dmSans$3e$__["dmSans"].variable}`,
        children: vitrineAberta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Vitrine$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            voltar: ()=>definirVitrineAberta(false)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 56,
            columnNumber: 9
        }, this) : rotasAbertas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$RotasSalvas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            voltar: ()=>definirRotasAbertas(false),
            nav: nav
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 58,
            columnNumber: 9
        }, this) : nav.tela === "inicio" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaInicial$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            pulso: pulso,
            nav: nav,
            abrirVitrine: ()=>definirVitrineAberta(true),
            abrirRotas: ()=>definirRotasAbertas(true)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 60,
            columnNumber: 9
        }, this) : nav.tela === "transporte" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaTransporte$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            pulso: pulso,
            nav: nav
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 67,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaRota$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            pulso: pulso,
            nav: nav
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 69,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/simulador/Simulador.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/TelaInicial.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TelaInicial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Pulseira.jsx [app-ssr] (ecmascript)");
;
;
function TelaInicial({ pulso, nav, abrirVitrine, abrirRotas }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tela-inicial",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inicio-apresentacao",
                "aria-label": "Como usar a pulseira",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "post-it post-it-esquerdo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Para armazenar um caminho recorrente, toque no botão de reconhecimento de voz e diga",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“salvar rota”"
                                }, void 0, false, {
                                    fileName: "[project]/components/simulador/TelaInicial.jsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                ". Será solicitado o início, destino e nome, você pode nomear como quiser, por exemplo ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“casa”"
                                }, void 0, false, {
                                    fileName: "[project]/components/simulador/TelaInicial.jsx",
                                    lineNumber: 12,
                                    columnNumber: 38
                                }, this),
                                " ou ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“trabalho”"
                                }, void 0, false, {
                                    fileName: "[project]/components/simulador/TelaInicial.jsx",
                                    lineNumber: 12,
                                    columnNumber: 65
                                }, this),
                                ". Depois, diga ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“destino [nome dado a rota]”"
                                }, void 0, false, {
                                    fileName: "[project]/components/simulador/TelaInicial.jsx",
                                    lineNumber: 13,
                                    columnNumber: 18
                                }, this),
                                " para carregar a rota salva."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/simulador/TelaInicial.jsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        modo: pulso.modo,
                        menuAberto: pulso.menuAberto,
                        alternarMenu: ()=>pulso.definirMenu((v)=>!v),
                        escolherModo: pulso.escolherModo,
                        iniciarVoz: nav.iniciarVoz,
                        estado: nav.estado,
                        erro: nav.erro,
                        lado: "",
                        numero: nav.segundos,
                        mostrarFalante: true
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "post-it post-it-direito",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Para ir a um destino sem salvar a rota, toque no botão de reconhecimento de voz e diga o endereço de destino. A rota será carregada automaticamente."
                        }, void 0, false, {
                            fileName: "[project]/components/simulador/TelaInicial.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/TelaInicial.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "inicio-acoes",
                "aria-label": "Opções iniciais",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "botao-rotas-salvas",
                        onClick: abrirRotas,
                        children: "Rotas salvas"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "botao-vitrine",
                        onClick: abrirVitrine,
                        children: "Conheça como cada comando é feito"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "botao-simulacao-pronta",
                        onClick: nav.iniciarSimulacao,
                        children: "Testar simulação pronta"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/TelaInicial.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/TelaInicial.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/TelaRota.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TelaRota
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Pulseira.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
// O mapa usa o Leaflet, que só funciona no navegador.
const MapaRota = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/simulador/MapaRota.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mapa-rota mapa-carregando",
            role: "status",
            children: "Carregando mapa..."
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
function BotoesRota({ comando, bloqueados }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "botoes-rota",
        children: [
            [
                "continuar",
                "CONTINUAR"
            ],
            [
                "parar",
                "PARAR"
            ],
            [
                "esquerda",
                "ESQUERDA"
            ],
            [
                "direita",
                "DIREITA"
            ]
        ].map(([id, texto])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: bloqueados && id !== "continuar",
                onClick: ()=>comando(id),
                children: texto
            }, id, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/simulador/TelaRota.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function AvisoSemaforo({ estado, segundos }) {
    if (![
        "semaforo",
        "contando",
        "pressionando"
    ].includes(estado)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aviso-semaforo",
        role: "status",
        "aria-live": "assertive",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "luz-semaforo"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "FECHA EM"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: estado === "pressionando" ? 0 : segundos
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "SEGUNDOS"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/TelaRota.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
// Texto do sinal que a pulseira está dando agora (em cada modo).
function legendaDoSinal(nav, modo, evento) {
    const { estado } = nav;
    const sonoro = modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0];
    if (estado === "orientacao") return `VIBRAÇÃO À ${evento === "esquerda" ? "ESQUERDA" : "DIREITA"}`;
    if (estado === "semaforo") return sonoro ? "SOM AGUDO CONTÍNUO" : "VIBRANDO CONSTANTEMENTE";
    if (estado === "pressionando") return sonoro ? "SOM GRAVE CURTO" : "PRESSÃO";
    if (estado === "chegada") return sonoro ? "VOCÊ CHEGOU AO SEU DESTINO" : "CHEGADA";
    return "";
}
function TelaRota({ pulso, nav }) {
    const evento = nav.passos[nav.indice]?.tipo;
    const lado = nav.estado === "orientacao" ? evento : "";
    const legenda = legendaDoSinal(nav, pulso.modo, evento);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tela-rota",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "barra-tela",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "botao-voltar-inicio",
                    onClick: nav.voltarInicio,
                    children: "VOLTAR"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/TelaRota.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "arranjo-rota",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        modo: pulso.modo,
                        menuAberto: pulso.menuAberto,
                        alternarMenu: ()=>pulso.definirMenu((v)=>!v),
                        escolherModo: pulso.escolherModo,
                        iniciarVoz: nav.iniciarVoz,
                        estado: nav.estado,
                        lado: lado,
                        legenda: legenda,
                        horizontal: true,
                        erro: nav.erro
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaRota.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "area-mapa",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapaRota, {
                                rota: nav.rota,
                                origem: nav.origem,
                                destino: nav.destino,
                                progresso: nav.progresso,
                                passos: nav.passos
                            }, void 0, false, {
                                fileName: "[project]/components/simulador/TelaRota.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvisoSemaforo, {
                                estado: nav.estado,
                                segundos: nav.segundos
                            }, void 0, false, {
                                fileName: "[project]/components/simulador/TelaRota.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "botao-transporte",
                                onClick: nav.abrirTransporte,
                                children: "ÔNIBUS E TREM"
                            }, void 0, false, {
                                fileName: "[project]/components/simulador/TelaRota.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador/TelaRota.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BotoesRota, {
                comando: nav.comando,
                bloqueados: nav.estado === "calculando"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/TelaRota.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/TelaTransporte.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TelaTransporte
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Pulseira.jsx [app-ssr] (ecmascript)");
;
;
function Partida({ partida, selecionada, clicar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `partida ${selecionada ? "partida-selecionada" : ""}`,
        "aria-pressed": selecionada,
        onClick: clicar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "partida-tipo",
                children: partida.tipo
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "partida-linha",
                children: partida.linha
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "partida-destino",
                children: partida.destino
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "partida-tempo",
                children: [
                    partida.minutos,
                    " min"
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/TelaTransporte.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function TelaTransporte({ pulso, nav }) {
    const item = nav.partidas[nav.selecionada];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tela-transporte",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "barra-tela",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "botao-voltar-inicio",
                    onClick: nav.voltarInicio,
                    children: "VOLTAR"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/TelaTransporte.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "arranjo-transporte",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        modo: pulso.modo,
                        menuAberto: pulso.menuAberto,
                        alternarMenu: ()=>pulso.definirMenu((v)=>!v),
                        escolherModo: pulso.escolherModo,
                        iniciarVoz: nav.iniciarVoz,
                        estado: "transporte",
                        transporte: true,
                        horizontal: true,
                        focarBraille: ()=>nav.definirBraille((v)=>!v),
                        numero: item?.minutos ?? 0,
                        mostrarFalante: true,
                        chegouTransporte: nav.chegouTransporte,
                        legenda: nav.chegouTransporte ? "CHEGADA" : ""
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaTransporte.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "app-transporte",
                        "aria-label": "Horários de ônibus, trem e metrô",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "titulo-chegando",
                                children: "Chegando Agora"
                            }, void 0, false, {
                                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            nav.partidas.map((partida, indice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Partida, {
                                    partida: partida,
                                    selecionada: indice === nav.selecionada,
                                    clicar: ()=>nav.selecionarPartida(indice)
                                }, partida.id, false, {
                                    fileName: "[project]/components/simulador/TelaTransporte.jsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador/TelaTransporte.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "voltar-mapa",
                onClick: nav.voltarMapa,
                children: "MAPA"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/TelaTransporte.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/Vitrine.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Vitrine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Os sinais da pulseira, um por cartão. O texto de cada cartão descreve o sinal e,
// nos sonoros, o botão "Som" toca o som (só depois do toque, nunca sozinho).
const SINAIS_VITRINE = [
    {
        grupo: "Tátil",
        nome: "Continue",
        tipo: "pressao",
        detalhe: "Pressão contínua no pulso."
    },
    {
        grupo: "Tátil",
        nome: "Pare",
        tipo: "parar",
        detalhe: "Vibração contínua até parar."
    },
    {
        grupo: "Tátil",
        nome: "Vire à esquerda",
        tipo: "esquerda",
        detalhe: "Vibração no lado esquerdo."
    },
    {
        grupo: "Tátil",
        nome: "Vire à direita",
        tipo: "direita",
        detalhe: "Vibração no lado direito."
    },
    {
        grupo: "Tátil",
        nome: "Aguarde",
        tipo: "aguarde",
        detalhe: "Três vibrações curtas, repetidas após uma pausa."
    },
    {
        grupo: "Sonoro",
        nome: "Continue",
        tipo: "grave",
        detalhe: "Som grosso e curto."
    },
    {
        grupo: "Sonoro",
        nome: "Pare",
        tipo: "agudo",
        detalhe: "Som agudo e contínuo."
    }
];
function PulseiraVitrine({ tipo, somAtivo = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `vitrine-pulseira vitrine-${tipo}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vitrine-faixa"
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vitrine-corpo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "vitrine-tela",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "vitrine-luz vitrine-luz-esq"
                        }, void 0, false, {
                            fileName: "[project]/components/simulador/Vitrine.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "vitrine-luz vitrine-luz-dir"
                        }, void 0, false, {
                            fileName: "[project]/components/simulador/Vitrine.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vitrine-braille",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6
                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, p, false, {
                                    fileName: "[project]/components/simulador/Vitrine.jsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/simulador/Vitrine.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `vitrine-falante ${somAtivo ? "vitrine-falante-ativo" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                    fileName: "[project]/components/simulador/Vitrine.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                    fileName: "[project]/components/simulador/Vitrine.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                    fileName: "[project]/components/simulador/Vitrine.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/simulador/Vitrine.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/simulador/Vitrine.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "vitrine-botao vitrine-modo"
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "vitrine-botao vitrine-voz"
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/Vitrine.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function CartaoVitrine({ sinal }) {
    const [somLigado, definirSom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sonoro = sinal.tipo === "grave" || sinal.tipo === "agudo";
    const encerrarSom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const som = audioRef.current;
        if (!som) return;
        if (som.intervalo) clearInterval(som.intervalo);
        try {
            som.oscilador.stop();
            som.contexto.close();
        } catch  {}
        audioRef.current = null;
    }, []);
    const alternarSom = ()=>{
        if (audioRef.current) {
            encerrarSom();
            definirSom(false);
            return;
        }
        const AudioApi = window.AudioContext || window.webkitAudioContext;
        if (!AudioApi) return;
        const contexto = new AudioApi();
        if (contexto.state === "suspended") contexto.resume().catch(()=>{});
        if (sinal.tipo === "agudo") {
            const oscilador = contexto.createOscillator();
            const ganho = contexto.createGain();
            oscilador.type = "sine";
            oscilador.frequency.value = 980;
            ganho.gain.value = 0.035;
            oscilador.connect(ganho);
            ganho.connect(contexto.destination);
            oscilador.start();
            audioRef.current = {
                contexto,
                oscilador
            };
        } else {
            const tocar = ()=>{
                const oscilador = contexto.createOscillator();
                const ganho = contexto.createGain();
                oscilador.type = "square";
                oscilador.frequency.value = 185;
                ganho.gain.value = 0.04;
                oscilador.connect(ganho);
                ganho.connect(contexto.destination);
                oscilador.start();
                oscilador.stop(contexto.currentTime + 0.22);
            };
            tocar();
            const intervalo = setInterval(tocar, 1700);
            audioRef.current = {
                contexto,
                intervalo,
                oscilador: {
                    stop: ()=>clearInterval(intervalo)
                }
            };
        }
        definirSom(true);
    };
    // Ao sair da tela, o som para.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>encerrarSom, [
        encerrarSom
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "cartao-vitrine",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: sinal.grupo
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/Vitrine.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: sinal.nome
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/Vitrine.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    sonoro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `controle-vitrine ${somLigado ? "ligado" : ""}`,
                        onClick: alternarSom,
                        "aria-pressed": somLigado,
                        "aria-label": `Som do sinal ${sinal.nome}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/simulador/Vitrine.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            "Som",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/simulador/Vitrine.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador/Vitrine.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vitrine-cena",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PulseiraVitrine, {
                    tipo: sinal.tipo,
                    somAtivo: somLigado
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Vitrine.jsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: sinal.detalhe
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/Vitrine.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function Vitrine({ voltar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tela-vitrine",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topo-vitrine",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: voltar,
                    "aria-label": "Voltar",
                    children: "‹"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Vitrine.jsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grade-vitrine",
                "aria-label": "Comandos da pulseira",
                children: SINAIS_VITRINE.map((sinal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartaoVitrine, {
                        sinal: sinal
                    }, `${sinal.grupo}-${sinal.tipo}`, false, {
                        fileName: "[project]/components/simulador/Vitrine.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/Vitrine.jsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/simulador/fonte.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/hooks/useNavegacaoSimulador.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavegacaoSimulador",
    ()=>useNavegacaoSimulador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/simuladorService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-ssr] (ecmascript)");
;
;
;
function distanciaGeo(a, b) {
    const rad = Math.PI / 180;
    const dLat = (b[1] - a[1]) * rad;
    const dLon = (b[0] - a[0]) * rad;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * rad) * Math.cos(b[1] * rad) * Math.sin(dLon / 2) ** 2;
    return 6371000 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}
function criarPassos(rota, pronta = false) {
    const coords = rota.geometry.coordinates;
    const acumuladas = [
        0
    ];
    for(let i = 1; i < coords.length; i++){
        acumuladas.push(acumuladas[i - 1] + distanciaGeo(coords[i - 1], coords[i]));
    }
    const total = acumuladas.at(-1) || 1;
    const bruto = rota.legs?.flatMap((perna)=>perna.steps || []) || [];
    const curvas = bruto.flatMap((passo)=>{
        const modificador = passo.maneuver?.modifier || "";
        const tipo = modificador.includes("left") ? "esquerda" : modificador.includes("right") ? "direita" : "";
        const retorno = modificador.includes("uturn") ? "esquerda" : tipo;
        if (!retorno || !passo.maneuver?.location) return [];
        let maisPerto = 0;
        let menor = Infinity;
        coords.forEach((ponto, i)=>{
            const distancia = distanciaGeo(ponto, passo.maneuver.location);
            if (distancia < menor) {
                menor = distancia;
                maisPerto = i;
            }
        });
        const progresso = acumuladas[maisPerto] / total;
        return progresso > 0.012 && progresso < 0.985 ? [
            {
                tipo: retorno,
                progresso
            }
        ] : [];
    });
    if (pronta) {
        if (!curvas.some((curva)=>curva.tipo === "esquerda")) {
            curvas.push({
                tipo: "esquerda",
                progresso: 0.2
            });
        }
        if (!curvas.some((curva)=>curva.tipo === "direita")) {
            curvas.push({
                tipo: "direita",
                progresso: 0.56
            });
        }
    }
    const travessias = pronta ? [
        0.36,
        0.78
    ] : [
        0.5
    ];
    const eventos = [
        {
            tipo: "continuar",
            progresso: 0
        },
        ...curvas,
        ...travessias.map((progresso)=>({
                tipo: "semaforo",
                progresso
            })),
        {
            tipo: "chegada",
            progresso: 1
        }
    ].sort((a, b)=>a.progresso - b.progresso);
    return eventos.reduce((lista, evento)=>{
        const anterior = lista.at(-1);
        const repetido = [
            "esquerda",
            "direita"
        ].includes(evento.tipo) && anterior?.tipo === evento.tipo && Math.abs(evento.progresso - anterior.progresso) < 0.004;
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
    const distancias = [
        0
    ];
    for(let i = 1; i < coords.length; i++){
        distancias.push(distancias[i - 1] + distanciaGeo(coords[i - 1], coords[i]));
    }
    const alvo = (distancias.at(-1) || 0) * Math.max(0, Math.min(1, progresso));
    let indice = 1;
    while(indice < distancias.length - 1 && distancias[indice] < alvo)indice++;
    const a = coords[indice - 1];
    const b = coords[indice];
    const parte = (alvo - distancias[indice - 1]) / (distancias[indice] - distancias[indice - 1] || 1);
    return [
        a[0] + (b[0] - a[0]) * parte,
        a[1] + (b[1] - a[1]) * parte,
        indice
    ];
}
// Tempo do semáforo: curto na simulação pronta, de 18 a 30 s no trajeto livre.
function sortearTempoSemaforo(simulacaoPronta) {
    return simulacaoPronta ? 6 + Math.floor(Math.random() * 4) : 18 + Math.floor(Math.random() * 13);
}
const normalizar = (valor)=>valor.normalize("NFD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("pt-BR").trim().replace(/[.,!?]+$/g, "");
function useNavegacaoSimulador(modo, emitirContinuar) {
    const [tela, definirTela] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("inicio");
    const [estado, definirEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("inicial");
    const [erro, definirErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [destino, definirDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [origem, definirOrigem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rota, definirRota] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [passos, definirPassos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [indice, definirIndice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progresso, definirProgresso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [segundos, definirSegundos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [partidasAtivas, definirPartidas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selecionada, definirSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [brailleAberto, definirBraille] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chegouTransporte, definirChegouTransporte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [simulacaoPronta, definirSimulacaoPronta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const esperaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const chegadaFalouRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const partidasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const selecionadaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const chegouTransporteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const modoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(modo);
    const progressoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const segundosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        partidasRef.current = partidasAtivas;
    }, [
        partidasAtivas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selecionadaRef.current = selecionada;
    }, [
        selecionada
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        modoRef.current = modo;
    }, [
        modo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        progressoRef.current = progresso;
    }, [
        progresso
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        segundosRef.current = segundos;
    }, [
        segundos
    ]);
    const instalarRota = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((novaOrigem, novoDestino, novaRota, pronta = false)=>{
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
    const iniciarVoz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Se já estava ouvindo ou calculando, o mais seguro é voltar a andar.
        const estadoAntes = estado === "ouvindo" || estado === "calculando" ? "andando" : estado;
        definirErro("");
        definirEstado("ouvindo");
        try {
            const fala = (await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ouvirDestino"]()).trim();
            if (/^salvar\s+rota\b/i.test(fala.normalize("NFD").replace(/[̀-ͯ]/g, ""))) {
                definirEstado("ouvindo");
                const textoCampo = async (pergunta, rotulo)=>{
                    const resposta = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ouvirCampo"](pergunta);
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarDestino"](inicioFalado),
                    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarDestino"](destinoFalado)
                ]);
                const criada = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["criarRota"]({
                    nome,
                    inicio: {
                        texto: pontoInicio.nome,
                        lat: pontoInicio.lat,
                        lon: pontoInicio.lon
                    },
                    destino: {
                        texto: pontoDestino.nome,
                        lat: pontoDestino.lat,
                        lon: pontoDestino.lon
                    }
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["falarEEsperar"](`Rota ${criada.nome} salva.`);
                definirEstado("inicial");
                return;
            }
            let rotas = [];
            try {
                rotas = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listarRotas"]();
            } catch  {}
            const consultaSalva = normalizar(fala).replace(/^(?:destino|rota)\s+/, "");
            const salva = rotas.find((item)=>normalizar(item.nome) === consultaSalva);
            if (salva) {
                definirEstado("calculando");
                const novaOrigem = {
                    lat: salva.inicio.lat,
                    lon: salva.inicio.lon,
                    nome: salva.inicio.texto
                };
                const novoDestino = {
                    lat: salva.destino.lat,
                    lon: salva.destino.lon,
                    nome: salva.destino.texto
                };
                const novaRota = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem, novoDestino);
                instalarRota(novaOrigem, novoDestino, novaRota);
                return;
            }
            const novoDestino = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarDestino"](fala);
            const novaOrigem = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obterOrigem"]();
            const novaRota = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem, novoDestino);
            instalarRota(novaOrigem, novoDestino, novaRota);
        } catch (falha) {
            definirErro(mensagemFalha(falha, "Não foi possível concluir a solicitação por voz. Tente novamente."));
            // Falhou: volta ao que estava acontecendo, para a navegação não travar.
            definirEstado(tela === "inicio" ? "inicial" : estadoAntes);
        }
    }, [
        estado,
        instalarRota,
        tela
    ]);
    const iniciarRotaSalva = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (salva)=>{
        definirErro("");
        definirEstado("calculando");
        try {
            const novaOrigem = {
                lat: salva.inicio.lat,
                lon: salva.inicio.lon,
                nome: salva.inicio.texto
            };
            const novoDestino = {
                lat: salva.destino.lat,
                lon: salva.destino.lon,
                nome: salva.destino.texto
            };
            const novaRota = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem, novoDestino);
            instalarRota(novaOrigem, novoDestino, novaRota);
        } catch (falha) {
            definirErro(mensagemFalha(falha, "Não foi possível carregar esta rota."));
            definirTela("inicio");
            definirEstado("inicial");
        }
    }, [
        instalarRota
    ]);
    const iniciarSimulacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        definirErro("");
        definirEstado("calculando");
        try {
            let exemplo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"];
            try {
                exemplo = (await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listarRotas"]()).find((item)=>item.id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"].id) || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"];
            } catch  {}
            const novaOrigem = {
                lat: exemplo.inicio.lat,
                lon: exemplo.inicio.lon,
                nome: exemplo.inicio.texto
            };
            const novoDestino = {
                lat: exemplo.destino.lat,
                lon: exemplo.destino.lon,
                nome: exemplo.destino.texto
            };
            const novaRota = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem, novoDestino);
            instalarRota(novaOrigem, novoDestino, novaRota, true);
        } catch (falha) {
            definirErro(mensagemFalha(falha, "Não foi possível carregar a simulação pronta. Tente novamente."));
            definirEstado("inicial");
        }
    }, [
        instalarRota
    ]);
    const recalcular = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (acao)=>{
        if (!rota || !destino) return;
        definirErro("");
        definirEstado("calculando");
        try {
            const coords = rota.geometry.coordinates;
            const [lon, lat, indicePonto] = pontoRota(coords, progresso);
            const novaOrigem = {
                lon,
                lat
            };
            const anterior = coords[Math.max(0, indicePonto - 1)];
            const proximo = coords[Math.min(coords.length - 1, indicePonto)];
            const dx = proximo[0] - anterior[0];
            const dy = proximo[1] - anterior[1];
            const tamanho = Math.hypot(dx, dy) || 1;
            const passo = 0.00028 / tamanho;
            const desvio = acao === "esquerda" ? [
                -dy * passo,
                dx * passo
            ] : acao === "direita" ? [
                dy * passo,
                -dx * passo
            ] : acao === "continuar" ? [
                dx * passo,
                dy * passo
            ] : [
                0,
                0
            ];
            const pontos = acao ? [
                {
                    lon: lon + desvio[0],
                    lat: lat + desvio[1]
                }
            ] : [];
            const novaRota = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem, destino, pontos);
            instalarRota(novaOrigem, destino, novaRota, simulacaoPronta);
        } catch  {
            definirErro("");
            definirEstado("andando");
        }
    }, [
        rota,
        destino,
        progresso,
        instalarRota,
        simulacaoPronta
    ]);
    // Anda pela rota até o próximo passo (curva, semáforo ou chegada).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (estado !== "andando" || !rota || !passos[indice + 1]) return undefined;
        const alvo = passos[indice + 1];
        let quadro = 0;
        let anterior = performance.now();
        let atual = progressoRef.current;
        const mover = (agora)=>{
            const decorrido = Math.min((agora - anterior) / 1000, 0.08);
            anterior = agora;
            const avancado = atual + decorrido * 60 / Math.max(rota.distance, 1);
            if (avancado >= alvo.progresso) {
                definirProgresso(alvo.progresso);
                definirIndice((valor)=>valor + 1);
                if (alvo.tipo === "semaforo") definirSegundos(sortearTempoSemaforo(simulacaoPronta));
                definirEstado(alvo.tipo === "semaforo" ? "semaforo" : alvo.tipo === "chegada" ? "chegada" : "orientacao");
                return;
            }
            atual = avancado;
            definirProgresso(avancado);
            quadro = requestAnimationFrame(mover);
        };
        quadro = requestAnimationFrame(mover);
        return ()=>cancelAnimationFrame(quadro);
    }, [
        estado,
        rota,
        passos,
        indice,
        simulacaoPronta
    ]);
    // Semáforo aberto: depois de um tempo, avisa por voz (só no modo sonoro).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (estado !== "semaforo") {
            esperaRef.current = false;
            return undefined;
        }
        esperaRef.current = false;
        const forcar = setTimeout(()=>{
            if (!esperaRef.current) {
                esperaRef.current = true;
                if (modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0]) __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitirFala"]("Semáforo à frente");
            }
        }, simulacaoPronta ? 4000 : 9000);
        return ()=>clearTimeout(forcar);
    }, [
        estado,
        modo,
        simulacaoPronta
    ]);
    // Contagem regressiva depois do comando "parar"; em zero, a pulseira pressiona.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (estado !== "contando") return undefined;
        const relogio = setInterval(()=>{
            const restante = Math.max(0, segundosRef.current - 1);
            segundosRef.current = restante;
            definirSegundos(restante);
            if (restante === 0) definirEstado("pressionando");
        }, 1000);
        return ()=>clearInterval(relogio);
    }, [
        estado
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (estado !== "chegada") {
            chegadaFalouRef.current = false;
            return;
        }
        if (modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0] && !chegadaFalouRef.current) {
            chegadaFalouRef.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitirFala"]("Você chegou ao seu destino");
        }
    }, [
        estado,
        modo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (estado === "pressionando" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0]) emitirContinuar();
    }, [
        estado,
        modo,
        emitirContinuar
    ]);
    const comando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (acao)=>{
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
        if (estado === "andando" && [
            "esquerda",
            "direita"
        ].includes(acao)) await recalcular(acao);
    }, [
        estado,
        passos,
        indice,
        recalcular
    ]);
    const abrirTransporte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const novasPartidas = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partidas"].map((item)=>({
                ...item,
                minutos: 1 + Math.floor(Math.random() * 6)
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
    const selecionarPartida = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((indiceNovo)=>{
        selecionadaRef.current = indiceNovo;
        definirSelecionada(indiceNovo);
        definirBraille(false);
    }, []);
    const voltarMapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        chegouTransporteRef.current = false;
        definirChegouTransporte(false);
        definirTela("rota");
        definirEstado("andando");
        definirIndice(0);
        definirProgresso(0);
    }, []);
    const voltarInicio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tela !== "transporte") return undefined;
        const relogio = setInterval(()=>{
            if (chegouTransporteRef.current) return;
            const indiceAtivo = selecionadaRef.current;
            const ativaAntes = partidasRef.current[indiceAtivo];
            if (!ativaAntes) return;
            const novoMinuto = Math.max(0, ativaAntes.minutos - 1);
            const atualizadas = partidasRef.current.map((partida, i)=>i === indiceAtivo ? {
                    ...partida,
                    minutos: novoMinuto
                } : partida);
            partidasRef.current = atualizadas;
            definirPartidas(atualizadas);
            const ativa = atualizadas[indiceAtivo];
            if (novoMinuto === 0) {
                chegouTransporteRef.current = true;
                definirChegouTransporte(true);
                if (modoRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0]) __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitirFala"](`${ativa.tipo} na plataforma`);
            } else if (modoRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitirFala"](`${ativa.linha} a ${novoMinuto} ${novoMinuto === 1 ? "minuto" : "minutos"}`);
            }
        }, 8000);
        return ()=>clearInterval(relogio);
    }, [
        tela
    ]);
    // Depois da chegada, escolhe outra partida do mesmo tipo e recomeça.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tela !== "transporte" || !chegouTransporte) return undefined;
        const proximo = setTimeout(()=>{
            const anterior = selecionadaRef.current;
            const tipoAnterior = partidasRef.current[anterior]?.tipo;
            const opcoesMesmoTipo = partidasRef.current.map((item, i)=>i !== anterior && item.tipo === tipoAnterior ? i : -1).filter((i)=>i >= 0);
            const opcoes = opcoesMesmoTipo.length ? opcoesMesmoTipo : partidasRef.current.map((_, i)=>i).filter((i)=>i !== anterior);
            const indiceProximo = opcoes[Math.floor(Math.random() * opcoes.length)] ?? anterior;
            const atualizadas = partidasRef.current.map((partida, i)=>i === indiceProximo ? {
                    ...partida,
                    minutos: 1 + Math.floor(Math.random() * 6)
                } : partida);
            partidasRef.current = atualizadas;
            selecionadaRef.current = indiceProximo;
            chegouTransporteRef.current = false;
            definirPartidas(atualizadas);
            definirSelecionada(indiceProximo);
            definirChegouTransporte(false);
        }, 3500);
        return ()=>clearTimeout(proximo);
    }, [
        tela,
        chegouTransporte
    ]);
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
        voltarInicio
    };
}
}),
"[project]/hooks/usePulseiraSimulador.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePulseiraSimulador",
    ()=>usePulseiraSimulador,
    "useSomSemaforo",
    ()=>useSomSemaforo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-ssr] (ecmascript)");
;
;
const CHAVE_MODO = "modo-pulseira";
// O modo escolhido fica no localStorage e é lido por useSyncExternalStore: o servidor
// e a hidratação usam o modo padrão, e o navegador troca para o salvo sem erro de
// hidratação e sem setState dentro de efeito.
let modoEscolhido = null;
const ouvintes = new Set();
function assinarModo(aoMudar) {
    ouvintes.add(aoMudar);
    window.addEventListener("storage", aoMudar);
    return ()=>{
        ouvintes.delete(aoMudar);
        window.removeEventListener("storage", aoMudar);
    };
}
function lerModo() {
    if (modoEscolhido) return modoEscolhido;
    try {
        const salvo = localStorage.getItem(CHAVE_MODO);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"].includes(salvo) ? salvo : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODO_PADRAO"];
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODO_PADRAO"];
    }
}
const lerModoNoServidor = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODO_PADRAO"];
function gravarModo(valor) {
    modoEscolhido = valor;
    try {
        localStorage.setItem(CHAVE_MODO, valor);
    } catch  {}
    for (const aoMudar of ouvintes)aoMudar();
}
function criarContexto() {
    const AudioApi = window.AudioContext || window.webkitAudioContext;
    return AudioApi ? new AudioApi() : null;
}
function usePulseiraSimulador() {
    const modo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(assinarModo, lerModo, lerModoNoServidor);
    const [menuAberto, definirMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const escolherModo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((valor)=>{
        gravarModo(valor);
        definirMenu(false);
    }, []);
    const emitirContinuar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (modo !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0]) return;
        const contexto = criarContexto();
        if (!contexto) return;
        if (contexto.state === "suspended") contexto.resume().catch(()=>{});
        const oscilador = contexto.createOscillator();
        const volume = contexto.createGain();
        oscilador.type = "square";
        oscilador.frequency.value = 210;
        volume.gain.value = 0.028;
        oscilador.connect(volume);
        volume.connect(contexto.destination);
        oscilador.start();
        oscilador.stop(contexto.currentTime + 0.22);
        oscilador.onended = ()=>contexto.close();
    }, [
        modo
    ]);
    return {
        modo,
        menuAberto,
        definirMenu,
        escolherModo,
        emitirContinuar
    };
}
function useSomSemaforo(modo, estado) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (modo !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modos"][0] || estado !== "semaforo") return undefined;
        const contexto = criarContexto();
        if (!contexto) return undefined;
        const oscilador = contexto.createOscillator();
        const volume = contexto.createGain();
        oscilador.type = "sine";
        oscilador.frequency.value = 1050;
        volume.gain.value = 0.045;
        oscilador.connect(volume);
        volume.connect(contexto.destination);
        oscilador.start();
        return ()=>{
            try {
                oscilador.stop();
            } catch  {}
            contexto.close();
        };
    }, [
        modo,
        estado
    ]);
}
}),
"[project]/lib/simulador/dados.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dados fixos do simulador: modos da pulseira, rota de exemplo, partidas de
// transporte e os pontos do Braille (números 0 a 6, usados no tempo de espera).
// Mesmos nomes dos modos da pulseira (seção 6.3).
__turbopack_context__.s([
    "MODO_PADRAO",
    ()=>MODO_PADRAO,
    "braille",
    ()=>braille,
    "modos",
    ()=>modos,
    "origemReserva",
    ()=>origemReserva,
    "partidas",
    ()=>partidas,
    "rotaExemplo",
    ()=>rotaExemplo
]);
const modos = [
    "Sonoro e tátil",
    "Exclusivamente tátil"
];
const MODO_PADRAO = modos[1];
const rotaExemplo = {
    id: "rota-1",
    nome: "Rota 1",
    exemplo: true,
    inicio: {
        texto: "Alameda Santos, São Paulo - SP",
        lat: -23.5654,
        lon: -46.6572
    },
    destino: {
        texto: "FIAP Paulista · Av. Paulista, 1106",
        lat: -23.5640843,
        lon: -46.6523865
    }
};
const partidas = [
    {
        id: "onibus-875a",
        tipo: "Ônibus",
        linha: "875A",
        destino: "Metrô Ana Rosa"
    },
    {
        id: "metro-verde",
        tipo: "Metrô",
        linha: "Linha 2 · Verde",
        destino: "Vila Madalena"
    },
    {
        id: "trem-esmeralda",
        tipo: "Trem",
        linha: "Linha 9 · Esmeralda",
        destino: "Osasco"
    },
    {
        id: "onibus-477p",
        tipo: "Ônibus",
        linha: "477P",
        destino: "Ipiranga"
    }
];
const origemReserva = {
    lat: -23.5614,
    lon: -46.6562
};
const braille = {
    0: [
        2,
        4,
        5
    ],
    1: [
        1
    ],
    2: [
        1,
        2
    ],
    3: [
        1,
        4
    ],
    4: [
        1,
        4,
        5
    ],
    5: [
        1,
        5
    ],
    6: [
        1,
        2,
        4
    ]
};
}),
"[project]/services/simuladorService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apagarRota",
    ()=>apagarRota,
    "atualizarRota",
    ()=>atualizarRota,
    "buscarDestino",
    ()=>buscarDestino,
    "buscarRota",
    ()=>buscarRota,
    "criarRota",
    ()=>criarRota,
    "emitirFala",
    ()=>emitirFala,
    "falarEEsperar",
    ()=>falarEEsperar,
    "listarRotas",
    ()=>listarRotas,
    "obterOrigem",
    ()=>obterOrigem,
    "ouvirCampo",
    ()=>ouvirCampo,
    "ouvirDestino",
    ()=>ouvirDestino
]);
// Serviços do simulador: mapa, rota, voz e rotas salvas.
// Regra do site: o apiClient.js é o único que fala com a API do Diário. Este arquivo
// fala com outros serviços (OpenStreetMap, rota a pé e /api/rotas) e é só do simulador.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-ssr] (ecmascript)");
;
const baseMapa = "https://nominatim.openstreetmap.org/search";
const baseRota = "https://routing.openstreetmap.de/routed-foot/route/v1/driving";
const chaveUsuario = "pulseira-usuario-id";
const chaveRotas = "pulseira-rotas-salvas";
// Em desenvolvimento, sem banco configurado, as rotas ficam no navegador.
const emDesenvolvimento = ("TURBOPACK compile-time value", "development") !== "production";
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
        if (Array.isArray(salvas) && !salvas.some((rota)=>rota.id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"].id)) {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"],
                ...salvas
            ];
        }
        if (Array.isArray(salvas)) return salvas;
    } catch  {}
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"]
    ];
}
function gravarRotasLocais(rotas) {
    localStorage.setItem(chaveRotas, JSON.stringify(rotas));
}
async function requisitarRotas(metodo = "GET", id, dados) {
    const consulta = id ? `?id=${encodeURIComponent(id)}` : "";
    const resposta = await fetch(`/api/rotas${consulta}`, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            "x-pulseira-usuario": obterIdUsuario()
        },
        ...dados ? {
            body: JSON.stringify(dados)
        } : {}
    });
    const tipo = resposta.headers.get("content-type") || "";
    if (!tipo.includes("application/json")) {
        throw new Error("API de rotas indisponível neste ambiente");
    }
    const corpo = await resposta.json().catch(()=>({}));
    if (!resposta.ok) {
        throw new Error(corpo.statusMessage || corpo.message || `falha ao salvar rotas (${resposta.status}).`);
    }
    return corpo;
}
async function obterJson(url, opcoes) {
    const resposta = await fetch(url, opcoes);
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
    return resposta.json();
}
async function ouvirDestino() {
    const Reconhecedor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Reconhecedor) throw new Error("Reconhecimento de voz indisponível neste navegador.");
    return new Promise((resolver, rejeitar)=>{
        const ouvinte = new Reconhecedor();
        ouvinte.lang = "pt-BR";
        ouvinte.interimResults = false;
        ouvinte.maxAlternatives = 1;
        ouvinte.onresult = (evento)=>resolver(evento.results[0][0].transcript);
        ouvinte.onerror = (evento)=>rejeitar(new Error(evento.error === "not-allowed" ? "Permita o uso do microfone." : "Não foi possível reconhecer o endereço."));
        ouvinte.start();
    });
}
function falarEEsperar(texto) {
    return new Promise((resolver)=>{
        if (!("speechSynthesis" in window)) return resolver();
        window.speechSynthesis.cancel();
        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = "pt-BR";
        fala.onend = resolver;
        fala.onerror = resolver;
        window.speechSynthesis.speak(fala);
    });
}
async function ouvirCampo(texto) {
    await falarEEsperar(texto);
    return ouvirDestino();
}
function obterOrigem() {
    return new Promise((resolver)=>{
        if (!navigator.geolocation) return resolver(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["origemReserva"]);
        navigator.geolocation.getCurrentPosition((posicao)=>resolver({
                lat: posicao.coords.latitude,
                lon: posicao.coords.longitude
            }), ()=>resolver(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["origemReserva"]), {
            enableHighAccuracy: true,
            timeout: 7000,
            maximumAge: 15000
        });
    });
}
async function buscarDestino(endereco) {
    const consulta = new URLSearchParams({
        format: "jsonv2",
        limit: "1",
        "accept-language": "pt-BR",
        q: endereco
    });
    const lugares = await obterJson(`${baseMapa}?${consulta}`);
    if (!lugares.length) throw new Error("Endereço não encontrado. Tente falar novamente.");
    return {
        lat: Number(lugares[0].lat),
        lon: Number(lugares[0].lon),
        nome: lugares[0].display_name.split(",").slice(0, 3).join(",")
    };
}
async function buscarRota(origem, destino, intermediarios = []) {
    const pontos = [
        origem,
        ...intermediarios,
        destino
    ].map((ponto)=>`${ponto.lon},${ponto.lat}`).join(";");
    const consulta = new URLSearchParams({
        overview: "full",
        geometries: "geojson",
        steps: "true"
    });
    const dados = await obterJson(`${baseRota}/${pontos}?${consulta}`);
    if (dados.code !== "Ok" || !dados.routes?.length) {
        throw new Error("Não foi possível calcular a rota.");
    }
    return dados.routes[0];
}
async function listarRotas() {
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const rotas = (await requisitarRotas()).rotas;
            if (!Array.isArray(rotas)) throw new Error("Resposta de rotas inválida.");
            return rotas;
        } catch  {
            return rotasLocais();
        }
    }
    const rotas = (await requisitarRotas()).rotas;
    if (!Array.isArray(rotas)) throw new Error("Não foi possível consultar as rotas salvas.");
    return rotas;
}
async function criarRota(rota) {
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const criada = (await requisitarRotas("POST", null, rota)).rota;
            if (!criada?.id) throw new Error("Resposta inválida.");
            return criada;
        } catch  {
            const novas = [
                ...rotasLocais(),
                {
                    ...rota,
                    id: crypto.randomUUID(),
                    exemplo: false
                }
            ];
            gravarRotasLocais(novas);
            return novas.at(-1);
        }
    }
    const criada = (await requisitarRotas("POST", null, rota)).rota;
    if (!criada?.id) throw new Error("Não foi possível salvar a rota.");
    return criada;
}
async function atualizarRota(id, rota) {
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"].id) throw new Error("A rota de exemplo não pode ser editada.");
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            return (await requisitarRotas("PUT", id, rota)).rota;
        } catch  {
            const novas = rotasLocais().map((item)=>item.id === id ? {
                    ...item,
                    ...rota
                } : item);
            gravarRotasLocais(novas);
            return novas.find((item)=>item.id === id);
        }
    }
    return (await requisitarRotas("PUT", id, rota)).rota;
}
async function apagarRota(id) {
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotaExemplo"].id) throw new Error("A rota de exemplo não pode ser excluída.");
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            await requisitarRotas("DELETE", id);
        } catch  {
            gravarRotasLocais(rotasLocais().filter((item)=>item.id !== id));
        }
        return true;
    }
    //TURBOPACK unreachable
    ;
}
function emitirFala(texto) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    window.speechSynthesis.speak(fala);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_lpdpan93q0q._.js.map