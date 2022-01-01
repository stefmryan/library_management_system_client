import React from "react";
import constants from "../utilities/constants";
import styles from "../ConfirmationModal/ConfirmationModal.module.css";

const ConfirmationModal = ({ data, closeModal }) => {
  const handleSubmit = async () => {
    console.log(data);
    closeModal(false);
    await fetch(constants.ADD_LIBRARY_ACCOUNT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          //comeback to this and refactor--take out false
          closeModal(false);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => console.log("Something went wrong", error));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <span className={styles.close}>&times;</span>
        <div>Confirm New Account?</div>
        <div className={styles.buttonDiv}>
          <button type="button" onClick={() => closeModal(false)}>
            Go Back
          </button>
          <button type="button" onClick={handleSubmit}>
            {" "}
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
