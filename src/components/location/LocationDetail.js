import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() => {
      props.history.push("/locations")
    })
  }

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.jpg")} alt="Business location" />
        </picture>
        <address>
          Visit Us at the {location.name} location.
        </address>
        <button disabled={isLoading} onClick={handleDelete}>Close location</button>
      </div>
    </div>
  );
}

export default LocationDetail;