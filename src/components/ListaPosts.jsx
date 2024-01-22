import Link from "next/link";
import styled from "styled-components";

/*  ListaPosts({ posts }) esse posts é um nome que escolhemos podemos colocar array / lista e etc  */
export default function ListaPosts({ posts }) {
  return (
    <StyledListaPosts>
      {/* Antes o posts.map era arrayPosts.map  e estava na index e passamos para cá por causa do desafio*/}
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <Link href="">
              <h3> {post.titulo} </h3>
              <p> {post.subtitulo} </p>
            </Link>
          </article>
        );
      })}
    </StyledListaPosts>
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
        color: var(--cor-logo);
      }
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 49%;
    }
  }
`;
