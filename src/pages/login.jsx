import React from "react";
import Logimage from "../images/log-image.jpg";

function Login() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <div className="register-logo"> NOISE</div>

          <input placeholder="Email" />
          <input placeholder="Password" />

          <button className="register-button">Log in</button>
        </div>
        <div className="register-img">
          <img src={Logimage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
