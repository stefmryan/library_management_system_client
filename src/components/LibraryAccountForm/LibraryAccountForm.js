import React, { useState } from "react";
import constants from "../utilities/constants";

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

  //   const [label, setLabel] = useState({
  //     label: "",
  //   });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAccountObj({ ...accountObj, [name]: value });
  };

  const handleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //setLabel({ label: value });
    setAccountObj({ ...accountObj, [name]: { label: value } });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(accountObj);
  };
  return (
    <div>
      <form>
        <label>
          First Name
          <input name="firstName" type="text" onChange={handleInput} />
        </label>
        <label>
          {" "}
          Last Name
          <input name="lastName" type="text" onChange={handleInput} />
        </label>
        <label>
          {" "}
          Street Address
          <input name="street" type="text" onChange={handleInput} />
        </label>
        <label>
          Street Address 2
          <input name="street2" type="text" onChange={handleInput} />
        </label>
        <label>
          {" "}
          City
          <input name="city" type="text" onChange={handleInput} />
        </label>
        <label>
          <select name="state" onChange={handleSelect}>
            {constants.STATE_LIST.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label>
          Zip Code
          <input name="zipCode" type="text" onChange={handleInput} />
        </label>
        <label>
          Birthdate
          <input name="birthDate" type="text" onChange={handleInput} />
        </label>
        <label>
          Account Number
          <input
            name="libraryAccountNumber"
            type="text"
            onChange={handleInput}
          />
        </label>
        <label>
          Driver License Number
          <input
            name="driverLicenseNumber"
            type="text"
            onChange={handleInput}
          />
        </label>
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
        <label>
          Telephone Number
          <input name="telephone" type="text" onChange={handleInput} />
        </label>
        <label>
          Email
          <input name="email" type="text" onChange={handleInput} />
        </label>
        <label>
          Handle
          <input name="handle" type="text" onChange={handleInput} />
        </label>
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
        <button onClick={handleForm}>Submit</button>
      </form>
    </div>
  );
};

export default LibraryAccountForm;
