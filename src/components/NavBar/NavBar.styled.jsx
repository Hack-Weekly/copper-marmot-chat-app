import styled from "styled-components";

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #2e353b;

  a {
    color: white;
    padding: 0 2rem;
  }

  div {
    padding: 0 2rem;
    color: white;

    button {
      padding: 0.5rem 1rem;
      background-color: white;
      border: none;
      border-radius: 10px;
    }
  }

  .sign-out,
  .sign-in {
    border: none;
  }
`;
