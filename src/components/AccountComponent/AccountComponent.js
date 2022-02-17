import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { /*useEffect,*/ useState } from "react";
import styles from "../AccountComponent/AccountComponent.module.css";
import constants from "../utilities/constants";

const AccountComponent = ({ data }) => {
  const [edit, setEdit] = useState(true);
  const [accountObj, setAccountObj] = useState({ ...data });

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

  const updateLibraryAccount = async () => {
    const response = await fetch(`http://localhost:8080/update/${data.id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountObj),
    });
    if (response.ok) {
      const data = await response.json();
      setAccountObj({ ...data });
      setEdit(false);
    }
  };

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faEdit}
        className={styles.icon}
        data-testid="edit-icon"
        onClick={() => setEdit(!edit)}
      />
      <div className={styles.gridcontainer}>
        <div>
          <label>
            First Name
            <input
              name="firstName"
              defaultValue={data.firstName}
              disabled={edit}
              onChange={handleInput}
              data-testid="firstName"
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              name="lastName"
              defaultValue={data.lastName}
              disabled={edit}
              onChange={handleInput}
              data-testid="lastName"
            />
          </label>
        </div>
        <div>
          <label>
            Barcode
            <input
              name="barcode"
              defaultValue={data.libraryAccountNumber}
              disabled={edit}
              onChange={handleInput}
              data-testid="barcode"
            />
          </label>
        </div>
        <div>
          <label>
            County
            <input defaultValue={data.county} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              name="email"
              type="email"
              defaultValue={data.email}
              disabled={edit}
              onChange={handleInput}
              data-testid="email"
            />
          </label>
        </div>
        <div>
          <label>
            Telephone
            <input
              name="telephone"
              type="tel"
              defaultValue={data.telephone}
              disabled={edit}
              onChange={handleInput}
              data-testid="telephone"
            />
          </label>
        </div>
        <div>
          <label>
            Account type
            <select
              name="accountType"
              data-testid="accountType"
              disabled={edit}
              onChange={handleSelect}
            >
              {constants.ACCOUNT_TYPE.map((accountType, index) => (
                <option key={index} value={accountType.id}>
                  {accountType.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Street Address
            <input
              name="street"
              defaultValue={data.street}
              disabled={edit}
              onChange={handleInput}
              data-testid="street1"
            />
          </label>
        </div>
        <div>
          <label>
            Street Address 2
            <input
              name="street2"
              defaultValue={data.street2}
              disabled={edit}
              onChange={handleInput}
              data-testid="street2"
            />
          </label>
        </div>
        <div>
          <label>
            City
            <input
              name="city"
              defaultValue={data.city}
              disabled={edit}
              onChange={handleInput}
              data-testid="city"
            />
          </label>
        </div>
        <div>
          <label>
            State
            <select name="state" disabled={edit} onChange={handleSelect}>
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
            <input
              name="zipCode"
              defaultValue={data.zipCode}
              disabled={edit}
              onChange={handleInput}
              data-testid="zipCode"
            />
          </label>
        </div>
        <div>
          <label>
            County
            <select name="county" disabled={edit} onChange={handleSelect}>
              {constants.COUNTY_LIST.map((county, index) => (
                <option key={index} value={county.id}>
                  {county.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            ID Number
            <input
              name="idNumber"
              defaultValue={data.idNumber}
              disabled={edit}
              data-testid="idNumber"
              onChange={handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            Birth Date
            <input
              name="birthdate"
              defaultValue={data.birthdate}
              disabled={edit}
              onChange={handleInput}
              data-testid="birthDate"
            />
          </label>
        </div>
        {!edit && (
          <button
            data-testid="update-btn"
            type="button"
            onClick={updateLibraryAccount}
          >
            Update Account
          </button>
        )}
      </div>
    </div>
  );
};
export default AccountComponent;
