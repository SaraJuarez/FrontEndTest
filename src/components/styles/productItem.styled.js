import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 15px;
  color: ${(props) => props.theme.colors?.darkBlue};
  cursor: pointer;
  min-height: 170px;
  @media screen and (max-width: 800px) {
    min-height: 221px;
  }
`;

export const ProductImageContainer = styled.div`
  width: 50%;
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
  width: 50%;
`;

export const StyledP = styled.p`
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  margin-right: 5px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
