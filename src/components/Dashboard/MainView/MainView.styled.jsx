import styled from "styled-components";

export const MainViewStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${props => props.theme.colors.primaryLight};
    height: 100%;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
