import Link from "next/link";
import styled from "styled-components"; // puxou do const StyledNav linha 15

import { usePathname } from "next/navigation"; //para fazer o link ativo  na const linkAtivo

export default function Menu() {
  const linkAtivo = usePathname();
  return (
    //Antes era <nav> mudamos por causa do css
    <StyledNav>
      <Link className={linkAtivo === "/" ? "ativo" : ""} href="/">
        Blog
      </Link>
      <Link
        className={linkAtivo === "/produtos" ? "ativo" : ""}
        href="/produtos"
      >
        Produto
      </Link>
      <Link className={linkAtivo === "/sobre" ? "ativo" : ""} href="/sobre">
        Sobre
      </Link>
      <Link className={linkAtivo === "/contato" ? "ativo" : ""} href="/contato">
        Contato
      </Link>
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

    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }

    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  a.ativo {
    background-color: var(--cor-logo);
  }
`;
