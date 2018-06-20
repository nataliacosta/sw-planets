import React from 'react';
import './Box.css';
import loading1 from './loading-image-1.gif';
import loading2 from './loading-image-2.gif';
import loading3 from './loading-image-3.gif';

const Box = (props) => {
    if (props.fetching === false) {
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
        )
    } else {
        let rand = Math.floor((Math.random() * 3) + 1);
        if (rand === 1) {
            return (
                <div className="Box">
                    <div className="Loading1">
                        <img src={loading1} alt="Loading"/>
                    </div>
                </div>
            )
        }
        if (rand === 2) {
            return (
                <div className="Box">
                    <div className="Loading2">
                        <img src={loading2} alt="Loading"/>
                    </div>
                </div>
            )
        }
        if (rand === 3) {
            return (
                <div className="Box">
                    <div className="Loading3">
                        <img src={loading3} alt="Loading"/>
                    </div>
                </div>
            )
        }
    }
}

export default Box;
