import React from 'react';

const BestBook = ({url, title, description}) => {
    return (
        <div className="best-book-wrapper">
            <div className="best-book-wrapper__img">
                <img src={`${url}`} alt="oops"/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default BestBook