import React from 'react';

import Input from '../input/input';
import UserImage from '../../../assets/images/header/user-image.png';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <Input />
            <div>
                <img src={UserImage} key={Date.now()} alt="User" />
            </div>
        </div>
    )
};

export default Header;