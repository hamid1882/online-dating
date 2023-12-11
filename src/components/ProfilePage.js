import React from "react";
import "./ProfilePage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function ProfilePage() {
  return (
    <div className="Profile-container">
      <div className="profile-box">
        <div className="profile-header">
      <img src="https://tse3.mm.bing.net/th?id=OIP.VN85t38TluFInvOv0cT5sgHaHX&pid=Api&P=0&h=180" className="App-logo" alt="logo" />
      <h1 >Hafeez</h1>
      </div>
      <p className="profile">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis corrupti
        delectus cumque in quas laborum dolore provident architecto natus, nobis
        est autem id explicabo accusamus ipsum aut exercitationem. Blanditiis,
        ut?
      </p>
      

    <div className="form-box">
    <div className="profile-label">
        <label htmlFor="profileName">Profile Name</label>
        <input
          placeholder="Hamid"
          className="input"
          type="text"
          required
        />
      </div>
      <div className="profile-label">
        <label htmlFor="seeking">Seeking</label>
        <input
          placeholder="Bride"
          className="input"
          type="password"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Caste">Caste</label>
        <input
          placeholder="xyz"
          className="input"
          type="text"
          required
        />
      </div>
      <div className="profile-label">
        <label htmlFor="Education">Education</label>
        <input
          placeholder="BE"
          className="input"
          type="password"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Age">Age</label>
        <input
          placeholder="21"
          className="input"
          type="text"
          required
        />
      </div>
      <div className="profile-label">
        <label htmlFor="Height">Height</label>
        <input
          placeholder="6.1 feet"
          className="input"
          type="password"
          required
        />
      </div>

      <Link to="/preferences">
            <button className="login-button">Edit Profile</button>
      </Link>

    </div>
    </div>
    </div>
  );
}

export default ProfilePage;
