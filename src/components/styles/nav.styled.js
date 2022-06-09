import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(3, 4, 94, 1) 0%,
    rgba(0, 180, 216, 1) 50%,
    rgba(202, 240, 248, 1) 100%
  );
  color: ${(props) => props.theme.colors?.violet};
  border-bottom: 1px solid ${(props) => props.theme.colors?.darkBlue};
  padding-right: 4em;
  padding-left: 4em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledH1 = styled.h1`
  color: white;
  font-family: "Fredoka One", cursive;
  font-size: 40px;
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

export const StyledCart = styled.div`
  display: flex;
  align-items: center;
`;
