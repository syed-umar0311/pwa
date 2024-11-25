import React, { useState } from "react";
import "../../auth/login/Login.css";
import logo from "../../assets/images/logo.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function PasswordChange() {
  // // State to manage form inputs and response messages
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // // Handler for form submission
  // const handlePassword = async (e) => {
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
        <img src={logo} alt="Login Graphic" className="login-image" />
        <h2>Create New Password</h2>
        <p>Update your password for enchanced account security</p>
        <form >
        <div className="input-container">
            {/* Email Input */}
            <div className="input-wrapper">
              <FaEnvelope
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input type="email" placeholder="New Password" className="input-field" />
            </div>

            <div className="input-wrapper">
              <FaLock
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input
                type="password"
                placeholder=" Confirm Password"
                className="input-field"
              />
            </div>
            </div>
        <Link to="/login">  <button type="submit" className="login-btn">
            Change Password
          </button></Link>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default PasswordChange