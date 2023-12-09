import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Online Dating</h1>
          <Link to="/login">
            <button>Login/Signup</button>
          </Link>
        </header>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
