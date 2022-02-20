import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const history = useNavigate();
  const [credentials, setCredentials] = useState({});

  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      const response = await fetch(`http://localhost:8080/authenticate`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.status === 200) {
        sessionStorage.setItem("isLoggedIn", true);
        history("/checkout");
      }
    }
  };
  return (
    <div className={styles.container}>
      <form>
        <h3>Sign In</h3>
        <div>
          <label>
            Email
            <input type="email" name="username" onChange={handleLogin} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" name="password" onChange={handleLogin} />
          </label>
        </div>
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
