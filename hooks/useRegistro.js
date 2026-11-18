import { useEffect, useRef, useState } from "react";
import { foiCancelado, obter } from "@/services/registrosService";

export function useRegistro(id) {
  const [estado, setEstado] = useState({
    registro: null,
    carregando: true,
    erro: null,
    naoEncontrado: false,
  });
  const [tentativa, setTentativa] = useState(0);
  const refControle = useRef(null);

  useEffect(() => {
    const controle = new AbortController();
    refControle.current = controle;

    obter(id, { sinal: controle.signal })
      .then((registro) => {
        setEstado({
          registro,
          carregando: false,
          erro: null,
          naoEncontrado: registro === null,
        });
      })
      .catch((erroDaBusca) => {
        if (foiCancelado(erroDaBusca)) return;
        setEstado({ registro: null, carregando: false, erro: erroDaBusca, naoEncontrado: false });
      });

    return () => controle.abort();
  }, [id, tentativa]);

  function recarregar() {
    setEstado({ registro: null, carregando: true, erro: null, naoEncontrado: false });
    setTentativa((anterior) => anterior + 1);
  }

  // A busca cancelada não chega ao .catch (foiCancelado); por isso o erro
  // "interrompido" é definido aqui.
  function parar() {
    refControle.current?.abort();
    setEstado({ registro: null, carregando: false, erro: { codigo: "interrompido" }, naoEncontrado: false });
  }

  return { ...estado, recarregar, parar };
}
