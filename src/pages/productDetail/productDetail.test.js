import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import { Router } from "react-router-dom";
test("If productDetail render correctly", () => {
  render(
    <Router>
      <ProductDetail />
    </Router>
  );
  let goBackButton = screen.getByText("Go Back");
  expect(goBackButton).toBeInTheDocument();
});
