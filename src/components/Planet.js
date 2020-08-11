import React from 'react'

const Planet = ({ planet }) => {
    return (
        <div className="card" >
            <h3>{planet.name}</h3>
            <p>population - {planet.population}</p>
            <p>terrain - {planet.terrain} </p>
        </div>
    )
}

export default Planet
