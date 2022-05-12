import {
  NavContainer,
  StyledH1,
  StyledP,
  StyledCart,
} from "../../styles/nav.styled";
import { Link } from "react-router-dom";
import BreadCrumb from "../../atoms/Breadcrumb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
      <StyledCart>
        <StyledP>Items in the cart: {items}</StyledP>
        <ShoppingCartIcon />
      </StyledCart>
    </NavContainer>
  );
}

export default Nav;
