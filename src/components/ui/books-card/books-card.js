import React from 'react';

const BooksCard = ({title, url, author, stylesWrapper, stylesWrapperContent, stylesWrapperTitle}) => {
    return (
        <div className={stylesWrapper}>
            <div className={stylesWrapperContent}>
                <img src={`${url}`} alt="oops"/>
            </div>
            <div className={stylesWrapperTitle}>
                <h4>{title}</h4>
                {author && <p>{author}</p>}
            </div>
        </div>
    );
};

export default BooksCard