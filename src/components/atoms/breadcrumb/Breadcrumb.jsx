import { Link } from "react-router-dom";
import {
  NavUnlisted,
  CustomizedBreadCrumbs,
} from "../../styles/breadcrumb.styled";
import { useLocation } from "react-router-dom";
function BreadCrumb(props) {
  const { detailId } = props;
  const location = useLocation();

  return (
    <div role="presentation">
      <CustomizedBreadCrumbs separator="›" aria-label="breadcrumb">
        <NavUnlisted>
          <Link
            data-testid="home"
            id="home"
            style={{
              textDecoration: "none",
              color: `${location.pathname === "/" ? "white" : "#caf0f8"}`,
              fontSize: `${location.pathname === "/" ? "20px" : "16px"}`,
            }}
            to="/"
          >
            Main Catalog
          </Link>
        </NavUnlisted>
        <NavUnlisted>
          <Link
            data-testid="detail"
            id="detail"
            style={{
              textDecoration: "none",
              color: `${location.pathname !== "/" ? "white" : "#caf0f8"}`,
              fontSize: `${location.pathname !== "/" ? "20px" : "16px"}`,
            }}
            to={detailId !== "undefined" ? `/${detailId}` : "#"}
          >
            Mobile Detail
          </Link>
        </NavUnlisted>
      </CustomizedBreadCrumbs>
    </div>
  );
}

export default BreadCrumb;
