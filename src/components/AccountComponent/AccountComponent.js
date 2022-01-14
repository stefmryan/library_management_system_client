import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../AccountComponent/AccountComponent.module.css";

const AccountComponent = ({ data }) => {
  const [edit, setEdit] = useState(true);

  const updateLibraryAccount = () => {
    console.log(data);
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
              data-testid="firstName"
              defaultValue={data.firstName}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              data-testid="lastName"
              defaultValue={data.lastName}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            Barcode
            <input
              data-testid="barcode"
              defaultValue={data.libraryAccountNumber}
              disabled={edit}
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
              data-testid="email"
              defaultValue={data.email}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            Telephone
            <input
              data-testid="telephone"
              defaultValue={data.telephone}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            Library Account Type
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Street Address
            <input
              data-testid="street1"
              defaultValue={data.street}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            Street Address 2
            <input
              data-testid="street2"
              defaultValue={data.street2}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            City
            <input
              data-testid="city"
              defaultValue={data.city}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            State
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Zip Code
            <input
              data-testid="zipCode"
              defaultValue={data.zipCode}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            ID Number
            <input
              data-testid="idNumber"
              defaultValue={data.driverLicenseNumber}
              disabled={edit}
            />
          </label>
        </div>
        <div>
          <label>
            Birth Date
            <input
              data-testid="birthDate"
              defaultValue={data.birthDate}
              disabled={edit}
            />
          </label>
        </div>
        {!edit && (
          <button
            data-testid="update-btn"
            type="button"
            onClick={updateLibraryAccount}
          />
        )}
      </div>
    </div>
  );
};
export default AccountComponent;
