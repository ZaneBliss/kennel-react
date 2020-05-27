import React from "react";
import { Link } from "react-router-dom"

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
        <button type="submit" onClick={() => props.deleteLocation(props.location.id)}>Remove location</button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
