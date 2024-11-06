// src/Login.js
import React from "react";
import "../auth/Login.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign up</h2>
        <form>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="text" placeholder="Username or Email" required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
        <div className="signup-link">
          Already have an account?
          <Link to="/">Login</Link>
        </div>

        <div className="separator">- OR -</div>
        <button className="google-login">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Google Icon"
          />
          Log In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
