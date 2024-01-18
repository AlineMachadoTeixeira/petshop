import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta
          name="description"
          contente="Au au au! Melhor Produtos da região"
        />
        <meta name="Keywords" content="Ração, brinquedos, remedio" />
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledProduto>
        <h2>Conheça nossos Produtos</h2>
      </StyledProduto>
    </>
  );
}

const StyledProduto = styled.section`
  h2::before {
    content: "🎁";
  }
`;
