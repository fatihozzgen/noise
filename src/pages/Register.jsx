import React from "react";
import Logimage from "../images/log-image.jpg";

function register() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <div className="register-logo"> NOISE</div>
          <div className="register-header"> Create an account</div>

          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />

          <button className="register-button">Create Account</button>

          <div className="register-acc">
            Already have an account ? <strong>Log in</strong>
          </div>
        </div>
        <div className="register-img">
          <img src={Logimage} />
        </div>
      </div>
    </div>
  );
}

export default register;
