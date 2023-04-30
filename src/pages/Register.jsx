import { useCallback, useState } from "react";
import Logimage from "../images/log-image.jpg";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("You have signed up");
          navigate('/login', { replace: true } );

        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password, navigate]
  );


  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <div className="register-logo"> NOISE</div>
          <div className="register-header"> Create an account</div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>
          <div className="register-acc">
            Already have an account ?
            <Link to="/login" replace>
              Sign in
            </Link>
          </div>
        </div>
        <div className="register-img">
          <img src={Logimage} />
        </div>
      </div>
    </div>
  );
}

export default Register;
