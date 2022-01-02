import React from "react";
import styles from "../Navigation/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/checkout">Checkout</Link>
      </div>
      <div>
        <Link to="/checkin">Checkin</Link>
      </div>
      <div>
        <Link to="/register">Create a New Account</Link>
      </div>
      <div>
        <Link to="/search">Find An Item</Link>
      </div>
      <div className={styles.logout}>Logout</div>
    </div>
  );
};

export default Navigation;
