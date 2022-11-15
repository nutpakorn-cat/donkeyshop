import Home from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("must render correctly", () => {
    render(<Home />);
    expect(screen.getByTestId("home.helloWorldText")).toBeInTheDocument();
  });
});
