import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { NavUnlisted } from "../styles/breadcrumb.styled";
import { useLocation } from "react-router-dom";
function BreadCrumb(props) {
  const { detailId } = props;
  const location = useLocation();

  function handleClick(e) {
    e.preventDefvault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <NavUnlisted>
          <Link
            style={{
              textDecoration: "none",
              color: `${location.pathname === "/" ? "#03045e" : "#caf0f8"}`,
            }}
            to="/"
          >
            Mobile Catalog
          </Link>
        </NavUnlisted>
        <NavUnlisted>
          <Link
            style={{
              textDecoration: "none",
              color: `${location.pathname !== "/" ? "#03045e" : "#caf0f8"}`,
            }}
            to={`/${detailId}`}
          >
            Mobile Detail
          </Link>
        </NavUnlisted>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb;
