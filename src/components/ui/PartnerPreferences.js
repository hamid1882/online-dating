import React from "react";



 function PartnerPreferences(){
    return(
   <div className="form-box">
     <div className="profile-label">
        <label htmlFor="Religious Background">Religious Background</label>
        <input
          placeholder=" No Religious Background"
          className="input"
          type="text"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Preferred Partner Gender">Preferred Partner Gender</label>
        <input
          placeholder="Bride"
          className="input"
          type="text"
          required
        />
      </div>


      <div className="profile-label">
        <label htmlFor="Age Range of Preferred Partner">Age Range of Preferred Partner</label>
        <input
          placeholder="21 to 26"
          className="input"
          type="text"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Cultural Preferences">Cultural Preferences</label>
        <input
          placeholder="No Cultural Preferences "
          className="input"
          type="text"
          required
        />
      </div>

      </div>
    );


 }


export default PartnerPreferences;
