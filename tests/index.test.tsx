import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import React from "react";
import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Home", () => {
  it("must render correctly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId("home.helloWorldText")).toBeInTheDocument();
  });
});
