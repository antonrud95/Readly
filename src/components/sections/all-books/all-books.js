import React from 'react';
import { useHistory } from "react-router-dom";

import './all-books.css';

const SeeAll = () => {
    let history = useHistory();
    return (
        <div className="shadow">
            <h2>Go away, there is no books here!</h2>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default SeeAll