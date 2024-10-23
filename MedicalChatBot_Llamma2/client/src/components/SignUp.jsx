import React, { useState } from "react";
import "../modules/SignUp.css";
import axios from "axios"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle sign-up logic (e.g., call API, validate inputs)
    console.log("Email:", email, "Password:", password);
    try{
      const payload={
        email:email,
        password:password,
        confirmPassword:confirmPassword
      }
    const res=  await axios.post("http://localhost:5000/api/SignUp",payload);
    console.log(res);
     if(res.status===200){
      console.log("Sign-up successful!", res.data);
      alert("Sign-up successful!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

     }
      else{
      console.log("Something went wrong:", res.data);
      alert("Sign-in failed. Please try again.");
     }
    }catch(e){
      if (e.response && e.response.status === 400) {
        // Example: if email already exists
        console.log("Error:", e.response.data.message);
        alert(e.response.data.message);
      } else {
        // Handle other errors (network issues, server errors, etc.)
        console.log("An unexpected error occurred:", e);
        alert("An unexpected error occurred during sign-up.");
      }
    }

  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up for Health AI</h2>
        <form onSubmit={handleSignUp}>
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
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
