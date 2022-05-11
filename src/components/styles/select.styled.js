import styled from "styled-components";

export const SelectStyled = styled.select`
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors?.lightBlue};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors?.darkBlue};
  width: 140px;
`;
