(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/BarraNavegacao.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarraNavegacao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ItemBarra$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ItemBarra.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDirecaoRolagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDirecaoRolagem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDigitandoNoCelular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDigitandoNoCelular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGuardaDeSaida.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCabeEmUmaLinha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCabeEmUmaLinha.js [app-client] (ecmascript)");
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
const LAYOUT_CELULAR = {
    // reserva antes de medir: 2 × 2, ou 1 linha se houver ~20em livres
    null: "grid grid-cols-2 @min-[20em]:flex",
    true: "flex",
    false: "grid grid-cols-2"
};
// A <nav> ocupa a largura da tela, mas só a pílula recebe o mouse (pointer-events):
// as áreas transparentes dos lados bloqueariam o clique no conteúdo atrás.
const ITENS = [
    {
        href: "/",
        texto: "Início",
        icone: "House"
    },
    {
        href: "/solucao",
        texto: "Solução",
        icone: "Watch"
    },
    {
        href: "/simulador",
        texto: "Simulador",
        icone: "Play"
    },
    {
        href: "/diario",
        texto: "Diário",
        icone: "Notebook"
    }
];
function estaAtivo(caminho, href) {
    if (href === "/") return caminho === "/";
    return caminho === href || caminho.startsWith(`${href}/`);
}
function BarraNavegacao() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "253a43c2e1d7c13b8662953f5c485d498187b89f7a390b8e962b4bad735f189f") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "253a43c2e1d7c13b8662953f5c485d498187b89f7a390b8e962b4bad735f189f";
    }
    const caminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const escondidaPelaRolagem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDirecaoRolagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirecaoRolagem"])();
    const digitando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDigitandoNoCelular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDigitandoNoCelular"])();
    const escondida = escondidaPelaRolagem || digitando;
    const { aoNavegar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuardaDeSaida"])();
    const refLista = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cabeEmUmaLinha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCabeEmUmaLinha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCabeEmUmaLinha"])(refLista);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "BarraNavegacao[useEffect()]": ()=>{
                const lista = refLista.current;
                if (!lista) {
                    return;
                }
                const raiz = document.documentElement;
                const observador = new ResizeObserver(()=>{
                    raiz.style.setProperty("--altura-barra", `${lista.offsetHeight}px`);
                });
                observador.observe(lista);
                return ()=>{
                    observador.disconnect();
                    raiz.style.removeProperty("--altura-barra");
                };
            }
        })["BarraNavegacao[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `margem-lateral pointer-events-none fixed inset-x-0 bottom-[calc(var(--distancia-barra)+env(safe-area-inset-bottom))] z-40 transition-transform duration-200 pouca-altura:static pouca-altura:mt-8 pouca-altura:translate-y-0! ${escondida ? "max-md:translate-y-[calc(100%+var(--distancia-barra)+env(safe-area-inset-bottom))]" : ""}`;
    const t3 = `pointer-events-auto mx-auto gap-1.5 rounded-[calc(1.25rem+7px)] border border-borda bg-superficie p-1.5 shadow-barra md:flex md:rounded-[calc(1.5rem+7px)] md:w-fit md:flex-wrap md:justify-center ${LAYOUT_CELULAR[String(cabeEmUmaLinha)]}`;
    let t4;
    if ($[3] !== aoNavegar || $[4] !== caminho) {
        t4 = ITENS.map({
            "BarraNavegacao[ITENS.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ItemBarra$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    texto: item.texto,
                    icone: item.icone,
                    ativo: estaAtivo(caminho, item.href),
                    aoNavegar: {
                        "BarraNavegacao[ITENS.map() > <ItemBarra>.aoNavegar]": (evento)=>aoNavegar(evento, item.href)
                    }["BarraNavegacao[ITENS.map() > <ItemBarra>.aoNavegar]"]
                }, item.href, false, {
                    fileName: "[project]/components/layout/BarraNavegacao.jsx",
                    lineNumber: 91,
                    columnNumber: 46
                }, this)
        }["BarraNavegacao[ITENS.map()]"]);
        $[3] = aoNavegar;
        $[4] = caminho;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "@container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: refLista,
                className: t3,
                children: t4
            }, void 0, false, {
                fileName: "[project]/components/layout/BarraNavegacao.jsx",
                lineNumber: 103,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/BarraNavegacao.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t2 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Navega\xE7\xE3o principal",
            "data-barra-rolagem": true,
            className: t2,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/layout/BarraNavegacao.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(BarraNavegacao, "+FJy9YPlftqoKoYFuCiz9N8aVk0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDirecaoRolagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirecaoRolagem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDigitandoNoCelular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDigitandoNoCelular"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuardaDeSaida"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCabeEmUmaLinha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCabeEmUmaLinha"]
    ];
});
_c = BarraNavegacao;
var _c;
__turbopack_context__.k.register(_c, "BarraNavegacao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/BarraProgresso.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarraProgresso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProgressoLeitura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useProgressoLeitura.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BarraProgresso() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "86e1dba56c7e73d314b88ffcad5155acee620f49ad96924ebd174e7ac33f4180") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86e1dba56c7e73d314b88ffcad5155acee620f49ad96924ebd174e7ac33f4180";
    }
    const refBarra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProgressoLeitura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressoLeitura"])();
    let t0;
    if ($[1] !== refBarra) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: refBarra,
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 -bottom-px h-[3px] origin-left scale-x-0 bg-acao efeitos-desligados:hidden"
        }, void 0, false, {
            fileName: "[project]/components/layout/BarraProgresso.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = refBarra;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_s(BarraProgresso, "f1/pWZdD6dN2a4fpjDH0EypYaRY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProgressoLeitura$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgressoLeitura"]
    ];
});
_c = BarraProgresso;
var _c;
__turbopack_context__.k.register(_c, "BarraProgresso");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Cabecalho.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cabecalho
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LinkInterno.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$InterruptorEfeitos$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/InterruptorEfeitos.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$BarraProgresso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/BarraProgresso.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDirecaoRolagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDirecaoRolagem.js [app-client] (ecmascript)");
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
function Cabecalho() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c96063327da1b51edc29b4ca52811c103474c03ff79577c0c349ac7440938d0c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c96063327da1b51edc29b4ca52811c103474c03ff79577c0c349ac7440938d0c";
    }
    const escondido = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDirecaoRolagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirecaoRolagem"])();
    const refCabecalho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Cabecalho[useEffect()]": ()=>{
                const cabecalho = refCabecalho.current;
                if (!cabecalho) {
                    return;
                }
                const raiz = document.documentElement;
                const observador = new ResizeObserver(()=>{
                    raiz.style.setProperty("--altura-cabecalho", `${cabecalho.offsetHeight}px`);
                });
                observador.observe(cabecalho);
                return ()=>{
                    observador.disconnect();
                    raiz.style.removeProperty("--altura-cabecalho");
                };
            }
        })["Cabecalho[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = `sticky top-0 z-30 border-b border-borda bg-superficie transition-transform duration-200 ${escondido ? "max-md:-translate-y-full" : ""}`;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "inline-flex min-h-12 items-center gap-2 font-titulo text-logo text-marca",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nome: "Pulse"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Cabecalho.jsx",
                    lineNumber: 52,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Pulse"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Cabecalho.jsx",
                    lineNumber: 52,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Cabecalho.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "rotulo-mono text-texto-2 max-sm:order-last max-sm:basis-full max-sm:pb-1 max-sm:text-right sm:ml-auto",
            children: "GS 2026.2 · CitizenTech"
        }, void 0, false, {
            fileName: "[project]/components/layout/Cabecalho.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "margem-lateral mx-auto flex min-h-16 w-full max-w-pagina flex-wrap items-center gap-x-4 gap-y-1 py-2",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-auto sm:ml-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$InterruptorEfeitos$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/layout/Cabecalho.jsx",
                        lineNumber: 63,
                        columnNumber: 169
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Cabecalho.jsx",
                    lineNumber: 63,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Cabecalho.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$BarraProgresso$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/layout/Cabecalho.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            ref: refCabecalho,
            "data-barra-rolagem": true,
            className: t2,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Cabecalho.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_s(Cabecalho, "gIvDMKPJ9c9k2wfeXeFx0pG5Gvw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDirecaoRolagem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirecaoRolagem"]
    ];
});
_c = Cabecalho;
var _c;
__turbopack_context__.k.register(_c, "Cabecalho");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/FocoNaTroca.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FocoNaTroca
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Regra: foco no <h1> da página nova (4.1), menos no primeiro carregamento, para o
// "Pular para o conteúdo" ser o primeiro focável. Com âncora, foca o título dela.
function destinoDoFoco() {
    const ancora = window.location.hash.slice(1);
    if (ancora) {
        const alvo = document.getElementById(decodeURIComponent(ancora));
        if (alvo) return {
            elemento: alvo,
            veioDaAncora: true
        };
    }
    return {
        elemento: document.querySelector("#conteudo h1"),
        veioDaAncora: false
    };
}
function FocoNaTroca() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "67d3474eef11fd7d7b665305f536523f5c2dcc04dbbcaf90fc0e6a81cfc79e8a") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "67d3474eef11fd7d7b665305f536523f5c2dcc04dbbcaf90fc0e6a81cfc79e8a";
    }
    const caminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const caminhoAnterior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(caminho);
    let t0;
    let t1;
    if ($[1] !== caminho) {
        t0 = ({
            "FocoNaTroca[useEffect()]": ()=>{
                if (caminhoAnterior.current === caminho) {
                    return;
                }
                caminhoAnterior.current = caminho;
                const { elemento, veioDaAncora } = destinoDoFoco();
                if (!elemento) {
                    return;
                }
                if (!elemento.hasAttribute("tabindex")) {
                    elemento.setAttribute("tabindex", "-1");
                }
                elemento.focus(veioDaAncora ? {
                    preventScroll: true
                } : undefined);
            }
        })["FocoNaTroca[useEffect()]"];
        t1 = [
            caminho
        ];
        $[1] = caminho;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return null;
}
_s(FocoNaTroca, "0uIN7uvvGWv/ekcXtL6W4M26wOo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = FocoNaTroca;
var _c;
__turbopack_context__.k.register(_c, "FocoNaTroca");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/InterruptorEfeitos.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InterruptorEfeitos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function InterruptorEfeitos() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "bc4a009ccbcb22350e37d5c6e27a53553fac055f5ee8d84f95890f87a0311281") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc4a009ccbcb22350e37d5c6e27a53553fac055f5ee8d84f95890f87a0311281";
    }
    const { efeitosLigados, efeitosConhecidos, alternarEfeitos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            scale: 0.97
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== efeitosConhecidos || $[3] !== efeitosLigados) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: "relative h-6 w-10 shrink-0 rounded-full border-2 border-borda bg-[color-mix(in_srgb,var(--cor-borda)_35%,transparent)] efeitos-ligados:border-sobre-acao efeitos-ligados:bg-acao",
            children: efeitosConhecidos ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                initial: false,
                animate: {
                    x: efeitosLigados ? 16 : 0
                },
                transition: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].rapida,
                className: "absolute top-0.5 left-0.5 size-4 rounded-full bg-texto-2 efeitos-ligados:bg-sobre-acao"
            }, void 0, false, {
                fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
                lineNumber: 34,
                columnNumber: 245
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-0.5 left-0.5 size-4 rounded-full bg-texto-2 efeitos-ligados:translate-x-4 efeitos-ligados:bg-sobre-acao"
            }, void 0, false, {
                fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
                lineNumber: 36,
                columnNumber: 141
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = efeitosConhecidos;
        $[3] = efeitosLigados;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "max-[26.25rem]:max-w-[6.5em]",
            children: [
                "Efeitos: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "efeitos-desligados:hidden",
                    children: "ligados"
                }, void 0, false, {
                    fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
                    lineNumber: 45,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "efeitos-ligados:hidden",
                    children: "desligados"
                }, void 0, false, {
                    fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
                    lineNumber: 45,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== alternarEfeitos || $[7] !== efeitosLigados || $[8] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
            type: "button",
            "aria-pressed": efeitosLigados,
            onClick: alternarEfeitos,
            whileTap: t0,
            className: "inline-flex min-h-12 items-center gap-2.5 rounded-full border-2 border-borda bg-superficie py-1 pr-4 pl-2.5 text-left leading-tight font-bold text-texto hover:border-marca max-[26.25rem]:gap-2 max-[26.25rem]:pr-3 max-[26.25rem]:text-[0.95rem]",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/InterruptorEfeitos.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[6] = alternarEfeitos;
        $[7] = efeitosLigados;
        $[8] = t1;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s(InterruptorEfeitos, "jUATcBrB8zzZ93o0DoXQmA6NpXw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
_c = InterruptorEfeitos;
var _c;
__turbopack_context__.k.register(_c, "InterruptorEfeitos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/ItemBarra.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemBarra
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
;
;
;
;
function ItemBarra(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "570b725882b99feaae57157ae01c5c5971054c8e566a6b95103be8d56d3607b7") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "570b725882b99feaae57157ae01c5c5971054c8e566a6b95103be8d56d3607b7";
    }
    const { href, texto, icone, ativo, aoNavegar } = t0;
    const t1 = ativo ? "page" : undefined;
    const t2 = `flex min-h-14 w-full flex-col items-center justify-center gap-0.5 rounded-[1.25rem] border px-1 py-1 text-auxiliar md:rounded-full no-underline transicao-fundo md:min-h-12 md:flex-row md:gap-2 md:px-4 ${ativo ? "border-acao bg-acao font-bold text-sobre-acao" : "border-transparent bg-superficie text-texto hover:bg-hover"}`;
    let t3;
    if ($[1] !== icone) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: icone
        }, void 0, false, {
            fileName: "[project]/components/layout/ItemBarra.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = icone;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== texto) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "col-start-1 row-start-1",
                    children: texto
                }, void 0, false, {
                    fileName: "[project]/components/layout/ItemBarra.jsx",
                    lineNumber: 34,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "invisible col-start-1 row-start-1 font-bold",
                    children: texto
                }, void 0, false, {
                    fileName: "[project]/components/layout/ItemBarra.jsx",
                    lineNumber: 34,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/ItemBarra.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = texto;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== aoNavegar || $[6] !== href || $[7] !== t1 || $[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex flex-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                onNavigate: aoNavegar,
                "aria-current": t1,
                className: t2,
                children: [
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/ItemBarra.jsx",
                lineNumber: 42,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/ItemBarra.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = aoNavegar;
        $[6] = href;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c = ItemBarra;
var _c;
__turbopack_context__.k.register(_c, "ItemBarra");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/ProvedorMovimento.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProvedorMovimento
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$movimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/movimento.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/efeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRolagemSuave.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefereMovimentoReduzido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePrefereMovimentoReduzido.js [app-client] (ecmascript)");
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
// Lenis criado e destruído num efeito, e não com stop(): stop() põe overflow: clip no
// <html>, e a página deixa de rolar. Em volta das páginas, remontaria o site.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$movimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrarPluginsGsap"])();
// Regra: lerp 0,09, um pouco mais de inércia que o padrão do Lenis, 0,1 (19.6).
const OPCOES_LENIS = {
    autoRaf: false,
    anchors: true,
    smoothWheel: true,
    lerp: 0.09
};
// O Lenis fica fora do React e é lido por useSyncExternalStore: mudar o estado
// dentro do efeito faria a tela renderizar duas vezes.
let lenisAtual = null;
const ouvintesDoLenis = new Set();
function definirLenis(instancia) {
    lenisAtual = instancia;
    for (const aoMudar of ouvintesDoLenis)aoMudar();
}
function assinarLenis(aoMudar) {
    ouvintesDoLenis.add(aoMudar);
    return ()=>ouvintesDoLenis.delete(aoMudar);
}
const lerLenis = ()=>lenisAtual;
const lerLenisNoServidor = ()=>null;
function ProvedorMovimento(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "db1291c1735fff7a564bad3b638b6bfc980147453f366436200361e54184f2c5") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "db1291c1735fff7a564bad3b638b6bfc980147453f366436200361e54184f2c5";
    }
    const { children } = t0;
    const valor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assinarEfeitos"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerEfeitos"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerEfeitosNoServidor"]);
    const efeitosConhecidos = valor !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESCONHECIDO"];
    const efeitosLigados = valor === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGADOS"];
    const aparelhoPedeReduzir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefereMovimentoReduzido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefereMovimentoReduzido"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(assinarLenis, lerLenis, lerLenisNoServidor);
    let t1;
    let t2;
    if ($[1] !== aparelhoPedeReduzir || $[2] !== efeitosConhecidos) {
        t1 = ({
            "ProvedorMovimento[useEffect()]": ()=>{
                if (!efeitosConhecidos || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerEscolhaSalva"])() !== null) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["definirEfeitos"])(!aparelhoPedeReduzir, {
                    salvar: false
                });
            }
        })["ProvedorMovimento[useEffect()]"];
        t2 = [
            aparelhoPedeReduzir,
            efeitosConhecidos
        ];
        $[1] = aparelhoPedeReduzir;
        $[2] = efeitosConhecidos;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[5] !== efeitosLigados) {
        t3 = ({
            "ProvedorMovimento[useEffect()]": ()=>{
                if (!efeitosLigados) {
                    return;
                }
                const instancia = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](OPCOES_LENIS);
                const desfazerSincronia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$movimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sincronizarLenisComGsap"])(instancia);
                definirLenis(instancia);
                return ()=>{
                    desfazerSincronia();
                    instancia.destroy();
                    definirLenis(null);
                };
            }
        })["ProvedorMovimento[useEffect()]"];
        t4 = [
            efeitosLigados
        ];
        $[5] = efeitosLigados;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = function alternarEfeitos() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["definirEfeitos"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerEfeitos"])() !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIGADOS"], {
                salvar: true
            });
        };
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const alternarEfeitos = t5;
    let t6;
    if ($[9] !== efeitosConhecidos || $[10] !== efeitosLigados) {
        t6 = {
            efeitosLigados,
            efeitosConhecidos,
            alternarEfeitos
        };
        $[9] = efeitosConhecidos;
        $[10] = efeitosLigados;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const t7 = efeitosLigados ? "never" : "always";
    let t8;
    if ($[12] !== children || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].padrao,
            reducedMotion: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/layout/ProvedorMovimento.jsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[12] = children;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== lenis || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRolagemSuave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextoRolagemSuave"].Provider, {
            value: lenis,
            children: t8
        }, void 0, false, {
            fileName: "[project]/components/layout/ProvedorMovimento.jsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[15] = lenis;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t6 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextoEfeitos"].Provider, {
            value: t6,
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/layout/ProvedorMovimento.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[18] = t6;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
}
_s(ProvedorMovimento, "Ssd0A5Nmvpp8XUMI6936HmXrxqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePrefereMovimentoReduzido$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefereMovimentoReduzido"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = ProvedorMovimento;
var _c;
__turbopack_context__.k.register(_c, "ProvedorMovimento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Provedores.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Provedores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$TransicaoPagina$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/TransicaoPagina.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGuardaDeSaida.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensagemDiario$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMensagemDiario.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Provedores(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "338f5e5cc10b6e2ea64dbba9ae97966f5b3ef15a672ecc8571ef86357d13406f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "338f5e5cc10b6e2ea64dbba9ae97966f5b3ef15a672ecc8571ef86357d13406f";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$TransicaoPagina$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProvedorGuardaDeSaida"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMensagemDiario$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProvedorMensagemDiario"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/layout/Provedores.jsx",
                    lineNumber: 22,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Provedores.jsx",
                lineNumber: 22,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Provedores.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Provedores;
var _c;
__turbopack_context__.k.register(_c, "Provedores");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Rodape.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Rodape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LinkInterno.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$solucao$2f$FaixaODS$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/solucao/FaixaODS.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRodapeRevelado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useRodapeRevelado.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// O espaço do fim da página fica aqui dentro, para o último link nunca ficar atrás
// da barra flutuante (WCAG 2.4.11).
const LINKS = [
    {
        href: "/",
        texto: "Início"
    },
    {
        href: "/solucao",
        texto: "Solução"
    },
    {
        href: "/simulador",
        texto: "Simulador"
    },
    {
        href: "/diario",
        texto: "Diário"
    }
];
function Rodape() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "ebce926a6db4dc808dc7fe003f1aba60ca972382e4a6016fbf67df262038c5c4") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebce926a6db4dc808dc7fe003f1aba60ca972382e4a6016fbf67df262038c5c4";
    }
    const naSolucao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() === "/solucao";
    const refRodape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRodapeRevelado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRodapeRevelado"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            "aria-hidden": "true",
            className: "mb-6 overflow-hidden font-titulo text-[clamp(5.5rem,27vw,21rem)] leading-[0.8] tracking-[0.01em] whitespace-nowrap text-rodape-destaque uppercase",
            children: "Pulse"
        }, void 0, false, {
            fileName: "[project]/components/layout/Rodape.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== naSolucao) {
        t1 = naSolucao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$solucao$2f$FaixaODS$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/layout/Rodape.jsx",
            lineNumber: 43,
            columnNumber: 23
        }, this);
        $[2] = naSolucao;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 border-t border-rodape-borda/50 pt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-wrap gap-x-6 gap-y-1",
                    children: LINKS.map(_RodapeLINKSMap)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Rodape.jsx",
                    lineNumber: 51,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pb-6 text-auxiliar text-rodape-texto-2",
                    children: "Pulse · Global Solution 2026.2 · FIAP · Giovana, Giovane, Mie, Pedro e Thiago. Protótipo acadêmico com dados públicos e simulados."
                }, void 0, false, {
                    fileName: "[project]/components/layout/Rodape.jsx",
                    lineNumber: 51,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Rodape.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "margem-lateral mx-auto w-full max-w-pagina",
            children: [
                t0,
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Rodape.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== refRodape || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            ref: refRodape,
            className: "rodape mt-16 bg-rodape-fundo pt-14 pb-[var(--espaco-fim)] text-rodape-texto",
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/layout/Rodape.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[7] = refRodape;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_s(Rodape, "pATEOVZ6tCKDcU/7g15rsnlV4dE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useRodapeRevelado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRodapeRevelado"]
    ];
});
_c = Rodape;
function _RodapeLINKSMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: link.href,
            className: "inline-flex min-h-12 items-center font-bold text-rodape-texto",
            children: link.texto
        }, void 0, false, {
            fileName: "[project]/components/layout/Rodape.jsx",
            lineNumber: 76,
            columnNumber: 30
        }, this)
    }, link.href, false, {
        fileName: "[project]/components/layout/Rodape.jsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Rodape");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/TransicaoPagina.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransicaoPagina
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTransicaoPagina.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TransicaoPagina(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "9fe5fd31dc9f44641ea2ecd41acc49210628d004862a833bd2d0202a3fdc4ab3") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9fe5fd31dc9f44641ea2ecd41acc49210628d004862a833bd2d0202a3fdc4ab3";
    }
    const { children } = t0;
    const { refCortina, navegar, irPara } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransicaoPagina"])();
    let t1;
    if ($[1] !== irPara || $[2] !== navegar) {
        t1 = {
            navegar,
            irPara
        };
        $[1] = irPara;
        $[2] = navegar;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== refCortina) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: refCortina,
            "aria-hidden": "true",
            className: "cortina-piso"
        }, void 0, false, {
            fileName: "[project]/components/layout/TransicaoPagina.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[4] = refCortina;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== children || $[7] !== t1 || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextoTransicao"].Provider, {
            value: t1,
            children: [
                children,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/TransicaoPagina.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s(TransicaoPagina, "S4IH3DvEuWlC9NmALAgFcyNk7q0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransicaoPagina"]
    ];
});
_c = TransicaoPagina;
var _c;
__turbopack_context__.k.register(_c, "TransicaoPagina");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/solucao/FaixaODS.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaixaODS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IconeAlternado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/IconeAlternado.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaixaODS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFaixaODS.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Regra: a cópia que fecha o laço é aria-hidden e com tabIndex={-1}; a frase chega
// pelo aria-describedby, e a área dela não cobre nada (WCAG 1.4.13).
const ODS = [
    {
        numero: "10",
        nome: "ODS 10 · Redução das Desigualdades",
        nomeNaFrase: "ODS 10: Redução das Desigualdades (principal)",
        principal: true,
        frase: "Reduz as barreiras enfrentadas por pessoas com deficiência visual e promove igualdade de acesso à mobilidade."
    },
    {
        numero: "9",
        nome: "ODS 9 · Indústria, Inovação e Infraestrutura",
        nomeNaFrase: "ODS 9: Indústria, Inovação e Infraestrutura",
        principal: false,
        frase: "Um dispositivo inteligente que melhora a infraestrutura de acessibilidade e mobilidade urbana."
    },
    {
        numero: "11",
        nome: "ODS 11 · Cidades e Comunidades Sustentáveis",
        nomeNaFrase: "ODS 11: Cidades e Comunidades Sustentáveis",
        principal: false,
        frase: "Torna as cidades mais acessíveis, inclusivas e seguras nas ruas e no transporte público."
    }
];
const ID_FAIXA = "faixa-ods";
const idDaFrase = (numero)=>`ods-frase-${numero}`;
const CLASSES_BOTAO_ODS = "inline-flex min-h-16 max-w-[min(36rem,calc(100vw-2rem))] items-center gap-3 rounded-full border bg-rodape-cartao py-2 pr-5 pl-4 text-left font-bold text-rodape-texto transicao-fundo";
function ConteudoOds(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e48b9d6f738fd4daa8ab6d60321a12fa60b2759d402982bc823ca56465d572b7") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e48b9d6f738fd4daa8ab6d60321a12fa60b2759d402982bc823ca56465d572b7";
    }
    const { ods } = t0;
    let t1;
    if ($[1] !== ods.numero) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: "shrink-0 font-titulo text-[2.4rem] leading-none font-normal whitespace-nowrap text-rodape-destaque",
            children: ods.numero
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[1] = ods.numero;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== ods.principal) {
        t2 = ods.principal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-1 inline-block rounded-full bg-rodape-destaque px-2.5 text-auxiliar text-sobre-acao",
                    children: "Principal"
                }, void 0, false, {
                    fileName: "[project]/components/solucao/FaixaODS.jsx",
                    lineNumber: 53,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 53,
            columnNumber: 27
        }, this);
        $[3] = ods.principal;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== ods.nome || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                ods.nome,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = ods.nome;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t1 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c = ConteudoOds;
