import { useEffect, useRef, useState } from "react";
import {
  atualizar as atualizarNoServico,
  criar as criarNoServico,
  excluir as excluirNoServico,
  foiCancelado,
  listar,
} from "@/services/registrosService";
import { ordenarDoMaisRecente } from "@/lib/datas";

export function useRegistros({ carregarAoIniciar = true } = {}) {
  const [registros, setRegistros] = useState([]);
  const [carregando, setCarregando] = useState(carregarAoIniciar);
  const [erro, setErro] = useState(null);
  // Cada novo número faz o useEffect buscar a lista outra vez.
  const [tentativa, setTentativa] = useState(0);
  const refControle = useRef(null);

  useEffect(() => {
    if (!carregarAoIniciar) return;

    const controle = new AbortController();
    refControle.current = controle;

    listar({ sinal: controle.signal })
      .then((lista) => {
        setRegistros(ordenarDoMaisRecente(lista));
        setErro(null);
        setCarregando(false);
      })
      .catch((erroDaBusca) => {
        if (foiCancelado(erroDaBusca)) return;
        setErro(erroDaBusca);
        setCarregando(false);
      });

    return () => controle.abort();
  }, [carregarAoIniciar, tentativa]);

  function recarregar() {
    setCarregando(true);
    setErro(null);
    setTentativa((anterior) => anterior + 1);
  }

  // A busca cancelada não chega ao .catch (foiCancelado); por isso o erro
  // "interrompido" é definido aqui.
  function parar() {
    refControle.current?.abort();
    setErro({ codigo: "interrompido" });
    setCarregando(false);
  }

  async function criar(dados) {
    const novo = await criarNoServico(dados);
    setRegistros((lista) => ordenarDoMaisRecente([...lista, novo]));
    return novo;
  }

  async function atualizar(id, dados) {
    const atualizado = await atualizarNoServico(id, dados);
    setRegistros((lista) =>
      ordenarDoMaisRecente(lista.map((registro) => (registro.id === id ? atualizado : registro))),
    );
    return atualizado;
  }

  async function excluir(id) {
    await excluirNoServico(id);
    setRegistros((lista) => lista.filter((registro) => registro.id !== id));
  }

  // "Desfazer" recria o registro com um POST; a API gera um id novo (7.5).
  async function restaurar(registroExcluido) {
    return criar(registroExcluido);
  }

  return { registros, carregando, erro, recarregar, parar, criar, atualizar, excluir, restaurar };
}
