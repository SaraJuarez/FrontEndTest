import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import ProductItem from "./ProductItem";
import { createMemoryHistory } from "history";

test("Elements in ProductItem", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <ProductItem
        productInfo={{ id: "cGjFJlmqNPIwU59AOcY8H", brand: "Acer" }}
      />
    </Router>
  );
  const image = screen.getByRole("img");
  const text = screen.getByText("Acer");
  expect(image).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
