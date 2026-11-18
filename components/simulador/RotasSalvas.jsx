"use client";

import { useEffect, useState } from "react";
import * as Servicos from "@/services/simuladorService";

// Lista as rotas salvas: usar, editar e excluir (a rota de exemplo só pode ser usada).
export default function RotasSalvas({ voltar, nav }) {
  const [rotas, definirRotas] = useState([]);
  const [carregando, definirCarregando] = useState(true);
  const [erro, definirErro] = useState("");
  const [editando, definirEditando] = useState(null);
  const [salvando, definirSalvando] = useState(false);

  useEffect(() => {
    let ativo = true;
    Servicos.listarRotas()
      .then((lista) => {
        if (ativo) definirRotas(lista);
      })
      .catch((falha) => {
        if (ativo) definirErro(falha.message || "Não foi possível consultar as rotas salvas.");
      })
      .finally(() => {
        if (ativo) definirCarregando(false);
      });
    return () => {
      ativo = false;
    };
  }, []);

  const salvarEdicao = async (evento) => {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    definirSalvando(true);
    definirErro("");
    try {
      const [inicio, destino] = await Promise.all([
        Servicos.buscarDestino(String(dados.get("inicio"))),
        Servicos.buscarDestino(String(dados.get("destino"))),
      ]);
      const atualizada = await Servicos.atualizarRota(editando.id, {
        nome: String(dados.get("nome")).trim(),
        inicio: { texto: inicio.nome, lat: inicio.lat, lon: inicio.lon },
        destino: { texto: destino.nome, lat: destino.lat, lon: destino.lon },
      });
      definirRotas((lista) => lista.map((item) => (item.id === atualizada.id ? atualizada : item)));
      definirEditando(null);
    } catch (falha) {
      definirErro(falha.message || "Não foi possível atualizar a rota.");
    } finally {
      definirSalvando(false);
    }
  };

  const excluir = async (rota) => {
    if (rota.exemplo) return;
    try {
      await Servicos.apagarRota(rota.id);
      definirRotas((lista) => lista.filter((item) => item.id !== rota.id));
    } catch (falha) {
      definirErro(falha.message || "Não foi possível excluir a rota.");
    }
  };

  return (
    <div className="tela-rotas">
      <header className="barra-tela">
        <button type="button" className="botao-voltar-inicio" onClick={voltar}>
          VOLTAR
        </button>
      </header>
      {erro && (
        <p className="erro-rotas" role="alert">
          {erro}
        </p>
      )}
      {carregando ? (
        <p role="status">Carregando rotas...</p>
      ) : (
        <section className="lista-rotas" aria-label="Rotas salvas">
          {rotas.map((rota) => (
            <article className="cartao-rota" key={rota.id}>
              {editando?.id === rota.id ? (
                <form onSubmit={salvarEdicao}>
                  <label>
                    Nome
                    <input name="nome" defaultValue={rota.nome} required maxLength="80" />
                  </label>
                  <label>
                    Início
                    <input name="inicio" defaultValue={rota.inicio.texto} required />
                  </label>
                  <label>
                    Destino
                    <input name="destino" defaultValue={rota.destino.texto} required />
                  </label>
                  <div className="acoes-rota">
                    <button type="submit" disabled={salvando}>
                      {salvando ? "SALVANDO..." : "SALVAR"}
                    </button>
                    <button type="button" onClick={() => definirEditando(null)}>
                      CANCELAR
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div>
                    <h2>
                      {rota.nome}
                      {rota.exemplo ? " · EXEMPLO" : ""}
                    </h2>
                    <p>Início: {rota.inicio.texto}</p>
                    <p>Destino: {rota.destino.texto}</p>
                  </div>
                  <div className="acoes-rota">
                    <button
                      type="button"
                      onClick={() => {
                        nav.iniciarRotaSalva(rota);
                        voltar();
                      }}
                    >
                      USAR
                    </button>
                    {!rota.exemplo && (
                      <>
                        <button type="button" onClick={() => definirEditando(rota)}>
                          EDITAR
                        </button>
                        <button type="button" onClick={() => excluir(rota)}>
                          EXCLUIR
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </article>
          ))}
          {!rotas.length && <p>Nenhuma rota salva.</p>}
        </section>
      )}
    </div>
  );
}
