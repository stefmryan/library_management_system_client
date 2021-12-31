import React, { useState } from "react";
import constants from "../utilities/constants";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import styles from "../LibraryAccountForm/LibraryAccountForm.module.css";

const LibraryAccountForm = () => {
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
      label: "",
    },
    accountType: {
      label: "",
    },
  });

  //const message = constants.CONFIRMATION_TEXT;

  const [confirmationModal, setConfirmationModal] = useState(false);

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
    const value = e.target.value;
    setAccountObj({ ...accountObj, [name]: { label: value } });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setConfirmationModal(true);
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
                type="text"
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label>
              Account type
              <select name="accountType" onChange={handleSelect}>
                {constants.ACCOUNT_TYPE.map((accountType, index) => (
                  <option key={index} value={accountType}>
                    {accountType}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>
              First Name
              <input name="firstName" type="text" onChange={handleInput} />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Last Name
              <input name="lastName" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>
              {" "}
              Street Address
              <input name="street" type="text" onChange={handleInput} />
            </label>
          </div>
          <div>
            <label>
              Street Address 2
              <input name="street2" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>
              {" "}
              City
              <input name="city" type="text" onChange={handleInput} />
            </label>
          </div>
          <div>
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
          <div>
            <label>
              Zip Code
              <input name="zipCode" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>
              Driver License Number
              <input
                name="driverLicenseNumber"
                type="text"
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label>
              Birthdate
              <input name="birthDate" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>
              Email
              <input name="email" type="text" onChange={handleInput} />
            </label>
          </div>
          <div>
            <label>
              Telephone Number
              <input name="telephone" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>
              County
              <select name="county" onChange={handleSelect}>
                {constants.COUNTY_LIST.map((county, index) => (
                  <option key={index} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Handle
              <input name="handle" type="text" onChange={handleInput} />
            </label>
          </div>
        </div>
        <div>
          <button onClick={handleForm}>Submit</button>
        </div>
      </div>

      {confirmationModal && (
        <ConfirmationModal data={accountObj} closeModal={() => closeModal()} />
      )}
    </div>
  );
};

export default LibraryAccountForm;
