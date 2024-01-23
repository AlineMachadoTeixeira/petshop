import Head from "next/head";
import styled from "styled-components";

import ListaPosts from "@/components/ListaPosts";

import { useState } from "react"; //importação da linha 8 useState(). Primeiro escreve useState

/* EXECUTADA NO SERVIDOR/BACK-END */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`http://10.20.46.34:2112/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);
  }
}
//posts pegamos da return linha 20 o {posts}
export default function Home({ posts }) {
  //Passa a passo do react-fundamento na parte  produto
  const [listaDePosts, SetListaDePosts] = useState(posts);

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
