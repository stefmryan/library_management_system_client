import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage/LandingPage';
import LibraryAccountForm from './components/LibraryAccountForm/LibraryAccountForm'

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      <Route exact path="/register" element={<LibraryAccountForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
