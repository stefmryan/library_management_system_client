import React, { useState } from "react";
import AccountComponent from "../../AccountComponent/AccountComponent";
import BookTable from "../../BookTable/BookTable";
import styles from "../CheckOutComponent/CheckOutComponent.module.css";
// import constants from "../../utilities/constants";

const CheckOutComponent = () => {
  const [libraryAccount, setLibraryAccount] = useState(0);
  // const [accountObj, setAccountObj] = useState({
  //   libraryAccountNumber: 0,
  //   email: "",
  //   handle: "",
  //   firstName: "",
  //   lastName: "",
  //   driverLicenseNumber: "",
  //   birthdate: "",
  //   telephone: "",
  //   street: "",
  //   street2: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   county: {
  //     id: "",
  //     label: "",
  //   },
  //   accountType: {
  //     id: "",
  //     label: "",
  //   },
  // });

  const [showAccount, setShowAccount] = useState(false);
  const [showBookTable, setShowBookTable] = useState(false);

  const handleLibraryAccount = async (e) => {
    const value = e.target.value;
    setLibraryAccount(value);
    if (e.key === "Enter" && libraryAccount.length === 6) {
      console.log(libraryAccount);
      setShowAccount(true);
      await fetch(`http://localhost:8080/library-accounts/${libraryAccount}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            //comeback to this and refactor--take out false
          } else {
            console.log("Something went wrong");
          }
        })
        .catch((error) => console.log("Something went wrong", error));
    }
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
      <div>{showAccount && <AccountComponent />}</div>
      <div id="checkOut" className={styles.container}>
        <div className={styles.input_div}>
          <label>
            Library Account Number
            <input
              name="library-account"
              type="number"
              onKeyDown={handleLibraryAccount}
            />
          </label>
          {/* <button type="button" onClick={handleLibraryAccount}>
            Click Me
          </button> */}
        </div>
        <label>
          Item
          <input name="item" type="number" onKeyDown={handleCheckOut} />
        </label>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div>{showBookTable && <BookTable />}</div>
    </div>
  );
};

export default CheckOutComponent;
