import React, { useState } from "react";
import "../modules/login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic (e.g., authenticate user, call API)

    console.log("email: ", email, "password: ", password);
    try {
      const payload = {
        email: email,
        password: password,
      };

      const res = await axios.post("http://localhost:5000/api/Login", payload);

      if (res.status === 200) {
        console.log(res);
        alert("Login successfully");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      } else {
        console.log("Something went wrong: ", res.data);
        alert("Login failed");
      }
    } catch (error) {
      console.log("Error is : ", error);
    }

    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Health AI</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          For register <Link to="/SignUp">click here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
