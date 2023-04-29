import { useCallback, useState } from "react";
import Logimage from "../images/log-image.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.user);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // alert("Giriş Yapildi");
          navigate('/');

          dispatch(setUser(false));
        })
        .then()
        .catch(() => {
          alert("Kullanici adi veya şifre yanliş");
        });
    },
    [email, password]
  );
  console.log(user);

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <div className="register-logo"> NOISE</div>
          <div className="register-header">Log in</div>
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
            Don't have an account?
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
