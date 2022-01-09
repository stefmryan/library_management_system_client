import React, { useState } from "react";
import AccountComponent from "../../AccountComponent/AccountComponent";
import BookTable from "../../BookTable/BookTable";
import styles from "../CheckOutComponent/CheckOutComponent.module.css";
// import constants from "../../utilities/constants";

const CheckOutComponent = () => {
  const [libraryAccount, setLibraryAccount] = useState("");
  const [accountObj, setAccountObj] = useState({
    libraryAccountNumber: 0,
    email: "",
    handle: "",
    firstName: "",
    lastName: "",
    driverLicenseNumber: "",
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
  });

  const [showAccount, setShowAccount] = useState(false);
  const [showBookTable, setShowBookTable] = useState(false);

  const addLibraryAccount = (e) => {
    const value = e.target.value;
    setLibraryAccount(value);
  };

  const handleLibraryAccount = async () => {
    // const value = e.target.value;
    // setLibraryAccount(Number(value));

    setShowAccount(true);
    await fetch(`http://localhost:8080/library-accounts/${libraryAccount}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAccountObj({ ...data });
      })
      .catch((error) => console.log("Something went wrong", error));
  };

  const handleCheckOut = (e) => {
    if (e.key === "Enter") {
      setShowBookTable(true);
    }
  };

  const handleClear = () => {
    //grab inputs and clear data
    const libraryAccount = document.getElementsByName("library-account");
    libraryAccount[0].value = "";
    const item = document.getElementsByName("item");
    item[0].value = "";

    //need to clear booktable
    setShowBookTable(false);

    //need to clear account
    setShowAccount(false);
  };

  return (
    <div>
      <div>{showAccount && <AccountComponent data={accountObj} />}</div>
      <div id="checkOut" className={styles.container}>
        <div className={styles.input_div}>
          <label>
            Library Account Number
            <input
              name="library-account"
              type="number"
              onChange={addLibraryAccount}
            />
          </label>
          <button type="button" onClick={handleLibraryAccount}>
            Click Me
          </button>
        </div>
        <label>
          Item
          <input name="item" type="number" onKeyDown={handleCheckOut} />
        </label>

        <button onClick={handleClear}>Check Out Item</button>
      </div>

      <div>{showBookTable && <BookTable />}</div>
    </div>
  );
};

export default CheckOutComponent;
