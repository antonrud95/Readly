import React, { useState } from 'react';

import SearchIcon from '../../../assets/icons/header-icons/search.svg';
import './input.css';

const Input = () => {
    const [ focus, setFocus ] = useState(<div className="logo-wrapper"><img src={SearchIcon}  alt="logo" className="input-logo"/></div>);

    const focusedInput = () => {
        setFocus(null);
    }

    const bluredInput = () => {
        setFocus(<div className="logo-wrapper"><img src={SearchIcon}  alt="logo" className="input-logo"/></div>);
    }

    return (
        <div className="input-wrapper">
            <label htmlFor="input">
                {focus}
                <input type="text" placeholder="Search books, collections or users" id={focus ? "input" : "input-2" } onFocus={focusedInput} onBlur={bluredInput}/>
            </label>
        </div>
    )
};

export default Input;