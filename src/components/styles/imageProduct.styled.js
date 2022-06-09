import styled from "styled-components";

export const ImageContainer = styled.img`
  height: 200px;
  object-fit: contain;
  @media screen and (max-width: 64.0625em) {
    height: 180px;
  }
  @media screen and (max-width: 48.0625em) {
    height: 140px;
  }
`;
