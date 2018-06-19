import React from 'react';
import './Box.css';

const Box = (props) => {
    return (
      <div className="Box">
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
    );
  }

export default Box;
