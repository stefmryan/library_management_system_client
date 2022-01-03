import React, { useState } from "react";
import AccountComponent from "../../AccountComponent/AccountComponent";
import styles from "../CheckOutComponent/CheckOutComponent.module.css";

const CheckOutComponent = () => {
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

  const handleLibraryAccount = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value.length === 6) {
      console.log(value);
      setShowAccount(true);
    }
  };

  return (
    <div>
      <div>{showAccount && <AccountComponent />}</div>
      <div className={styles.container}>
        <label>
          Library Account
          <input type="number" onKeyDown={handleLibraryAccount} max={999999} />
        </label>
        <label>
          Item
          <input />
        </label>
      </div>
    </div>
  );
};

export default CheckOutComponent;
