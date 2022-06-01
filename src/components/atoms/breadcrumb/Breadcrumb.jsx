import { Link } from "react-router-dom";
import {
  NavUnlisted,
  CustomizedBreadCrumbs,
  LinkStyled,
  ReversedLinkStyled,
} from "../../styles/breadcrumb.styled";
function BreadCrumb(props) {
  const { detailId } = props;

  return (
    <div role="presentation">
      <CustomizedBreadCrumbs separator="›" aria-label="breadcrumb">
        <NavUnlisted>
          <LinkStyled data-testid="home" id="home" to="/">
            Main Catalog
          </LinkStyled>
        </NavUnlisted>
        <NavUnlisted>
          <ReversedLinkStyled
            data-testid="detail"
            id="detail"
            to={detailId !== "undefined" ? `/${detailId}` : "#"}
          >
            Mobile Detail
          </ReversedLinkStyled>
        </NavUnlisted>
      </CustomizedBreadCrumbs>
    </div>
  );
}

export default BreadCrumb;
