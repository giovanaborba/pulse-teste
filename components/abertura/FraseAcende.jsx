"use client";

import { useFraseAcende } from "@/hooks/useFraseAcende";

// O leitor de tela lê a frase inteira de uma vez (sr-only); as palavras separadas,
// que acendem uma a uma, ficam com aria-hidden.
const PALAVRAS = ["Atravessar", "a", "rua", "não", "deveria", "depender", "de"];
const DESTAQUE = "adivinhar.";

export default function FraseAcende() {
  const refFrase = useFraseAcende();

  return (
    <section aria-label="Frase de abertura" className="mt-20 py-12">
      <p className="frase-acende max-w-[20ch] text-[clamp(1.9rem,5.6vw,3.6rem)] leading-[1.18] font-bold tracking-[-0.01em]">
        <span className="sr-only">Atravessar a rua não deveria depender de adivinhar.</span>
        <span ref={refFrase} aria-hidden="true">
          {PALAVRAS.map((palavra, i) => (
            <span key={i}>
              <span data-palavra="">{palavra}</span>{" "}
            </span>
          ))}
          <span data-palavra="" data-destaque="">
            {DESTAQUE}
          </span>
        </span>
      </p>
    </section>
  );
}
