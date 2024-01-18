import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta
          name="description"
          contente="Au au au! Dúvidas ou sugestões entre em contato conosco"
        />
        <meta name="Keywords" content="petshop, contato" />
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledContato>
        <h2>Fale Conosco</h2>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }
`;
