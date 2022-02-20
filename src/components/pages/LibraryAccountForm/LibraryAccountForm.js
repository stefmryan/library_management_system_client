import React, { useState } from "react";
import constants from "../../utilities/constants";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import styles from "../LibraryAccountForm/LibraryAccountForm.module.css";

const LibraryAccountForm = () => {
  const [accountObj, setAccountObj] = useState({
    libraryAccountNumber: 0,
    email: "",
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
  });

  const [confirmationModal, setConfirmationModal] = useState(false);

  //const message = constants.CONFIRMATION_TEXT;

  const closeModal = (boolean) => {
    setConfirmationModal(boolean);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAccountObj({ ...accountObj, [name]: value });
  };

  const handleSelect = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "county") {
      value = constants.COUNTY_LIST.filter((item) => item.id === Number(value));
      value = value[0];
    }
    if (name === "accountType") {
      value = constants.ACCOUNT_TYPE.filter(
        (item) => item.id === Number(value)
      );
      value = value[0];
    }
    setAccountObj({ ...accountObj, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setConfirmationModal(true);
  };

  const handleSubmit = async () => {
    closeModal(false);
    await fetch(constants.ADD_LIBRARY_ACCOUNT_ENDPOINT, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountObj),
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          //comeback to this and refactor--take out false
          closeModal(false);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => console.log("Something went wrong", error));
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              Account Number
              <input
                name="libraryAccountNumber"
                type="number"
                onChange={handleInput}
              />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              Account type
              <select name="accountType" onChange={handleSelect}>
                {constants.ACCOUNT_TYPE.map((accountType, index) => (
                  <option key={index} value={accountType.id}>
                    {accountType.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              First Name
              <input name="firstName" type="text" onChange={handleInput} />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              {" "}
              Last Name
              <input name="lastName" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              {" "}
              Street Address
              <input name="street" type="text" onChange={handleInput} />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              Street Address 2
              <input name="street2" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              {" "}
              City
              <input name="city" type="text" onChange={handleInput} />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              State
              <select name="state" onChange={handleSelect}>
                {constants.STATE_LIST.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.column}>
            <label>
              Zip Code
              <input name="zipCode" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              ID Number
              <input name="idNumber" type="text" onChange={handleInput} />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              Birthdate
              <input name="birthdate" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              Email
              <input name="email" type="text" onChange={handleInput} />
            </label>
          </div>
          <div className={styles.column}>
            <label>
              Telephone Number
              <input name="telephone" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>
              County
              <select name="county" onChange={handleSelect}>
                {constants.COUNTY_LIST.map((county, index) => (
                  <option key={index} value={county.id}>
                    {county.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div>
          <button onClick={handleForm}>Submit</button>
        </div>
      </div>
      {confirmationModal && (
        <ConfirmationModal
          handleFunc={handleSubmit}
          closeModal={closeModal}
          modalStatement={constants.CONFIRMATION_TEXT}
        />
      )}
    </div>
  );
};

export default LibraryAccountForm;
