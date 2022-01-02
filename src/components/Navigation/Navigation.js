import React from "react";
import styles from "../Navigation/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/checkout" className={styles.link}>
          Checkout
        </Link>
      </div>
      <div>
        <Link to="/checkin" className={styles.link}>
          Checkin
        </Link>
      </div>
      <div>
        <Link to="/register" className={styles.link}>
          Create a New Account
        </Link>
      </div>
      <div>
        <Link to="/search" className={styles.link}>
          Find An Item
        </Link>
      </div>
      <div className={styles.logout}>Logout</div>
    </div>
  );
};

export default Navigation;
