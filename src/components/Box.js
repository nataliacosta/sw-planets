import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Box.css';
import Planet from './Planet'
import Loading from './Loading';
import Error from './Error';

const Box = (props) => {
    return (
        <div className="Box">
            {props.error ? <Error /> : (props.fetching ? <Loading /> : <Planet planet={props.planet}/>)}
        </div>
    )
}

Box.PropTypes = {
    error: PropTypes.bool,
    fetching: PropTypes.bool,
    planet: PropTypes.object,
}

export default Box;
