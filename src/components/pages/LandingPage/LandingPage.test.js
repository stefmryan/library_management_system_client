import { render, screen } from "@testing-library/react";
import React from "react";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  test("Component Renders", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("login-div")).toBeInTheDocument();
  });
});
