import React from 'react';

import './social-activity.css';

const API_URL = 'http://localhost:1337';
const formatImagwUrl = url => `${API_URL}${url}`;

const SocialCard = ({url, text, desc}) => {
    return (
        <div className="social-wrapper-card">
            <div className="social-wrapper-img">
                <img src={formatImagwUrl(url)} alt="oops"/>
            </div>
            <h4 className="social-text">{text}</h4>
            <p className="social-desc">{desc}</p>
        </div>
    )
}

export default SocialCard;