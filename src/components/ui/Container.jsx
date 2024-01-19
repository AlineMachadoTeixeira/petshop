import styled from "styled-components";

export default function Container({ children }) {
  /* Antes era <div> mudamos por causa do css */
  return <StyledContainer> {children} </StyledContainer>;
}
const StyledContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  box-shadow: var(--sombra-box);
  border-radius: var(--borda-arredondada);
  padding: 1rem;
`;
