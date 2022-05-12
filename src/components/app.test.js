import { render } from "@testing-library/react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
test("Working App component", () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
});
