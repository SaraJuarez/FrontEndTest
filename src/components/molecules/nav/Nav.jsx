import { NavContainer } from "../../styles/nav.styled";
import { Link } from "react-router-dom";

function Nav(props) {
  const { items } = props;
  return (
    <NavContainer>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>Mobile Catalog</h1>
      </Link>
      <p>Items in the cart: {items}</p>
    </NavContainer>
  );
}

export default Nav;
