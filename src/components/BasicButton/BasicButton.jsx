import { BasicButtonStyled } from "./BasicButton.styled";

const BasicButton = (props) => {
    return (
        <BasicButtonStyled {...props}>
            {props.children}
        </BasicButtonStyled>
    );
}

export default BasicButton;