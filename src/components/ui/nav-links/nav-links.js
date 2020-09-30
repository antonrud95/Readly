import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-links.css';

import icon from '../../../assets/icons/logo-icon/logo.svg';

// import icon1 from '../../../assets/icons/nav-icons/1.svg';
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 5V19H21V5H3ZM7 17H9V11H7V17ZM13 17H11V7H13V17ZM15 17H17V10H15V17Z" fill="#8493A9" className="svg-icon"/>
                        </svg>
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