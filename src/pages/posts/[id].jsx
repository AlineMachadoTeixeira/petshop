import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  /* Utilizamos a prop params do getStaticProps para poder ter acesso aos parâmetros dinâmicos da rota configurada nos links da lista de posts. Usamos a desestruturação parar obter de forma direta o parâmetro chamado "id" */
  const { id } = params;
  console.log(id);

  try {
    // TIREI ESSE PELA FALTA 30/01const resposta = await fetch(`${serverApi}/posts/${id}`);

    const resposta = await fetch(`${serverApi}/posts/${id}.json`);

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

/* getStaticPaths é obrigatória quando se trata de tranalhar com páginas/rotas dinâmicas, ou seja, que dependem de parâmetros para serem construídas. */
export async function getStaticPaths() {
  return {
    /* paths fica vazio pois todos os caminhos devem ser gerados sob demanda, ou seja, no momento em que a página for aberta */
    paths: [],

    /* fallback fica como "blocking" para garantir que a página somente será renderizada após a conclusão da geração dos caminhos e dos dados estáticos */
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
