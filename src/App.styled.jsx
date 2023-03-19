import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        h1, h2, h3, h4, h5{

        }
        p, span, a{

        }
    }
`;

export const StyledApp = styled.div`
    height: 90vh;
    width: 90vw;
    background-color: ${props => props.theme.colors.primaryDark};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;