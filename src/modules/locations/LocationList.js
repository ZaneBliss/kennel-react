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

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard />)}
        </div>
    )
}

export default LocationList