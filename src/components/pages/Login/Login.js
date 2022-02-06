import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({});

  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(credentials);
    if (credentials.username && credentials.password) {
      await fetch(`http://localhost:8080/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        // .then((data) => {
        //   setCheckedOutItem([...checkedOutItem, data]);
        //   itemRef.current.value = "";
        // })
        .catch((error) => console.log("Something went wrong", error));
      // if (!showBookTable) {
      //   setShowBookTable(true);
      // }
    }
  };
  return (
    <div>
      <form>
        <div>
          <input type="email" name="username" onChange={handleLogin} />
        </div>
        <div>
          <input type="password" name="password" onChange={handleLogin} />
        </div>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
