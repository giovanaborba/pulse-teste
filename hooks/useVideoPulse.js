import { useEffect, useRef, useState } from "react";
import { useEfeitos } from "@/hooks/useEfeitos";

// Regra: começam mudos; o som só liga pelo botão, com legendas (WCAG 1.4.2 e 1.2.2).
// Ao sair da página, cada vídeo perde o src, o que libera o decodificador (19.1).

const LIMIAR_VISIVEL = 0.25;
const TOLERANCIA_GEMEOS = 0.15; // s

function mostrarLegendas(video, mostrar) {
  for (const faixa of video.textTracks) faixa.mode = mostrar ? "showing" : "disabled";
}

export function useVideoPulse({ quantidade = 1, ativo = true, chave = "" } = {}) {
  const { efeitosLigados } = useEfeitos();
  const refContainer = useRef(null);
  const refVideos = useRef([]);
  const refEfeitosAntes = useRef(efeitosLigados);
  const [visivel, setVisivel] = useState(false);
  const [pausadoPelaPessoa, setPausadoPelaPessoa] = useState(false);
  const [pedidoUmaVez, setPedidoUmaVez] = useState(false);
  const [somLigado, setSomLigado] = useState(false);
  const [falhou, setFalhou] = useState(false);

  // Ajuste durante a renderização (padrão do React): trocar os efeitos ou o arquivo
  // desfaz o "tocar uma vez"; trocar o arquivo também desfaz a falha.
  const [referencia, setReferencia] = useState({ efeitosLigados, chave });
  if (referencia.efeitosLigados !== efeitosLigados || referencia.chave !== chave) {
    setReferencia({ efeitosLigados, chave });
    setPedidoUmaVez(false);
    if (referencia.chave !== chave) setFalhou(false);
  }

  const tocando = !falhou && visivel && ativo && (efeitosLigados ? !pausadoPelaPessoa : pedidoUmaVez);

  // Uma função de ref por vídeo, criada uma vez só (o React 19 chama a
  // função devolvida quando o vídeo sai da página).
  const [registradores] = useState(() =>
    Array.from({ length: quantidade }, (_, indice) => (video) => {
      if (!video) return undefined;
      // No modo de desenvolvimento, o React liga, desliga e liga de novo
      // a ref; se o arquivo foi tirado no "desliga", ele volta aqui.
      if (!video.getAttribute("src") && video.dataset.src) {
        video.setAttribute("src", video.dataset.src);
      }
      refVideos.current[indice] = video;
      // O arquivo pode ter falhado antes de o React assumir a página
      // (hidratação): aí o evento "error" já passou, e só sobra video.error.
      if (video.error) queueMicrotask(() => setFalhou(true));
      return () => {
        video.pause();
        video.removeAttribute("src");
        video.load();
        refVideos.current[indice] = null;
      };
    }),
  );

  useEffect(() => {
    const container = refContainer.current;
    if (!container) return;
    const observador = new IntersectionObserver(
      ([registro]) => setVisivel(registro.isIntersecting),
      { threshold: LIMIAR_VISIVEL },
    );
    observador.observe(container);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    const videos = refVideos.current.filter(Boolean);
    if (!videos.length) return;
    const [primeiro, ...outros] = videos;
    for (const video of videos) {
      video.loop = efeitosLigados;
      video.muted = !somLigado;
    }
    if (tocando) {
      for (const video of outros) video.currentTime = primeiro.currentTime;
      // play() devolve uma promessa que pode ser recusada (ex.: o arquivo
      // ainda não existe); não é um erro da página.
      videos.forEach((video) => video.play().catch(() => {}));
    } else {
      videos.forEach((video) => video.pause());
    }
  }, [tocando, efeitosLigados, somLigado, chave]);

  // load() recarrega o vídeo e mostra o poster de novo.
  useEffect(() => {
    if (refEfeitosAntes.current && !efeitosLigados) {
      for (const video of refVideos.current) {
        if (video && video.currentTime > 0) video.load();
      }
    }
    refEfeitosAntes.current = efeitosLigados;
  }, [efeitosLigados]);

  useEffect(() => {
    for (const video of refVideos.current) {
      if (!video) continue;
      mostrarLegendas(video, somLigado);
    }
  }, [somLigado, chave]);

  useEffect(() => {
    const [primeiro, ...outros] = refVideos.current;
    if (!primeiro || !outros.length) return;
    function sincronizar() {
      for (const video of outros) {
        if (video && Math.abs(video.currentTime - primeiro.currentTime) > TOLERANCIA_GEMEOS) {
          video.currentTime = primeiro.currentTime;
        }
      }
    }
    primeiro.addEventListener("timeupdate", sincronizar);
    primeiro.addEventListener("seeked", sincronizar);
    return () => {
      primeiro.removeEventListener("timeupdate", sincronizar);
      primeiro.removeEventListener("seeked", sincronizar);
    };
  }, [chave]);

  function alternarPausa() {
    if (efeitosLigados) {
      setPausadoPelaPessoa(tocando);
    } else {
      setPedidoUmaVez(!tocando);
    }
  }

  function alternarSom() {
    setSomLigado((ligado) => !ligado);
  }

  function propsVideo(indice) {
    return {
      ref: registradores[indice],
      onError: () => setFalhou(true),
      onEnded: indice === 0 ? () => setPedidoUmaVez(false) : undefined,
    };
  }

  return { refContainer, propsVideo, tocando, somLigado, falhou, alternarPausa, alternarSom };
}
