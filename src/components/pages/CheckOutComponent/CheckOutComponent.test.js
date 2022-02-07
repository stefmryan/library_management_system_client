import { render, screen } from "@testing-library/react";
import React from "react";
import CheckOutComponent from "./CheckOutComponent";

describe("CheckOutComponent", () => {
  test("Component renders", () => {
    render(<CheckOutComponent />);
    expect(screen.getByTestId("library-account-input")).toBeInTheDocument();
  });
});
