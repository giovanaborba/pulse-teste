"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function pontoNaRota(coords, progresso) {
  const distancias = [0];
  const rad = Math.PI / 180;
  for (let i = 1; i < coords.length; i++) {
    const a = coords[i - 1];
    const b = coords[i];
    const dLat = (b[1] - a[1]) * rad;
    const dLon = (b[0] - a[0]) * rad;
    const h =
      Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * rad) * Math.cos(b[1] * rad) * Math.sin(dLon / 2) ** 2;
    distancias.push(distancias[i - 1] + 6371000 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  }
  const alvo = (distancias.at(-1) || 0) * Math.max(0, Math.min(1, progresso));
  let i = 1;
  while (i < distancias.length - 1 && distancias[i] < alvo) i++;
  const a = coords[i - 1];
  const b = coords[i];
  const trecho = distancias[i] - distancias[i - 1] || 1;
  const fracao = (alvo - distancias[i - 1]) / trecho;
  return [a[0] + (b[0] - a[0]) * fracao, a[1] + (b[1] - a[1]) * fracao];
}

export default function MapaRota({ rota, origem, destino, progresso, passos }) {
  const elemento = useRef(null);
  const mapaRef = useRef(null);
  const camadasRef = useRef([]);
  const jogadorRef = useRef(null);

  useEffect(() => {
    if (!elemento.current || mapaRef.current) return undefined;
    const mapa = L.map(elemento.current, { zoomControl: true, scrollWheelZoom: false }).setView(
      [-23.5614, -46.6562],
      15,
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(mapa);
    mapaRef.current = mapa;

    const observador = new ResizeObserver(() => mapa.invalidateSize());
    observador.observe(elemento.current);

    return () => {
      observador.disconnect();
      mapa.remove();
      mapaRef.current = null;
    };
  }, []);

  useEffect(() => {
    const mapa = mapaRef.current;
    if (!mapa || !rota || !origem || !destino) return;
    camadasRef.current.forEach((camada) => mapa.removeLayer(camada));
    camadasRef.current = [];
    const coords = rota.geometry.coordinates;
    const linha = L.polyline(
      coords.map(([lon, lat]) => [lat, lon]),
      { color: "#2878ff", weight: 6, opacity: 0.95 },
    ).addTo(mapa);

    const inicio = pontoNaRota(coords, 0);
    const marcador = L.circleMarker([inicio[1], inicio[0]], {
      radius: 8,
      color: "#fff",
      weight: 3,
      fillColor: "#2878ff",
      fillOpacity: 1,
    }).addTo(mapa);
    const fim = L.circleMarker([destino.lat, destino.lon], {
      radius: 8,
      color: "#fff",
      weight: 3,
      fillColor: "#f04452",
      fillOpacity: 1,
    })
      .addTo(mapa)
      .bindTooltip(destino.nome);
    const travessias = passos
      .filter((passo) => passo.tipo === "semaforo")
      .map((passo) => {
        const ponto = pontoNaRota(coords, passo.progresso);
        return L.marker([ponto[1], ponto[0]], {
          icon: L.divIcon({
            className: "marcador-travessia",
            html: "<i></i>",
            iconSize: [22, 22],
            iconAnchor: [11, 11],
          }),
        }).addTo(mapa);
      });
    jogadorRef.current = marcador;
    camadasRef.current = [linha, marcador, fim, ...travessias];
    mapa.fitBounds(linha.getBounds().pad(0.15));
    window.setTimeout(() => mapa.invalidateSize(), 50);
  }, [rota, origem, destino, passos]);

  useEffect(() => {
    if (!jogadorRef.current || !rota?.geometry?.coordinates) return;
    const [lon, lat] = pontoNaRota(rota.geometry.coordinates, progresso);
    jogadorRef.current.setLatLng([lat, lon]);
  }, [rota, progresso]);

  return <div ref={elemento} className="mapa-rota" role="region" aria-label="Mapa com a rota" />;
}
