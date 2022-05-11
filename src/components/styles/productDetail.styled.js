import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.lightBlue};
`;

export const ProductDetailText = styled.div`
  margin-left: 10%;
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors?.darkBlue};
`;

export const LinkContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 15px;
`;

export const ProductDetailAll = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

export const ProductDetailInfoActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectsContainer = styled.div`
  width: 100%;
  margin-left: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts[1]};
`;
