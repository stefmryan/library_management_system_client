import React from "react";
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

  const handleLibraryAccount = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <label>
        Library Account
        <input type="number" onKeyDown={handleLibraryAccount} />
      </label>
      <label>
        Item
        <input />
      </label>
    </div>
  );
};

export default CheckOutComponent;
