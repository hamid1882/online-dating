import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="form-box">
      <div>
        <label htmlFor="email">Email/Username</label>
        <input
          placeholder="user@gmail.com"
          className="input"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          placeholder="User@password123"
          className="input"
          type="password"
          required
        />
      </div>
      <div className="Button-box">
        <Link to="/profile">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
