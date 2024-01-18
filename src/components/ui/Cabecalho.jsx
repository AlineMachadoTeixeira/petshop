import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import styled from "styled-components"; // puxou do const StyledHeader linha 24

export default function Cabecalho() {
  return (
    //Antes era <header> mudamos por causa do css
    <StyledHeader>
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
`;
