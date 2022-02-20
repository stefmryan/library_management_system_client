import React, { useState } from "react";
import styles from "../Navigation/Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import constants from "../utilities/constants";

const Navigation = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleLogout = async () => {
    const response = await fetch(`${constants.BASE_PATH}/signout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 204 && sessionStorage.isLoggedIn) {
      sessionStorage.setItem("isLoggedIn", false);
      navigate("/");
      console.log(sessionStorage);
    }
  };

  const closeModal = (boolean) => {
    setConfirmationModal(boolean);
  };

  return (
    <div>
      {isLoggedIn === "true" && (
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
            <Link
              to="/checkin"
              data-testid="checkin-link"
              className={styles.link}
            >
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
            <Link
              to="/search"
              data-testid="search-link"
              className={styles.link}
            >
              Find An Item
            </Link>
          </div>
          {sessionStorage.isLoggedIn === "true" && (
            <div
              className={styles.logout}
              onClick={() => setConfirmationModal(true)}
            >
              Logout
            </div>
          )}
          <div>
            {confirmationModal && (
              <ConfirmationModal
                handleFunc={handleLogout}
                closeModal={closeModal}
                modalStatement={constants.LOGOUT_STATEMENT}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
