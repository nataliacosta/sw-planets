import React from 'react';
import error from './../assets/error.gif';
import './../styles/Error.css';

const Error = () => {
    return (
        <div className="Error">
            <img src={error} alt="Error"/>
            <p>
                Ops, the API's dark side won! :(
            </p>
            <p>
                Please, try again.
            </p>
        </div>
    )
}

export default Error;
