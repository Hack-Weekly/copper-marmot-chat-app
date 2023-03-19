import { BasicButtonStyled } from "./BasicButton.styled";

export const BasicButton = (props) => {
    return (
        <BasicButtonStyled {...props}>
            {props.children}
        </BasicButtonStyled>
    );
}

export default BasicButton;