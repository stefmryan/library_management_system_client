import React from "react";
import styles from "../Navigation/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link
          to="/checkout"
          data-testid="checkout-link"
          className={styles.link}
        >
          Checkout
        </Link>
      </div>
      <div>
        <Link to="/checkin" data-testid="checkin-link" className={styles.link}>
          Checkin
        </Link>
      </div>
      <div>
        <Link
          to="/register"
          data-testid="register-link"
          className={styles.link}
        >
          Create a New Account
        </Link>
      </div>
      <div>
        <Link to="/search" data-testid="search-link" className={styles.link}>
          Find An Item
        </Link>
      </div>
      <div className={styles.logout}>Logout</div>
    </div>
  );
};

export default Navigation;
