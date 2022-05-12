import styled from "styled-components";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export const NavUnlisted = styled.ul`
  text-decoration: none;
  color: black;
  padding: 0px;
`;

export const CustomizedBreadCrumbs = styled(Breadcrumbs)`
  & .MuiBreadcrumbs-separator {
    color: white;
    font-size: 20px;
  }
`;
