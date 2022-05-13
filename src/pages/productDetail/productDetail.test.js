import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
test("If productDetail render correctly", () => {
  const history = createMemoryHistory();
  function getCartInfo() {}

  function getSelectDefault() {}

  function getSelectOption() {}

  const mockSetState = jest.fn();
  function setDetaiId() {
    setDetaiId(() => mockSetState);
  }

  render(
    <Router location={history.location} navigator={history}>
      <ProductDetail
        props={(getSelectOption, getCartInfo, getSelectDefault, setDetaiId)}
      />
    </Router>
  );
});
