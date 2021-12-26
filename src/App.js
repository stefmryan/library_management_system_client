import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<LandingPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
