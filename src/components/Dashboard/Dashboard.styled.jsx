import styled from "styled-components";

export const DashboardStyled = styled.div`
    display: flex;
    margin: 32px;
    width: 100%;
`;

export const LeftDashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    gap: 1em;
`;

export const LogoStyled = styled.div`
    pointer-events: none;
    user-select: none;
    align-self: center;
`;

export const RightDashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 11;
    margin-left: 16px;
    width: 100%;
    gap: 1em;
`;

export const RightDashboardHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 12px;
    gap: .5em;
`;