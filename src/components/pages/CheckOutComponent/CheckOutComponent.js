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

  const [checkedOutItem, setCheckedOutItem] = useState({
    id: 0,
    barcode: 0,
    title: "",
    author: "",
    dueDate: "",
    available: "",
  });

  const [showAccount, setShowAccount] = useState(false);
  const [showBookTable, setShowBookTable] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [itemBarcode, setItemBarcode] = useState("");

  /**
   * sets the value of library account
   * @param {KeyboardEvent} e
   */
  const addLibraryAccount = (e) => {
    const value = e.target.value;
    setLibraryAccount(value);
  };

  /**
   * fetches library account from backend and sets the library account with values retrieved.
   */
  const handleLibraryAccount = async () => {
    await fetch(`http://localhost:8080/library-accounts/${libraryAccount}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAccountObj({ ...data });
        setShowAccount(true);
        setShowButton(false);
      })
      .catch((error) => console.log("Something went wrong", error));
  };

  const setItemToBeCheckedOut = (e) => {
    const value = e.target.value;
    setItemBarcode(value);
  };

  const handleCheckOut = async () => {
    await fetch(`http://localhost:8080/checkout/${itemBarcode}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setCheckedOutItem({ data });
        // setShowAccount(true);
        // setShowButton(false);
      })
      .catch((error) => console.log("Something went wrong", error));
    if (!showBookTable) {
      setShowBookTable(true);
    }
  };

  // const handleClear = () => {
  //   //grab inputs and clear data
  //   const libraryAccount = document.getElementsByName("library-account");
  //   libraryAccount[0].value = "";
  //   const item = document.getElementsByName("item");
  //   item[0].value = "";

  //   //need to clear booktable
  //   setShowBookTable(false);

  //   //need to clear account
  //   setShowAccount(false);
  // };

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
          {showButton && (
            <button type="button" onClick={handleLibraryAccount}>
              Click Me
            </button>
          )}
        </div>
        {!showButton && (
          <div>
            <label>
              Item
              <input
                name="item"
                type="number"
                onChange={setItemToBeCheckedOut}
              />
            </label>

            <button onClick={handleCheckOut}>Check Out Item</button>
          </div>
        )}
      </div>

      <div>{showBookTable && <BookTable item={checkedOutItem} />}</div>
    </div>
  );
};

export default CheckOutComponent;
