import React from "react";
import "./EmployeeProfile.css";

class EmployeeProfile extends React.Component {
  render() {
    return (
      <div className="profile_container">
        <div>
          <img className="profile_image" src={this.props.imgSrc} alt="Profile" />
        </div>
        <div>
          <h3 className="profile_name">{this.props.name}</h3>
        </div>
        <div className="profile_points">
          <p>
            <span role="img" aria-label="star">
              ⭐
            </span>
            <b>{this.props.points}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default EmployeeProfile;
