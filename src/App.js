import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style/login.css";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
