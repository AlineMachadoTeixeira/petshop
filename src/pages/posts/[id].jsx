import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Post() {
  return (
    <>
      <Head>
        <title> Titulo do post.... - PetShop</title>
        <meta name="description" content="Descrição do post..." />
      </Head>

      <StyledPost>
        <h2>Título do post ....</h2>
        <Container>
          <h3>Categoria do post...</h3>
          <p>Descrição do post...</p>
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
