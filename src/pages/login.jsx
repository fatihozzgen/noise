import { useCallback, useState } from "react";
import Logimage from "../images/log-image.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Giriş Yapıldı");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <div className="register-logo"> NOISE</div>
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
              Log in
            </button>
          </form>
          <div className="sign-text">
            Don't have an account?{" "}
            <Link to="/register" replace>
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

export default Login;
