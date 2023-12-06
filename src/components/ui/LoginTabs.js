import React from "react";

function LoginTabs({ selectedTab, setSelectedTab }) {
  return (
    <div className="Login-Tabs-Box">
      <button
        onClick={() => setSelectedTab("login")}
        className={`button Login-Tab ${
          selectedTab === "login" ? "Selected" : ""
        }`}
      >
        Login
      </button>
      <button
        onClick={() => setSelectedTab("signup")}
        className={`button Signup-Tab ${
          selectedTab === "signup" ? "Selected" : ""
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}

export default LoginTabs;
