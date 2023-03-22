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

        user-select: none;
    }

    input {
        border: none;
        background-color: transparent;
        font-size: .9em;
        outline: none;
        caret-color: ${({ theme }) => theme.colors.primaryTextLight};
        color: ${({ theme }) => theme.colors.primaryTextLight};
        
        ::placeholder {
            color: ${({ theme }) => theme.colors.placeholderLight};
        }
    }

    &::-webkit-scrollbar {
        width: 4px;
        background-color: transparent;
        
        &-thumb {
            border-radius: 16px;
        }
    }

    :hover {
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.primaryDarkHalf};
        }
    }
`;

export const StyledApp = styled.div`
    height: 90vh;
    width: 90vw;
    max-width: 1600px;
    background-color: ${props => props.theme.colors.primaryDark};
    border-radius: 16px;
    display: flex;
`;