import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter as Router } from "react-router-dom";

test("If heading is present", async () => {
  render(<Nav />, { wrapper: Router });
  expect(screen.getAllByText(/Mobile Catalog/i)[0]).toBeInTheDocument();
});
