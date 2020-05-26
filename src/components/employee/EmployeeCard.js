import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
            <img src={require("./employee.png")} alt="Employee" />
        </picture>
          <h3>
              Employee Name
          </h3>
          <p>Hired on: date</p>
          <p>Location: location</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
