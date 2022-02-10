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
    if (credentials.username && credentials.password) {
      await fetch(`http://localhost:8080/authenticate`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },

        body: JSON.stringify(credentials),
      });
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
