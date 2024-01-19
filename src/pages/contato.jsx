import Container from "@/components/ui/Container";
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

        <Container>
          <form action="" method="post">
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="mensagem">E-mail:</label>
              <input type="email" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="email">
                Mensagem: <br />
              </label>
              <textarea
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>

            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }

  // Início Formulário

  form > div {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    & label {
      font-weight: bold;
      width: 30%;
      display: flex;
      align-items: center;
    }

    & input,
    & textarea {
      width: 70%;
      border: none;
      box-shadow: var(--sombra-box);
      padding: 0.5rem;
    }

    & button {
      background-color: var(--cor-logo);
      color: var(--cor-primaria);
      padding: 1rem;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: var(--cor-primaria-fundo-hover);
      }
    }
  }

  // Fim Formulário
`;
