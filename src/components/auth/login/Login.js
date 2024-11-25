// src/Login.js
import React, { useState } from "react";
import "../login/Login.css";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  
  const [message, setMessage] = useState("");
const go =()=>{
  navigate("/addproperty")
}
  

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="top"></div>
        <h2>Login</h2>
        <p>Your properties, managed in one place. Welcome Back!</p>
        <form>
          <div className="input-container">
            {/* Email Input */}
            <div className="input-wrapper">
              <FaEnvelope
                style={{ color: "#A40F11", width: "20px", height: "20px" }}
              />
              <input type="email" placeholder="Email" className="input-field" />
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
             <Link to="/passwordchange"><span className="forgot-link">Forgot?</span></Link> 
            </div>
          </div>{" "}
          <div className="check">
            <label>
              <input type="checkbox" />I agree to the Terms of Service and
              Privacy Policy
            </label>
          </div>
          <button type="submit" className="login-btn" onClick={go}>
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
          <Link to="/signup" >Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
