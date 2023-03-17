import styled from "styled-components";

export const LandingPageStyled = styled.div`
  background-color: #46525e;
  height: 90vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    &:first-child {
      color: #b87333;
    }
    &:last-child {
      color: #8b310f;
    }
  }

  button {
    cursor: pointer;
    margin-top: 3rem;
    padding: 1rem 2rem;
    background-color: white;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-size: 1.4rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
