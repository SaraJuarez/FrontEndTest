import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors?.mediumBlue};
  color: ${(props) => props.theme.colors?.violet};
  border-bottom: 1px solid ${(props) => props.theme.colors?.darkBlue};
  padding: 0px 15px;
`;

export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.colors?.darkBlue};
  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

export const StyledP = styled.p`
  color: ${(props) => props.theme.colors?.darkBlue};
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
