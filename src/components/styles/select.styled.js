import styled from "styled-components";

export const SelectStyled = styled.select`
  border-radius: 15px;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors?.darkBlue};
  width: 140px;
  @media screen and (max-width: 800px) {
    width: 100px;
  }
  @media screen and (max-width: 600px) {
    width: 80px;
  }
  @media screen and (max-width: 450px) {
    width: fit-content;
  }
`;
