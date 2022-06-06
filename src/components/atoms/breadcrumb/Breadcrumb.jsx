import { useLocation } from "react-router-dom";

import {
  NavUnlisted,
  CustomizedBreadCrumbs,
  LinkStyled,
  ReversedLinkStyled,
} from "../../styles/breadcrumb.styled";

function BreadCrumb(props) {
  const { detailId } = props;
  const location = useLocation();
  return (
    <div role="presentation">
      <CustomizedBreadCrumbs separator="›" aria-label="breadcrumb">
        <NavUnlisted>
          <LinkStyled data-testid="home" id="home" to="/">
            Main Catalog
          </LinkStyled>
        </NavUnlisted>
        {location.pathname !== "/" && (
          <NavUnlisted>
            <ReversedLinkStyled
              data-testid="detail"
              id="detail"
              to={`/${detailId}`}
            >
              Mobile Detail
            </ReversedLinkStyled>
          </NavUnlisted>
        )}
      </CustomizedBreadCrumbs>
    </div>
  );
}

export default BreadCrumb;
