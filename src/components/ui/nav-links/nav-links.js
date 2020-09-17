import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-links.css';

import icon from '../../../assets/icons/logo-icon/logo.svg';

import icon1 from '../../../assets/icons/nav-icons/1.svg';
import icon2 from '../../../assets/icons/nav-icons/2.svg';
import icon3 from '../../../assets/icons/nav-icons/3.svg';
import icon4 from '../../../assets/icons/nav-icons/4.svg';
import icon5 from '../../../assets/icons/nav-icons/5.svg';
import icon6 from '../../../assets/icons/nav-icons/6.svg';
import icon7 from '../../../assets/icons/nav-icons/7.svg';
import icon8 from '../../../assets/icons/nav-icons/8.svg';
import icon9 from '../../../assets/icons/nav-icons/9.svg';



const NavLinks = () => {
    
    return (
        <ul className="nav-links">
            <div className="nav-upper">
                <li>
                    <NavLink to="/" className='nav-item nav-first'>
                        <img src={icon}  alt="logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className='nav-item item'>
                        <img src={icon1}  alt="logo" className='img-logo'/>
                        <p>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/explore" className='nav-item item'>
                        <img src={icon2}  alt="logo" className='img-logo'/>
                        <p>Explore</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/library" className='nav-item item'>
                        <img src={icon3}  alt="logo" className='img-logo'/>
                        <p>Library</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/authors" className='nav-item item'>
                        <img src={icon4}  alt="logo" className='img-logo'/>
                        <p>Authors</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/suggestions" className='nav-item item'>
                        <img src={icon5}  alt="logo" className='img-logo'/>
                        <p>Suggestions</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reviews" className='nav-item item'>
                        <img src={icon6}  alt="logo" className='img-logo'/>
                        <p>Reviews</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activity" className='nav-item item'>
                        <img src={icon7}  alt="logo" className='img-logo'/>
                        <p>Activity</p>
                    </NavLink>
                </li>
            </div>
        
            <div className='nav-lower'>
                <li>
                    <NavLink to="/settings" className='nav-item bottom-item-1'>
                        <img src={icon8}  alt="logo" className='img-logo'/>
                        <p>Settings</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/support" className='nav-item bottom-item-2'>
                        <img src={icon9}  alt="logo" className='img-logo'/>
                        <p>Support</p>
                    </NavLink>
                </li>
            </div>
        </ul>
    );
};

export default NavLinks;