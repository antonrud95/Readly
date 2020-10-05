import React from 'react';

import './best-reader.css';

const BestReader = ({url, title}) => {
    return (
        <div className="reader-wrapper">
            <div className="reader-wrapper__img">
                <img src={`${url}`} alt="oops"/>
            </div>
            <p>{title}</p>
        </div>
    )
}

export default BestReader