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
  color: ${(props) => props.theme.colors?.darkBlue};
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 450px) {
    font-size: 8px;
  }
`;

export const LinkContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 15px;
  background-color: ${(props) => props.theme.colors?.darkBlue};
  border-radius: 50%;
  padding: 25px 10px;
  color: white;
  @media screen and (max-width: 800px) {
    padding: 20px 6px;
  }
  @media screen and (max-width: 600px) {
    padding: 16px 4px;
  }
  @media screen and (max-width: 450px) {
    padding: 14px 2px;
    top: 35%;
  }
`;

export const ProductDetailAll = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 15px;
`;

export const ProductDetailInfoActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
