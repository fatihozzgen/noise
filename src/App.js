import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style/register.css";
import "./style/favorite.css";
import "./style/card.css";
import "./style/basket.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kid from "./pages/Kid";
import Acc from "./pages/Acc";
import Basket from "./pages/Basket";
import Favorite from "./pages/Favorite";
import ChangePass from "./pages/ChangePass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="kid" element={<Kid />} />
          <Route path="accessories" element={<Acc />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="basket" element={<Basket />} />
          <Route path="change-password" element={<ChangePass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
