import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Online Dating</h1>
      </header>
      <LoginPage />
    </div>
  );
}

export default App;
