import React from "react";



 function FamilyPreferences(){
    return(
   <div className="form-box">
     <div className="profile-label">
        <label htmlFor="Family Background">Family Background</label>
        <input
          placeholder="Eduction"
          className="input"
          type="text"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Family Involvement">Family Involvement</label>
        <input
          placeholder="No Involvement"
          className="input"
          type="text"
          required
        />
      </div>


      <div className="profile-label">
        <label htmlFor="Marital Status">Marital Status</label>
        <input
          placeholder="No Preference"
          className="input"
          type="text"
          required
        />
      </div>

      

      </div>
    );


 }


export default FamilyPreferences ;
