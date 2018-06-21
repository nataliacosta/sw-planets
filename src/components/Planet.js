import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Planet.css';

const Planet = (props) => {
    return (
    <div>
        <div className="PlanetName">
            {props.planet.name}
        </div>
        <div className="Others">
            <div>
                Population: {props.planet.population}
            </div>
            <div>
                Climate: {props.planet.climate}
            </div>
            <div>
                Terrain: {props.planet.terrain}
            </div>
            <div className="Featured">
                Featured in {(props.planet.films === undefined ? "0" : props.planet.films.length)} films
            </div>
        </div>
    </div>
    )
}

Planet.PropTypes = {
    planet: PropTypes.object,
}

export default Planet;
