import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavUnlisted = styled.ul`
  text-decoration: none;
  color: black;
  padding: 0px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.theme.location === "/" ? "white" : "#caf0f8")};
  font-size: ${(props) => (props.theme.location === "/" ? "20px" : "16px")};
  @media screen and (max-width: 400px) {
    font-size: ${(props) => (props.theme.location === "/" ? "14px" : "12px")};
  }
`;
export const ReversedLinkStyled = styled.p`
  text-decoration: none;
  cursor: not-allowed;
  margin: 0;
  color: white;
  font-size: 20px;
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const CustomizedBreadCrumbs = styled(Breadcrumbs)`
  & .MuiBreadcrumbs-separator {
    color: white;
    font-size: 20px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
