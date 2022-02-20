import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../src/components/pages/LandingPage/LandingPage";
import LibraryAccountForm from "../src/components/pages/LibraryAccountForm/LibraryAccountForm";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.css";
import CheckInComponent from "../src/components/pages/CheckInComponent/CheckInComponent";
import CheckOutComponent from "../src/components/pages/CheckOutComponent/CheckOutComponent";
import FindAnItemComponent from "../src/components/pages/FindAnItemComponent/FindAnItemComponent";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        {/*add conditional for if logged in and what role.*/}
        <Navigation isLoggedIn={sessionStorage.getItem("isLoggedIn")} />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/register" element={<LibraryAccountForm />} />
          <Route exact path="/checkin" element={<CheckInComponent />} />
          <Route exact path="/checkout" element={<CheckOutComponent />} />
          <Route exact path="/search" element={<FindAnItemComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
