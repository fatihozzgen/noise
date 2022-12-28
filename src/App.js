import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style/register.css";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
