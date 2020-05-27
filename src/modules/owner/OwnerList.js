import React, { useState, useEffect }  from 'react';
import OwnerCard from '../../components/owner/OwnerCard'
import OwnerManager from '../OwnerManager'

const OwnerList = () => {
    const [owners, setOwners] = useState([]);

    const getOwners = () => {
        return OwnerManager.getAll().then(ownersFromAPI => {
            setOwners(ownersFromAPI)
        })
    }

    useEffect(() => {
        getOwners()
    }, [])

    return (
        <div className="container-cards">
            {owners.map(owner => <OwnerCard id={owner.id} owner={owner} />)}
        </div>
    )
}

export default OwnerList