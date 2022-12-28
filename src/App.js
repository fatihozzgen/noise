import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style/register.css";
import "./style/card.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kid from "./pages/Kid";
import Acc from "./pages/Acc";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
