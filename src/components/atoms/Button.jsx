import { ButtonContainer, ButtonText } from "../styles/button.styled";
function Button(props) {
  const { text, onClickFunction } = props;
  return (
    <ButtonContainer onClick={onClickFunction}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
