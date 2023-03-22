import styled from "styled-components";

export const MessageStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40%;

    .content {
        padding: .75em;
    }

    &.sent-msg {
        align-self: flex-end;

        .content {
            background-color: ${({ theme }) => theme.colors.primaryLightGray};
            border-radius: 8px 0 8px 8px;
        }

        .timestamp {
            align-self: flex-end;
        }
    }

    &.received-msg {
        align-self: flex-start;

        .content {
            background-color: ${({ theme }) => theme.colors.primaryDark};
            border-radius: 0 8px 8px 8px;
            color: ${({ theme }) => theme.colors.primaryTextLight};
        }

        .timestamp {
            align-self: flex-start;
        }
    }

    .timestamp {
        font-size: .8em;
        color: ${({ theme }) => theme.colors.secondaryTextLight};
    }
`;