import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import ProductItem from "./ProductItem";
import { createMemoryHistory } from "history";
import { toBeInTheDocument } from "@testing-library/jest-dom";

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
  const linkToDetail = screen.getByRole("link");
  fireEvent.click(linkToDetail, { button: 0 });
  expect(history.location.pathname).toBe("/cGjFJlmqNPIwU59AOcY8H");
});
