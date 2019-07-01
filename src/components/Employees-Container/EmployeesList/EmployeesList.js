import React from "react";
import { Link } from "react-router-dom";
import "./EmployeesList.css";

function EmployeesList(props) {
  const employees = props.list;

  const [search, setSearch] = React.useState("");

  const filteredEmployees = employees.filter(employeeinfo => {
    return `${employeeinfo.name}${employeeinfo.points}`.includes(search);
  });

  return (
    <div>
      <div className="general_search_container">
        <form>
          <input
            className="general_search_bar"
            type="text"
            placeholder="Search by employee or points"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </div>
<div className="list_wrapper">
      <ul className="list_container">
        {filteredEmployees.map(employeeinfo => {
          return (
            <li className="list-item" key={employeeinfo.id}>
              <Link
                to={`/employees/${employeeinfo.id}`}
                className="link-preset list_profile_container"
              >
                <img
                  className="list_profile_image"
                  src={employeeinfo.imgSrc}
                  alt="Employee Profile"
                />
                <h3 className="list_profile_name">{employeeinfo.name}</h3>
                <div className="list_profile_points">
                  <p>
                    <span role="img" aria-label="star">
                      ⭐
                    </span>
                    {employeeinfo.points}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
</div>
    </div>
  );
}

export default EmployeesList;
