import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "" });

  useEffect(() => {
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.jpg")} alt="Business location" />
        </picture>
        <address>
          Visit Us at the {location.name} location.
        </address>
      </div>
    </div>
  );
}

export default LocationDetail;