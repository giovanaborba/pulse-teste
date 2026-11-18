import { useSyncExternalStore } from "react";
import { hojeISO } from "@/lib/datas";

// O servidor pode estar em outro fuso ou dia: lá o valor é "", e no navegador a
// data real. Assim o max={hoje} nunca fica com o dia errado.
function assinar() {
  // A data não "avisa" quando muda; nada para assinar.
  return () => {};
}

export function useHoje() {
  return useSyncExternalStore(assinar, hojeISO, () => "");
}
