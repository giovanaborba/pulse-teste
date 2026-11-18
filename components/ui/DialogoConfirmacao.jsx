"use client";

import { useEffect, useId, useRef } from "react";
import Botao from "@/components/ui/Botao";
import ErroCampo from "@/components/ui/ErroCampo";
import { useEsperaLonga } from "@/hooks/useEsperaLonga";

// Regra: foco inicial na opção segura e de volta ao botão que abriu. Sem "Parar" no
// "Excluindo…": o servidor pode excluir mesmo se a espera for interrompida.
export default function DialogoConfirmacao({
  aberto,
  titulo,
  texto,
  textoConfirmar,
  textoCancelar,
  aoConfirmar,
  aoCancelar,
  processando = false,
  textoProcessando,
  erro,
}) {
  const refDialogo = useRef(null);
  const refCancelar = useRef(null);
  const refOrigem = useRef(null);
  const idTitulo = useId();
  const idTexto = useId();
  const demorando = useEsperaLonga(processando);

  useEffect(() => {
    const dialogo = refDialogo.current;
    if (!dialogo) return;

    if (aberto && !dialogo.open) {
      refOrigem.current = document.activeElement;
      dialogo.showModal();
      refCancelar.current?.focus();
    } else if (!aberto && dialogo.open) {
      dialogo.close();
      const origem = refOrigem.current;
      if (origem?.isConnected) origem.focus();
    }
  }, [aberto]);

  // Esc: o React controla a abertura, então impede o fechamento automático
  // e avisa quem usa o diálogo.
  function aoPedirParaFechar(evento) {
    evento.preventDefault();
    if (!processando) aoCancelar();
  }

  // Garantia: se o navegador fechar o diálogo por conta própria, o estado
  // da tela acompanha.
  function aoFechar() {
    if (aberto) aoCancelar();
  }

  function aoTocarConfirmar() {
    if (!processando) aoConfirmar();
  }

  function aoTocarCancelar() {
    if (!processando) aoCancelar();
  }

  return (
    <dialog
      ref={refDialogo}
      aria-labelledby={idTitulo}
      aria-describedby={idTexto}
      onCancel={aoPedirParaFechar}
      onClose={aoFechar}
      className="m-auto max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-barra border border-borda bg-superficie p-6 text-texto shadow-barra"
    >
      <h2 id={idTitulo} className="text-h2-compacto">
        {titulo}
      </h2>
      <p id={idTexto} className="mt-4">
        {texto}
      </p>

      {erro && (
        <ErroCampo papel="alert" className="mt-4">
          {erro}
        </ErroCampo>
      )}

      <p role="status" className="sr-only">
        {processando && textoProcessando
          ? demorando
            ? "Está demorando mais que o normal. Aguarde mais um pouco."
            : textoProcessando.replace("…", "")
          : ""}
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Botao
          variante="perigo-preenchido"
          aria-disabled={processando || undefined}
          onClick={aoTocarConfirmar}
        >
          {processando && textoProcessando ? textoProcessando : textoConfirmar}
        </Botao>
        <Botao ref={refCancelar} variante="secundario" onClick={aoTocarCancelar}>
          {textoCancelar}
        </Botao>
      </div>
    </dialog>
  );
}
