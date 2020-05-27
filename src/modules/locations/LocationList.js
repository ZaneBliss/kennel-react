import React, { useState, useEffect }  from 'react';
import LocationCard from '../../components/location/LocationCard'
import LocationManager from '../LocationManager'

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }
    const deleteLocation = id => {
        LocationManager.delete(id)
          .then(() => LocationManager.getAll().then(setLocations));
      };

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard 
            key={location.id} 
            location={location}
            deleteLocation={deleteLocation}
             />)}
        </div>
    )
}

export default LocationList