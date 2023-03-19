import styled from 'styled-components';

export const RecentChatsStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 12px 16px 12px;
    background-color: ${props => props.theme.colors.primaryLight};
    height: 100%;
    border-radius: 16px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    gap: .5em;
    min-height: 0;

    .recent-chats-ct {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;

        // make scrollbar transparent
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

    }
`;