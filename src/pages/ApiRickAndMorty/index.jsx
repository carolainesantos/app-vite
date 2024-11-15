import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import Card from "../../components/Card";
import { redirect } from "react-router-dom";

export default function ApiRickAndMorty() {
  const [conteudo, setConteudo] = useState(<>Carregando</>);

  async function carregarTodosOsPersonagens() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://rickandmortyapi.com/api/character",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
    console.log({ ...data });

    return { ...data };
  }

  async function listarPersonagens() {
    // const results = api.results
    // const api = carregarTodosOsPersonagens();
    const { info, results } = await carregarTodosOsPersonagens();

    return results.map((personagem) => (
      <Card key={personagem.id} data={personagem} />
    ));
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await listarPersonagens());
    }

    getConteudo();
  }, []);

  return <div className="lista-principal">{conteudo}</div>;
}
