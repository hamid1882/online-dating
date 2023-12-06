import React from "react";

function LoginForm() {
  return (
    <div>
      <h1>Login Form</h1>
      <input className="input-text" type="text"  required placeholder="user@gamil.com"/>
      <br/>
      <input className="input-text"  type="password" required placeholder="user@gamil123456" />
      <br/>
      <button  className="login-button">Login</button>
    </div>
  );
}

export default LoginForm;
