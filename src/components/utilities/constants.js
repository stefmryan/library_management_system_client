const constants = {
  STATE_LIST: [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ],
  COUNTY_LIST: [
    { id: 1, label: "Red" },
    { id: 2, label: "Green" },
    { id: 3, label: "Orange" },
  ],
  ACCOUNT_TYPE: [
    { id: 2, label: "Adult" },
    { id: 1, label: "Juvenile" },
    { id: 3, label: "Teacher" },
  ],
  LIBRARY_ACCOUNT_OBJ: {
    libraryAccountNumber: 0,
    email: "",
    handle: "",
    firstName: "",
    lastName: "",
    idNumber: "",
    birthdate: "",
    telephone: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
    county: {
      id: "",
      label: "",
    },
    accountType: {
      id: "",
      label: "",
    },
  },
  CONFIRMATION_TEXT: "Confirm Account?",
  NO_RESULTS: "No Results Found",
  LOGOUT_STATEMENT: "Log Out?",
  BASE_PATH: "http://localhost:8080",
  ADD_LIBRARY_ACCOUNT_ENDPOINT: "http://localhost:8080/register",
  GET_LIBRARY_ACCOUNT_ENDPOINT: "http://localhost:8080/library-accounts",
};

export default constants;
