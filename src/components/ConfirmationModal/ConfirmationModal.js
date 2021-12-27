import React from "react";

const ConfirmationModal = ({ data, closeModal }) => {
  const handleSubmit = () => {
    console.log(data);
    closeModal(false);
    // await fetch("http//:localhost:8080/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (response.status >= 200 && response.status < 300) {
    //       console.log(response);
    //       setModalClose(false);
    //     } else {
    //       console.log("Something went wrong");
    //     }
    //   })
    //   .catch((error) => console.log("Something went wrong", error));
  };

  return (
    <div>
      <div>Confirm?</div>
      <button type="button" onClick={handleSubmit} />
    </div>
  );
};

export default ConfirmationModal;
