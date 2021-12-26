import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // const handleBtn = () =>{
  //     console.log("Clicked btn");
  // }
  return (
    <div>
      <div>This is the LandingPage</div>
      <div>
        <Link to="/register">Click Me</Link>
      </div>
    </div>
  );
};

export default LandingPage;
