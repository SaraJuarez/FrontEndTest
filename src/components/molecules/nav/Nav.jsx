import {
  NavContainer,
  StyledH1,
  StyledP,
  StyledCart,
  StyledLink,
} from "../../styles/nav.styled";
import { Link } from "react-router-dom";
import BreadCrumb from "../../atoms/breadcrumb/Breadcrumb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Nav(props) {
  const { items, detailId } = props;
  return (
    <NavContainer>
      <div>
        <StyledLink to="/">
          <StyledH1>Mobile Catalog</StyledH1>
        </StyledLink>
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
