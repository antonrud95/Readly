import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './genres.css';

const Genres = () => {
    return (
        <div className='genres'>
            <CircularProgressbarWithChildren
                value={100}
                counterClockwise={true}
                styles={buildStyles({
                    // Colors
                    pathColor: '#7BDFFF',
                    trailColor: 'transparent',
                })}
                className='parent'
            >
                <CircularProgressbar 
                    value={27}
                    counterClockwise={true} 
                    className='child-first' 
                    styles={buildStyles({
                        // Colors
                        pathColor: '#3B5DD6',
                        trailColor: 'transparent',
                    })}
                />
                <CircularProgressbar 
                    value={23}
                    counterClockwise={true} 
                    className='child-sec' 
                    styles={buildStyles({
                        // Colors
                        pathColor: '#8EA0FF',
                        trailColor: 'transparent',
                        rotation: 0.77
                    })}
                />
                <CircularProgressbar 
                    value={17}
                    counterClockwise={true} 
                    className='child-second' 
                    styles={buildStyles({
                        // Colors
                        pathColor: '#7BDFFF',
                        trailColor: 'transparent',
                        rotation: 0.5,
                    })}
                />
                <CircularProgressbar 
                    value={18}
                    counterClockwise={true} 
                    className='child-third' 
                    styles={buildStyles({
                        // Colors
                        pathColor: '#38C7E7',
                        trailColor: 'transparent',
                        rotation: 0.33,
                    })}
                />
                <CircularProgressbar 
                    value={15}
                    counterClockwise={true} 
                    className='child-fourth' 
                    styles={buildStyles({
                        // Colors
                        pathColor: '#1E2C40',
                        trailColor: 'transparent',
                        rotation: 0.15
                    })}
                />
            </CircularProgressbarWithChildren>
            <p className="first">15%</p>
            <p className="second">18%</p>
            <p className="third">17%</p>
            <p className="fourth">23%</p>
            <p className="fifth">27%</p>
        </div>
    )
}

export default Genres

