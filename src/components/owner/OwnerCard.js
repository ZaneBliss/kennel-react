import React from "react"

const OwnerCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./owner.png")} alt="Pet owner" />
                </picture>
                <h3>
                    Name: Owner name
                </h3>
                <p>
                    Phone number: ###-###-####
                </p>
                <p>
                    Pet: petName
                </p>
            </div>
        </div>
    )
}

export default OwnerCard