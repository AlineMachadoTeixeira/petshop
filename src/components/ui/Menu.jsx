import Link from "next/link";
import styled from "styled-components"; // puxou do const StyledNav linha 15

export default function Menu() {
  return (
    //Antes era <nav> mudamos por causa do css
    <StyledNav>
      <Link href="/">Blog</Link>
      <Link href="/produtos">Produto</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;
  }
`;
