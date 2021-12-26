import React from "react";

const ConfirmationModal = (data, text) => {
  const handleSubmit = async () => {
    console.log(data);
    await fetch("http//:localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
      } else {
        console.log("Something went wrong");
      }
    });
  };

  return (
    <div>
      <div>{text}</div>
      <button onClick={handleSubmit} />
    </div>
  );
};

export default ConfirmationModal;
