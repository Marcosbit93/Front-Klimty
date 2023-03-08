import React from "react";

const Profile = () => {
    return (
      <div className="userProfileView">
        <div className="userProfileImage">
            <img className="userProfileImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile avatar"/>
        </div>
        <div className="userProfileInfo">
          <h4>User info</h4>
          <label class="">Change firstname</label>
          <input type="text" class="inputForm"></input>
          <label class="">Change lastname</label>
          <input type="text" class="inputForm"></input>
          <label class="">Change email</label>
          <input type="text" class="inputForm"></input>
        </div>
        <div className="userProfileSecurity">
          <h4>Security</h4>
          <label class="">Current password</label>
          <input type="password" class="inputForm"></input>
          <label class="">New password</label>
          <input type="password" class="inputForm"></input>
          <button type="submit" class="btn">Submit</button>
        </div>
      </div>
    )
}

export default Profile