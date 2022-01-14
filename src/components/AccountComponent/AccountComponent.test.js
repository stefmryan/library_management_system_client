import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import AccountComponent from "./AccountComponent";
import testData from "../../__mocks__/testData";

describe("Account Component", () => {
  test("Component Renders", async () => {
    render(<AccountComponent data={testData.mockLibraryAccount} />);
    expect(
      await waitFor(() => screen.findByTestId("edit-icon"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("firstName"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("lastName"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("barcode"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("email"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("street1"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("street2"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("city"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("zipCode"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("idNumber"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.findByTestId("telephone"))
    ).toBeInTheDocument();
    expect(
      await waitFor(() => screen.queryByTestId("update-btn"))
    ).not.toBeInTheDocument();
  });
  test("clicking on edit icon enables inputs", () => {
    render(<AccountComponent data={testData.mockLibraryAccount} />);

    const editBtn = screen.getByTestId("edit-icon");
    expect(editBtn).toBeDefined();
    fireEvent.click(editBtn);

    expect(screen.getByTestId("firstName")).toBeEnabled();
    expect(screen.getByTestId("lastName")).toBeEnabled();
    expect(screen.getByTestId("barcode")).toBeEnabled();
    expect(screen.getByTestId("telephone")).toBeEnabled();
    expect(screen.getByTestId("email")).toBeEnabled();
    expect(screen.getByTestId("idNumber")).toBeEnabled();
    expect(screen.getByTestId("street1")).toBeEnabled();
    expect(screen.getByTestId("street2")).toBeEnabled();
    expect(screen.getByTestId("city")).toBeEnabled();
    expect(screen.getByTestId("zipCode")).toBeEnabled();
  });
});
