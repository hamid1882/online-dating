import React, { useState } from "react";
import LoginTabs from "./ui/LoginTabs";
import LoginForm from "./ui/LoginForm";
import SignupForm from "./ui/SignupForm";

function LoginPage() {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <div className="Login-page">
      <div className="Login-box">
        <LoginTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default LoginPage;
