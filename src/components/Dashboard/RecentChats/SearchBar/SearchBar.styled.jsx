import styled from "styled-components";

export const SearchBarStyled = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
    padding: 8px 12px 8px 12px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryTextLight};

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
`;