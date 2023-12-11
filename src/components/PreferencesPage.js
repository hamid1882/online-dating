import React from "react";
import  { useState } from "react";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./PreferencesPage.css";
import PersonalInformation from "./ui/PersonalInformation";
import FamilyPreferences from "./ui/FamilyPreferences";
import PartnerPreferences from "./ui/PartnerPreferences"
// PreferencesPage


function pref() {
  const [selectedPref, setSelectedPref] = useState("PersonalInformation");

const handleMenuItemClick = (section) => {
  setSelectedPref(section);
};

const renderContent = () => {
  switch (selectedPref) {
    case 'PersonalInformation':
      return <PersonalInformation />;
    case 'FamilyPreferences':
      return <FamilyPreferences />;
    case 'PartnerPreferences':
      return <PartnerPreferences/>;
    // case 'contact':
    //   return <div>Contact Us Content Goes Here</div>;
    default:
      return null;
  }

}
}
function PreferencesPage (){
    return (
        
            <div className="Preference-con">
        
           <div className="preference-box">
          
          <div className="per-head">
          {/* <h1>Marriage Preferences</h1> */}
         
          <img  className="App-logo" src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.388351199.1701500805&semt=sph" />
           <p className="profile" >some profile  inforamtion</p>
          </div>
          <div className="pre-buttons">
          <button className="pre-button " onClick={() => handleMenuItemClick('PersonalInformation')}>Personal Information</button>
          <button className="pre-button" onClick={() => handleMenuItemClick('FamilyPreferences')}>Family Preferences</button>
          <button className="pre-button" onClick={() => handleMenuItemClick('PartnerPreferences')}>Partner Preferences</button>
          <button className="pre-button">Additional Preferences</button>
          <button className="pre-button" >Privacy and Security</button>
          </div>
          {/* <PersonalInformation />
          <FamilyPreferences /> */}
          <div className="submit">
          <Link to="/preferences">
                    <button className="login-button">Submit Preferences Button</button>
              </Link>
             
          </div>
          
           </div>
           
            </div>
          
          );
        }




export default PreferencesPage;