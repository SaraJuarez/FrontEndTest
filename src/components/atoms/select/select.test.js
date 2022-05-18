import { render, screen } from "@testing-library/react";
import Select from "./Select";
test("If Select renders correctly", () => {
  const options = [{ name: "hola", code: "1000" }];
  render(<Select name="opcion" options={options} />);
  const option = screen.getByRole("option", { name: "hola" });
  expect(option).toBeInTheDocument();
});
