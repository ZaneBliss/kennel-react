import React, { useState, useEffect } from "react";
import LocationCard from "../../components/location/LocationCard";
import LocationManager from "../LocationManager";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAll().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };
  const deleteLocation = (id) => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAll().then(setLocations)
    );
  };

  useEffect(() => {
    getLocations()
  }, []);

  
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          onClick={() => {
            props.history.push("locations/new");
          }}
        >
          New location
        </button>
      </section>
      <div className="container-cards">
        {
          locations.map((loc) => (
      <LocationCard
            key={loc.id}
            loc={loc}
            deleteLocation={deleteLocation}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default LocationList;
