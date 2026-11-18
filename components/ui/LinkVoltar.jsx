"use client";

import Link from "next/link";
import EspacoIcone from "@/components/ui/EspacoIcone";
import { useGuardaDeSaida } from "@/hooks/useGuardaDeSaida";

export default function LinkVoltar({ href, children }) {
  const { aoNavegar } = useGuardaDeSaida();

  function aoNavegarParaDestino(evento) {
    aoNavegar(evento, href);
  }

  return (
    <Link
      href={href}
      onNavigate={aoNavegarParaDestino}
      className="inline-flex min-h-12 items-center gap-2"
    >
      <EspacoIcone nome="ArrowLeft" />
      <span>{children}</span>
    </Link>
  );
}
