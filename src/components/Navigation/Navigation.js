import React from "react";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>Checkout</div>
      <div>Checkin</div>
      <div>Create a New Account</div>
      <div>Find an Item</div>
      <div>Logout</div>
    </div>
  );
};

export default Navigation;
