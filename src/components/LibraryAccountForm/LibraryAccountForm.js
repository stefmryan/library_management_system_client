import React /*{ useState }*/ from "react";
import constants from "../utilities/constants";

const LibraryAccountForm = () => {
  /*const [accountObj, setAccountObj] = useState({
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
  });*/

  const handleInput = () => {
    console.log("This is input");
  };

  const handleSelect = () => {
    console.log("This is select");
  };
  return (
    <div>
      <form>
        <label>
          First Name
          <input type="text" onChange={handleInput} />
        </label>
        <label>
          {" "}
          Last Name
          <input type="text" onChange={handleInput} />
        </label>
        <label>
          {" "}
          Street Address
          <input type="text" onChange={handleInput} />
        </label>
        <label>
          Street Address
          <input type="text" onChange={handleInput} />
        </label>
        <label>
          {" "}
          City
          <input type="text" onChange={handleInput} />
        </label>
        <label>
          <select onChange={handleSelect}>
            {constants.STATE_LIST.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label>
          Zip Code
          <input type="text" onChange={handleInput} />
        </label>
        <label>
          Account Number
          <input type="text" />
        </label>
        <label>
          Driver License Number
          <input type="text" />
        </label>
        <label>
          County
          <select>
            <option>Red</option>
            <option>Orange</option>
          </select>
        </label>
        <label>
          Telephone Number
          <input type="text" />
        </label>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Handle
          <input type="text" />
        </label>
        <label>
          Account type
          <select>
            <option>Adult</option>
            <option>Juvenile</option>
            <option>Teacher</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default LibraryAccountForm;
