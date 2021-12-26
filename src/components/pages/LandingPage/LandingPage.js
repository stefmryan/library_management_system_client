import React from "react";


const LandingPage = () => {

    const handleBtn = () =>{
        console.log("Clicked btn");
    }
    return(
    <div>
        This is the LandingPage
        <button onClick={handleBtn}>Click Me</button>
    </div>
    )
}

export default LandingPage;