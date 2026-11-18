import { ROTULOS_INDICADORES, rotuloTotal } from "@/lib/rotulos";

// Sem useState: os números são derivados da lista e acompanham cada mudança.
export function useResumoIndicadores(registros) {
  const total = registros.length;
  const semAjuda = registros.filter((registro) => registro.precisouDeAjuda === false).length;
  const semSePerder = registros.filter((registro) => registro.chegouSemSePerder === true).length;
  const travessiasSeguras = registros.filter((registro) => registro.travessias === "seguro").length;

  return [
    { chave: "total", numero: total, rotulo: rotuloTotal(total) },
    { chave: "semAjuda", numero: semAjuda, rotulo: ROTULOS_INDICADORES.semAjuda },
    { chave: "semSePerder", numero: semSePerder, rotulo: ROTULOS_INDICADORES.semSePerder },
    {
      chave: "travessiasSeguras",
      numero: travessiasSeguras,
      rotulo: ROTULOS_INDICADORES.travessiasSeguras,
    },
  ];
}
