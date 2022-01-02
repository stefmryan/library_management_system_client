import React from "react";
import styles from "../Navigation/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>Checkout</div>
      <div>Checkin</div>
      <div>
        <Link to="/register">Create a New Account</Link>
      </div>
      <div>Find an Item</div>
      <div>Logout</div>
    </div>
  );
};

export default Navigation;
