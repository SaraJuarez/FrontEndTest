import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("If heading is present", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Nav />
    </Router>
  );
  expect(screen.getAllByText(/Mobile Catalog/i)[0]).toBeInTheDocument();
  const headingLink = screen.getAllByText(/Mobile Catalog/i)[0];
  fireEvent.click(headingLink);
  expect(history.location.pathname).toBe("/");
});
