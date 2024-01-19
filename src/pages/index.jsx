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

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #4682b4;
      }
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
