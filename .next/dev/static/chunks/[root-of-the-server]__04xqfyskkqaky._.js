(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/dm_sans_6bcef329.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'DM Sans', 'DM Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/dm_sans_6bcef329.js [app-client] (ecmascript) <export default as dmSans>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dmSans",
    ()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.js [app-client] (ecmascript)");
}),
"[next]/internal/font/google/dm_sans_6bcef329.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "dm_sans_6bcef329-module__r87QuG__className",
  "variable": "dm_sans_6bcef329-module__r87QuG__variable",
});
}),
"[project]/components/simulador/Pulseira.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pulseira
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-client] (ecmascript)");
;
;
;
function BotaoPulseira(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6";
    }
    const { nome, acao, ativo, piscar: t1, dica } = t0;
    const piscar = t1 === undefined ? false : t1;
    const t2 = `botao-pulseira ${ativo ? "botao-ativo" : ""} ${piscar && ativo ? "botao-pisca" : ""}`;
    const t3 = dica || nome;
    const t4 = dica || nome;
    let t5;
    if ($[1] !== acao || $[2] !== t2 || $[3] !== t3 || $[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t2,
            onClick: acao,
            "aria-label": t3,
            "data-dica": t4
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = acao;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
}
_c = BotaoPulseira;
function MenuModos(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6";
    }
    const { modo, aberto, escolher } = t0;
    if (!aberto) {
        return null;
    }
    let t1;
    if ($[1] !== escolher || $[2] !== modo) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"].map({
            "MenuModos[modos.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: item === modo ? "modo-selecionado" : "",
                    "aria-pressed": item === modo,
                    onClick: {
                        "MenuModos[modos.map() > <button>.onClick]": ()=>escolher(item)
                    }["MenuModos[modos.map() > <button>.onClick]"],
                    children: item
                }, item, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 54,
                    columnNumber: 41
                }, this)
        }["MenuModos[modos.map()]"]);
        $[1] = escolher;
        $[2] = modo;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "menu-modos",
            role: "group",
            "aria-label": "Modos da pulseira",
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c1 = MenuModos;
function PontosBraille(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6";
    }
    const { numero, chegada: t1 } = t0;
    const chegada = t1 === undefined ? false : t1;
    let t2;
    if ($[1] !== chegada || $[2] !== numero) {
        const ativos = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["braille"][String(numero)] || [];
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pontos-braille",
            role: "img",
            "aria-label": `Braille ${numero}`,
            "data-dica": "Pinos retr\xE1teis para Braille",
            children: [
                1,
                2,
                3,
                4,
                5,
                6
            ].map({
                "PontosBraille[(anonymous)()]": (ponto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: chegada || ativos.includes(ponto) ? "ponto-erguido" : ""
                    }, ponto, false, {
                        fileName: "[project]/components/simulador/Pulseira.jsx",
                        lineNumber: 91,
                        columnNumber: 50
                    }, this)
            }["PontosBraille[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[1] = chegada;
        $[2] = numero;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c2 = PontosBraille;
function JanelaBraille(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6";
    }
    const { completo: t1 } = t0;
    const completo = t1 === undefined ? false : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            1,
            2,
            3,
            4,
            5,
            6
        ];
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== completo) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "janela-braille-pulseira",
            role: "img",
            "aria-label": "Pinos retr\xE1teis para Braille",
            "data-dica": "Pinos retr\xE1teis para Braille",
            children: t2.map({
                "JanelaBraille[(anonymous)()]": (ponto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: completo ? "pino-braille-erguido" : ""
                    }, ponto, false, {
                        fileName: "[project]/components/simulador/Pulseira.jsx",
                        lineNumber: 123,
                        columnNumber: 50
                    }, this)
            }["JanelaBraille[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[2] = completo;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c3 = JanelaBraille;
function IconeFalante() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "icone-falante-pulseira",
            "data-dica": "Alto-falante",
            "aria-label": "Alto-falante",
            role: "img",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 142,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 142,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 142,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c4 = IconeFalante;
function Pulseira(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "089c4037747186faed2ab6904ffb5f83d378806e238f172c571868d31e9c4bc6";
    }
    const { modo, menuAberto, alternarMenu, escolherModo, iniciarVoz, estado, lado, legenda: t1, erro, transporte: t2, horizontal: t3, numero, focarBraille, mostrarFalante: t4, chegouTransporte: t5 } = t0;
    const legenda = t1 === undefined ? "" : t1;
    const transporte = t2 === undefined ? false : t2;
    const horizontal = t3 === undefined ? false : t3;
    const mostrarFalante = t4 === undefined ? false : t4;
    const chegouTransporte = t5 === undefined ? false : t5;
    const Tela = transporte ? "button" : "div";
    const vibrarParada = estado === "semaforo" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][1];
    const pressaoAtiva = estado === "pressionando" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][1];
    const t6 = transporte ? "pulseira-transporte" : "";
    const t7 = chegouTransporte ? "pulseira-chegou-transporte" : "";
    const t8 = horizontal ? "pulseira-horizontal" : "";
    const t9 = pressaoAtiva ? "pulseira-sinal-pressao" : "";
    const t10 = vibrarParada ? "pulseira-sinal-parada" : "";
    let t11;
    if ($[1] !== t10 || $[2] !== t6 || $[3] !== t7 || $[4] !== t8 || $[5] !== t9) {
        t11 = [
            "pulseira-conjunto",
            t6,
            t7,
            t8,
            t9,
            t10
        ].filter(Boolean);
        $[1] = t10;
        $[2] = t6;
        $[3] = t7;
        $[4] = t8;
        $[5] = t9;
        $[6] = t11;
    } else {
        t11 = $[6];
    }
    const classePulseira = t11.join(" ");
    let t12;
    let t13;
    if ($[7] !== legenda) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "somente-leitor",
            role: "status",
            children: legenda
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        t13 = legenda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sinal-pulseira",
            "aria-hidden": "true",
            children: legenda
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 208,
            columnNumber: 22
        }, this);
        $[7] = legenda;
        $[8] = t12;
        $[9] = t13;
    } else {
        t12 = $[8];
        t13 = $[9];
    }
    let t14;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pulseira-fivela"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[10] = t14;
    } else {
        t14 = $[10];
    }
    const t15 = `pulseira-corpo ${pressaoAtiva ? "pulseira-aperta" : ""}`;
    const t16 = transporte ? "button" : undefined;
    const t17 = transporte ? focarBraille : undefined;
    const t18 = transporte ? "Mostrar pinos Braille" : undefined;
    let t19;
    if ($[11] !== chegouTransporte || $[12] !== estado || $[13] !== lado || $[14] !== modo || $[15] !== mostrarFalante || $[16] !== numero || $[17] !== transporte) {
        t19 = transporte ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PontosBraille, {
                    numero: numero,
                    chegada: chegouTransporte
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 26
                }, this),
                mostrarFalante && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconeFalante, {}, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "luz-lado luz-esquerda pulso-transporte"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "luz-lado luz-direita pulso-transporte"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 181
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 229,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JanelaBraille, {
                    completo: estado === "chegada" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][1]
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 247
                }, this),
                mostrarFalante && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconeFalante, {}, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 336
                }, this),
                lado === "esquerda" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "luz-lado luz-esquerda luz-ativa"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 376
                }, this) : null,
                lado === "direita" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "luz-lado luz-direita luz-ativa"
                }, void 0, false, {
                    fileName: "[project]/components/simulador/Pulseira.jsx",
                    lineNumber: 229,
                    columnNumber: 458
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 229,
            columnNumber: 245
        }, this);
        $[11] = chegouTransporte;
        $[12] = estado;
        $[13] = lado;
        $[14] = modo;
        $[15] = mostrarFalante;
        $[16] = numero;
        $[17] = transporte;
        $[18] = t19;
    } else {
        t19 = $[18];
    }
    let t20;
    if ($[19] !== Tela || $[20] !== t16 || $[21] !== t17 || $[22] !== t18 || $[23] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tela, {
            type: t16,
            className: "tela-pulseira",
            onClick: t17,
            "aria-label": t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[19] = Tela;
        $[20] = t16;
        $[21] = t17;
        $[22] = t18;
        $[23] = t19;
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] !== t15 || $[26] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: t20
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t20;
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pulseira-fivela pulseira-base"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] !== alternarMenu || $[30] !== menuAberto) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotaoPulseira, {
            nome: "Modo",
            dica: "Troca de modo",
            acao: alternarMenu,
            ativo: menuAberto,
            piscar: true
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[29] = alternarMenu;
        $[30] = menuAberto;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== escolherModo || $[33] !== menuAberto || $[34] !== modo) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuModos, {
            modo: modo,
            aberto: menuAberto,
            escolher: escolherModo
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[32] = escolherModo;
        $[33] = menuAberto;
        $[34] = modo;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] !== t23 || $[37] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "seletor-embrulho",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[36] = t23;
        $[37] = t24;
        $[38] = t25;
    } else {
        t25 = $[38];
    }
    const t26 = estado === "ouvindo";
    let t27;
    if ($[39] !== iniciarVoz || $[40] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotaoPulseira, {
            nome: "Voz",
            dica: "Reconhecimento de voz",
            acao: iniciarVoz,
            ativo: t26
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[39] = iniciarVoz;
        $[40] = t26;
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] !== t25 || $[43] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "botoes-pulseira",
            children: [
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[42] = t25;
        $[43] = t27;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] !== t21 || $[46] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pulseira-faixa",
            children: [
                t14,
                t21,
                t22,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[45] = t21;
        $[46] = t28;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== transporte) {
        t30 = transporte && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "legenda-aguarde-transporte",
            children: "3 vibrações rápidas"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 327,
            columnNumber: 25
        }, this);
        $[48] = transporte;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] !== erro) {
        t31 = erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "erro-voz",
            role: "alert",
            children: erro
        }, void 0, false, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 335,
            columnNumber: 19
        }, this);
        $[50] = erro;
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] !== classePulseira || $[53] !== t12 || $[54] !== t13 || $[55] !== t29 || $[56] !== t30 || $[57] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: classePulseira,
            "aria-label": "Pulseira Pulse",
            children: [
                t12,
                t13,
                t29,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Pulseira.jsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[52] = classePulseira;
        $[53] = t12;
        $[54] = t13;
        $[55] = t29;
        $[56] = t30;
        $[57] = t31;
        $[58] = t32;
    } else {
        t32 = $[58];
    }
    return t32;
}
_c5 = Pulseira;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "BotaoPulseira");
__turbopack_context__.k.register(_c1, "MenuModos");
__turbopack_context__.k.register(_c2, "PontosBraille");
__turbopack_context__.k.register(_c3, "JanelaBraille");
__turbopack_context__.k.register(_c4, "IconeFalante");
__turbopack_context__.k.register(_c5, "Pulseira");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/RotasSalvas.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RotasSalvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/simuladorService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RotasSalvas({ voltar, nav }) {
    _s();
    const [rotas, definirRotas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [carregando, definirCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [erro, definirErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editando, definirEditando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [salvando, definirSalvando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotasSalvas.useEffect": ()=>{
            let ativo = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listarRotas"]().then({
                "RotasSalvas.useEffect": (lista)=>{
                    if (ativo) definirRotas(lista);
                }
            }["RotasSalvas.useEffect"]).catch({
                "RotasSalvas.useEffect": (falha)=>{
                    if (ativo) definirErro(falha.message || "Não foi possível consultar as rotas salvas.");
                }
            }["RotasSalvas.useEffect"]).finally({
                "RotasSalvas.useEffect": ()=>{
                    if (ativo) definirCarregando(false);
                }
            }["RotasSalvas.useEffect"]);
            return ({
                "RotasSalvas.useEffect": ()=>{
                    ativo = false;
                }
            })["RotasSalvas.useEffect"];
        }
    }["RotasSalvas.useEffect"], []);
    const salvarEdicao = async (evento)=>{
        evento.preventDefault();
        const dados = new FormData(evento.currentTarget);
        definirSalvando(true);
        definirErro("");
        try {
            const [inicio, destino] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarDestino"](String(dados.get("inicio"))),
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarDestino"](String(dados.get("destino")))
            ]);
            const atualizada = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atualizarRota"](editando.id, {
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
            definirRotas((lista_0)=>lista_0.map((item)=>item.id === atualizada.id ? atualizada : item));
            definirEditando(null);
        } catch (falha_0) {
            definirErro(falha_0.message || "Não foi possível atualizar a rota.");
        } finally{
            definirSalvando(false);
        }
    };
    const excluir = async (rota)=>{
        if (rota.exemplo) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apagarRota"](rota.id);
            definirRotas((lista_1)=>lista_1.filter((item_0)=>item_0.id !== rota.id));
        } catch (falha_1) {
            definirErro(falha_1.message || "Não foi possível excluir a rota.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tela-rotas",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "barra-tela",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "erro-rotas",
                role: "alert",
                children: erro
            }, void 0, false, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 72,
                columnNumber: 16
            }, this),
            carregando ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: "Carregando rotas..."
            }, void 0, false, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 75,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "lista-rotas",
                "aria-label": "Rotas salvas",
                children: [
                    rotas.map((rota_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "cartao-rota",
                            children: editando?.id === rota_0.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: salvarEdicao,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Nome",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "nome",
                                                defaultValue: rota_0.nome,
                                                required: true,
                                                maxLength: "80"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Início",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "inicio",
                                                defaultValue: rota_0.inicio.texto,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Destino",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "destino",
                                                defaultValue: rota_0.destino.texto,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "acoes-rota",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: salvando,
                                                children: salvando ? "SALVANDO..." : "SALVAR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>definirEditando(null),
                                                children: "CANCELAR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                lineNumber: 77,
                                columnNumber: 45
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    rota_0.nome,
                                                    rota_0.exemplo ? " · EXEMPLO" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Início: ",
                                                    rota_0.inicio.texto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Destino: ",
                                                    rota_0.destino.texto
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "acoes-rota",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    nav.iniciarRotaSalva(rota_0);
                                                    voltar();
                                                },
                                                children: "USAR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this),
                                            !rota_0.exemplo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>definirEditando(rota_0),
                                                        children: "EDITAR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>excluir(rota_0),
                                                        children: "EXCLUIR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                                lineNumber: 114,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                                lineNumber: 98,
                                columnNumber: 27
                            }, this)
                        }, rota_0.id, false, {
                            fileName: "[project]/components/simulador/RotasSalvas.jsx",
                            lineNumber: 76,
                            columnNumber: 32
                        }, this)),
                    !rotas.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Nenhuma rota salva."
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/RotasSalvas.jsx",
                        lineNumber: 125,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/RotasSalvas.jsx",
                lineNumber: 75,
                columnNumber: 64
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulador/RotasSalvas.jsx",
        lineNumber: 66,
        columnNumber: 10
    }, this);
}
_s(RotasSalvas, "n3UCfLDxaXI81ytrkrCydwklwU0=");
_c = RotasSalvas;
var _c;
__turbopack_context__.k.register(_c, "RotasSalvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/Simulador.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Simulador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$fonte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/simulador/fonte.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dmSans$3e$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.js [app-client] (ecmascript) <export default as dmSans>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaInicial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/TelaInicial.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaRota$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/TelaRota.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaTransporte$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/TelaTransporte.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$RotasSalvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/RotasSalvas.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Vitrine$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Vitrine.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePulseiraSimulador.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavegacaoSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useNavegacaoSimulador.js [app-client] (ecmascript)");
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
// Nome de cada tela, lido pelo leitor de tela quando a pessoa troca de tela.
const NOMES_DAS_TELAS = {
    inicio: "tela inicial",
    vitrine: "comandos da pulseira",
    rotas: "rotas salvas",
    rota: "rota no mapa",
    transporte: "ônibus e trem"
};
function Simulador() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "d9bb051c9ce8d5b7ccc7b3c4594e70b5c1215eacb46845a6cc46cb5fd1fa7b1c") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9bb051c9ce8d5b7ccc7b3c4594e70b5c1215eacb46845a6cc46cb5fd1fa7b1c";
    }
    const [vitrineAberta, definirVitrineAberta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotasAbertas, definirRotasAbertas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pulso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePulseiraSimulador"])();
    const nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavegacaoSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavegacaoSimulador"])(pulso.modo, pulso.emitirContinuar);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSomSemaforo"])(pulso.modo, nav.estado);
    const refRaiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tela = vitrineAberta ? "vitrine" : rotasAbertas ? "rotas" : nav.tela;
    const telaAnterior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(tela);
    let t0;
    let t1;
    if ($[1] !== tela) {
        t0 = ({
            "Simulador[useEffect()]": ()=>{
                if (telaAnterior.current === tela) {
                    return;
                }
                telaAnterior.current = tela;
                const raiz = refRaiz.current;
                if (!raiz) {
                    return;
                }
                raiz.focus({
                    preventScroll: true
                });
                if (raiz.getBoundingClientRect().top < 0) {
                    raiz.scrollIntoView({
                        block: "start"
                    });
                }
            }
        })["Simulador[useEffect()]"];
        t1 = [
            tela
        ];
        $[1] = tela;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `Simulador da pulseira: ${NOMES_DAS_TELAS[tela]}`;
    let t3;
    if ($[4] !== nav || $[5] !== pulso || $[6] !== rotasAbertas || $[7] !== vitrineAberta) {
        t3 = vitrineAberta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Vitrine$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            voltar: {
                "Simulador[<Vitrine>.voltar]": ()=>definirVitrineAberta(false)
            }["Simulador[<Vitrine>.voltar]"]
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 77,
            columnNumber: 26
        }, this) : rotasAbertas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$RotasSalvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            voltar: {
                "Simulador[<RotasSalvas>.voltar]": ()=>definirRotasAbertas(false)
            }["Simulador[<RotasSalvas>.voltar]"],
            nav: nav
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 79,
            columnNumber: 59
        }, this) : nav.tela === "inicio" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaInicial$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pulso: pulso,
            nav: nav,
            abrirVitrine: {
                "Simulador[<TelaInicial>.abrirVitrine]": ()=>definirVitrineAberta(true)
            }["Simulador[<TelaInicial>.abrirVitrine]"],
            abrirRotas: {
                "Simulador[<TelaInicial>.abrirRotas]": ()=>definirRotasAbertas(true)
            }["Simulador[<TelaInicial>.abrirRotas]"]
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 81,
            columnNumber: 82
        }, this) : nav.tela === "transporte" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaTransporte$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pulso: pulso,
            nav: nav
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 85,
            columnNumber: 80
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$TelaRota$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pulso: pulso,
            nav: nav
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 85,
            columnNumber: 125
        }, this);
        $[4] = nav;
        $[5] = pulso;
        $[6] = rotasAbertas;
        $[7] = vitrineAberta;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t2 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refRaiz,
            tabIndex: -1,
            role: "region",
            "aria-label": t2,
            className: `simulador ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dmSans$3e$__["dmSans"].variable}`,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/simulador/Simulador.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_s(Simulador, "Mg3RHmUqxxeQCu9fSKa5I3x/Lk4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePulseiraSimulador"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavegacaoSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavegacaoSimulador"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePulseiraSimulador$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSomSemaforo"]
    ];
});
_c = Simulador;
var _c;
__turbopack_context__.k.register(_c, "Simulador");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/TelaInicial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TelaInicial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Pulseira.jsx [app-client] (ecmascript)");
;
;
;
function TelaInicial(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "91c0ca7c79c6bd45114ab0566973170d7d8a710a798d0da4fdb2119839bb5ecc") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91c0ca7c79c6bd45114ab0566973170d7d8a710a798d0da4fdb2119839bb5ecc";
    }
    const { pulso, nav, abrirVitrine, abrirRotas } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "“salvar rota”"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "“casa”"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: "“trabalho”"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "post-it post-it-esquerdo",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Para armazenar um caminho recorrente, toque no botão de reconhecimento de voz e diga",
                    " ",
                    t1,
                    ". Será solicitado o início, destino e nome, você pode nomear como quiser, por exemplo ",
                    t2,
                    " ou ",
                    t3,
                    ". Depois, diga ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "“destino [nome dado a rota]”"
                    }, void 0, false, {
                        fileName: "[project]/components/simulador/TelaInicial.jsx",
                        lineNumber: 42,
                        columnNumber: 263
                    }, this),
                    " para carregar a rota salva."
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/TelaInicial.jsx",
                lineNumber: 42,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== pulso) {
        t5 = ({
            "TelaInicial[<Pulseira>.alternarMenu]": ()=>pulso.definirMenu(_TelaInicialPulseiraAlternarMenuPulsoDefinirMenu)
        })["TelaInicial[<Pulseira>.alternarMenu]"];
        $[5] = pulso;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== nav.erro || $[8] !== nav.estado || $[9] !== nav.iniciarVoz || $[10] !== nav.segundos || $[11] !== pulso.escolherModo || $[12] !== pulso.menuAberto || $[13] !== pulso.modo || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            modo: pulso.modo,
            menuAberto: pulso.menuAberto,
            alternarMenu: t5,
            escolherModo: pulso.escolherModo,
            iniciarVoz: nav.iniciarVoz,
            estado: nav.estado,
            erro: nav.erro,
            lado: "",
            numero: nav.segundos,
            mostrarFalante: true
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = nav.erro;
        $[8] = nav.estado;
        $[9] = nav.iniciarVoz;
        $[10] = nav.segundos;
        $[11] = pulso.escolherModo;
        $[12] = pulso.menuAberto;
        $[13] = pulso.modo;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "post-it post-it-direito",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Para ir a um destino sem salvar a rota, toque no botão de reconhecimento de voz e diga o endereço de destino. A rota será carregada automaticamente."
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaInicial.jsx",
                lineNumber: 74,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "inicio-apresentacao",
            "aria-label": "Como usar a pulseira",
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== abrirRotas) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "botao-rotas-salvas",
            onClick: abrirRotas,
            children: "Rotas salvas"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[19] = abrirRotas;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== abrirVitrine) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "botao-vitrine",
            onClick: abrirVitrine,
            children: "Conheça como cada comando é feito"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[21] = abrirVitrine;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== nav.iniciarSimulacao) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "botao-simulacao-pronta",
            onClick: nav.iniciarSimulacao,
            children: "Testar simulação pronta"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[23] = nav.iniciarSimulacao;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t10 || $[26] !== t11 || $[27] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "inicio-acoes",
            "aria-label": "Op\xE7\xF5es iniciais",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t9;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tela-inicial",
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaInicial.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t8;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
}
_c = TelaInicial;
function _TelaInicialPulseiraAlternarMenuPulsoDefinirMenu(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "TelaInicial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/TelaRota.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TelaRota
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Pulseira.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-client] (ecmascript)");
;
"use client";
;
;
;
;
;
// O mapa usa o Leaflet, que só funciona no navegador.
const MapaRota = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/simulador/MapaRota.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/simulador/MapaRota.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mapa-rota mapa-carregando",
            role: "status",
            children: "Carregando mapa..."
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 11,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MapaRota;
function BotoesRota(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e9123cc200c00c3cfbf2b3434f90bb32ac77112315ac171a7507d7fe0797465c") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9123cc200c00c3cfbf2b3434f90bb32ac77112315ac171a7507d7fe0797465c";
    }
    const { comando, bloqueados } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
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
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== bloqueados || $[3] !== comando) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "botoes-rota",
            children: t1.map({
                "BotoesRota[(anonymous)()]": (t3)=>{
                    const [id, texto] = t3;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: bloqueados && id !== "continuar",
                        onClick: {
                            "BotoesRota[(anonymous)() > <button>.onClick]": ()=>comando(id)
                        }["BotoesRota[(anonymous)() > <button>.onClick]"],
                        children: texto
                    }, id, false, {
                        fileName: "[project]/components/simulador/TelaRota.jsx",
                        lineNumber: 39,
                        columnNumber: 18
                    }, this);
                }
            }["BotoesRota[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = bloqueados;
        $[3] = comando;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_c1 = BotoesRota;
function AvisoSemaforo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "e9123cc200c00c3cfbf2b3434f90bb32ac77112315ac171a7507d7fe0797465c") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9123cc200c00c3cfbf2b3434f90bb32ac77112315ac171a7507d7fe0797465c";
    }
    const { estado, segundos } = t0;
    if (![
        "semaforo",
        "contando",
        "pressionando"
    ].includes(estado)) {
        return null;
    }
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "luz-semaforo"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "FECHA EM"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    const t3 = estado === "pressionando" ? 0 : segundos;
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "SEGUNDOS"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aviso-semaforo",
            role: "status",
            "aria-live": "assertive",
            children: [
                t1,
                t2,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c2 = AvisoSemaforo;
// Texto do sinal que a pulseira está dando agora (em cada modo).
function legendaDoSinal(nav, modo, evento) {
    const { estado } = nav;
    const sonoro = modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0];
    if (estado === "orientacao") return `VIBRAÇÃO À ${evento === "esquerda" ? "ESQUERDA" : "DIREITA"}`;
    if (estado === "semaforo") return sonoro ? "SOM AGUDO CONTÍNUO" : "VIBRANDO CONSTANTEMENTE";
    if (estado === "pressionando") return sonoro ? "SOM GRAVE CURTO" : "PRESSÃO";
    if (estado === "chegada") return sonoro ? "VOCÊ CHEGOU AO SEU DESTINO" : "CHEGADA";
    return "";
}
function TelaRota(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "e9123cc200c00c3cfbf2b3434f90bb32ac77112315ac171a7507d7fe0797465c") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e9123cc200c00c3cfbf2b3434f90bb32ac77112315ac171a7507d7fe0797465c";
    }
    const { pulso, nav } = t0;
    const evento = nav.passos[nav.indice]?.tipo;
    const lado = nav.estado === "orientacao" ? evento : "";
    let t1;
    if ($[1] !== evento || $[2] !== nav || $[3] !== pulso.modo) {
        t1 = legendaDoSinal(nav, pulso.modo, evento);
        $[1] = evento;
        $[2] = nav;
        $[3] = pulso.modo;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const legenda = t1;
    let t2;
    if ($[5] !== nav.voltarInicio) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "barra-tela",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "botao-voltar-inicio",
                onClick: nav.voltarInicio,
                children: "VOLTAR"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaRota.jsx",
                lineNumber: 144,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[5] = nav.voltarInicio;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== pulso) {
        t3 = ({
            "TelaRota[<Pulseira>.alternarMenu]": ()=>pulso.definirMenu(_TelaRotaPulseiraAlternarMenuPulsoDefinirMenu)
        })["TelaRota[<Pulseira>.alternarMenu]"];
        $[7] = pulso;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== lado || $[10] !== legenda || $[11] !== nav.erro || $[12] !== nav.estado || $[13] !== nav.iniciarVoz || $[14] !== pulso.escolherModo || $[15] !== pulso.menuAberto || $[16] !== pulso.modo || $[17] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            modo: pulso.modo,
            menuAberto: pulso.menuAberto,
            alternarMenu: t3,
            escolherModo: pulso.escolherModo,
            iniciarVoz: nav.iniciarVoz,
            estado: nav.estado,
            lado: lado,
            legenda: legenda,
            horizontal: true,
            erro: nav.erro
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[9] = lado;
        $[10] = legenda;
        $[11] = nav.erro;
        $[12] = nav.estado;
        $[13] = nav.iniciarVoz;
        $[14] = pulso.escolherModo;
        $[15] = pulso.menuAberto;
        $[16] = pulso.modo;
        $[17] = t3;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] !== nav.destino || $[20] !== nav.origem || $[21] !== nav.passos || $[22] !== nav.progresso || $[23] !== nav.rota) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapaRota, {
            rota: nav.rota,
            origem: nav.origem,
            destino: nav.destino,
            progresso: nav.progresso,
            passos: nav.passos
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[19] = nav.destino;
        $[20] = nav.origem;
        $[21] = nav.passos;
        $[22] = nav.progresso;
        $[23] = nav.rota;
        $[24] = t5;
    } else {
        t5 = $[24];
    }
    let t6;
    if ($[25] !== nav.estado || $[26] !== nav.segundos) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvisoSemaforo, {
            estado: nav.estado,
            segundos: nav.segundos
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        $[25] = nav.estado;
        $[26] = nav.segundos;
        $[27] = t6;
    } else {
        t6 = $[27];
    }
    let t7;
    if ($[28] !== nav.abrirTransporte) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "botao-transporte",
            onClick: nav.abrirTransporte,
            children: "ÔNIBUS E TREM"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 199,
            columnNumber: 10
        }, this);
        $[28] = nav.abrirTransporte;
        $[29] = t7;
    } else {
        t7 = $[29];
    }
    let t8;
    if ($[30] !== t5 || $[31] !== t6 || $[32] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "area-mapa",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 207,
            columnNumber: 10
        }, this);
        $[30] = t5;
        $[31] = t6;
        $[32] = t7;
        $[33] = t8;
    } else {
        t8 = $[33];
    }
    let t9;
    if ($[34] !== t4 || $[35] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "arranjo-rota",
            children: [
                t4,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[34] = t4;
        $[35] = t8;
        $[36] = t9;
    } else {
        t9 = $[36];
    }
    const t10 = nav.estado === "calculando";
    let t11;
    if ($[37] !== nav.comando || $[38] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BotoesRota, {
            comando: nav.comando,
            bloqueados: t10
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[37] = nav.comando;
        $[38] = t10;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    let t12;
    if ($[40] !== t11 || $[41] !== t2 || $[42] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tela-rota",
            children: [
                t2,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaRota.jsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t2;
        $[42] = t9;
        $[43] = t12;
    } else {
        t12 = $[43];
    }
    return t12;
}
_c3 = TelaRota;
function _TelaRotaPulseiraAlternarMenuPulsoDefinirMenu(v) {
    return !v;
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MapaRota");
__turbopack_context__.k.register(_c1, "BotoesRota");
__turbopack_context__.k.register(_c2, "AvisoSemaforo");
__turbopack_context__.k.register(_c3, "TelaRota");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/TelaTransporte.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TelaTransporte
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/simulador/Pulseira.jsx [app-client] (ecmascript)");
;
;
;
function Partida(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "001cb319e1e75d1c10f2d27193ddbf8cf31ed030a5fd217b37cefb260f45ba3b") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "001cb319e1e75d1c10f2d27193ddbf8cf31ed030a5fd217b37cefb260f45ba3b";
    }
    const { partida, selecionada, clicar } = t0;
    const t1 = `partida ${selecionada ? "partida-selecionada" : ""}`;
    let t2;
    if ($[1] !== partida.tipo) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "partida-tipo",
            children: partida.tipo
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = partida.tipo;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== partida.linha) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "partida-linha",
            children: partida.linha
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = partida.linha;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== partida.destino) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "partida-destino",
            children: partida.destino
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[5] = partida.destino;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== partida.minutos) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "partida-tempo",
            children: [
                partida.minutos,
                " min"
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[7] = partida.minutos;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== clicar || $[10] !== selecionada || $[11] !== t1 || $[12] !== t2 || $[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t1,
            "aria-pressed": selecionada,
            onClick: clicar,
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[9] = clicar;
        $[10] = selecionada;
        $[11] = t1;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_c = Partida;
function TelaTransporte(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "001cb319e1e75d1c10f2d27193ddbf8cf31ed030a5fd217b37cefb260f45ba3b") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "001cb319e1e75d1c10f2d27193ddbf8cf31ed030a5fd217b37cefb260f45ba3b";
    }
    const { pulso, nav } = t0;
    const item = nav.partidas[nav.selecionada];
    let t1;
    if ($[1] !== nav.voltarInicio) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "barra-tela",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "botao-voltar-inicio",
                onClick: nav.voltarInicio,
                children: "VOLTAR"
            }, void 0, false, {
                fileName: "[project]/components/simulador/TelaTransporte.jsx",
                lineNumber: 82,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[1] = nav.voltarInicio;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== pulso) {
        t2 = ({
            "TelaTransporte[<Pulseira>.alternarMenu]": ()=>pulso.definirMenu(_TelaTransportePulseiraAlternarMenuPulsoDefinirMenu)
        })["TelaTransporte[<Pulseira>.alternarMenu]"];
        $[3] = pulso;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== nav) {
        t3 = ({
            "TelaTransporte[<Pulseira>.focarBraille]": ()=>nav.definirBraille(_TelaTransportePulseiraFocarBrailleNavDefinirBraille)
        })["TelaTransporte[<Pulseira>.focarBraille]"];
        $[5] = nav;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = item?.minutos ?? 0;
    const t5 = nav.chegouTransporte ? "CHEGADA" : "";
    let t6;
    if ($[7] !== nav.chegouTransporte || $[8] !== nav.iniciarVoz || $[9] !== pulso.escolherModo || $[10] !== pulso.menuAberto || $[11] !== pulso.modo || $[12] !== t2 || $[13] !== t3 || $[14] !== t4 || $[15] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$simulador$2f$Pulseira$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            modo: pulso.modo,
            menuAberto: pulso.menuAberto,
            alternarMenu: t2,
            escolherModo: pulso.escolherModo,
            iniciarVoz: nav.iniciarVoz,
            estado: "transporte",
            transporte: true,
            horizontal: true,
            focarBraille: t3,
            numero: t4,
            mostrarFalante: true,
            chegouTransporte: nav.chegouTransporte,
            legenda: t5
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[7] = nav.chegouTransporte;
        $[8] = nav.iniciarVoz;
        $[9] = pulso.escolherModo;
        $[10] = pulso.menuAberto;
        $[11] = pulso.modo;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "titulo-chegando",
            children: "Chegando Agora"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== nav) {
        t8 = nav.partidas.map({
            "TelaTransporte[nav.partidas.map()]": (partida, indice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Partida, {
                    partida: partida,
                    selecionada: indice === nav.selecionada,
                    clicar: {
                        "TelaTransporte[nav.partidas.map() > <Partida>.clicar]": ()=>nav.selecionarPartida(indice)
                    }["TelaTransporte[nav.partidas.map() > <Partida>.clicar]"]
                }, partida.id, false, {
                    fileName: "[project]/components/simulador/TelaTransporte.jsx",
                    lineNumber: 136,
                    columnNumber: 66
                }, this)
        }["TelaTransporte[nav.partidas.map()]"]);
        $[18] = nav;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "app-transporte",
            "aria-label": "Hor\xE1rios de \xF4nibus, trem e metr\xF4",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t6 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "arranjo-transporte",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[22] = t6;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== nav.voltarMapa) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "voltar-mapa",
            onClick: nav.voltarMapa,
            children: "MAPA"
        }, void 0, false, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[25] = nav.voltarMapa;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== t1 || $[28] !== t10 || $[29] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tela-transporte",
            children: [
                t1,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/TelaTransporte.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[27] = t1;
        $[28] = t10;
        $[29] = t11;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    return t12;
}
_c1 = TelaTransporte;
function _TelaTransportePulseiraFocarBrailleNavDefinirBraille(v_0) {
    return !v_0;
}
function _TelaTransportePulseiraAlternarMenuPulsoDefinirMenu(v) {
    return !v;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Partida");
__turbopack_context__.k.register(_c1, "TelaTransporte");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/Vitrine.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Vitrine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function PulseiraVitrine(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "38c70c2eb0da99a296d0975a373f1da89a2af286c58a31fe15dffb9255e5f1d1") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38c70c2eb0da99a296d0975a373f1da89a2af286c58a31fe15dffb9255e5f1d1";
    }
    const { tipo, somAtivo: t1 } = t0;
    const somAtivo = t1 === undefined ? false : t1;
    const t2 = `vitrine-pulseira vitrine-${tipo}`;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vitrine-faixa"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    let t5;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "vitrine-luz vitrine-luz-esq"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "vitrine-luz vitrine-luz-dir"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[2] = t4;
        $[3] = t5;
    } else {
        t4 = $[2];
        t5 = $[3];
    }
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vitrine-braille",
            children: [
                1,
                2,
                3,
                4,
                5,
                6
            ].map(_PulseiraVitrineAnonymous)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    const t7 = `vitrine-falante ${somAtivo ? "vitrine-falante-ativo" : ""}`;
    let t10;
    let t8;
    let t9;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 90,
            columnNumber: 11
        }, this);
        $[5] = t10;
        $[6] = t8;
        $[7] = t9;
    } else {
        t10 = $[5];
        t8 = $[6];
        t9 = $[7];
    }
    let t11;
    if ($[8] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vitrine-corpo",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vitrine-tela",
                children: [
                    t4,
                    t5,
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: t7,
                        children: [
                            t8,
                            t9,
                            t10
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/simulador/Vitrine.jsx",
                        lineNumber: 101,
                        columnNumber: 84
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 101,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[8] = t7;
        $[9] = t11;
    } else {
        t11 = $[9];
    }
    let t12;
    let t13;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "vitrine-botao vitrine-modo"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "vitrine-botao vitrine-voz"
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[10] = t12;
        $[11] = t13;
    } else {
        t12 = $[10];
        t13 = $[11];
    }
    let t14;
    if ($[12] !== t11 || $[13] !== t2) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            "aria-hidden": "true",
            children: [
                t3,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[12] = t11;
        $[13] = t2;
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    return t14;
}
_c = PulseiraVitrine;
function _PulseiraVitrineAnonymous(p) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, p, false, {
        fileName: "[project]/components/simulador/Vitrine.jsx",
        lineNumber: 130,
        columnNumber: 10
    }, this);
}
function CartaoVitrine(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "38c70c2eb0da99a296d0975a373f1da89a2af286c58a31fe15dffb9255e5f1d1") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38c70c2eb0da99a296d0975a373f1da89a2af286c58a31fe15dffb9255e5f1d1";
    }
    const { sinal } = t0;
    const [somLigado, definirSom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sonoro = sinal.tipo === "grave" || sinal.tipo === "agudo";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CartaoVitrine[encerrarSom]": ()=>{
                const som = audioRef.current;
                if (!som) {
                    return;
                }
                if (som.intervalo) {
                    clearInterval(som.intervalo);
                }
                try {
                    som.oscilador.stop();
                    som.contexto.close();
                } catch  {}
                audioRef.current = null;
            }
        })["CartaoVitrine[encerrarSom]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const encerrarSom = t1;
    let t2;
    if ($[2] !== sinal.tipo) {
        t2 = ({
            "CartaoVitrine[alternarSom]": ()=>{
                if (audioRef.current) {
                    encerrarSom();
                    definirSom(false);
                    return;
                }
                const AudioApi = window.AudioContext || window.webkitAudioContext;
                if (!AudioApi) {
                    return;
                }
                const contexto = new AudioApi();
                if (contexto.state === "suspended") {
                    contexto.resume().catch(_CartaoVitrineAlternarSomAnonymous);
                }
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
                    const tocar = {
                        "CartaoVitrine[alternarSom > tocar]": ()=>{
                            const oscilador_0 = contexto.createOscillator();
                            const ganho_0 = contexto.createGain();
                            oscilador_0.type = "square";
                            oscilador_0.frequency.value = 185;
                            ganho_0.gain.value = 0.04;
                            oscilador_0.connect(ganho_0);
                            ganho_0.connect(contexto.destination);
                            oscilador_0.start();
                            oscilador_0.stop(contexto.currentTime + 0.22);
                        }
                    }["CartaoVitrine[alternarSom > tocar]"];
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
            }
        })["CartaoVitrine[alternarSom]"];
        $[2] = sinal.tipo;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const alternarSom = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CartaoVitrine[useEffect()]": ()=>encerrarSom
        })["CartaoVitrine[useEffect()]"];
        t4 = [
            encerrarSom
        ];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== sinal.grupo) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: sinal.grupo
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 248,
            columnNumber: 10
        }, this);
        $[6] = sinal.grupo;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== sinal.nome) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: sinal.nome
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 256,
            columnNumber: 10
        }, this);
        $[8] = sinal.nome;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== alternarSom || $[11] !== sinal.nome || $[12] !== somLigado || $[13] !== sonoro) {
        t7 = sonoro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: `controle-vitrine ${somLigado ? "ligado" : ""}`,
            onClick: alternarSom,
            "aria-pressed": somLigado,
            "aria-label": `Som do sinal ${sinal.nome}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: "[project]/components/simulador/Vitrine.jsx",
                    lineNumber: 264,
                    columnNumber: 191
                }, this),
                "Som",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/components/simulador/Vitrine.jsx",
                    lineNumber: 264,
                    columnNumber: 199
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 264,
            columnNumber: 20
        }, this);
        $[10] = alternarSom;
        $[11] = sinal.nome;
        $[12] = somLigado;
        $[13] = sonoro;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t5 || $[16] !== t6 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 275,
            columnNumber: 10
        }, this);
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== sinal.tipo || $[20] !== somLigado) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vitrine-cena",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PulseiraVitrine, {
                tipo: sinal.tipo,
                somAtivo: somLigado
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 285,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 285,
            columnNumber: 10
        }, this);
        $[19] = sinal.tipo;
        $[20] = somLigado;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== sinal.detalhe) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: sinal.detalhe
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[22] = sinal.detalhe;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10 || $[25] !== t8 || $[26] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "cartao-vitrine",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t8;
        $[26] = t9;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    return t11;
}
_s(CartaoVitrine, "bZXmCjg5YAH2Uz2TGQ20BscX+kU=");
_c1 = CartaoVitrine;
function _CartaoVitrineAlternarSomAnonymous() {}
function Vitrine(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "38c70c2eb0da99a296d0975a373f1da89a2af286c58a31fe15dffb9255e5f1d1") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38c70c2eb0da99a296d0975a373f1da89a2af286c58a31fe15dffb9255e5f1d1";
    }
    const { voltar } = t0;
    let t1;
    if ($[1] !== voltar) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "topo-vitrine",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: voltar,
                "aria-label": "Voltar",
                children: "‹"
            }, void 0, false, {
                fileName: "[project]/components/simulador/Vitrine.jsx",
                lineNumber: 326,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 326,
            columnNumber: 10
        }, this);
        $[1] = voltar;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grade-vitrine",
            "aria-label": "Comandos da pulseira",
            children: SINAIS_VITRINE.map(_VitrineSINAIS_VITRINEMap)
        }, void 0, false, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 334,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tela-vitrine",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/simulador/Vitrine.jsx",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c2 = Vitrine;
function _VitrineSINAIS_VITRINEMap(sinal) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartaoVitrine, {
        sinal: sinal
    }, `${sinal.grupo}-${sinal.tipo}`, false, {
        fileName: "[project]/components/simulador/Vitrine.jsx",
        lineNumber: 350,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PulseiraVitrine");
__turbopack_context__.k.register(_c1, "CartaoVitrine");
__turbopack_context__.k.register(_c2, "Vitrine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/fonte.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$dm_sans_6bcef329$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/dm_sans_6bcef329.js [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
;
}),
"[project]/hooks/useNavegacaoSimulador.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavegacaoSimulador",
    ()=>useNavegacaoSimulador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/simuladorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [tela, definirTela] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inicio");
    const [estado, definirEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inicial");
    const [erro, definirErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [destino, definirDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [origem, definirOrigem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rota, definirRota] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [passos, definirPassos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [indice, definirIndice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progresso, definirProgresso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [segundos, definirSegundos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [partidasAtivas, definirPartidas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selecionada, definirSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [brailleAberto, definirBraille] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chegouTransporte, definirChegouTransporte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [simulacaoPronta, definirSimulacaoPronta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const esperaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const chegadaFalouRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const partidasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const selecionadaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const chegouTransporteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const modoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(modo);
    const progressoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const segundosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            partidasRef.current = partidasAtivas;
        }
    }["useNavegacaoSimulador.useEffect"], [
        partidasAtivas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            selecionadaRef.current = selecionada;
        }
    }["useNavegacaoSimulador.useEffect"], [
        selecionada
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            modoRef.current = modo;
        }
    }["useNavegacaoSimulador.useEffect"], [
        modo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            progressoRef.current = progresso;
        }
    }["useNavegacaoSimulador.useEffect"], [
        progresso
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            segundosRef.current = segundos;
        }
    }["useNavegacaoSimulador.useEffect"], [
        segundos
    ]);
    const instalarRota = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[instalarRota]": (novaOrigem, novoDestino, novaRota, pronta = false)=>{
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
        }
    }["useNavegacaoSimulador.useCallback[instalarRota]"], []);
    const iniciarVoz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[iniciarVoz]": async ()=>{
            // Se já estava ouvindo ou calculando, o mais seguro é voltar a andar.
            const estadoAntes = estado === "ouvindo" || estado === "calculando" ? "andando" : estado;
            definirErro("");
            definirEstado("ouvindo");
            try {
                const fala = (await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ouvirDestino"]()).trim();
                if (/^salvar\s+rota\b/i.test(fala.normalize("NFD").replace(/[̀-ͯ]/g, ""))) {
                    definirEstado("ouvindo");
                    const textoCampo = {
                        "useNavegacaoSimulador.useCallback[iniciarVoz].textoCampo": async (pergunta, rotulo)=>{
                            const resposta = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ouvirCampo"](pergunta);
                            return resposta.replace(new RegExp(`^\\s*${rotulo}\\s*:?\\s*`, "i"), "").trim();
                        }
                    }["useNavegacaoSimulador.useCallback[iniciarVoz].textoCampo"];
                    const inicioFalado = await textoCampo("Diga o endereço de início.", "in[ií]cio");
                    const destinoFalado = await textoCampo("Diga o endereço de destino.", "destino");
                    const nome = await textoCampo("Diga um nome para esta rota.", "nome");
                    if (!inicioFalado || !destinoFalado || !nome) {
                        throw new Error("Não reconheci todos os dados. Tente dizer “salvar rota” novamente.");
                    }
                    definirEstado("calculando");
                    const [pontoInicio, pontoDestino] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarDestino"](inicioFalado),
                        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarDestino"](destinoFalado)
                    ]);
                    const criada = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["criarRota"]({
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
                    await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["falarEEsperar"](`Rota ${criada.nome} salva.`);
                    definirEstado("inicial");
                    return;
                }
                let rotas = [];
                try {
                    rotas = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listarRotas"]();
                } catch  {}
                const consultaSalva = normalizar(fala).replace(/^(?:destino|rota)\s+/, "");
                const salva = rotas.find({
                    "useNavegacaoSimulador.useCallback[iniciarVoz].salva": (item)=>normalizar(item.nome) === consultaSalva
                }["useNavegacaoSimulador.useCallback[iniciarVoz].salva"]);
                if (salva) {
                    definirEstado("calculando");
                    const novaOrigem_0 = {
                        lat: salva.inicio.lat,
                        lon: salva.inicio.lon,
                        nome: salva.inicio.texto
                    };
                    const novoDestino_0 = {
                        lat: salva.destino.lat,
                        lon: salva.destino.lon,
                        nome: salva.destino.texto
                    };
                    const novaRota_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem_0, novoDestino_0);
                    instalarRota(novaOrigem_0, novoDestino_0, novaRota_0);
                    return;
                }
                const novoDestino_1 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarDestino"](fala);
                const novaOrigem_1 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["obterOrigem"]();
                const novaRota_1 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem_1, novoDestino_1);
                instalarRota(novaOrigem_1, novoDestino_1, novaRota_1);
            } catch (falha) {
                definirErro(mensagemFalha(falha, "Não foi possível concluir a solicitação por voz. Tente novamente."));
                // Falhou: volta ao que estava acontecendo, para a navegação não travar.
                definirEstado(tela === "inicio" ? "inicial" : estadoAntes);
            }
        }
    }["useNavegacaoSimulador.useCallback[iniciarVoz]"], [
        estado,
        instalarRota,
        tela
    ]);
    const iniciarRotaSalva = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[iniciarRotaSalva]": async (salva_0)=>{
            definirErro("");
            definirEstado("calculando");
            try {
                const novaOrigem_2 = {
                    lat: salva_0.inicio.lat,
                    lon: salva_0.inicio.lon,
                    nome: salva_0.inicio.texto
                };
                const novoDestino_2 = {
                    lat: salva_0.destino.lat,
                    lon: salva_0.destino.lon,
                    nome: salva_0.destino.texto
                };
                const novaRota_2 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem_2, novoDestino_2);
                instalarRota(novaOrigem_2, novoDestino_2, novaRota_2);
            } catch (falha_0) {
                definirErro(mensagemFalha(falha_0, "Não foi possível carregar esta rota."));
                definirTela("inicio");
                definirEstado("inicial");
            }
        }
    }["useNavegacaoSimulador.useCallback[iniciarRotaSalva]"], [
        instalarRota
    ]);
    const iniciarSimulacao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[iniciarSimulacao]": async ()=>{
            definirErro("");
            definirEstado("calculando");
            try {
                let exemplo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"];
                try {
                    exemplo = (await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listarRotas"]()).find({
                        "useNavegacaoSimulador.useCallback[iniciarSimulacao]": (item_0)=>item_0.id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"].id
                    }["useNavegacaoSimulador.useCallback[iniciarSimulacao]"]) || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"];
                } catch  {}
                const novaOrigem_3 = {
                    lat: exemplo.inicio.lat,
                    lon: exemplo.inicio.lon,
                    nome: exemplo.inicio.texto
                };
                const novoDestino_3 = {
                    lat: exemplo.destino.lat,
                    lon: exemplo.destino.lon,
                    nome: exemplo.destino.texto
                };
                const novaRota_3 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem_3, novoDestino_3);
                instalarRota(novaOrigem_3, novoDestino_3, novaRota_3, true);
            } catch (falha_1) {
                definirErro(mensagemFalha(falha_1, "Não foi possível carregar a simulação pronta. Tente novamente."));
                definirEstado("inicial");
            }
        }
    }["useNavegacaoSimulador.useCallback[iniciarSimulacao]"], [
        instalarRota
    ]);
    const recalcular = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[recalcular]": async (acao)=>{
            if (!rota || !destino) return;
            definirErro("");
            definirEstado("calculando");
            try {
                const coords = rota.geometry.coordinates;
                const [lon, lat, indicePonto] = pontoRota(coords, progresso);
                const novaOrigem_4 = {
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
                const novaRota_4 = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buscarRota"](novaOrigem_4, destino, pontos);
                instalarRota(novaOrigem_4, destino, novaRota_4, simulacaoPronta);
            } catch  {
                definirErro("");
                definirEstado("andando");
            }
        }
    }["useNavegacaoSimulador.useCallback[recalcular]"], [
        rota,
        destino,
        progresso,
        instalarRota,
        simulacaoPronta
    ]);
    // Anda pela rota até o próximo passo (curva, semáforo ou chegada).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (estado !== "andando" || !rota || !passos[indice + 1]) return undefined;
            const alvo = passos[indice + 1];
            let quadro = 0;
            let anterior_0 = performance.now();
            let atual = progressoRef.current;
            const mover = {
                "useNavegacaoSimulador.useEffect.mover": (agora)=>{
                    const decorrido = Math.min((agora - anterior_0) / 1000, 0.08);
                    anterior_0 = agora;
                    const avancado = atual + decorrido * 60 / Math.max(rota.distance, 1);
                    if (avancado >= alvo.progresso) {
                        definirProgresso(alvo.progresso);
                        definirIndice({
                            "useNavegacaoSimulador.useEffect.mover": (valor)=>valor + 1
                        }["useNavegacaoSimulador.useEffect.mover"]);
                        if (alvo.tipo === "semaforo") definirSegundos(sortearTempoSemaforo(simulacaoPronta));
                        definirEstado(alvo.tipo === "semaforo" ? "semaforo" : alvo.tipo === "chegada" ? "chegada" : "orientacao");
                        return;
                    }
                    atual = avancado;
                    definirProgresso(avancado);
                    quadro = requestAnimationFrame(mover);
                }
            }["useNavegacaoSimulador.useEffect.mover"];
            quadro = requestAnimationFrame(mover);
            return ({
                "useNavegacaoSimulador.useEffect": ()=>cancelAnimationFrame(quadro)
            })["useNavegacaoSimulador.useEffect"];
        }
    }["useNavegacaoSimulador.useEffect"], [
        estado,
        rota,
        passos,
        indice,
        simulacaoPronta
    ]);
    // Semáforo aberto: depois de um tempo, avisa por voz (só no modo sonoro).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (estado !== "semaforo") {
                esperaRef.current = false;
                return undefined;
            }
            esperaRef.current = false;
            const forcar = setTimeout({
                "useNavegacaoSimulador.useEffect.forcar": ()=>{
                    if (!esperaRef.current) {
                        esperaRef.current = true;
                        if (modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0]) __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emitirFala"]("Semáforo à frente");
                    }
                }
            }["useNavegacaoSimulador.useEffect.forcar"], simulacaoPronta ? 4000 : 9000);
            return ({
                "useNavegacaoSimulador.useEffect": ()=>clearTimeout(forcar)
            })["useNavegacaoSimulador.useEffect"];
        }
    }["useNavegacaoSimulador.useEffect"], [
        estado,
        modo,
        simulacaoPronta
    ]);
    // Contagem regressiva depois do comando "parar"; em zero, a pulseira pressiona.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (estado !== "contando") return undefined;
            const relogio = setInterval({
                "useNavegacaoSimulador.useEffect.relogio": ()=>{
                    const restante = Math.max(0, segundosRef.current - 1);
                    segundosRef.current = restante;
                    definirSegundos(restante);
                    if (restante === 0) definirEstado("pressionando");
                }
            }["useNavegacaoSimulador.useEffect.relogio"], 1000);
            return ({
                "useNavegacaoSimulador.useEffect": ()=>clearInterval(relogio)
            })["useNavegacaoSimulador.useEffect"];
        }
    }["useNavegacaoSimulador.useEffect"], [
        estado
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (estado !== "chegada") {
                chegadaFalouRef.current = false;
                return;
            }
            if (modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0] && !chegadaFalouRef.current) {
                chegadaFalouRef.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emitirFala"]("Você chegou ao seu destino");
            }
        }
    }["useNavegacaoSimulador.useEffect"], [
        estado,
        modo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (estado === "pressionando" && modo === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0]) emitirContinuar();
        }
    }["useNavegacaoSimulador.useEffect"], [
        estado,
        modo,
        emitirContinuar
    ]);
    const comando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[comando]": async (acao_0)=>{
            const esperado = passos[indice]?.tipo;
            if (estado === "chegada" || estado === "calculando" || estado === "contando") return;
            if (estado === "semaforo") {
                if (acao_0 === "parar") {
                    esperaRef.current = true;
                    definirEstado("contando");
                }
                return;
            }
            if (estado === "pressionando") {
                if (acao_0 === "continuar") definirEstado("andando");
                return;
            }
            if (estado === "orientacao") {
                if (acao_0 === esperado) definirEstado("andando");
                else if (acao_0 === "parar") definirEstado("andando");
                else await recalcular(acao_0);
                return;
            }
            if (estado === "andando" && [
                "esquerda",
                "direita"
            ].includes(acao_0)) await recalcular(acao_0);
        }
    }["useNavegacaoSimulador.useCallback[comando]"], [
        estado,
        passos,
        indice,
        recalcular
    ]);
    const abrirTransporte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[abrirTransporte]": ()=>{
            const novasPartidas = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partidas"].map({
                "useNavegacaoSimulador.useCallback[abrirTransporte].novasPartidas": (item_1)=>({
                        ...item_1,
                        minutos: 1 + Math.floor(Math.random() * 6)
                    })
            }["useNavegacaoSimulador.useCallback[abrirTransporte].novasPartidas"]);
            partidasRef.current = novasPartidas;
            selecionadaRef.current = 0;
            chegouTransporteRef.current = false;
            definirPartidas(novasPartidas);
            definirSelecionada(0);
            definirBraille(false);
            definirChegouTransporte(false);
            definirTela("transporte");
            definirEstado("transporte");
        }
    }["useNavegacaoSimulador.useCallback[abrirTransporte]"], []);
    const selecionarPartida = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[selecionarPartida]": (indiceNovo)=>{
            selecionadaRef.current = indiceNovo;
            definirSelecionada(indiceNovo);
            definirBraille(false);
        }
    }["useNavegacaoSimulador.useCallback[selecionarPartida]"], []);
    const voltarMapa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[voltarMapa]": ()=>{
            chegouTransporteRef.current = false;
            definirChegouTransporte(false);
            definirTela("rota");
            definirEstado("andando");
            definirIndice(0);
            definirProgresso(0);
        }
    }["useNavegacaoSimulador.useCallback[voltarMapa]"], []);
    const voltarInicio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavegacaoSimulador.useCallback[voltarInicio]": ()=>{
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
        }
    }["useNavegacaoSimulador.useCallback[voltarInicio]"], []);
    // Tela de transporte: a cada 8 s a partida escolhida chega 1 minuto mais perto.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (tela !== "transporte") return undefined;
            const relogio_0 = setInterval({
                "useNavegacaoSimulador.useEffect.relogio_0": ()=>{
                    if (chegouTransporteRef.current) return;
                    const indiceAtivo = selecionadaRef.current;
                    const ativaAntes = partidasRef.current[indiceAtivo];
                    if (!ativaAntes) return;
                    const novoMinuto = Math.max(0, ativaAntes.minutos - 1);
                    const atualizadas = partidasRef.current.map({
                        "useNavegacaoSimulador.useEffect.relogio_0.atualizadas": (partida, i)=>i === indiceAtivo ? {
                                ...partida,
                                minutos: novoMinuto
                            } : partida
                    }["useNavegacaoSimulador.useEffect.relogio_0.atualizadas"]);
                    partidasRef.current = atualizadas;
                    definirPartidas(atualizadas);
                    const ativa = atualizadas[indiceAtivo];
                    if (novoMinuto === 0) {
                        chegouTransporteRef.current = true;
                        definirChegouTransporte(true);
                        if (modoRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0]) __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emitirFala"](`${ativa.tipo} na plataforma`);
                    } else if (modoRef.current === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$simuladorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emitirFala"](`${ativa.linha} a ${novoMinuto} ${novoMinuto === 1 ? "minuto" : "minutos"}`);
                    }
                }
            }["useNavegacaoSimulador.useEffect.relogio_0"], 8000);
            return ({
                "useNavegacaoSimulador.useEffect": ()=>clearInterval(relogio_0)
            })["useNavegacaoSimulador.useEffect"];
        }
    }["useNavegacaoSimulador.useEffect"], [
        tela
    ]);
    // Depois da chegada, escolhe outra partida do mesmo tipo e recomeça.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavegacaoSimulador.useEffect": ()=>{
            if (tela !== "transporte" || !chegouTransporte) return undefined;
            const proximo_0 = setTimeout({
                "useNavegacaoSimulador.useEffect.proximo_0": ()=>{
                    const anterior_1 = selecionadaRef.current;
                    const tipoAnterior = partidasRef.current[anterior_1]?.tipo;
                    const opcoesMesmoTipo = partidasRef.current.map({
                        "useNavegacaoSimulador.useEffect.proximo_0.opcoesMesmoTipo": (item_2, i_0)=>i_0 !== anterior_1 && item_2.tipo === tipoAnterior ? i_0 : -1
                    }["useNavegacaoSimulador.useEffect.proximo_0.opcoesMesmoTipo"]).filter({
                        "useNavegacaoSimulador.useEffect.proximo_0.opcoesMesmoTipo": (i_1)=>i_1 >= 0
                    }["useNavegacaoSimulador.useEffect.proximo_0.opcoesMesmoTipo"]);
                    const opcoes = opcoesMesmoTipo.length ? opcoesMesmoTipo : partidasRef.current.map({
                        "useNavegacaoSimulador.useEffect.proximo_0": (_, i_2)=>i_2
                    }["useNavegacaoSimulador.useEffect.proximo_0"]).filter({
                        "useNavegacaoSimulador.useEffect.proximo_0": (i_3)=>i_3 !== anterior_1
                    }["useNavegacaoSimulador.useEffect.proximo_0"]);
                    const indiceProximo = opcoes[Math.floor(Math.random() * opcoes.length)] ?? anterior_1;
                    const atualizadas_0 = partidasRef.current.map({
                        "useNavegacaoSimulador.useEffect.proximo_0.atualizadas_0": (partida_0, i_4)=>i_4 === indiceProximo ? {
                                ...partida_0,
                                minutos: 1 + Math.floor(Math.random() * 6)
                            } : partida_0
                    }["useNavegacaoSimulador.useEffect.proximo_0.atualizadas_0"]);
                    partidasRef.current = atualizadas_0;
                    selecionadaRef.current = indiceProximo;
                    chegouTransporteRef.current = false;
                    definirPartidas(atualizadas_0);
                    definirSelecionada(indiceProximo);
                    definirChegouTransporte(false);
                }
            }["useNavegacaoSimulador.useEffect.proximo_0"], 3500);
            return ({
                "useNavegacaoSimulador.useEffect": ()=>clearTimeout(proximo_0)
            })["useNavegacaoSimulador.useEffect"];
        }
    }["useNavegacaoSimulador.useEffect"], [
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
_s(useNavegacaoSimulador, "RTO+4yAy1L8C7GbzTBLzWg71j9A=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/usePulseiraSimulador.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePulseiraSimulador",
    ()=>usePulseiraSimulador,
    "useSomSemaforo",
    ()=>useSomSemaforo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"].includes(salvo) ? salvo : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODO_PADRAO"];
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODO_PADRAO"];
    }
}
const lerModoNoServidor = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODO_PADRAO"];
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "b128c62b8607625d142344209a9846e71a3634d72f0ca2410d823673ef30946d") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b128c62b8607625d142344209a9846e71a3634d72f0ca2410d823673ef30946d";
    }
    const modo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(assinarModo, lerModo, lerModoNoServidor);
    const [menuAberto, definirMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "usePulseiraSimulador[escolherModo]": (valor)=>{
                gravarModo(valor);
                definirMenu(false);
            }
        })["usePulseiraSimulador[escolherModo]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const escolherModo = t0;
    let t1;
    if ($[2] !== modo) {
        t1 = ({
            "usePulseiraSimulador[emitirContinuar]": ()=>{
                if (modo !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0]) {
                    return;
                }
                const contexto = criarContexto();
                if (!contexto) {
                    return;
                }
                if (contexto.state === "suspended") {
                    contexto.resume().catch(_usePulseiraSimuladorEmitirContinuarAnonymous);
                }
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
            }
        })["usePulseiraSimulador[emitirContinuar]"];
        $[2] = modo;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const emitirContinuar = t1;
    let t2;
    if ($[4] !== emitirContinuar || $[5] !== menuAberto || $[6] !== modo) {
        t2 = {
            modo,
            menuAberto,
            definirMenu,
            escolherModo,
            emitirContinuar
        };
        $[4] = emitirContinuar;
        $[5] = menuAberto;
        $[6] = modo;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return t2;
}
_s(usePulseiraSimulador, "J905y4pvtBFK4TZhrNRsp8h7bXc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
// Som agudo e contínuo enquanto o semáforo está aberto para os carros (modo sonoro).
// Só toca depois de a pessoa ter iniciado o trajeto, nunca sozinho (seção 6.3).
function _usePulseiraSimuladorEmitirContinuarAnonymous() {}
function useSomSemaforo(modo, estado) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "b128c62b8607625d142344209a9846e71a3634d72f0ca2410d823673ef30946d") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b128c62b8607625d142344209a9846e71a3634d72f0ca2410d823673ef30946d";
    }
    let t0;
    let t1;
    if ($[1] !== estado || $[2] !== modo) {
        t0 = ({
            "useSomSemaforo[useEffect()]": ()=>{
                if (modo !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modos"][0] || estado !== "semaforo") {
                    return;
                }
                const contexto = criarContexto();
                if (!contexto) {
                    return;
                }
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
            }
        })["useSomSemaforo[useEffect()]"];
        t1 = [
            modo,
            estado
        ];
        $[1] = estado;
        $[2] = modo;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
}
_s1(useSomSemaforo, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/simulador/dados.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/simuladorService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Serviços do simulador: mapa, rota, voz e rotas salvas.
// Regra do site: o apiClient.js é o único que fala com a API do Diário. Este arquivo
// fala com outros serviços (OpenStreetMap, rota a pé e /api/rotas) e é só do simulador.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/simulador/dados.js [app-client] (ecmascript)");
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
        if (Array.isArray(salvas) && !salvas.some((rota)=>rota.id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"].id)) {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"],
                ...salvas
            ];
        }
        if (Array.isArray(salvas)) return salvas;
    } catch  {}
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"]
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
        if (!navigator.geolocation) return resolver(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["origemReserva"]);
        navigator.geolocation.getCurrentPosition((posicao)=>resolver({
                lat: posicao.coords.latitude,
                lon: posicao.coords.longitude
            }), ()=>resolver(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["origemReserva"]), {
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
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"].id) throw new Error("A rota de exemplo não pode ser editada.");
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
    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$simulador$2f$dados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotaExemplo"].id) throw new Error("A rota de exemplo não pode ser excluída.");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__04xqfyskkqaky._.js.map