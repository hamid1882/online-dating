import React from "react";



 function PersonalInformation(){
    return(
   <div className="form-box">
     <div className="profile-label">
        <label htmlFor="Full name">Full name</label>
        <input
          placeholder="Hamid k"
          className="input"
          type="text"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Gender">Gender</label>
        <input
          placeholder="Bride"
          className="input"
          type="text"
          required
        />
      </div>


      <div className="profile-label">
        <label htmlFor="Date of birth">Date of birth</label>
        <input
          placeholder="Hamid k"
          className="input"
          type="text"
          required
        />
      </div>

      <div className="profile-label">
        <label htmlFor="Phone">Phone number</label>
        <input
          placeholder="7789456123"
          className="input"
          type="text"
          required
        />
      </div>

      </div>
    );


 }


export default PersonalInformation;
