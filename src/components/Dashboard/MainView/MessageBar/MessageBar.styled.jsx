import styled from "styled-components";

export const MessageBarStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    .message-bar {
        display: flex;
        flex-direction: row;
        background-color: ${({ theme }) => theme.colors.primaryDark};
        width: 100%;
        height: 38px;
        border-radius: 16px;
        color: ${({ theme }) => theme.colors.primaryTextLight};
        padding: 4px 12px;
        gap: 16px;

        .emoji {
            font-size: 22px;
        }
        
        input {
            flex: 1;
        }
    }

    .send-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.primaryDark};
        width: 38px;
        height: 38px;
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.primaryTextLight};
        padding: 4px 12px;
        font-size: 18px;
        cursor: pointer;
    }
`;