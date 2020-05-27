import React from "react"

const OwnerCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./owner.png")} alt="Pet owner" />
                </picture>
                <h3>
                    Name: {props.owner.name}
                </h3>
                <p>
                    Phone number: {props.owner.phoneNumber}
                </p>
            </div>
        </div>
    )
}

export default OwnerCard