import styled from "styled-components";

export const ImageContainer = styled.img`
  height: 200px;
  object-fit: contain;
  @media screen and (max-width: 64.0625em) {
    height: 180px;
  }
  @media screen and (max-width: 54.089em) {
    height: 156px;
  }
  @media screen and (max-width: 20.0625em) {
    height: 100px;
  }
`;
