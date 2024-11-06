// src/Login.js
import React from "react";
import "../../components/auth/Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
       
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="text" placeholder="Username or Email" required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-link">
          Already have an account?
          <Link to="/signup">Signup</Link>
        </div>
        <div className="separator">- OR -</div>
        <button className="google-login">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Google Icon" />
          Log In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
