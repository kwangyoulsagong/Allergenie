import React from "react";
import MyImage from "../img/profile.svg";

const MyProfile = ({ username, email }) => {
  return (
    <div>
      <div className="MyIcon">
        <img src={MyImage} alt="Profile Icon" />
      </div>
      <p className="MyProfile-username">{username}님,</p>
      <p className="MyProfile-email">{email}</p>
    </div>
  );
};

export default MyProfile;
