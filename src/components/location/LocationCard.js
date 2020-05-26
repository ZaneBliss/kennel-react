import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.jpg")} alt="Business location" />
        </picture>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>
    </div>
  );
};

export default LocationCard;
