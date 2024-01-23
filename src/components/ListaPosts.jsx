import Link from "next/link";
import styled from "styled-components";

/*  ListaPosts({ posts }) esse posts é um nome que escolhemos podemos colocar array / lista e etc  */
export default function ListaPosts({ posts }) {
  /* Se não houver posts (ou seja, posts está vazio/zerado), em vez de retornar artigos com o map, retorn uma mensagem provisória para usuário. */
  if (posts.length === 0)
    return <h3 style={{ textAlign: "center" }}>Ainda não há posts!</h3>;

  return (
    <StyledListaPosts>
      {/* Antes o posts.map era arrayPosts.map  e estava na index e passamos para cá por causa do desafio*/}
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
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
