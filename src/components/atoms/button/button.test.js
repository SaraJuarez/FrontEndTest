import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("If button renders correctly", () => {
  const text = "Hola";
  const onClickFunction = jest.fn();
  render(<Button text={text} onClickFunction={onClickFunction} />);
  const button = screen.getByTestId(text);
  expect(button).toBeInTheDocument();
});
