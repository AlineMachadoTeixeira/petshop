import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import styled from "styled-components"; // puxou do const StyledHeader linha 24

export default function Cabecalho() {
  return (
    //Antes era <header> mudamos por causa do css
    <StyledHeader>
      <div className="limitador">
        <h1>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={48}
              height={48}
              alt="Patinha dentro de um coração"
            />
            PetShop
          </Link>
        </h1>
        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);

  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem 1.2rem;
    border-radius: var(--borda-arredondada);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 1rem;
  }

  h1 a:hover,
  h1 a:focus {
    color: var(--cor-secundaria-hover);
  }

  /* Mini exercício:
  Crie aqui uma media query para a partir de 700px e faça as seguintes mudanças:
  
  - Na div do cabeçalho, exibir o conteúdo lado a lado (lembrando que ali você tem o flex já sendo usado)	
  - Tamanho da fonte do PetShop aumentar para 2rem */

  @media screen and (min-width: 700px) {
    h1 a {
      font-size: 2rem;
    }

    div {
      flex-direction: row;
    }
  }
`;
