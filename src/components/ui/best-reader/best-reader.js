import React from 'react';

import './best-reader.css';

const API_URL = 'http://localhost:1337';
const formatImagwUrl = url => `${API_URL}${url}`;

const BestReader = ({url, title}) => {
    return (
        <div className="reader-wrapper">
            <div className="reader-wrapper__img">
                <img src={formatImagwUrl(url)} alt="oops"/>
            </div>
            <p>{title}</p>
        </div>
    )
}

export default BestReader