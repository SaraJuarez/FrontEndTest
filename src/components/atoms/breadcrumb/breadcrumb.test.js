import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
test("If Breadcrumb render correctly", () => {
  const history = createMemoryHistory();
  console.log(history.location.pathname);
  render(
    <Router location={history.location} navigator={history}>
      <Breadcrumb />
    </Router>
  );
  screen.g;
  const linkHome = screen.getById("home");
  const linkDetail = screen.getById("detail");

  expect(history.location.pathname).toBe("/");
});
