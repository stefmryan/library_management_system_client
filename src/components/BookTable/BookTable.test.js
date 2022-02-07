import { render, screen } from "@testing-library/react";
import React from "react";
import BookTable from "../BookTable/BookTable";

describe("BookTable Component", () => {
  test("Component Renders", () => {
    render(<BookTable />);
  });
  expect(screen.getByTestId("barcode")).toBeInTheDocument();
});
