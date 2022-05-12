import { NavContainer } from "../../styles/nav.styled";
import { Link } from "react-router-dom";
import BreadCrumb from "../../atoms/Breadcrumb";
function Nav(props) {
  const { items, detailId } = props;
  return (
    <NavContainer>
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>Mobile Catalog</h1>
        </Link>
        <BreadCrumb detailId={detailId} />
      </div>
      <p>Items in the cart: {items}</p>
    </NavContainer>
  );
}

export default Nav;
