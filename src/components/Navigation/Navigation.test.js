import { render, screen } from "@testing-library/react";
import React from "react";
import Navigation from "./Navigation";
import { MemoryRouter as Router } from "react-router-dom";

describe("Navigation", () => {
  test("Component renders", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByTestId("search-link")).toBeInTheDocument();
    expect(screen.getByTestId("checkin-link")).toBeInTheDocument();
    expect(screen.getByTestId("checkout-link")).toBeInTheDocument();
    expect(screen.getByTestId("register-link")).toBeInTheDocument();
  });
});
