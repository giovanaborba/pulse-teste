(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/simulador/MapaRota.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapaRota
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// O Leaflet usa window ao ser carregado; por isso este arquivo só entra no navegador
// (TelaRota o carrega com next/dynamic e ssr: false).
function pontoNaRota(coords, progresso) {
    const distancias = [
        0
    ];
    const rad = Math.PI / 180;
    for(let i = 1; i < coords.length; i++){
        const a = coords[i - 1];
        const b = coords[i];
        const dLat = (b[1] - a[1]) * rad;
        const dLon = (b[0] - a[0]) * rad;
        const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * rad) * Math.cos(b[1] * rad) * Math.sin(dLon / 2) ** 2;
        distancias.push(distancias[i - 1] + 6371000 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
    }
    const alvo = (distancias.at(-1) || 0) * Math.max(0, Math.min(1, progresso));
    let i = 1;
    while(i < distancias.length - 1 && distancias[i] < alvo)i++;
    const a = coords[i - 1];
    const b = coords[i];
    const trecho = distancias[i] - distancias[i - 1] || 1;
    const fracao = (alvo - distancias[i - 1]) / trecho;
    return [
        a[0] + (b[0] - a[0]) * fracao,
        a[1] + (b[1] - a[1]) * fracao
    ];
}
function MapaRota(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "84533e4526459b419928731d3ed0fd25cfad0c1df3165b323873163fc69ddbf1") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84533e4526459b419928731d3ed0fd25cfad0c1df3165b323873163fc69ddbf1";
    }
    const { rota, origem, destino, progresso, passos } = t0;
    const elemento = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const camadasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t1);
    const jogadorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MapaRota[useEffect()]": ()=>{
                if (!elemento.current || mapaRef.current) {
                    return;
                }
                const mapa = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(elemento.current, {
                    zoomControl: true,
                    scrollWheelZoom: false
                }).setView([
                    -23.5614,
                    -46.6562
                ], 15);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: "\xA9 OpenStreetMap"
                }).addTo(mapa);
                mapaRef.current = mapa;
                const observador = new ResizeObserver(()=>mapa.invalidateSize());
                observador.observe(elemento.current);
                return ()=>{
                    observador.disconnect();
                    mapa.remove();
                    mapaRef.current = null;
                };
            }
        })["MapaRota[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] !== destino || $[5] !== origem || $[6] !== passos || $[7] !== rota) {
        t4 = ({
            "MapaRota[useEffect()]": ()=>{
                const mapa_0 = mapaRef.current;
                if (!mapa_0 || !rota || !origem || !destino) {
                    return;
                }
                camadasRef.current.forEach({
                    "MapaRota[useEffect() > camadasRef.current.forEach()]": (camada)=>mapa_0.removeLayer(camada)
                }["MapaRota[useEffect() > camadasRef.current.forEach()]"]);
                camadasRef.current = [];
                const coords = rota.geometry.coordinates;
                const linha = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polyline(coords.map(_MapaRotaUseEffectCoordsMap), {
                    color: "#2878ff",
                    weight: 6,
                    opacity: 0.95
                }).addTo(mapa_0);
                const inicio = pontoNaRota(coords, 0);
                const marcador = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker([
                    inicio[1],
                    inicio[0]
                ], {
                    radius: 8,
                    color: "#fff",
                    weight: 3,
                    fillColor: "#2878ff",
                    fillOpacity: 1
                }).addTo(mapa_0);
                const fim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circleMarker([
                    destino.lat,
                    destino.lon
                ], {
                    radius: 8,
                    color: "#fff",
                    weight: 3,
                    fillColor: "#f04452",
                    fillOpacity: 1
                }).addTo(mapa_0).bindTooltip(destino.nome);
                const travessias = passos.filter(_MapaRotaUseEffectPassosFilter).map({
                    "MapaRota[useEffect() > (anonymous)()]": (passo_0)=>{
                        const ponto = pontoNaRota(coords, passo_0.progresso);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                            ponto[1],
                            ponto[0]
                        ], {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                                className: "marcador-travessia",
                                html: "<i></i>",
                                iconSize: [
                                    22,
                                    22
                                ],
                                iconAnchor: [
                                    11,
                                    11
                                ]
                            })
                        }).addTo(mapa_0);
                    }
                }["MapaRota[useEffect() > (anonymous)()]"]);
                jogadorRef.current = marcador;
                camadasRef.current = [
                    linha,
                    marcador,
                    fim,
                    ...travessias
                ];
                mapa_0.fitBounds(linha.getBounds().pad(0.15));
                window.setTimeout({
                    "MapaRota[useEffect() > window.setTimeout()]": ()=>mapa_0.invalidateSize()
                }["MapaRota[useEffect() > window.setTimeout()]"], 50);
            }
        })["MapaRota[useEffect()]"];
        t5 = [
            rota,
            origem,
            destino,
            passos
        ];
        $[4] = destino;
        $[5] = origem;
        $[6] = passos;
        $[7] = rota;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[10] !== progresso || $[11] !== rota) {
        t6 = ({
            "MapaRota[useEffect()]": ()=>{
                if (!jogadorRef.current || !rota?.geometry?.coordinates) {
                    return;
                }
                const [lon_0, lat_0] = pontoNaRota(rota.geometry.coordinates, progresso);
                jogadorRef.current.setLatLng([
                    lat_0,
                    lon_0
                ]);
            }
        })["MapaRota[useEffect()]"];
        t7 = [
            rota,
            progresso
        ];
        $[10] = progresso;
        $[11] = rota;
        $[12] = t6;
        $[13] = t7;
    } else {
        t6 = $[12];
        t7 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: elemento,
            className: "mapa-rota",
            role: "region",
            "aria-label": "Mapa com a rota"
        }, void 0, false, {
            fileName: "[project]/components/simulador/MapaRota.jsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_s(MapaRota, "2ouoN8bYamXry08qX2GUJW5ttIs=");
_c = MapaRota;
function _MapaRotaUseEffectPassosFilter(passo) {
    return passo.tipo === "semaforo";
}
function _MapaRotaUseEffectCoordsMap(t0) {
    const [lon, lat] = t0;
    return [
        lat,
        lon
    ];
}
var _c;
__turbopack_context__.k.register(_c, "MapaRota");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulador/MapaRota.jsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/simulador/MapaRota.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_simulador_MapaRota_jsx_17k85xqaptvtu._.js.map