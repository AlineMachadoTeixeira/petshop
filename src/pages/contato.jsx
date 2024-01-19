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
  form {
    /* max-width: 70%; */
    width: 70%;
    margin: 0 auto;
  }

  div {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    box-shadow: var(--sombra-box);
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    background-color: var(--cor-logo);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--cor-primaria-fundo-hover);
  }
  // Fim Formulário
`;
