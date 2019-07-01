import React from "react";
import "./EmployeePricesList.css"

function EmployeePrizesList(props) {
  return (
    <div className="prizeslist-wrapper">
      <h2>Available Prizes</h2>
      <ul className="prizelist_container">
        {props.list.map(prizeinfo => {
          return (
            <li key={prizeinfo.id} className="prizelist_info_container">
              <img className="prizelist_image" src={prizeinfo.imgSrc} alt="Prize" />
              <h4 className="prizelist_name">{prizeinfo.name}</h4>
              <p className="prizelist_points">
                <span role="img" aria-label="star">
                  ⭐
                </span>
                {prizeinfo.points}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmployeePrizesList;
