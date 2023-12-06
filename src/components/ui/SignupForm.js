import React from "react";

function SignupForm() {
  return (
    <div>
      <h1>Signup Form</h1>
      <input className="input-text" type="text"  required placeholder="user@gamil.com" />
      <input className="input-text"  type="password" required placeholder="user@gamil123456" />
      <button className="login-button">Sign Up</button>
    </div>
  );
}

export default SignupForm;
