import styled from "styled-components";

export const RecentChatItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 200px;

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        padding: 16px 12px 16px 12px;
        cursor: pointer;

        .avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: .125em;
            flex: 1;

            .name {
                font-size: .9em;
            }

            .message {
                font-size: .8em;
                color: ${({ theme }) => theme.colors.secondaryTextLight};
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }

        .time {
            align-self: flex-start;
            font-size: .7em;
        }
    }

    .seperator {
        width: 100%;
        height: .5px;
        background-color: ${({ theme }) => theme.colors.seperator};
    }
`;