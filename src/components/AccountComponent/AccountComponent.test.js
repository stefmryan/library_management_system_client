import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import AccountComponent from "./AccountComponent";
import testData from "../../__mocks__/testData";

describe("Account Component", () => {
  test("Component Renders", async () => {
    render(<AccountComponent data={testData.mockLibraryAccount} />);
    expect(
      await waitFor(() => screen.findByTestId("edit-icon"))
    ).toBeInTheDocument();
  });
});
