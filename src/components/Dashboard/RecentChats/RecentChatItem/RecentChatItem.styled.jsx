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
            position: relative;

            .img-ct {
                width: 56px;
                height: 56px;
                overflow: hidden;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }          

            .online-indicator {
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: ${({ theme }) => theme.colors.greenIndicator};
                bottom: 0;
                right: 0;
                box-sizing: content-box;
                border: 2px solid ${({ theme }) => theme.colors.primaryLight};
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: .125em;
            flex: 1;

            .name {
                font-size: 1em;
            }

            .message {
                font-size: .9em;
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