import React from 'react';

const API_URL = 'http://localhost:1337';
const formatImagwUrl = url => `${API_URL}${url}`;

const BestBook = ({url, title, description}) => {
    return (
        <div className="best-book-wrapper">
            <div className="best-book-wrapper__img">
                <img src={formatImagwUrl(url)} alt="oops"/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default BestBook