function FaixaODS() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "e48b9d6f738fd4daa8ab6d60321a12fa60b2759d402982bc823ca56465d572b7") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e48b9d6f738fd4daa8ab6d60321a12fa60b2759d402982bc823ca56465d572b7";
    }
    const { pausada, alternarPausa, odsEmDestaque, eventosDoOds, refFaixa } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaixaODS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaixaODS"])();
    let t0;
    if ($[1] !== odsEmDestaque) {
        t0 = ODS.find({
            "FaixaODS[ODS.find()]": (ods)=>ods.numero === odsEmDestaque
        }["FaixaODS[ODS.find()]"]);
        $[1] = odsEmDestaque;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const destaque = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "rotulo-mono mb-2 text-rodape-destaque",
                    children: "Objetivos de Desenvolvimento Sustentável"
                }, void 0, false, {
                    fileName: "[project]/components/solucao/FaixaODS.jsx",
                    lineNumber: 107,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "titulo-ods",
                    className: "text-rodape-texto",
                    children: "A Pulse e os ODS"
                }, void 0, false, {
                    fileName: "[project]/components/solucao/FaixaODS.jsx",
                    lineNumber: 107,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = pausada ? "retomar" : "pausar";
    let t3;
    if ($[4] !== pausada) {
        t3 = pausada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: "Play"
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 115,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: "Pause"
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 115,
            columnNumber: 50
        }, this);
        $[4] = pausada;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IconeAlternado$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            chave: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = pausada ? "Retomar" : "Pausar";
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== alternarPausa || $[12] !== pausada || $[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex flex-wrap items-end justify-between gap-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-pressed": pausada,
                    "aria-controls": ID_FAIXA,
                    onClick: alternarPausa,
                    className: "faixa-ods-pausa inline-flex min-h-12 efeitos-desligados:hidden items-center gap-2 rounded-full border-2 border-rodape-borda px-5 font-bold text-rodape-texto hover:border-rodape-destaque",
                    children: [
                        t4,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/solucao/FaixaODS.jsx",
                    lineNumber: 141,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[11] = alternarPausa;
        $[12] = pausada;
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const t8 = pausada ? "" : undefined;
    let t9;
    if ($[16] !== eventosDoOds || $[17] !== odsEmDestaque) {
        t9 = ODS.map({
            "FaixaODS[ODS.map()]": (ods_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-describedby": idDaFrase(ods_0.numero),
                        className: `${CLASSES_BOTAO_ODS} ${odsEmDestaque === ods_0.numero ? "border-rodape-destaque" : "border-rodape-borda"}`,
                        ...eventosDoOds(ods_0.numero),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConteudoOds, {
                            ods: ods_0
                        }, void 0, false, {
                            fileName: "[project]/components/solucao/FaixaODS.jsx",
                            lineNumber: 154,
                            columnNumber: 279
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/solucao/FaixaODS.jsx",
                        lineNumber: 154,
                        columnNumber: 62
                    }, this)
                }, ods_0.numero, false, {
                    fileName: "[project]/components/solucao/FaixaODS.jsx",
                    lineNumber: 154,
                    columnNumber: 39
                }, this)
        }["FaixaODS[ODS.map()]"]);
        $[16] = eventosDoOds;
        $[17] = odsEmDestaque;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "faixa-ods-lista",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== eventosDoOds || $[22] !== odsEmDestaque) {
        t11 = ODS.map({
            "FaixaODS[ODS.map()]": (ods_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        tabIndex: -1,
                        className: `${CLASSES_BOTAO_ODS} ${odsEmDestaque === ods_1.numero ? "border-rodape-destaque" : "border-rodape-borda"}`,
                        onMouseEnter: eventosDoOds(ods_1.numero).onMouseEnter,
                        onMouseLeave: eventosDoOds(ods_1.numero).onMouseLeave,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConteudoOds, {
                            ods: ods_1
                        }, void 0, false, {
                            fileName: "[project]/components/solucao/FaixaODS.jsx",
                            lineNumber: 173,
                            columnNumber: 328
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/solucao/FaixaODS.jsx",
                        lineNumber: 173,
                        columnNumber: 62
                    }, this)
                }, ods_1.numero, false, {
                    fileName: "[project]/components/solucao/FaixaODS.jsx",
                    lineNumber: 173,
                    columnNumber: 39
                }, this)
        }["FaixaODS[ODS.map()]"]);
        $[21] = eventosDoOds;
        $[22] = odsEmDestaque;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "faixa-ods-lista",
            "aria-hidden": "true",
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t10 || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "faixa-ods-trilho",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== refFaixa || $[30] !== t13 || $[31] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: ID_FAIXA,
            ref: refFaixa,
            "data-pausada": t8,
            className: "faixa-ods",
            children: t13
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[29] = refFaixa;
        $[30] = t13;
        $[31] = t8;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ODS.map(_FaixaODSODSMap);
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== destaque) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "mt-4 grid min-h-[5.5rem] content-center gap-1 rounded-cartao border border-dashed border-rodape-borda px-5 py-4",
            children: destaque ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "text-h4 text-rodape-texto",
                        children: destaque.nomeNaFrase
                    }, void 0, false, {
                        fileName: "[project]/components/solucao/FaixaODS.jsx",
                        lineNumber: 217,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-rodape-texto-2",
                        children: destaque.frase
                    }, void 0, false, {
                        fileName: "[project]/components/solucao/FaixaODS.jsx",
                        lineNumber: 217,
                        columnNumber: 250
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/solucao/FaixaODS.jsx",
                lineNumber: 217,
                columnNumber: 171
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-rodape-texto-2",
                children: "Passe o mouse, foque ou toque num ODS para ver o que ele significa."
            }, void 0, false, {
                fileName: "[project]/components/solucao/FaixaODS.jsx",
                lineNumber: 217,
                columnNumber: 317
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[34] = destaque;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t14 || $[37] !== t16 || $[38] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            "aria-labelledby": "titulo-ods",
            className: "mb-10",
            children: [
                t7,
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/solucao/FaixaODS.jsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t16;
        $[38] = t7;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(FaixaODS, "/GpAgnTwe+S2xRsEyFunMvTn/mQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFaixaODS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaixaODS"]
    ];
});
_c1 = FaixaODS;
function _FaixaODSODSMap(ods_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        id: idDaFrase(ods_2.numero),
        hidden: true,
        children: ods_2.frase
    }, ods_2.numero, false, {
        fileName: "[project]/components/solucao/FaixaODS.jsx",
        lineNumber: 236,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ConteudoOds");
__turbopack_context__.k.register(_c1, "FaixaODS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Botao.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Botao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LinkInterno.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BotaoMagnetico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BotaoMagnetico.jsx [app-client] (ecmascript)");
;
;
;
;
;
// aria-disabled, e não disabled, no "Salvando…": com disabled, o navegador tiraria o
// foco do botão, e quem usa teclado ou leitor de tela se perderia.
// Regra: no hover, o secundário usa texto grafite (o laranja ficaria em 4,1:1). O
// "secundario-sobre-cor" tem fundo sólido: sobre os fundos de status, ficaria abaixo de 4,5:1.
const ESTILO_BASE = "inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 px-7 py-2 text-center font-bold no-underline transition-[background-color,color,box-shadow,translate] duration-200 aria-disabled:cursor-wait";
const ESTILO_VARIANTE = {
    principal: "border-acao bg-acao text-sobre-acao hover:shadow-barra efeitos-ligados:hover:-translate-y-0.5",
    secundario: "border-marca bg-transparent text-marca hover:bg-hover hover:text-texto",
    "secundario-sobre-cor": "border-marca bg-superficie text-marca hover:text-texto",
    perigo: "border-erro bg-transparent text-erro hover:bg-erro-fundo",
    "perigo-preenchido": "border-erro bg-erro text-perigo-texto"
};
function Botao(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "1673d15170a41ccb18661b13f80851ccb8ee2405c84e059ed849b5ff854c4569") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1673d15170a41ccb18661b13f80851ccb8ee2405c84e059ed849b5ff854c4569";
    }
    let children;
    let href;
    let icone;
    let resto;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ variante: t1, href, icone, className: t2, children, type: t3, ...resto } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = href;
        $[4] = icone;
        $[5] = resto;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        children = $[2];
        href = $[3];
        icone = $[4];
        resto = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
    }
    const variante = t1 === undefined ? "principal" : t1;
    const className = t2 === undefined ? "" : t2;
    const type = t3 === undefined ? "button" : t3;
    const classes = `${ESTILO_BASE} ${ESTILO_VARIANTE[variante]} ${className}`;
    if (variante === "principal") {
        let t4;
        if ($[9] !== children || $[10] !== classes || $[11] !== href || $[12] !== icone || $[13] !== resto || $[14] !== type) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BotaoMagnetico$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                icone: icone,
                type: type,
                className: classes,
                ...resto,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/Botao.jsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[9] = children;
            $[10] = classes;
            $[11] = href;
            $[12] = icone;
            $[13] = resto;
            $[14] = type;
            $[15] = t4;
        } else {
            t4 = $[15];
        }
        return t4;
    }
    let t4;
    if ($[16] !== icone) {
        t4 = icone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: icone
        }, void 0, false, {
            fileName: "[project]/components/ui/Botao.jsx",
            lineNumber: 82,
            columnNumber: 19
        }, this);
        $[16] = icone;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    let t5;
    if ($[18] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Botao.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[18] = children;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== t4 || $[21] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Botao.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[20] = t4;
        $[21] = t5;
        $[22] = t6;
    } else {
        t6 = $[22];
    }
    const conteudo = t6;
    if (href) {
        let t7;
        if ($[23] !== classes || $[24] !== conteudo || $[25] !== href || $[26] !== resto) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: classes,
                ...resto,
                children: conteudo
            }, void 0, false, {
                fileName: "[project]/components/ui/Botao.jsx",
                lineNumber: 109,
                columnNumber: 12
            }, this);
            $[23] = classes;
            $[24] = conteudo;
            $[25] = href;
            $[26] = resto;
            $[27] = t7;
        } else {
            t7 = $[27];
        }
        return t7;
    }
    let t7;
    if ($[28] !== classes || $[29] !== conteudo || $[30] !== resto || $[31] !== type) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            className: classes,
            ...resto,
            children: conteudo
        }, void 0, false, {
            fileName: "[project]/components/ui/Botao.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[28] = classes;
        $[29] = conteudo;
        $[30] = resto;
        $[31] = type;
        $[32] = t7;
    } else {
        t7 = $[32];
    }
    return t7;
}
_c = Botao;
var _c;
__turbopack_context__.k.register(_c, "Botao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/BotaoMagnetico.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BotaoMagnetico
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LinkInterno.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMagnetico$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useMagnetico.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BotaoMagnetico(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "a30aa07736dc58cf2a98f8fb9eeef4283d8c56fa33d2fd112eca7da544ab18b7") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a30aa07736dc58cf2a98f8fb9eeef4283d8c56fa33d2fd112eca7da544ab18b7";
    }
    let children;
    let className;
    let href;
    let icone;
    let onPointerLeave;
    let onPointerMove;
    let resto;
    let t1;
    if ($[1] !== t0) {
        ({ href, icone, className, type: t1, onPointerMove, onPointerLeave, children, ...resto } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = href;
        $[5] = icone;
        $[6] = onPointerLeave;
        $[7] = onPointerMove;
        $[8] = resto;
        $[9] = t1;
    } else {
        children = $[2];
        className = $[3];
        href = $[4];
        icone = $[5];
        onPointerLeave = $[6];
        onPointerMove = $[7];
        resto = $[8];
        t1 = $[9];
    }
    const type = t1 === undefined ? "button" : t1;
    const { x, y, aoMover, aoSair } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMagnetico$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagnetico"])();
    let t2;
    if ($[10] !== aoMover || $[11] !== onPointerMove) {
        t2 = (evento)=>{
            aoMover(evento);
            onPointerMove?.(evento);
        };
        $[10] = aoMover;
        $[11] = onPointerMove;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    let t3;
    if ($[13] !== aoSair || $[14] !== onPointerLeave) {
        t3 = (evento_0)=>{
            aoSair();
            onPointerLeave?.(evento_0);
        };
        $[13] = aoSair;
        $[14] = onPointerLeave;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    let t4;
    if ($[16] !== t2 || $[17] !== t3) {
        t4 = {
            onPointerMove: t2,
            onPointerLeave: t3
        };
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    const eventos = t4;
    let t5;
    if ($[19] !== x || $[20] !== y) {
        t5 = {
            x,
            y
        };
        $[19] = x;
        $[20] = y;
        $[21] = t5;
    } else {
        t5 = $[21];
    }
    let t6;
    if ($[22] !== icone) {
        t6 = icone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: icone
        }, void 0, false, {
            fileName: "[project]/components/ui/BotaoMagnetico.jsx",
            lineNumber: 115,
            columnNumber: 19
        }, this);
        $[22] = icone;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    let t7;
    if ($[24] !== children) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/BotaoMagnetico.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[24] = children;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    let t8;
    if ($[26] !== t5 || $[27] !== t6 || $[28] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
            style: t5,
            className: "inline-flex items-center justify-center gap-2",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/BotaoMagnetico.jsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    const conteudo = t8;
    if (href) {
        let t9;
        if ($[30] !== className || $[31] !== conteudo || $[32] !== eventos || $[33] !== href || $[34] !== resto) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LinkInterno$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: className,
                ...eventos,
                ...resto,
                children: conteudo
            }, void 0, false, {
                fileName: "[project]/components/ui/BotaoMagnetico.jsx",
                lineNumber: 143,
                columnNumber: 12
            }, this);
            $[30] = className;
            $[31] = conteudo;
            $[32] = eventos;
            $[33] = href;
            $[34] = resto;
            $[35] = t9;
        } else {
            t9 = $[35];
        }
        return t9;
    }
    let t9;
    if ($[36] !== className || $[37] !== conteudo || $[38] !== eventos || $[39] !== resto || $[40] !== type) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            className: className,
            ...eventos,
            ...resto,
            children: conteudo
        }, void 0, false, {
            fileName: "[project]/components/ui/BotaoMagnetico.jsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[36] = className;
        $[37] = conteudo;
        $[38] = eventos;
        $[39] = resto;
        $[40] = type;
        $[41] = t9;
    } else {
        t9 = $[41];
    }
    return t9;
}
_s(BotaoMagnetico, "BTkoETRp0hhheBej2tSkdYw0j+4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useMagnetico$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMagnetico"]
    ];
});
_c = BotaoMagnetico;
var _c;
__turbopack_context__.k.register(_c, "BotaoMagnetico");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/DialogoConfirmacao.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DialogoConfirmacao
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Botao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Botao.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ErroCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ErroCampo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEsperaLonga$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEsperaLonga.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DialogoConfirmacao(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "ac83e8547dbfede389adccde17c3d45ebde2ffd42906f043914cce2979f21247") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ac83e8547dbfede389adccde17c3d45ebde2ffd42906f043914cce2979f21247";
    }
    const { aberto, titulo, texto, textoConfirmar, textoCancelar, aoConfirmar, aoCancelar, processando: t1, textoProcessando, erro } = t0;
    const processando = t1 === undefined ? false : t1;
    const refDialogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refCancelar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const refOrigem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idTitulo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const idTexto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const demorando = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEsperaLonga$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEsperaLonga"])(processando);
    let t2;
    let t3;
    if ($[1] !== aberto) {
        t2 = ({
            "DialogoConfirmacao[useEffect()]": ()=>{
                const dialogo = refDialogo.current;
                if (!dialogo) {
                    return;
                }
                if (aberto && !dialogo.open) {
                    refOrigem.current = document.activeElement;
                    dialogo.showModal();
                    refCancelar.current?.focus();
                } else {
                    if (!aberto && dialogo.open) {
                        dialogo.close();
                        const origem = refOrigem.current;
                        if (origem?.isConnected) {
                            origem.focus();
                        }
                    }
                }
            }
        })["DialogoConfirmacao[useEffect()]"];
        t3 = [
            aberto
        ];
        $[1] = aberto;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== aoCancelar || $[5] !== processando) {
        t4 = function aoPedirParaFechar(evento) {
            evento.preventDefault();
            if (!processando) {
                aoCancelar();
            }
        };
        $[4] = aoCancelar;
        $[5] = processando;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const aoPedirParaFechar = t4;
    let t5;
    if ($[7] !== aberto || $[8] !== aoCancelar) {
        t5 = function aoFechar() {
            if (aberto) {
                aoCancelar();
            }
        };
        $[7] = aberto;
        $[8] = aoCancelar;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const aoFechar = t5;
    let t6;
    if ($[10] !== aoConfirmar || $[11] !== processando) {
        t6 = function aoTocarConfirmar() {
            if (!processando) {
                aoConfirmar();
            }
        };
        $[10] = aoConfirmar;
        $[11] = processando;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const aoTocarConfirmar = t6;
    let t7;
    if ($[13] !== aoCancelar || $[14] !== processando) {
        t7 = function aoTocarCancelar() {
            if (!processando) {
                aoCancelar();
            }
        };
        $[13] = aoCancelar;
        $[14] = processando;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const aoTocarCancelar = t7;
    let t8;
    if ($[16] !== idTitulo || $[17] !== titulo) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            id: idTitulo,
            className: "text-h2-compacto",
            children: titulo
        }, void 0, false, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[16] = idTitulo;
        $[17] = titulo;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== idTexto || $[20] !== texto) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: idTexto,
            className: "mt-4",
            children: texto
        }, void 0, false, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[19] = idTexto;
        $[20] = texto;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== erro) {
        t10 = erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ErroCampo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            papel: "alert",
            className: "mt-4",
            children: erro
        }, void 0, false, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 148,
            columnNumber: 19
        }, this);
        $[22] = erro;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== demorando || $[25] !== processando || $[26] !== textoProcessando) {
        t11 = processando && textoProcessando ? demorando ? "Est\xE1 demorando mais que o normal. Aguarde mais um pouco." : textoProcessando.replace("\u2026", "") : "";
        $[24] = demorando;
        $[25] = processando;
        $[26] = textoProcessando;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            role: "status",
            className: "sr-only",
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    const t13 = processando || undefined;
    const t14 = processando && textoProcessando ? textoProcessando : textoConfirmar;
    let t15;
    if ($[30] !== aoTocarConfirmar || $[31] !== t13 || $[32] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Botao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variante: "perigo-preenchido",
            "aria-disabled": t13,
            onClick: aoTocarConfirmar,
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[30] = aoTocarConfirmar;
        $[31] = t13;
        $[32] = t14;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== aoTocarCancelar || $[35] !== textoCancelar) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Botao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: refCancelar,
            variante: "secundario",
            onClick: aoTocarCancelar,
            children: textoCancelar
        }, void 0, false, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[34] = aoTocarCancelar;
        $[35] = textoCancelar;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t15 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex flex-wrap gap-4",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== aoFechar || $[41] !== aoPedirParaFechar || $[42] !== idTexto || $[43] !== idTitulo || $[44] !== t10 || $[45] !== t12 || $[46] !== t17 || $[47] !== t8 || $[48] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
            ref: refDialogo,
            "aria-labelledby": idTitulo,
            "aria-describedby": idTexto,
            onCancel: aoPedirParaFechar,
            onClose: aoFechar,
            className: "m-auto max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-barra border border-borda bg-superficie p-6 text-texto shadow-barra",
            children: [
                t8,
                t9,
                t10,
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/DialogoConfirmacao.jsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[40] = aoFechar;
        $[41] = aoPedirParaFechar;
        $[42] = idTexto;
        $[43] = idTitulo;
        $[44] = t10;
        $[45] = t12;
        $[46] = t17;
        $[47] = t8;
        $[48] = t9;
        $[49] = t18;
    } else {
        t18 = $[49];
    }
    return t18;
}
_s(DialogoConfirmacao, "L9QYXgDQGtZBNgz78B+0VbZ4G7A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEsperaLonga$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEsperaLonga"]
    ];
});
_c = DialogoConfirmacao;
var _c;
__turbopack_context__.k.register(_c, "DialogoConfirmacao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ErroCampo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErroCampo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)");
;
;
;
function ErroCampo(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "74bc8cb4bab6f20e2de9af1a065da6b1e3cdbd2430f3b5bbb63802cd0cf638d8") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74bc8cb4bab6f20e2de9af1a065da6b1e3cdbd2430f3b5bbb63802cd0cf638d8";
    }
    const { id, papel, className: t1, children } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `flex items-start gap-2 font-bold text-erro ${className}`;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$EspacoIcone$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            nome: "WarningCircle"
        }, void 0, false, {
            fileName: "[project]/components/ui/ErroCampo.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/ErroCampo.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = children;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== id || $[5] !== papel || $[6] !== t2 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            id: id,
            role: papel,
            className: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/ErroCampo.jsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = id;
        $[5] = papel;
        $[6] = t2;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_c = ErroCampo;
var _c;
__turbopack_context__.k.register(_c, "ErroCampo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/EspacoIcone.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EspacoIcone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowClockwise$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowClockwise.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowCounterClockwise$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowCounterClockwise.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowDown.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowLeft.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowUp.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowsClockwise$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowsClockwise.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowsOutCardinal$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/ArrowsOutCardinal.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/CaretLeft.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/CaretRight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Eye$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Eye.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$House$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/House.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Image$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Image.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Notebook$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Notebook.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Pause$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Pause.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PencilSimple$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/PencilSimple.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Play$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Play.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Plus$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Plus.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Pulse$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Pulse.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$SpeakerHigh$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/SpeakerHigh.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$SpeakerSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/SpeakerSlash.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Trash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Trash.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Warning.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$WarningCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/WarningCircle.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Watch$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/Watch.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$X$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/ssr/X.es.js [app-client] (ecmascript)");
;
;
;
// Usa a versão "ssr" do pacote: funciona em Server e Client Components. Nome fora da
// lista volta o espaço vazio, que não ocupa lugar (decisão 4 da 9.0).
const ICONES = {
    ArrowClockwise: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowClockwise$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowClockwise"],
    ArrowCounterClockwise: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowCounterClockwise$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowCounterClockwise"],
    ArrowDown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowDown$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDown"],
    ArrowLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft"],
    ArrowRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"],
    ArrowUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowUp$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowUp"],
    ArrowsClockwise: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowsClockwise$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowsClockwise"],
    ArrowsOutCardinal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$ArrowsOutCardinal$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowsOutCardinal"],
    CaretLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretLeft$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretLeft"],
    CaretRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$CaretRight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaretRight"],
    Eye: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Eye$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eye"],
    House: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$House$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["House"],
    Image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Image$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"],
    Notebook: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Notebook$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notebook"],
    Pause: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Pause$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pause"],
    PencilSimple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$PencilSimple$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PencilSimple"],
    Play: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Play$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Play"],
    Plus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Plus$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plus"],
    Pulse: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Pulse$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pulse"],
    SpeakerHigh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$SpeakerHigh$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpeakerHigh"],
    SpeakerSlash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$SpeakerSlash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpeakerSlash"],
    Trash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Trash$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trash"],
    Warning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Warning$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Warning"],
    WarningCircle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$WarningCircle$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningCircle"],
    Watch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$Watch$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Watch"],
    X: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$ssr$2f$X$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["X"]
};
function EspacoIcone(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "eff5be90f6549d0767905f5d8d2fa00fe074f91790c894d2b60fc265880af722") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eff5be90f6549d0767905f5d8d2fa00fe074f91790c894d2b60fc265880af722";
    }
    const { nome } = t0;
    const Icone = ICONES[nome];
    if (!Icone) {
        let t1;
        if ($[1] !== nome) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                "data-icone": nome,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/components/ui/EspacoIcone.jsx",
                lineNumber: 49,
                columnNumber: 12
            }, this);
            $[1] = nome;
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        return t1;
    }
    let t1;
    if ($[3] !== Icone) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icone, {
            size: 24,
            weight: "bold",
            "aria-hidden": "true",
            className: "shrink-0"
        }, void 0, false, {
            fileName: "[project]/components/ui/EspacoIcone.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[3] = Icone;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c = EspacoIcone;
var _c;
__turbopack_context__.k.register(_c, "EspacoIcone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/IconeAlternado.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IconeAlternado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function IconeAlternado(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "3943e1a3e694366b3d038b9f8031172d048955c260dbae131ee1de12a4162ed2") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3943e1a3e694366b3d038b9f8031172d048955c260dbae131ee1de12a4162ed2";
    }
    const { chave, children } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            rotate: -90
        };
        t2 = {
            opacity: 1,
            rotate: 0,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].rapida
        };
        t3 = {
            opacity: 0,
            rotate: 90,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saida"]
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== chave || $[5] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            initial: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                "aria-hidden": "true",
                initial: t1,
                animate: t2,
                exit: t3,
                className: "inline-flex shrink-0 has-[>[data-icone]]:hidden",
                children: children
            }, chave, false, {
                fileName: "[project]/components/ui/IconeAlternado.jsx",
                lineNumber: 46,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/IconeAlternado.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[4] = chave;
        $[5] = children;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_c = IconeAlternado;
var _c;
__turbopack_context__.k.register(_c, "IconeAlternado");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/LinkInterno.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LinkInterno
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGuardaDeSaida.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LinkInterno(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "4c91a7cfb7bcb4c1c6582e9e3cce2543d36fca0cfd4d56e34c3f2e0c68d50db8") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c91a7cfb7bcb4c1c6582e9e3cce2543d36fca0cfd4d56e34c3f2e0c68d50db8";
    }
    let href;
    let onNavigate;
    let resto;
    if ($[1] !== t0) {
        ({ href, onNavigate, ...resto } = t0);
        $[1] = t0;
        $[2] = href;
        $[3] = onNavigate;
        $[4] = resto;
    } else {
        href = $[2];
        onNavigate = $[3];
        resto = $[4];
    }
    const { aoNavegar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuardaDeSaida"])();
    let t1;
    if ($[5] !== aoNavegar || $[6] !== href || $[7] !== onNavigate) {
        t1 = function aoNavegarPeloLink(evento) {
            if (onNavigate) {
                onNavigate(evento);
                return;
            }
            aoNavegar(evento, href);
        };
        $[5] = aoNavegar;
        $[6] = href;
        $[7] = onNavigate;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    const aoNavegarPeloLink = t1;
    let t2;
    if ($[9] !== aoNavegarPeloLink || $[10] !== href || $[11] !== resto) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onNavigate: aoNavegarPeloLink,
            ...resto
        }, void 0, false, {
            fileName: "[project]/components/ui/LinkInterno.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[9] = aoNavegarPeloLink;
        $[10] = href;
        $[11] = resto;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    return t2;
}
_s(LinkInterno, "b39uj7xCZ3eH2xrwaO365QQrFdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGuardaDeSaida$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuardaDeSaida"]
    ];
});
_c = LinkInterno;
var _c;
__turbopack_context__.k.register(_c, "LinkInterno");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCabeEmUmaLinha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCabeEmUmaLinha",
    ()=>useCabeEmUmaLinha
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Mede no navegador porque a largura dos textos depende da fonte e do tamanho e
// espaçamento escolhidos pela pessoa (WCAG 1.4.12).
const px = (valor)=>parseFloat(valor) || 0;
function larguraNecessaria(lista) {
    const estiloLista = getComputedStyle(lista);
    const links = [
        ...lista.querySelectorAll("a")
    ];
    let total = px(estiloLista.paddingLeft) + px(estiloLista.paddingRight) + px(estiloLista.borderLeftWidth) + px(estiloLista.borderRightWidth) + px(estiloLista.columnGap) * (links.length - 1);
    for (const link of links){
        const estilo = getComputedStyle(link);
        // No celular o ícone fica em cima do texto: vale o mais largo dos dois
        const conteudo = Math.max(...[
            ...link.children
        ].map((filho)=>filho.getBoundingClientRect().width));
        total += conteudo + px(estilo.paddingLeft) + px(estilo.paddingRight) + px(estilo.borderLeftWidth) + px(estilo.borderRightWidth);
    }
    return total;
}
function useCabeEmUmaLinha(refLista) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "3309833ce2e4acbfa519a39ee8b02e939afe2bdbdd18e96bad8c8f220171eed1") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3309833ce2e4acbfa519a39ee8b02e939afe2bdbdd18e96bad8c8f220171eed1";
    }
    const [cabe, setCabe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== refLista.current) {
        t0 = ({
            "useCabeEmUmaLinha[useEffect()]": ()=>{
                const lista = refLista.current;
                const espacoDisponivel = lista?.parentElement;
                if (!lista || !espacoDisponivel) {
                    return;
                }
                const medir = function medir() {
                    setCabe(Math.ceil(larguraNecessaria(lista)) <= espacoDisponivel.clientWidth);
                };
                const observador = new ResizeObserver(medir);
                observador.observe(espacoDisponivel);
                lista.querySelectorAll("a > *").forEach({
                    "useCabeEmUmaLinha[useEffect() > (anonymous)()]": (conteudo)=>observador.observe(conteudo)
                }["useCabeEmUmaLinha[useEffect() > (anonymous)()]"]);
                document.fonts?.addEventListener("loadingdone", medir);
                return ()=>{
                    observador.disconnect();
                    document.fonts?.removeEventListener("loadingdone", medir);
                };
            }
        })["useCabeEmUmaLinha[useEffect()]"];
        $[1] = refLista.current;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== refLista) {
        t1 = [
            refLista
        ];
        $[3] = refLista;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return cabe;
}
_s(useCabeEmUmaLinha, "V2x1Yrv79UgEg5CZ8WJPXTMVjHE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useConsultaMidia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConsultaMidia",
    ()=>useConsultaMidia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// No servidor devolve false: a página vem no modo mais simples, e o efeito só
// liga no navegador.
// Uma função de "assinatura" por consulta, sempre a mesma, para o React
// não refazer a assinatura a cada renderização.
const assinaturas = new Map();
function assinaturaDa(consulta) {
    if (!assinaturas.has(consulta)) {
        assinaturas.set(consulta, (aoMudar)=>{
            const lista = window.matchMedia(consulta);
            lista.addEventListener("change", aoMudar);
            return ()=>lista.removeEventListener("change", aoMudar);
        });
    }
    return assinaturas.get(consulta);
}
function useConsultaMidia(consulta) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "4adf0da75df7c0b756978d3d7ad1a22b20fe420020354a8679dc157726b01256") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4adf0da75df7c0b756978d3d7ad1a22b20fe420020354a8679dc157726b01256";
    }
    let t0;
    if ($[1] !== consulta) {
        t0 = assinaturaDa(consulta);
        $[1] = consulta;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== consulta) {
        t1 = ({
            "useConsultaMidia[useSyncExternalStore(arg1)]": ()=>window.matchMedia(consulta).matches
        })["useConsultaMidia[useSyncExternalStore(arg1)]"];
        $[3] = consulta;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(t0, t1, _useConsultaMidiaUseSyncExternalStoreArg);
}
_s(useConsultaMidia, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function _useConsultaMidiaUseSyncExternalStoreArg() {
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDigitandoNoCelular.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDigitandoNoCelular",
    ()=>useDigitandoNoCelular
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Regra: a barra flutuante sai da frente do teclado do celular (7.3).
const CONSULTA_CELULAR = "(max-width: 47.99rem)";
const TIPOS_QUE_NAO_ABREM_TECLADO = [
    "radio",
    "checkbox",
    "button",
    "submit",
    "reset"
];
function ehCampoDeDigitacao(elemento) {
    if (elemento instanceof HTMLTextAreaElement) return true;
    return elemento instanceof HTMLInputElement && !TIPOS_QUE_NAO_ABREM_TECLADO.includes(elemento.type);
}
function useDigitandoNoCelular() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "312feda9ee3f421c18352962cd347939426da8ddf42ebd57ad4154d1fbda0b93") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "312feda9ee3f421c18352962cd347939426da8ddf42ebd57ad4154d1fbda0b93";
    }
    const [digitando, setDigitando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "useDigitandoNoCelular[useEffect()]": ()=>{
                const consultaCelular = window.matchMedia(CONSULTA_CELULAR);
                const aoFocar = function aoFocar(evento) {
                    setDigitando(consultaCelular.matches && ehCampoDeDigitacao(evento.target));
                };
                const aoSair = function aoSair() {
                    setDigitando(false);
                };
                document.addEventListener("focusin", aoFocar);
                document.addEventListener("focusout", aoSair);
                return ()=>{
                    document.removeEventListener("focusin", aoFocar);
                    document.removeEventListener("focusout", aoSair);
                };
            }
        })["useDigitandoNoCelular[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return digitando;
}
_s(useDigitandoNoCelular, "ZGucsId2njWazbLRRu1dIZhYFLM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDirecaoRolagem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDirecaoRolagem",
    ()=>useDirecaoRolagem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Regra (9.3): só em Início e Solução, abaixo de 768 px. Quem usa esconde só com
// transform, nunca display: none, para o leitor de tela alcançar as barras.
const ROTAS_COM_BARRAS_QUE_SOMEM = [
    "/",
    "/solucao"
];
const CONSULTA_CELULAR = "(max-width: 47.99rem)";
function useDirecaoRolagem() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "4a235367b26c248ff849b3623d5e66416bae1e918a84dbded1a18ec397bb2cfa") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4a235367b26c248ff849b3623d5e66416bae1e918a84dbded1a18ec397bb2cfa";
    }
    const caminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    if ($[1] !== caminho) {
        t0 = ROTAS_COM_BARRAS_QUE_SOMEM.includes(caminho);
        $[1] = caminho;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const ativo = t0;
    const [rotaEscondida, setRotaEscondida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[3] !== ativo || $[4] !== caminho || $[5] !== efeitosLigados) {
        t1 = ({
            "useDirecaoRolagem[useEffect()]": ()=>{
                if (!ativo || !efeitosLigados) {
                    return;
                }
                const consultaCelular = window.matchMedia(CONSULTA_CELULAR);
                const tamanhoTexto = parseFloat(getComputedStyle(document.documentElement).fontSize);
                const distanciaMinima = 4 * tamanhoTexto;
                let ultimaPosicao = window.scrollY;
                let pontoDeVirada = window.scrollY;
                let direcao = null;
                const esconder = {
                    "useDirecaoRolagem[useEffect() > esconder]": ()=>setRotaEscondida(caminho)
                }["useDirecaoRolagem[useEffect() > esconder]"];
                const mostrar = {
                    "useDirecaoRolagem[useEffect() > mostrar]": ()=>setRotaEscondida(null)
                }["useDirecaoRolagem[useEffect() > mostrar]"];
                const aoRolar = function aoRolar() {
                    const posicao = window.scrollY;
                    if (!consultaCelular.matches) {
                        mostrar();
                        ultimaPosicao = posicao;
                        return;
                    }
                    const noTopo = posicao <= distanciaMinima;
                    const pertoDoFim = window.innerHeight + posicao >= document.documentElement.scrollHeight - distanciaMinima;
                    if (noTopo || pertoDoFim) {
                        mostrar();
                        pontoDeVirada = posicao;
                        ultimaPosicao = posicao;
                        return;
                    }
                    if (posicao > ultimaPosicao) {
                        if (direcao !== "baixo") {
                            direcao = "baixo";
                            pontoDeVirada = ultimaPosicao;
                        }
                        if (posicao - pontoDeVirada > distanciaMinima) {
                            esconder();
                        }
                    } else {
                        if (posicao < ultimaPosicao) {
                            if (direcao !== "cima") {
                                direcao = "cima";
                                pontoDeVirada = ultimaPosicao;
                            }
                            if (pontoDeVirada - posicao > distanciaMinima) {
                                mostrar();
                            }
                        }
                    }
                    ultimaPosicao = posicao;
                };
                const aoReceberFoco = function aoReceberFoco(evento) {
                    if (evento.target instanceof Element && evento.target.closest("[data-barra-rolagem]")) {
                        mostrar();
                    }
                };
                window.addEventListener("scroll", aoRolar, {
                    passive: true
                });
                document.addEventListener("focusin", aoReceberFoco);
                return ()=>{
                    window.removeEventListener("scroll", aoRolar);
                    document.removeEventListener("focusin", aoReceberFoco);
                };
            }
        })["useDirecaoRolagem[useEffect()]"];
        t2 = [
            ativo,
            efeitosLigados,
            caminho
        ];
        $[3] = ativo;
        $[4] = caminho;
        $[5] = efeitosLigados;
        $[6] = t1;
        $[7] = t2;
    } else {
        t1 = $[6];
        t2 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return ativo && efeitosLigados && rotaEscondida === caminho;
}
_s(useDirecaoRolagem, "7Dwcr9R2VhB+01mydhAFWodS3b4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useEfeitos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextoEfeitos",
    ()=>ContextoEfeitos,
    "useEfeitos",
    ()=>useEfeitos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const ContextoEfeitos = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useEfeitos() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "bf9408246863fa89cec47552c9ae481cb5f335e942b44e0affe8144822a065ce") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf9408246863fa89cec47552c9ae481cb5f335e942b44e0affe8144822a065ce";
    }
    const contexto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextoEfeitos);
    if (!contexto) {
        throw new Error("useEfeitos precisa estar dentro do <ProvedorMovimento>.");
    }
    return contexto;
}
_s(useEfeitos, "ZR0oSHYnh86JaJQkXCiE4u/O/jw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useEsperaLonga.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIMITE_ESPERA_LONGA",
    ()=>LIMITE_ESPERA_LONGA,
    "useEsperaLonga",
    ()=>useEsperaLonga
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const LIMITE_ESPERA_LONGA = 10000;
function useEsperaLonga(ativo) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "2ea93b02d7bef8a9d98fd4b9bdf6140a362469690529460fa0a0e3a6ed20a6ca") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2ea93b02d7bef8a9d98fd4b9bdf6140a362469690529460fa0a0e3a6ed20a6ca";
    }
    const [passou, setPassou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== ativo) {
        t0 = ({
            "useEsperaLonga[useEffect()]": ()=>{
                if (!ativo) {
                    return;
                }
                const espera = setTimeout({
                    "useEsperaLonga[useEffect() > setTimeout()]": ()=>setPassou(true)
                }["useEsperaLonga[useEffect() > setTimeout()]"], LIMITE_ESPERA_LONGA);
                return ()=>{
                    clearTimeout(espera);
                    setPassou(false);
                };
            }
        })["useEsperaLonga[useEffect()]"];
        t1 = [
            ativo
        ];
        $[1] = ativo;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return ativo && passou;
}
_s(useEsperaLonga, "vp3V3ySI3wzXb1BZTcsRGn4HBkQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useFaixaODS.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFaixaODS",
    ()=>useFaixaODS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useFaixaODS() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "d160645382852f463424b2798607e205d6c865bc6d5a425ea96cba27c573a78c") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d160645382852f463424b2798607e205d6c865bc6d5a425ea96cba27c573a78c";
    }
    const [pausada, setPausada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [odsComMouse, setOdsComMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [odsComFoco, setOdsComFoco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const refFaixa = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = function alternarPausa() {
            setPausada(_useFaixaODSAlternarPausaSetPausada);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const alternarPausa = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        const aoSairDoBotao = function aoSairDoBotao(evento) {
            setOdsComFoco(null);
            const faixa = refFaixa.current;
            if (faixa && !faixa.contains(evento.relatedTarget)) {
                faixa.scrollLeft = 0;
            }
        };
        t1 = function eventosDoOds(numero) {
            return {
                onMouseEnter: ()=>setOdsComMouse(numero),
                onMouseLeave: ()=>setOdsComMouse(null),
                onFocus: (evento_0)=>{
                    setOdsComFoco(numero);
                    const botao = evento_0.currentTarget;
                    requestAnimationFrame({
                        "useFaixaODS[eventosDoOds > <anonymous> > requestAnimationFrame()]": ()=>botao.scrollIntoView({
                                block: "nearest",
                                inline: "nearest"
                            })
                    }["useFaixaODS[eventosDoOds > <anonymous> > requestAnimationFrame()]"]);
                },
                onBlur: aoSairDoBotao,
                onClick: ()=>setOdsComFoco(numero)
            };
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const eventosDoOds = t1;
    const t2 = odsComMouse ?? odsComFoco;
    let t3;
    if ($[3] !== pausada || $[4] !== t2) {
        t3 = {
            pausada,
            alternarPausa,
            odsEmDestaque: t2,
            eventosDoOds,
            refFaixa
        };
        $[3] = pausada;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(useFaixaODS, "ThKxv7qqRLZX76y6SZeDIHOkpPc=");
function _useFaixaODSAlternarPausaSetPausada(valor) {
    return !valor;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useGuardaDeSaida.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProvedorGuardaDeSaida",
    ()=>ProvedorGuardaDeSaida,
    "useGuardaDeSaida",
    ()=>useGuardaDeSaida
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DialogoConfirmacao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/DialogoConfirmacao.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTransicaoPagina.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// O App Router não bloqueia a navegação; por isso os links internos passam por aoNavegar.
// Armadilha: o Voltar do navegador não pode ser bloqueado de forma confiável.
const ContextoGuarda = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ProvedorGuardaDeSaida(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "8e6db6cffb17008a2f0353fef45acc3da2001d29e3de4bb7438d716336e2e056") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8e6db6cffb17008a2f0353fef45acc3da2001d29e3de4bb7438d716336e2e056";
    }
    const { children } = t0;
    const { navegar, irPara } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavegacaoComTransicao"])();
    const bloqueado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [destinoPendente, setDestinoPendente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = function definirBloqueio(valor) {
            bloqueado.current = valor;
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const definirBloqueio = t1;
    let t2;
    if ($[2] !== navegar) {
        t2 = function aoNavegar(evento, destino) {
            if (!bloqueado.current) {
                navegar(evento, destino);
                return;
            }
            evento.preventDefault();
            setDestinoPendente(destino);
        };
        $[2] = navegar;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const aoNavegar = t2;
    let t3;
    if ($[4] !== destinoPendente || $[5] !== irPara) {
        t3 = function aoDescartar() {
            const destino_0 = destinoPendente;
            bloqueado.current = false;
            setDestinoPendente(null);
            irPara(destino_0);
        };
        $[4] = destinoPendente;
        $[5] = irPara;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const aoDescartar = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function aoContinuar() {
            setDestinoPendente(null);
        };
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const aoContinuar = t4;
    let t5;
    if ($[8] !== aoNavegar) {
        t5 = {
            definirBloqueio,
            aoNavegar
        };
        $[8] = aoNavegar;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const t6 = destinoPendente !== null;
    let t7;
    if ($[10] !== aoDescartar || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DialogoConfirmacao$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            aberto: t6,
            titulo: "Descartar as respostas?",
            texto: "As respostas deste registro n\xE3o ser\xE3o salvas.",
            textoConfirmar: "Descartar respostas",
            textoCancelar: "Continuar preenchendo",
            aoConfirmar: aoDescartar,
            aoCancelar: aoContinuar
        }, void 0, false, {
            fileName: "[project]/hooks/useGuardaDeSaida.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[10] = aoDescartar;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== children || $[14] !== t5 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextoGuarda.Provider, {
            value: t5,
            children: [
                children,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/hooks/useGuardaDeSaida.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = t5;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_s(ProvedorGuardaDeSaida, "ClN8luZurnoNztsszzgllifTYbw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTransicaoPagina$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavegacaoComTransicao"]
    ];
});
_c = ProvedorGuardaDeSaida;
function useGuardaDeSaida() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "8e6db6cffb17008a2f0353fef45acc3da2001d29e3de4bb7438d716336e2e056") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8e6db6cffb17008a2f0353fef45acc3da2001d29e3de4bb7438d716336e2e056";
    }
    const contexto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextoGuarda);
    if (!contexto) {
        throw new Error("useGuardaDeSaida precisa estar dentro de <ProvedorGuardaDeSaida>.");
    }
    return contexto;
}
_s1(useGuardaDeSaida, "ZR0oSHYnh86JaJQkXCiE4u/O/jw=");
var _c;
__turbopack_context__.k.register(_c, "ProvedorGuardaDeSaida");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useMagnetico.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMagnetico",
    ()=>useMagnetico
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsultaMidia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useConsultaMidia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/presetsMovimento.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// Só o conteúdo se move; a área de clique fica parada, para o alvo nunca fugir de
// quem está mirando.
const LIMITE = 8; // px
const CONSULTA_PONTEIRO_FINO = "(pointer: fine)";
function limitar(valor) {
    return Math.max(-LIMITE, Math.min(LIMITE, valor));
}
function useMagnetico() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "85e0976b6fd2745d7c5bf81530f703f8514292e47060f18ffb9f8a8a9075fa26") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85e0976b6fd2745d7c5bf81530f703f8514292e47060f18ffb9f8a8a9075fa26";
    }
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const ponteiroFino = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsultaMidia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsultaMidia"])(CONSULTA_PONTEIRO_FINO);
    const ligado = efeitosLigados && ponteiroFino;
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].rapida);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$presetsMovimento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"].rapida);
    let t0;
    let t1;
    if ($[1] !== ligado || $[2] !== x || $[3] !== y) {
        t0 = ({
            "useMagnetico[useEffect()]": ()=>{
                if (ligado) {
                    return;
                }
                x.jump(0);
                y.jump(0);
            }
        })["useMagnetico[useEffect()]"];
        t1 = [
            ligado,
            x,
            y
        ];
        $[1] = ligado;
        $[2] = x;
        $[3] = y;
        $[4] = t0;
        $[5] = t1;
    } else {
        t0 = $[4];
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[6] !== ligado || $[7] !== x || $[8] !== y) {
        t2 = function aoMover(evento) {
            if (!ligado || evento.pointerType === "touch") {
                return;
            }
            const caixa = evento.currentTarget.getBoundingClientRect();
            x.set(limitar((evento.clientX - caixa.left - caixa.width / 2) * 0.2));
            y.set(limitar((evento.clientY - caixa.top - caixa.height / 2) * 0.3));
        };
        $[6] = ligado;
        $[7] = x;
        $[8] = y;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const aoMover = t2;
    let t3;
    if ($[10] !== x || $[11] !== y) {
        t3 = function aoSair() {
            x.set(0);
            y.set(0);
        };
        $[10] = x;
        $[11] = y;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    const aoSair = t3;
    let t4;
    if ($[13] !== aoMover || $[14] !== aoSair || $[15] !== x || $[16] !== y) {
        t4 = {
            x,
            y,
            aoMover,
            aoSair
        };
        $[13] = aoMover;
        $[14] = aoSair;
        $[15] = x;
        $[16] = y;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    return t4;
}
_s(useMagnetico, "Hp/DCvxR0WC4D8JlXtuqBr38DuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConsultaMidia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConsultaMidia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useMensagemDiario.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProvedorMensagemDiario",
    ()=>ProvedorMensagemDiario,
    "useMensagemDiario",
    ()=>useMensagemDiario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Fica no layout para sobreviver à troca de página. Regra: a mensagem não some
// sozinha e é apagada ao ir para outra página (7.5, 11.2, 11.3).
const ContextoMensagem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ProvedorMensagemDiario(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "557aaea7045dcbd1b33dfe73fa131eeeb1cd76e0f0f7917aa902f54a0fb1b1ce") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "557aaea7045dcbd1b33dfe73fa131eeeb1cd76e0f0f7917aa902f54a0fb1b1ce";
    }
    const { children } = t0;
    const caminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== caminho) {
        t1 = {
            mensagem: null,
            caminho
        };
        $[1] = caminho;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [estado, setEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    if (estado.caminho !== caminho) {
        setEstado({
            mensagem: estado.mensagem?.rota === caminho ? estado.mensagem : null,
            caminho
        });
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function definirMensagem(mensagem, t3) {
            const rota = t3 === undefined ? "/diario" : t3;
            setEstado({
                "ProvedorMensagemDiario[definirMensagem > setEstado()]": (anterior)=>({
                        ...anterior,
                        mensagem: {
                            ...mensagem,
                            rota
                        }
                    })
            }["ProvedorMensagemDiario[definirMensagem > setEstado()]"]);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const definirMensagem = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = function limparMensagem() {
            setEstado(_ProvedorMensagemDiarioLimparMensagemSetEstado);
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const limparMensagem = t3;
    const mensagem_0 = estado.mensagem?.rota === caminho ? estado.mensagem : null;
    let t4;
    if ($[5] !== mensagem_0) {
        t4 = {
            mensagem: mensagem_0,
            definirMensagem,
            limparMensagem
        };
        $[5] = mensagem_0;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== children || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextoMensagem.Provider, {
            value: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/hooks/useMensagemDiario.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(ProvedorMensagemDiario, "POuDCiGmV3JZSfqqbTVJ93NvrEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ProvedorMensagemDiario;
function _ProvedorMensagemDiarioLimparMensagemSetEstado(anterior_0) {
    return {
        ...anterior_0,
        mensagem: null
    };
}
function useMensagemDiario() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "557aaea7045dcbd1b33dfe73fa131eeeb1cd76e0f0f7917aa902f54a0fb1b1ce") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "557aaea7045dcbd1b33dfe73fa131eeeb1cd76e0f0f7917aa902f54a0fb1b1ce";
    }
    const contexto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextoMensagem);
    if (!contexto) {
        throw new Error("useMensagemDiario precisa estar dentro de <ProvedorMensagemDiario>.");
    }
    return contexto;
}
_s1(useMensagemDiario, "ZR0oSHYnh86JaJQkXCiE4u/O/jw=");
var _c;
__turbopack_context__.k.register(_c, "ProvedorMensagemDiario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/usePrefereMovimentoReduzido.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePrefereMovimentoReduzido",
    ()=>usePrefereMovimentoReduzido
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// Regra: só o ProvedorMovimento usa este hook; os componentes usam useEfeitos() (19.2).
const CONSULTA = "(prefers-reduced-motion: reduce)";
function assinar(aoMudar) {
    const consulta = window.matchMedia(CONSULTA);
    consulta.addEventListener("change", aoMudar);
    return ()=>consulta.removeEventListener("change", aoMudar);
}
function lerNoNavegador() {
    return window.matchMedia(CONSULTA).matches;
}
function lerNoServidor() {
    return false;
}
function usePrefereMovimentoReduzido() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "680fcc6a6191f3f595087734b75d1f88406af64936dbd155da3d40c13385a5dd") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "680fcc6a6191f3f595087734b75d1f88406af64936dbd155da3d40c13385a5dd";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(assinar, lerNoNavegador, lerNoServidor);
}
_s(usePrefereMovimentoReduzido, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useProgressoLeitura.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgressoLeitura",
    ()=>useProgressoLeitura
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useProgressoLeitura() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "356f1c9559b0411b1bece737d3295fc362713cec68750747b060ae1c7a29f6d5") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "356f1c9559b0411b1bece737d3295fc362713cec68750747b060ae1c7a29f6d5";
    }
    const refBarra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    const caminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== efeitosLigados) {
        t0 = ({
            "useProgressoLeitura[useEffect()]": ()=>{
                const barra = refBarra.current;
                if (!barra || !efeitosLigados) {
                    return;
                }
                let quadro = 0;
                const atualizar = function atualizar() {
                    quadro = 0;
                    const raiz = document.documentElement;
                    const maximo = raiz.scrollHeight - window.innerHeight;
                    const fracao = maximo > 0 ? Math.min(1, Math.max(0, window.scrollY / maximo)) : 0;
                    barra.style.transform = `scaleX(${fracao.toFixed(4)})`;
                };
                const pedirAtualizacao = function pedirAtualizacao() {
                    if (!quadro) {
                        quadro = requestAnimationFrame(atualizar);
                    }
                };
                atualizar();
                window.addEventListener("scroll", pedirAtualizacao, {
                    passive: true
                });
                window.addEventListener("resize", pedirAtualizacao);
                const observador = new ResizeObserver(pedirAtualizacao);
                observador.observe(document.body);
                return ()=>{
                    cancelAnimationFrame(quadro);
                    window.removeEventListener("scroll", pedirAtualizacao);
                    window.removeEventListener("resize", pedirAtualizacao);
                    observador.disconnect();
                };
            }
        })["useProgressoLeitura[useEffect()]"];
        $[1] = efeitosLigados;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== caminho || $[4] !== efeitosLigados) {
        t1 = [
            efeitosLigados,
            caminho
        ];
        $[3] = caminho;
        $[4] = efeitosLigados;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return refBarra;
}
_s(useProgressoLeitura, "y9223fQwFuyLJOLBBahV4DwmqWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useRodapeRevelado.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRodapeRevelado",
    ()=>useRodapeRevelado
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useEfeitos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// Só vale com o rodapé abaixo de 80% da altura da tela: um rodapé mais alto não
// caberia preso embaixo, e parte dele nunca apareceria.
const LIMITE = 0.8; // fração da altura da tela
function useRodapeRevelado() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c94bd25e3d09ad2d8081ec827ed10896bdd496eb29a71677922d3aa304aeab59") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c94bd25e3d09ad2d8081ec827ed10896bdd496eb29a71677922d3aa304aeab59";
    }
    const refRodape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { efeitosLigados } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"])();
    let t0;
    let t1;
    if ($[1] !== efeitosLigados) {
        t0 = ({
            "useRodapeRevelado[useEffect()]": ()=>{
                const rodape = refRodape.current;
                const raiz = document.documentElement;
                if (!rodape || !efeitosLigados) {
                    raiz.removeAttribute("data-rodape-revela");
                    return;
                }
                const decidir = function decidir() {
                    const cabe = rodape.offsetHeight < window.innerHeight * LIMITE;
                    raiz.toggleAttribute("data-rodape-revela", cabe);
                };
                decidir();
                const observador = new ResizeObserver(decidir);
                observador.observe(rodape);
                window.addEventListener("resize", decidir);
                return ()=>{
                    observador.disconnect();
                    window.removeEventListener("resize", decidir);
                    raiz.removeAttribute("data-rodape-revela");
                };
            }
        })["useRodapeRevelado[useEffect()]"];
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
    return refRodape;
}
_s(useRodapeRevelado, "yEmbTssIjY064ixuxfrOdIgV8L4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useEfeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEfeitos"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useRolagemSuave.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextoRolagemSuave",
    ()=>ContextoRolagemSuave,
    "useRolagemSuave",
    ()=>useRolagemSuave
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const ContextoRolagemSuave = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useRolagemSuave() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "fe9b9c1af5bba69eba1bffadea2488cec7323020503a0c7d0bba5394523ca58f") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fe9b9c1af5bba69eba1bffadea2488cec7323020503a0c7d0bba5394523ca58f";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextoRolagemSuave);
}
_s(useRolagemSuave, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useTransicaoPagina.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextoTransicao",
    ()=>ContextoTransicao,
    "deveAnimarTroca",
    ()=>deveAnimarTroca,
    "estaNoDiario",
    ()=>estaNoDiario,
    "useNavegacaoComTransicao",
    ()=>useNavegacaoComTransicao,
    "useTransicaoPagina",
    ()=>useTransicaoPagina
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/efeitos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cortinaDomos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cortinaDomos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
// Regra: dentro do Diário a troca é instantânea; a cortina só anima ao entrar e ao
// sair dele. Se a página nova não chegar em 3 s, a cortina some.
const DURACAO_ENTRADA = 0.42; // s (PADRAO_MOVIMENTO_PULSE, item 5c)
const DURACAO_SAIDA = 0.42; // s
const LIMITE_DE_ESPERA = 3000; // ms
const ContextoTransicao = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function estaNoDiario(caminho) {
    return caminho === "/diario" || caminho.startsWith("/diario/");
}
function deveAnimarTroca(origem, destino) {
    if (origem === destino) return false;
    return !(estaNoDiario(origem) && estaNoDiario(destino));
}
function semMovimento() {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$efeitos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["efeitosLigadosAgora"])() || window.matchMedia("(forced-colors: active)").matches;
}
function caminhoDe(destino) {
    return new URL(destino, window.location.href).pathname;
}
function corDaCortina() {
    return getComputedStyle(document.documentElement).getPropertyValue("--cor-cortina").trim() || "#242428";
}
// 0 = vazia; 1 = cobrindo
function mostrarCortina(cortina, cobrindo) {
    cortina.dataset.ativa = "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cortinaDomos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["desenharDomos"])(cortina, cobrindo ? 1 : 0, true, corDaCortina());
}
function varrer(cortina, entrando, duracao, aoTerminar) {
    const cor = corDaCortina();
    const valor = {
        progresso: 0
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(valor, {
        progresso: 1,
        duration: duracao,
        ease: "none",
        // cada domo já cresce aos poucos; o conjunto anda reto
        onUpdate: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cortinaDomos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["desenharDomos"])(cortina, valor.progresso, entrando, cor),
        onComplete: aoTerminar
    });
}
function encolherCortina(cortina, estado) {
    clearTimeout(estado.limite);
    estado.animacao?.kill();
    estado.animacao = varrer(cortina, false, DURACAO_SAIDA, ()=>{
        delete cortina.dataset.ativa;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cortinaDomos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limparDomos"])(cortina);
        estado.cobrindo = false;
    });
}
function cobrirETrocar(cortina, estado, trocarDePagina) {
    estado.cobrindo = true;
    estado.animacao?.kill();
    mostrarCortina(cortina, false);
    estado.animacao = varrer(cortina, true, DURACAO_ENTRADA, ()=>{
        trocarDePagina();
        estado.limite = setTimeout(()=>encolherCortina(cortina, estado), LIMITE_DE_ESPERA);
    });
}
function useTransicaoPagina() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "2f188caaee8f057c7358e06b9cb1ac94a8df452a09ba2306ae29513c68b096b2") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f188caaee8f057c7358e06b9cb1ac94a8df452a09ba2306ae29513c68b096b2";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const caminho = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const refCortina = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const caminhoAnterior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(caminho);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            cobrindo: false,
            animacao: null,
            limite: null
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const estado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    let t1;
    if ($[2] !== caminho || $[3] !== router) {
        t1 = function navegar(evento, destino) {
            const cortina = refCortina.current;
            if (!cortina || semMovimento() || !deveAnimarTroca(caminho, caminhoDe(destino))) {
                return;
            }
            evento.preventDefault();
            if (estado.current.cobrindo) {
                return;
            }
            cobrirETrocar(cortina, estado.current, {
                "useTransicaoPagina[navegar > cobrirETrocar()]": ()=>router.push(destino)
            }["useTransicaoPagina[navegar > cobrirETrocar()]"]);
        };
        $[2] = caminho;
        $[3] = router;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const navegar = t1;
    let t2;
    if ($[5] !== caminho || $[6] !== router) {
        t2 = function irPara(destino_0) {
            const cortina_0 = refCortina.current;
            if (!cortina_0 || semMovimento() || estado.current.cobrindo || !deveAnimarTroca(caminho, caminhoDe(destino_0))) {
                router.push(destino_0);
                return;
            }
            cobrirETrocar(cortina_0, estado.current, {
                "useTransicaoPagina[irPara > cobrirETrocar()]": ()=>router.push(destino_0)
            }["useTransicaoPagina[irPara > cobrirETrocar()]"]);
        };
        $[5] = caminho;
        $[6] = router;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const irPara = t2;
    let t3;
    let t4;
    if ($[8] !== caminho) {
        t3 = ({
            "useTransicaoPagina[useLayoutEffect()]": ()=>{
                const origem = caminhoAnterior.current;
                if (origem === caminho) {
                    return;
                }
                caminhoAnterior.current = caminho;
                const cortina_1 = refCortina.current;
                if (!cortina_1) {
                    return;
                }
                if (estado.current.cobrindo) {
                    encolherCortina(cortina_1, estado.current);
                    return;
                }
                if (semMovimento() || !deveAnimarTroca(origem, caminho)) {
                    return;
                }
                estado.current.cobrindo = true;
                mostrarCortina(cortina_1, true);
                encolherCortina(cortina_1, estado.current);
            }
        })["useTransicaoPagina[useLayoutEffect()]"];
        t4 = [
            caminho
        ];
        $[8] = caminho;
        $[9] = t3;
        $[10] = t4;
    } else {
        t3 = $[9];
        t4 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "useTransicaoPagina[useEffect()]": ()=>{
                const atual = estado.current;
                return ()=>{
                    atual.animacao?.kill();
                    clearTimeout(atual.limite);
                };
            }
        })["useTransicaoPagina[useEffect()]"];
        t6 = [];
        $[11] = t5;
        $[12] = t6;
    } else {
        t5 = $[11];
        t6 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[13] !== irPara || $[14] !== navegar) {
        t7 = {
            refCortina,
            navegar,
            irPara
        };
        $[13] = irPara;
        $[14] = navegar;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_s(useTransicaoPagina, "xWuhODNphvgK3RBEZO226y1q6DE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
function useNavegacaoComTransicao() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "2f188caaee8f057c7358e06b9cb1ac94a8df452a09ba2306ae29513c68b096b2") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2f188caaee8f057c7358e06b9cb1ac94a8df452a09ba2306ae29513c68b096b2";
    }
    const contexto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextoTransicao);
    if (!contexto) {
        throw new Error("useNavegacaoComTransicao precisa estar dentro de <TransicaoPagina>.");
    }
    return contexto;
}
_s1(useNavegacaoComTransicao, "ZR0oSHYnh86JaJQkXCiE4u/O/jw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/cortinaDomos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "desenharDomos",
    ()=>desenharDomos,
    "limparDomos",
    ()=>limparDomos
]);
// Por que <canvas>: numa máscara de CSS todos os domos têm o mesmo raio;
// aqui cada domo tem o seu tamanho em cada quadro.
const PASSO = 30;
const RAIO_MAXIMO = 22; // px: com células de 30 px, os domos se encostam e cobrem tudo
const ATRASO_MAXIMO = 0.55;
const DURACAO_DO_DOMO = 0.45;
function ajustarTamanho(canvas) {
    const densidade = Math.min(1.75, window.devicePixelRatio || 1);
    const largura = window.innerWidth;
    const altura = window.innerHeight;
    const larguraReal = Math.round(largura * densidade);
    const alturaReal = Math.round(altura * densidade);
    if (canvas.width !== larguraReal || canvas.height !== alturaReal) {
        canvas.width = larguraReal;
        canvas.height = alturaReal;
    }
    return {
        densidade,
        largura,
        altura
    };
}
function desenharDomos(canvas, progresso, entrando, cor) {
    const contexto = canvas.getContext("2d");
    if (!contexto) return;
    const { densidade, largura, altura } = ajustarTamanho(canvas);
    contexto.setTransform(densidade, 0, 0, densidade, 0, 0);
    contexto.clearRect(0, 0, largura, altura);
    contexto.fillStyle = cor;
    // Um retângulo só: mais leve que desenhar centenas de domos.
    if (entrando && progresso >= 1 || !entrando && progresso <= 0) {
        contexto.fillRect(0, 0, largura, altura);
        return;
    }
    const colunas = Math.ceil(largura / PASSO) + 1;
    const linhas = Math.ceil(altura / PASSO) + 1;
    const total = colunas + linhas;
    contexto.beginPath();
    for(let i = 0; i < colunas; i++){
        for(let j = 0; j < linhas; j++){
            const atraso = (i + j) / total * ATRASO_MAXIMO;
            let crescimento = Math.max(0, Math.min(1, (progresso - atraso) / DURACAO_DO_DOMO));
            if (!entrando) crescimento = 1 - crescimento;
            const raio = crescimento * RAIO_MAXIMO;
            if (raio > 0.3) {
                contexto.moveTo(i * PASSO + raio, j * PASSO);
                contexto.arc(i * PASSO, j * PASSO, raio, 0, Math.PI * 2);
            }
        }
    }
    contexto.fill();
}
function limparDomos(canvas) {
    canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/efeitos.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// O estado fica no <html>: o script do <head> grava o valor antes de a página
// aparecer, e o CSS já nasce certo, sem piscar.
__turbopack_context__.s([
    "CHAVE_EFEITOS",
    ()=>CHAVE_EFEITOS,
    "DESCONHECIDO",
    ()=>DESCONHECIDO,
    "DESLIGADOS",
    ()=>DESLIGADOS,
    "LIGADOS",
    ()=>LIGADOS,
    "assinarEfeitos",
    ()=>assinarEfeitos,
    "definirEfeitos",
    ()=>definirEfeitos,
    "efeitosLigadosAgora",
    ()=>efeitosLigadosAgora,
    "lerEfeitos",
    ()=>lerEfeitos,
    "lerEfeitosNoServidor",
    ()=>lerEfeitosNoServidor,
    "lerEscolhaSalva",
    ()=>lerEscolhaSalva
]);
const CHAVE_EFEITOS = "pulse-efeitos";
const LIGADOS = "ligados";
const DESLIGADOS = "desligados";
const DESCONHECIDO = "desconhecido";
const ouvintes = new Set();
function lerEfeitos() {
    const valor = document.documentElement.getAttribute("data-efeitos");
    return valor === LIGADOS ? LIGADOS : DESLIGADOS;
}
function lerEfeitosNoServidor() {
    return DESCONHECIDO;
}
function efeitosLigadosAgora() {
    return typeof document !== "undefined" && lerEfeitos() === LIGADOS;
}
function assinarEfeitos(aoMudar) {
    ouvintes.add(aoMudar);
    return ()=>ouvintes.delete(aoMudar);
}
function lerEscolhaSalva() {
    try {
        const valor = window.localStorage.getItem(CHAVE_EFEITOS);
        return valor === LIGADOS || valor === DESLIGADOS ? valor : null;
    } catch  {
        return null;
    }
}
function definirEfeitos(ligados, { salvar }) {
    const valor = ligados ? LIGADOS : DESLIGADOS;
    document.documentElement.setAttribute("data-efeitos", valor);
    if (salvar) {
        try {
            window.localStorage.setItem(CHAVE_EFEITOS, valor);
        } catch  {
        // Sem armazenamento: a escolha vale até recarregar a página.
        }
    }
    for (const aoMudar of ouvintes)aoMudar();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/movimento.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registrarPluginsGsap",
    ()=>registrarPluginsGsap,
    "sincronizarLenisComGsap",
    ()=>sincronizarLenisComGsap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
;
;
// Um relógio só (o do GSAP) para o Lenis e o ScrollTrigger: com dois, o ScrollTrigger
// poderia ler a rolagem um quadro atrasado, e a animação tremeria.
let registrado = false;
function registrarPluginsGsap() {
    if (registrado || ("TURBOPACK compile-time value", "object") === "undefined") return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
    registrado = true;
}
function sincronizarLenisComGsap(lenis) {
    // O relógio do GSAP informa segundos; o Lenis espera milissegundos.
    function avancarQuadro(tempoEmSegundos) {
        lenis.raf(tempoEmSegundos * 1000);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(avancarQuadro);
    // Sem "compensação de atraso": se o navegador travar um instante, a
    // rolagem não dá um salto para recuperar o tempo perdido.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
    const pararDeAvisar = lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
    return ()=>{
        pararDeAvisar();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(avancarQuadro);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(500, 33);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/presetsMovimento.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Regra: toda animação de interface com o Motion usa estes valores (PADRAO_MOVIMENTO_PULSE, item 3).
// Regra: molas pela duração visual, para garantir o limite de 0,5 s.
// rapida: toque e ícones; padrao: quase tudo; suave: diálogos, painéis e cartões que viram.
__turbopack_context__.s([
    "cascata",
    ()=>cascata,
    "guia",
    ()=>guia,
    "pulso",
    ()=>pulso,
    "saida",
    ()=>saida,
    "spring",
    ()=>spring,
    "tremor",
    ()=>tremor
]);
const spring = {
    rapida: {
        type: "spring",
        visualDuration: 0.18,
        bounce: 0.15
    },
    padrao: {
        type: "spring",
        visualDuration: 0.3,
        bounce: 0.12
    },
    suave: {
        type: "spring",
        visualDuration: 0.42,
        bounce: 0.06
    }
};
const saida = {
    type: "spring",
    visualDuration: 0.16,
    bounce: 0
}; // Regra: saídas mais rápidas que as entradas.
const cascata = {
    staggerChildren: 0.045,
    delayChildren: 0.03
};
const pulso = {
    scale: [
        1,
        1.035,
        1,
        1.02,
        1
    ],
    transition: {
        duration: 0.42,
        times: [
            0,
            0.2,
            0.45,
            0.7,
            1
        ],
        ease: "easeOut"
    }
};
const guia = (direcao = 1)=>({
        initial: {
            opacity: 0,
            x: 14 * direcao
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: -8 * direcao,
            transition: saida
        }
    });
const tremor = {
    x: [
        0,
        -4,
        4,
        -3,
        3,
        0
    ],
    transition: {
        duration: 0.3
    }
}; // Armadilha: com vários quadros-chave o Motion não usa spring; por isso pulso e
 // tremor têm duração fixa e curta (única exceção ao "spring sempre").
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0mpwcu63e-f79._.js.map