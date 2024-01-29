import styled from "styled-components";

export default function ListaCategorias({
  /* chamada do componentes e passagem props */
  categorias,
  categoriaAtivo,
  /* on  do onfiltrar  onlimparFiltro. Damos on quando é uma função ao clicar no caso aofiltrar aolimparFiltro*/
  onfiltrar,
  onlimparFiltro,
  filtroAtivo,
}) {
  return (
    <StyledCategorias>
      {categorias.map((categoria, indice) => {
        return (
          <button
            /*  className é para deixar o botão ativado com outra cor quando clicar. O "ativo" é o css  */
            className={categoria === categoriaAtivo ? "ativo" : ""}
            onClick={onfiltrar}
            /* key={indice} é para parar de dar erro no console do navegador */
            key={indice}
          >
            {categoria}
          </button>
        );
      })}

      {/* //Botão pata Limpeza do filtro de categoria  do botão de cima */}
      {filtroAtivo && (
        <button onClick={onlimparFiltro} className="limpar">
          Limpar filtro
        </button>
      )}
    </StyledCategorias>
  );
}
const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1rem 0;

  button {
    text-transform: capitalize;
    background-color: var(--cor-logo);
    color: var(--cor-primaria);
    padding: 0.5em;
    border: none;
    cursor: pointer;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    margin: 10px;

    &:hover {
      background-color: var(--cor-primaria-fundo-hover);
    }

    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
  }

  .limpar {
    background-color: #5e6976;
    &:hover {
      background-color: slategrey;
    }
    &::before {
      content: "🧹 ";
    }
  }
`;
