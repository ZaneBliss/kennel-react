import React from "react"

const OwnerCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./owner.png")} alt="Pet owner" />
                </picture>
                <h3>
                    {props.owner.name}
                </h3>
                <p>
                    Phone number: {props.owner.phoneNumber}
                </p>
                <button type="button" onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>Edit</button>
                <button type="submit" onClick={() => props.deleteOwner(props.owner.id)}>Remove owner</button>
            </div>
        </div>
    )
}

export default OwnerCard