import React from "react";
import "./achievements.css";

const Achievements = ({ points, name }) => {
  return (
    <div className="achievement_data_container">
      <p>
        <b>Name:</b>
      </p>
      <p>{name} </p>
      <p>
        <b>Points:</b>
      </p>
      <p>
        <span role="img" aria-label="star">
          ⭐
        </span>{" "}
        <b>{points} </b>
      </p>
    </div>
  );
};

export default Achievements;
