import { render } from "@testing-library/react";
import ProductList from "./ProductList";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { rest } from "msw";
import { setupServer } from "msw/node";
test("Working ProductList", () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <ProductList />
    </Router>
  );
  const server = setupServer(
    rest.get("/", (req, res, ctx) => {
      return res(ctx.json({ greeting: "hello there" }));
    })
  );
});
