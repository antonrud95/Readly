import React from 'react';

import './top-book.css';

const API_URL = 'http://localhost:1337';
const formatImagwUrl = url => `${API_URL}${url}`;

const TopBook = ({url, title, author, description}) => {
    return (
        <div className="tops-wrapper">
            <div className="tops-wrapper__image">
                <img src={formatImagwUrl(url)} alt="oops"/>
            </div>
            <div className="tops-wrapper__content">
                <div className="tops-wrapper__content-title">
                    <h3>{title}</h3>
                    <p>Book of the day</p>
                </div>
                <h5>{author}</h5>
                <p>{description}</p>
            </div>
        </div>
    ); 
}

export default TopBook