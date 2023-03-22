import styled from "styled-components";

export const MainViewStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${props => props.theme.colors.primaryLight};
    height: 100%;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    gap: 16px;
    min-height: 0;

    .header {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        gap: 1em;

        .info {
            display: flex;
            flex-direction: column;
            gap: .125em;
            flex: 1;

            .name {
                font-size: 1em;
            }

            .current-status {
                font-size: .9em;
                color: ${({ theme }) => theme.colors.secondaryTextLight};
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }

    .seperator {
        height: 1px;
        background-color: ${({ theme }) => theme.colors.seperator};
    }

    .messages-ct {
        display: flex;
        flex-direction: column-reverse;
        flex: 1;
        /* justify-content: flex-end; */
        gap: 16px; 
        overflow-y: scroll;
    }
`;
