import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
/* import Link from "@mui/material/Link"; */

function BreadCrumb() {
  function handleClick(e) {
    e.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">MObile Catalog</Link>
        <Link to="/:id">Mobile Detail</Link>
        {/*         <Link underline="hover" color="inherit" href="/">
          Mobile Catalog
        </Link>
        <Link underline="hover" color="inherit" href="/:id">
          Mobile Detail
        </Link> */}
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb;
