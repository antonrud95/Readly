import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './progressbar.css';

const Progressbar = ({percentage, text, pathColor, trailColor, textColor}) => {
    // const percentage = 48;
    return (
        <div className='progress'>
            <CircularProgressbar 
            value={percentage} 
            text={text} 
            styles={buildStyles({
                // Colors
                pathColor: pathColor,
                trailColor: trailColor,
                textColor: textColor,
              })}
            />;
        </div>
        
    )
}

export default Progressbar
