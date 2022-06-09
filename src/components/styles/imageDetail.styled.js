import styled from "@emotion/styled";
export const ImageDetailStyled = styled.img`
  height: 400px;
  object-fit: contain;
  @media screen and (max-width: 1050px) {
    height: 300px;
  }
  @media screen and (max-width: 950px) {
    height: 250px;
  }
`;
