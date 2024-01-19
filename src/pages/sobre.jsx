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

      <h3>Missão</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea
        rerum unde numquam consequatur reiciendis architecto sit impedit? Nobis
        quo animi culpa odit aperiam nemo cum placeat in a, deserunt officiis
        quam .
      </p>

      <h3>Visão</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea
        rerum unde numquam consequatur reiciendis architecto sit impedit? Nobis
        quo animi culpa odit aperiam nemo cum placeat in a, deserunt officiis
        quam repellendus soluta, consequatur expedita ipsam nisi illo modi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        expedita libero labore neque dolor laborum perferendis dolorem quidem
        sapiente provident.
      </p>

      <h3>Valores</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea
        rerum unde numquam consequatur reiciendis architecto sit impedit? Nobis
        quo animi culpa odit aperiam nemo cum placeat in a, deserunt officiis
        quam repellendus soluta, consequatur expedita ipsam nisi illo modi.
      </p>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
