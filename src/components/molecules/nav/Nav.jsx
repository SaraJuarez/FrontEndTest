import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";

import ProductContext from "../../../context/ProductContext";
import BreadCrumb from "../../atoms/breadcrumb/Breadcrumb";
import {
  NavContainer,
  StyledH1,
  StyledP,
  StyledCart,
  StyledLink,
} from "../../styles/nav.styled";

function Nav() {
  const listProvider = useContext(ProductContext);

  return (
    <NavContainer>
      <div>
        <StyledLink to="/">
          <StyledH1>Mobile Catalog</StyledH1>
        </StyledLink>
        <BreadCrumb />
      </div>
      <StyledCart>
        <StyledP>Items in the cart: {listProvider.cart}</StyledP>
        <ShoppingCartIcon />
      </StyledCart>
    </NavContainer>
  );
}

export default Nav;
