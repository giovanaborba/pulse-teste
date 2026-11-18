"use client";

import { useEffect, useSyncExternalStore } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { registrarPluginsGsap, sincronizarLenisComGsap } from "@/lib/movimento";
import { spring } from "@/lib/presetsMovimento";
import {
  DESCONHECIDO,
  LIGADOS,
  assinarEfeitos,
  definirEfeitos,
  lerEfeitos,
  lerEfeitosNoServidor,
  lerEscolhaSalva,
} from "@/lib/efeitos";
import { ContextoEfeitos } from "@/hooks/useEfeitos";
import { ContextoRolagemSuave } from "@/hooks/useRolagemSuave";
import { usePrefereMovimentoReduzido } from "@/hooks/usePrefereMovimentoReduzido";

// Lenis criado e destruído num efeito, e não com stop(): stop() põe overflow: clip no
// <html>, e a página deixa de rolar. Em volta das páginas, remontaria o site.

registrarPluginsGsap();

// Regra: lerp 0,09, um pouco mais de inércia que o padrão do Lenis, 0,1 (19.6).
const OPCOES_LENIS = {
  autoRaf: false,
  anchors: true,
  smoothWheel: true,
  lerp: 0.09,
};

// O Lenis fica fora do React e é lido por useSyncExternalStore: mudar o estado
// dentro do efeito faria a tela renderizar duas vezes.
let lenisAtual = null;
const ouvintesDoLenis = new Set();

function definirLenis(instancia) {
  lenisAtual = instancia;
  for (const aoMudar of ouvintesDoLenis) aoMudar();
}

function assinarLenis(aoMudar) {
  ouvintesDoLenis.add(aoMudar);
  return () => ouvintesDoLenis.delete(aoMudar);
}

const lerLenis = () => lenisAtual;
const lerLenisNoServidor = () => null;

export default function ProvedorMovimento({ children }) {
  const valor = useSyncExternalStore(assinarEfeitos, lerEfeitos, lerEfeitosNoServidor);
  const efeitosConhecidos = valor !== DESCONHECIDO;
  const efeitosLigados = valor === LIGADOS;
  const aparelhoPedeReduzir = usePrefereMovimentoReduzido();
  const lenis = useSyncExternalStore(assinarLenis, lerLenis, lerLenisNoServidor);

  // O aparelho só manda enquanto a pessoa não escolheu no interruptor.
  useEffect(() => {
    if (!efeitosConhecidos || lerEscolhaSalva() !== null) return;
    definirEfeitos(!aparelhoPedeReduzir, { salvar: false });
  }, [aparelhoPedeReduzir, efeitosConhecidos]);

  useEffect(() => {
    if (!efeitosLigados) return;
    const instancia = new Lenis(OPCOES_LENIS);
    const desfazerSincronia = sincronizarLenisComGsap(instancia);
    definirLenis(instancia);
    return () => {
      desfazerSincronia();
      instancia.destroy();
      definirLenis(null);
    };
  }, [efeitosLigados]);

  function alternarEfeitos() {
    definirEfeitos(lerEfeitos() !== LIGADOS, { salvar: true });
  }

  return (
    <ContextoEfeitos.Provider value={{ efeitosLigados, efeitosConhecidos, alternarEfeitos }}>
      <ContextoRolagemSuave.Provider value={lenis}>
        <MotionConfig transition={spring.padrao} reducedMotion={efeitosLigados ? "never" : "always"}>
          {children}
        </MotionConfig>
      </ContextoRolagemSuave.Provider>
    </ContextoEfeitos.Provider>
  );
}
