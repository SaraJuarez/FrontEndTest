import { NavContainer } from "../../styles/nav.styled";
import { createMemoryHistory } from "history";
import { Link } from "react-router-dom";

function Nav(props) {
  const history = createMemoryHistory();
  console.log(history);
  return (
    <NavContainer>
      <Link style={{ textDecoration: "none" }} to="/detail">
        <h1>Mobile Catalog</h1>
      </Link>
    </NavContainer>
  );
}

export default Nav;
