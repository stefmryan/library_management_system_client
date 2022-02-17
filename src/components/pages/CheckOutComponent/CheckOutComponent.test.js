import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import CheckOutComponent from "./CheckOutComponent";

describe("CheckOutComponent", () => {
  test("Component renders", () => {
    render(<CheckOutComponent />);
    expect(screen.getByTestId("library-account-input")).toBeInTheDocument();
  });
  test("adding library account number returns account", async () => {
    render(<CheckOutComponent />);
    const accountInput = screen.getByTestId("library-account-input");
    const getAcctBtn = screen.getByTestId("get-account-btn");
    expect(accountInput).toBeInTheDocument();
    expect(getAcctBtn).toBeInTheDocument();

    fireEvent.change(accountInput, { target: { value: "12345" } });
    fireEvent.click(getAcctBtn);
    expect(accountInput).toHaveValue("12345");

    await waitFor(() =>
      expect(screen.queryByTestId("barcode")).toBeInTheDocument()
    );
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByTestId("firstName")).toHaveValue("Betty");
    expect(screen.getByTestId("checkout-item-btn")).toBeInTheDocument();
  });
  test("adding not existing library account number/name returns Not Found", async () => {
    render(<CheckOutComponent />);
    const accountInput = screen.getByTestId("library-account-input");
    const getAcctBtn = screen.getByTestId("get-account-btn");
    expect(accountInput).toBeInTheDocument();
    expect(getAcctBtn).toBeInTheDocument();

    fireEvent.change(accountInput, { target: { value: "Not Found" } });
    fireEvent.click(getAcctBtn);
    expect(accountInput).toHaveValue("Not Found");

    await waitFor(() =>
      expect(screen.queryByText("Account Not Found")).toBeInTheDocument()
    );
  });
});
