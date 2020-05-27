import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.jpg")} alt="Business location" />
        </picture>
        <address>
          Visit Us at the {props.location.name} location.
        </address>
      </div>
    </div>
  );
};

export default LocationCard;
