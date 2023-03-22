import styled from "styled-components";

export const ProfilePictureStyled = styled.div`
    position: relative;
    width: 56px;
    height: 56px;

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
`;