import Head from "next/head";
import styled from "styled-components";

import ListaPosts from "@/components/ListaPosts";

export default function Home() {
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
        <ListaPosts posts={[]} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
