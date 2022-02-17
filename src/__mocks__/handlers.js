// src/mocks/handlers.js
import { rest } from "msw";
import testData from "./testData";

const getLibraryAccount = (req, res, ctx) => {
  let acctString = req.url.searchParams.get("accountData");
  if (acctString === "Not Found") {
    return res(ctx.status(404));
  }
  if (acctString === "12345") {
    return res(ctx.status(200), ctx.json(testData.mockLibraryAccounts));
  }
};

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", null),
  rest.get("http://localhost:8080/library-accounts/account", getLibraryAccount),
];
