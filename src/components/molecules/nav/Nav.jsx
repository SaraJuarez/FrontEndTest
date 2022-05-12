import { NavContainer, StyledH1, StyledP } from "../../styles/nav.styled";
import { Link } from "react-router-dom";
import BreadCrumb from "../../atoms/Breadcrumb";
function Nav(props) {
  const { items, detailId } = props;
  return (
    <NavContainer>
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
          <StyledH1>Mobile Catalog</StyledH1>
        </Link>
        <BreadCrumb detailId={detailId} />
      </div>
      <StyledP>Items in the cart: {items}</StyledP>
    </NavContainer>
  );
}

export default Nav;
