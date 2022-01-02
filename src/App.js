import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import LibraryAccountForm from "./components/LibraryAccountForm/LibraryAccountForm";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.css";
import CheckInComponent from "./components/CheckInComponent/CheckInComponent";
import CheckOutComponent from "./components/CheckOutComponent/CheckOutComponent";
import FindAnItemComponent from "./components/FindAnItemComponent/FindAnItemComponent";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Navigation />

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
