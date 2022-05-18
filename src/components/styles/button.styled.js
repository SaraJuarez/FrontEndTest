import styled from "styled-components";

export const ButtonContainer = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors?.darkBlue};
  text-align: center;
  color: white;
  padding: 10px 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 30%;
  box-shadow: 5px 0px 15px 0px #000000;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  margin: 0;
`;
