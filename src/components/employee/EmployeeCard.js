import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
            <img src={require("./employee.png")} alt="Employee" />
        </picture>
          <h3>
              {props.employee.name}
          </h3>
          <button type="button" onClick={() => props.deleteEmployee(props.employee.id) }>Fire employee</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
