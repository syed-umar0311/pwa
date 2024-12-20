// src/Login.js
import React, { useState } from "react";
import "../signup/signup.css";
import '../login/Login.css'
import google from "../../assets/images/google.png";
import facebook from '../../assets/images/facebook.png'
import apple from '../../assets/images/apple.png'
import { Link } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  // // State to manage form inputs and response messages
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // // Handler for form submission
  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   // Check if passwords match
  //   if (password !== confirmPassword) {
  //     setMessage("Passwords do not match.");
  //     return;
  //   }

  //   try {
  //     // Send data to the backend
  //     const response = await fetch("https://your-backend-url.com/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     // Parse the JSON response
  //     const data = await response.json();

  //     if (response.ok) {
  //       // Handle successful signup
  //       setMessage("Signup successful! Please log in.");
  //     } else {
  //       // Handle signup error
  //       setMessage(data.message || "Signup failed. Please try again.");
  //     }
  //   } catch (error) {
  //     setMessage("An error occurred. Please try again.");
  //   }
  // };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="top"></div>
        <h2>Sign Up</h2>
        <p>Your properties, managed in one place. Sign Up Now!</p>
        <div className="multi-buttons">
          <button className="login-multi">
            <img src={google} alt="Google Icon" />
          </button>
          <button className="login-multi">
            <img src={facebook} alt="Google Icon" />
          </button>
          <button className="login-multi">
            <img src={apple} alt="Google Icon" />
          </button>
        </div>
        <form >
        <div className="input-container">
            {/* Email Input */}
            <div className="input-wrapper">
              <FaEnvelope
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input type="email" placeholder="Full Name" className="input-field" />
            </div>
            <div className="input-wrapper">
              <FaEnvelope
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input type="email" placeholder="Email ID" className="input-field" />
            </div>

            {/* Password Input */}
            <div className="input-wrapper">
              <FaLock
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
            </div>
            <div className="input-wrapper">
              <FaLock
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input
                type="password"
                placeholder=" Repeat Password"
                className="input-field"
              />
            </div>
          </div>{" "}
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
        <div className="separator">- OR -</div>

        {message && <p className="message">{message}</p>}

        <div className="signup-link">
          Do you have an account
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
