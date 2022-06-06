import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Breadcrumb from "./Breadcrumb";

test("If Breadcrumb render correctly", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Breadcrumb detailId={"cGjFJlmqNPIwU59AOcY8H"} />
    </Router>
  );
  const linkHome = screen.getByTestId("home");
  const linkDetail = screen.getByTestId("detail");
  fireEvent.click(linkHome);
  expect(history.location.pathname).toBe("/");
  fireEvent.click(linkDetail);
  expect(history.location.pathname).toBe("/cGjFJlmqNPIwU59AOcY8H");
});
