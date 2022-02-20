import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountComponent from "../../AccountComponent/AccountComponent";
import BookTable from "../../BookTable/BookTable";
import constants from "../../utilities/constants";
import styles from "../CheckOutComponent/CheckOutComponent.module.css";

const CheckOutComponent = () => {
  const navigate = useNavigate();
  const [libraryAccount, setLibraryAccount] = useState("");
  const [accountObj, setAccountObj] = useState(constants.LIBRARY_ACCOUNT_OBJ);
  const [checkedOutItem, setCheckedOutItem] = useState([]);
  const [showAccount, setShowAccount] = useState(false);
  const [showBookTable, setShowBookTable] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [itemBarcode, setItemBarcode] = useState("");
  const [accountNotFound, setAccountNotFound] = useState(false);
  const [accountList, setAccountList] = useState([]);
  const [listDiv, setListDiv] = useState(false);
  const [renew, setRenew] = useState({});
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
    const response = await fetch(
      `${constants.BASE_PATH}/library-accounts/account?accountData=${libraryAccount}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.length === 1) {
        setAccountObj({ ...data[0] });
        setShowAccount(true);
        setShowButton(false);
      } else {
        setAccountList([...data]);
        setListDiv(true);
      }
    }
    if (response.status === 404) {
      setAccountNotFound(true);
    }
    // .catch((error) => console.log("Something went wrong", error));
  };

  useEffect(() => {
    if (showAccount && accountObj.books.length > 0) {
      setCheckedOutItem([...accountObj.books]);
      setShowBookTable(true);
    }
  }, [showAccount]);

  useEffect(() => {
    if (checkedOutItem.length > 0) {
      const renewedBarcode = renew.barcode;
      const newArr = checkedOutItem.filter(
        (item) => item.barcode !== renewedBarcode
      );
      newArr.push(renew);
      setCheckedOutItem([...newArr]);
    }
  }, [renew]);

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
      credentials: "include",
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

  const handleAccount = (account) => {
    setAccountObj({ ...account });
    setShowAccount(true);
    setShowButton(false);
    setListDiv(false);
  };

  const handleNavigation = () => {
    navigate("/register");
  };

  return (
    <div>
      <div>{showAccount && <AccountComponent data={accountObj} />}</div>
      <div id="checkOut" className={styles.container}>
        <div className={styles.input_div}>
          <label>
            Library Card Barcode or Patron Name
            <input
              name="library-account"
              type="text"
              data-testid="library-account-input"
              ref={accountRef}
              onChange={addLibraryAccount}
            />
          </label>
          {showButton && (
            <button
              data-testid="get-account-btn"
              type="button"
              onClick={handleLibraryAccount}
            >
              Library Account
            </button>
          )}
        </div>
        {accountNotFound && (
          <span>
            {constants.NO_RESULTS}
            <button type="button" onClick={handleNavigation}>
              Add New Account?
            </button>
          </span>
        )}
        {listDiv && (
          <div>
            {accountList.map((account) => (
              <div key={account.id}>
                <input type="checkbox" onClick={() => handleAccount(account)} />
                <span>{account.firstName}</span>
                <span>{account.lastName}</span>
                <span>{account.libraryAccountNumber}</span>
                <span>{account.birthdate}</span>
              </div>
            ))}
          </div>
        )}
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

            <button data-testid="checkout-item-btn" onClick={handleCheckOut}>
              Check Out Item
            </button>
          </div>
        )}

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
                <BookTable
                  items={checkedOutItem}
                  renew={renew}
                  setRenew={setRenew}
                />
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
