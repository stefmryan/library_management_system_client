import React from "react";
import styles from "../AccountComponent/AccountComponent.module.css";

const AccountComponent = () => {
  return (
    <div>
      <form className={styles.gridcontainer}>
        <div>
          <label>
            First Name
            <input />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input />
          </label>
        </div>
        <div>
          <label>
            Barcode
            <input />
          </label>
        </div>
        <div>
          <label>
            Email
            <input />
          </label>
        </div>
        <div>
          <label>
            Telephone
            <input />
          </label>
        </div>
        <div>
          <label>
            Library Account Type
            <input />
          </label>
        </div>
        <div>
          <label>
            Street Address
            <input />
          </label>
        </div>
        <div>
          <label>
            Street Address 2
            <input />
          </label>
        </div>
        <div>
          <label>
            City
            <input />
          </label>
        </div>
        <div>
          <label>
            State
            <input />
          </label>
        </div>
        <div>
          <label>
            Zip Code
            <input />
          </label>
        </div>
        <div>
          <label>
            ID Number
            <input />
          </label>
        </div>
        <div>
          <label>
            Birth Date
            <input />
          </label>
        </div>
      </form>
    </div>
  );
};
export default AccountComponent;
