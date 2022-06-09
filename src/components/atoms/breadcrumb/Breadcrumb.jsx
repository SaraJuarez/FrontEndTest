import { useLocation } from "react-router-dom";

import {
  NavUnlisted,
  CustomizedBreadCrumbs,
  LinkStyled,
  ReversedLinkStyled,
  StyledDiv,
} from "../../styles/breadcrumb.styled";

function BreadCrumb() {
  const location = useLocation();
  return (
    <StyledDiv>
      <CustomizedBreadCrumbs separator="›" aria-label="breadcrumb">
        <NavUnlisted>
          <LinkStyled data-testid="home" id="home" to="/">
            Main Catalog
          </LinkStyled>
        </NavUnlisted>
        {location.pathname !== "/" && (
          <NavUnlisted>
            <ReversedLinkStyled data-testid="detail" id="detail">
              Mobile Detail
            </ReversedLinkStyled>
          </NavUnlisted>
        )}
      </CustomizedBreadCrumbs>
    </StyledDiv>
  );
}

export default BreadCrumb;
