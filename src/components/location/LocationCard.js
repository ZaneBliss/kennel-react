import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.jpg")} alt="Business location" />
        </picture>
        <address>
          Visit Us at the {props.loc.name} {props.loc.address}{" "}
          location.
        </address>
        <button
          type="button"
          onClick={() => props.history.push(`/locations/${props.loc.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="submit"
          onClick={() => props.deleteLocation(props.loc.id)}
        >
          Remove location
        </button>
        <Link to={`/locations/${props.loc.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
