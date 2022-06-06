import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import BreadCrumb from "../../atoms/breadcrumb/Breadcrumb";
import {
  NavContainer,
  StyledH1,
  StyledP,
  StyledCart,
  StyledLink,
} from "../../styles/nav.styled";

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
