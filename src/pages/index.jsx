import Head from "next/head";
import styled from "styled-components";

import ListaPosts from "@/components/ListaPosts";

import { useEffect, useState } from "react"; //importação da linha 8 useState() e useEffect linha 12;. Primeiro escreve useState

export default function Home() {
  //Passa a passo do react-fundamento na parte  produto
  const [listaDePosts, SetListaDePosts] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`http://10.20.46.34:2112/posts`);

        if (!resposta.ok) {
          throw new Error(
            `Erro requisição: ${resposta.status} - ${resposta.statusText}`
          );
        }

        const dados = await resposta.json();

        SetListaDePosts(dados);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta
          name="description"
          contente="Au au au! Melhor PetShop da região"
        />
        <meta
          name="Keywords"
          content="Ração, brinquedos, banho, coleira, Gato, Cachorro, petshop"
        />
        {/* meta name="Keywords" é tipo uma # para encontrar o site */}
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledHome>
        <h2>Pet Notícias</h2>
        {/* arrayPosts vem da pasta api / array-posts */}
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
