import styled from "styled-components";

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #2e353b;
  color: white;

  h1,
  a {
    padding: 0 2rem;
    color: white;
  }

  .sign-out,
  .sign-in {
    border: none;
  }
`;
