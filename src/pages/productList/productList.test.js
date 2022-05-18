import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("Working ProductList", () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <ProductList />
    </Router>
  );
  const productListTitle = screen.getByRole("heading");
  expect(productListTitle).toHaveTextContent("Mobile List");

  screen.queryByPlaceholderText(/search/i);
});
