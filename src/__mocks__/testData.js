const testData = {
  mockLibraryAccount: {
    id: 1,
    libraryAccountNumber: 12345,
    email: "bookwormBetty@fakeEmail.com",
    handle: "bookwormBetty",
    firstName: "Betty",
    lastName: "Barnes",
    driverLicenseNumber: "123-345-567",
    birthdate: "1997-02-09",
    telephone: "555-555-6789",
    street: "123 Main St",
    street2: "",
    city: "MainVille",
    state: "OR",
    zipCode: "99876",
    county: {
      label: "Green",
    },
    accountType: {
      label: "Adult",
    },
    books: [
      {
        id: 1,
        barcode: 98765432,
        title: "The Fault In Our Stars",
        author: "John Green",
        dueDate: "2022-01-26",
        available: false,
      },
    ],
  },
};

export default testData;
