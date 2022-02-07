import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CheckInComponent from "./CheckInComponent";

describe("CheckInComponent", () => {
  test("Component Renders", () => {
    render(<CheckInComponent />);
    expect(screen.getByTestId("checkInInput")).toBeInTheDocument();
    expect(screen.getByTestId("checkInBtn")).toBeInTheDocument();
  });

  test("Entering a barcode number renders in table", () => {
    render(<CheckInComponent />);
    const input = screen.getByTestId("checkInInput");
    fireEvent.change(input, { target: { value: 98765432 } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(screen.getByTestId("checkInTable")).toHaveTextContent(98765432);
  });
});
