import React from "react";

function SignupForm() {
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
        <button className="login-button">Register</button>
      </div>
    </div>
  );
}

export default SignupForm;
