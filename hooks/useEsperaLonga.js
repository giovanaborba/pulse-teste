import { useEffect, useState } from "react";

// Regra: acima de 10 s de espera, aviso e "Parar de carregar" (11.1).
export const LIMITE_ESPERA_LONGA = 10000;

export function useEsperaLonga(ativo) {
  const [passou, setPassou] = useState(false);

  useEffect(() => {
    if (!ativo) return;
    const espera = setTimeout(() => setPassou(true), LIMITE_ESPERA_LONGA);
    return () => {
      clearTimeout(espera);
      setPassou(false);
    };
  }, [ativo]);

  return ativo && passou;
}
