import React from "react";
import Login from "../Login/Login";

const LandingPage = () => {
  return (
    <div>
      <div>This is the LandingPage</div>
      <div data-testid="login-div">
        <Login />
      </div>
    </div>
  );
};

export default LandingPage;
