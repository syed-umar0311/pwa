// src/Login.js
import React, { useState } from "react";
import "../../components/auth/Login.css";
import google from "../../components/assets/images/google.png";
import facebook from '../assets/images/facebook.png'
import apple from '../assets/images/apple.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  // State to manage form inputs and response messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handler for form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await fetch("https://your-backend-url.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // Handle successful login (you can redirect the user or set a login state)
        setMessage("Login successful! Redirecting...");
        // Redirect or perform another action here, e.g., set user session
      } else {
        // Handle login error
        setMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="top"></div>
        <h2>Login</h2>
        <p>Your properties, managed in one place. Welcome Back!</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="text"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="check">
            <label>
              <input type="checkbox" />I agree to the Terms of Service and
              Privacy Policy
            </label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <div className="separator">- OR -</div>
        <button className="google-login">
          <img src={google} alt="Google Icon" />
          Google
        </button>
        <button className="google-login">
          <img src={facebook} alt="Google Icon" />
          Facebook
        </button>
        <button className="google-login">
          <img src={apple} alt="Google Icon" />
          Apple ID
        </button>
        
        <div className="signup-link">
          New here?
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
