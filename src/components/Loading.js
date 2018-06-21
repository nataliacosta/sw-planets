import React from 'react';
import loading1 from './../assets/loading-image-1.gif';
import loading2 from './../assets/loading-image-2.gif';
import loading3 from './../assets/loading-image-3.gif';
import './../styles/Loading.css';

const Loading = () => {
    let rand = Math.floor((Math.random() * 3) + 1);
    const className = "Loading" + rand;
    let img;
    switch (rand) {
        default:
            img = loading1;
            break;
        case 2:
            img = loading2;
            break;
        case 3:
            img = loading3;
            break;
    }
    return (
        <div className={className}>
            <img src={img} alt="Loading"/>
        </div>
    )
}

export default Loading;
