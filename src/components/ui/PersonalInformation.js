import React from "react";

const personal_info_data = [
  {
    id: 1,
    name: "Full Name",
    placeholder: "Hamid",
    type: "text",
  },
  {
    id: 2,
    name: "Gender",
    placeholder: "Male",
    type: "text",
  },
  {
    id: 3,
    name: "Date of Birth",
    placeholder: "18/07/2002",
    type: "date",
  },
  {
    id: 4,
    name: "Phone number",
    placeholder: "8393434839",
    type: "number",
  },
];

function PersonalInformation() {
  return (
    <div className="form-box">
      {personal_info_data.map((value) => (
        <div className="profile-label">
          <label htmlFor={value.name}>{value.name}</label>
          <input
            placeholder={value.placeholder}
            className="input"
            type={value.type}
            required
          />
        </div>
      ))}
    </div>
  );
}

export default PersonalInformation;
