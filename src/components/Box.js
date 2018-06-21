import React from 'react';
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

export default Box;
