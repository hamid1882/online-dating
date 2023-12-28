import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Preferencespage from "./components/PreferencesPage";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div className="header-container">

          <img src={logo} className="App-logo" alt="logo" />
          <h1>Online Dating</h1>
          </div>
     
          <Link to="/login">
            <button className="login-button">Login/Signup</button>
          </Link>
        </header>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/preferences" element={<Preferencespage />} />

        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
