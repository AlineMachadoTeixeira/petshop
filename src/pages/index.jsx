import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

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
        <StyledListaPosts>
          <article>
            <Link href="">
              <h3>Título do post...</h3>
              <p>Subtítulo do post</p>
            </Link>
          </article>

          <article>
            <Link href="">
              <h3>Título do post...</h3>
              <p>Subtítulo do post</p>
            </Link>
          </article>
        </StyledListaPosts>
      </StyledHome>
    </>
  );
}

const StyledListaPosts = styled.div``;

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
