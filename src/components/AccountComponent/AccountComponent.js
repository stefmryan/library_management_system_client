import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../AccountComponent/AccountComponent.module.css";

const AccountComponent = () => {
  const [edit, setEdit] = useState(true);

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
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Barcode
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Telephone
            <input disabled={edit} />
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
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Street Address 2
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            City
            <input disabled={edit} />
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
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            ID Number
            <input disabled={edit} />
          </label>
        </div>
        <div>
          <label>
            Birth Date
            <input disabled={edit} />
          </label>
        </div>
        {!edit && <button type="button" />}
      </div>
    </div>
  );
};
export default AccountComponent;
