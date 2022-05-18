import { render } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
test("If productDetail render correctly", () => {
  const history = createMemoryHistory();
  const getCartInfo = jest.fn();
  const getSelectDefault = jest.fn();
  const getSelectOption = jest.fn();
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
