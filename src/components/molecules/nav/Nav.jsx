import { NavContainer } from "../../styles/nav.styled";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <NavContainer>
      <Link style={{ textDecoration: "none" }} to="/detail">
        <h1>Mobile Catalog</h1>
      </Link>
    </NavContainer>
  );
}

export default Nav;
