import React, { useEffect, useRef, useState } from "react";
import AccountComponent from "../../AccountComponent/AccountComponent";
import BookTable from "../../BookTable/BookTable";
import constants from "../../utilities/constants";
import styles from "../CheckOutComponent/CheckOutComponent.module.css";

const CheckOutComponent = () => {
  const [libraryAccount, setLibraryAccount] = useState("");
  const [accountObj, setAccountObj] = useState(constants.LIBRARY_ACCOUNT_OBJ);
  const [checkedOutItem, setCheckedOutItem] = useState([]);
  const [showAccount, setShowAccount] = useState(false);
  const [showBookTable, setShowBookTable] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [itemBarcode, setItemBarcode] = useState("");
  const itemRef = useRef();
  const accountRef = useRef();

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

  useEffect(() => {
    if (showAccount && accountObj.books.length > 0) {
      setCheckedOutItem([...accountObj.books]);
      setShowBookTable(true);
    }
  }, [showAccount]);

  /**
   * sets itembarcode from item input
   * @param {keyboardInput} e
   */
  const setItemToBeCheckedOut = (e) => {
    const value = e.target.value;
    setItemBarcode(value);
  };

  /**
   * Does a fetch call to checkout an item.  Clears checkout input and displays book
   * table.
   */
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
        setCheckedOutItem([...checkedOutItem, data]);
        itemRef.current.value = "";
      })
      .catch((error) => console.log("Something went wrong", error));
    if (!showBookTable) {
      setShowBookTable(true);
    }
  };

  /**
   * Clears inputs and resets displays for book table and library account info
   */
  const handleClear = () => {
    //resetting accountObj and checkoutitem array and clearing
    //library account input
    setAccountObj(constants.LIBRARY_ACCOUNT_OBJ);
    accountRef.current.value = "";
    setCheckedOutItem([]);

    //resetting showing book table and certain buttons
    // and closing account inputs.
    setShowBookTable(false);
    setShowButton(true);
    setShowAccount(false);
  };

  return (
    <div>
      <div id="checkOut" className={styles.container}>
        <div className={styles.input_div}>
          <label>
            Library Account Number
            <input
              name="library-account"
              type="number"
              ref={accountRef}
              onChange={addLibraryAccount}
            />
          </label>
          {showButton && (
            <button type="button" onClick={handleLibraryAccount}>
              Library Account
            </button>
          )}
        </div>
        {!showButton && (
          <div>
            <label>
              Item
              <input
                name="item"
                type="text"
                ref={itemRef}
                onChange={setItemToBeCheckedOut}
              />
            </label>

            <button onClick={handleCheckOut}>Check Out Item</button>
          </div>
        )}
        <div>{showAccount && <AccountComponent data={accountObj} />}</div>
        {showBookTable && (
          <div className={styles.table_container}>
            <table>
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Due Date</th>
                  <th>Renew Item</th>
                </tr>
                <BookTable items={checkedOutItem} />
              </thead>
            </table>
          </div>
        )}
      </div>
      {!showButton && (
        <button onClick={handleClear} className={styles.btn}>
          Clear Account
        </button>
      )}
    </div>
  );
};

export default CheckOutComponent;
