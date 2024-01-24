import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);

  try {
    const resposta = await fetch(`${serverApi}/posts/${id}`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim:" + error.message);
    /* Esse return  notFound: true  é para retorna o erro 404 da pagina404.jsx. Precisa fazer, pois os dados são dinamicos   */
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const tituloPagina = `${post.titulo} - PetShop`;
  return (
    <>
      <Head>
        <title> {tituloPagina} - PetShop</title>
        <meta name="description" content={post.descricao} />
      </Head>

      <StyledPost>
        <h2>{post.titulo}</h2>
        <Container>
          <h3>{post.categoria}</h3>
          <p>{post.descricao}</p>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
  h2::before {
    content: "📑 ";
  }
`;