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
        onClick={() => setEdit(!edit)}
      />
      <div className={styles.gridcontainer}>
        <div>
          <label>
            First Name
            <input defaultValue={data.firstName} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input defaultValue={data.lastName} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Barcode
            <input defaultValue={data.libraryAccountNumber} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input defaultValue={data.email} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Telephone
            <input defaultValue={data.telephone} disabled={edit} />
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
            <input defaultValue={data.street} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Street Address 2
            <input defaultValue={data.street2} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            City
            <input defaultValue={data.city} disabled={edit} />
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
            <input defaultValue={data.zipCode} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            ID Number
            <input defaultValue={data.driverLicenseNumber} disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Birth Date
            <input defaultValue={data.birthDate} disabled={edit} />
          </label>
        </div>
        {!edit && <button type="button" onClick={updateLibraryAccount} />}
      </div>
    </div>
  );
};
export default AccountComponent;
