import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.navBlue};
  border-radius: 15px;
  padding: 15px;
  color: ${(props) => props.theme.colors?.darkBlue};
  font-family: ${(props) => props.theme.fonts[0]};
  cursor: pointer;
  /*   -webkit-box-shadow: 5px 0px 10px 0px #000000;
  box-shadow: 1px 0px 10px 0px #000000; */
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5px;
`;
