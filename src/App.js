import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import LibraryAccountForm from "./components/LibraryAccountForm/LibraryAccountForm";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Navigation />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/register" element={<LibraryAccountForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
