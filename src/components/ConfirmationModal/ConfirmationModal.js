import React from "react";

const ConfirmationModal = (data) => {
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div>
      <div>Confirm Account?</div>
      <button onClick={handleSubmit} />
    </div>
  );
};

export default ConfirmationModal;
