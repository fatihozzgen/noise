import React from "react";
import Logimage from "../images/log-image.jpg";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <div className="login-logo"> NOISE</div>
          <div className="login-header"> Create an account</div>

          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />

          <button className="login-button">Create Account</button>

          <div className="login-acc">
            Already have an account ? <strong>Log in</strong>
          </div>
        </div>
        <div className="login-img">
          <img src={Logimage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
