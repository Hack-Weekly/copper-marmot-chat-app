import styled from "styled-components";

export const BasicButtonStyled = styled.button`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
    border: none;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primaryTextDark};
    padding: 8px 12px 8px 12px;
    min-width: 94px;
    min-height: 38px;
    font-size: 1em;
    gap: .5em;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);


    // TODO: Add hover and active styles
    &:hover {
    }
    &:active {
    }
`;