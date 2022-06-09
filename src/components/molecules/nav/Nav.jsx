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
  StyledDiv,
} from "../../styles/nav.styled";

function Nav() {
  const listProvider = useContext(ProductContext);

  return (
    <NavContainer>
      <StyledDiv>
        <StyledLink to="/">
          <StyledH1>Mobile Catalog</StyledH1>
        </StyledLink>
        <StyledCart>
          <StyledP>Items in the cart: {listProvider.cart}</StyledP>
          <ShoppingCartIcon />
        </StyledCart>
      </StyledDiv>
      <BreadCrumb />
    </NavContainer>
  );
}

export default Nav;
