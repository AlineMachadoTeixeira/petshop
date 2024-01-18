import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          contente="Au au au! Saiba um pouco sobre nós"
        />
        <meta name="Keywords" content="petshop, missão,valores, visão" />
      </Head>
      {/* //Antes era <section> mudamos por causa do css */}
      <StyledSobre>
        <h2>Sobre nossos PetShop</h2>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
