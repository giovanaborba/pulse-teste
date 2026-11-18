"use client";

import Link from "next/link";
import { useGuardaDeSaida } from "@/hooks/useGuardaDeSaida";

// Se quem usa passar o próprio onNavigate, ele precisa chamar aoNavegar.
export default function LinkInterno({ href, onNavigate, ...resto }) {
  const { aoNavegar } = useGuardaDeSaida();

  function aoNavegarPeloLink(evento) {
    if (onNavigate) {
      onNavigate(evento);
      return;
    }
    aoNavegar(evento, href);
  }

  return <Link href={href} onNavigate={aoNavegarPeloLink} {...resto} />;
}
