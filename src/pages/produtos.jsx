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

        <article>
          <h3>Ração</h3>
          <p>
            Você sabe qual é a melhor ração para cachorro? Mais do que isso,
            você sabe como as características individuais do seu pet influenciam
            nessa decisão? Nesta página, disponibilizamos não apenas uma grande
            quantidade de opções deste produto, mas também nos dedicamos a
            explicar um pouco sobre o mundo das rações.
          </p>
        </article>

        <article>
          <h3>Tosa</h3>
          <p>
            Cães que têm pelos longos necessitam fazer tosas regularmente, mesmo
            que seja apenas para cortar as pontas, pois, isso ajuda a manter o
            pelo bonito e com menos chances de enredar. Mas, independente do
            tamanho do pelo, todos os cães devem fazer a chamada tosa higiênica,
            pois é ela que ajuda a manter seu animal mais limpo e reduz o risco
            de doenças.
          </p>
        </article>

        <article>
          <h3>Remédio</h3>
          <p>
            Oferecer remédio para cachorro pode significar a diferença entre
            recuperar a saúde do seu melhor amigo peludo ou colocá-lo em uma
            situação ainda mais arriscada do que aquela em que ele se encontra.
            Por isso, é fundamental só dar medicamentos para cachorro de acordo
            com a orientação do médico veterinário.
          </p>
        </article>
      </StyledProduto>
    </>
  );
}

const StyledProduto = styled.section`
  h2::before {
    content: "🎁";
  }
`;
