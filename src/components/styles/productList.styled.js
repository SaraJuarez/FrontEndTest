import styled from "styled-components";

export const ProductListContainer = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.colors?.darkBlue};
  background-color: ${(props) => props.theme.colors?.lightBlue};
  padding-right: 4em;
  padding-left: 4em;
`;

export const ProductListGrid = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors?.darkBlue};
  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;

export const StyledP = styled.p`
  font-weight: bold;
`;
