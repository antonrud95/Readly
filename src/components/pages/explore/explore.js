import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../../ui/activity-graph/activity';
import Progressbar from '../../ui/progressbar-component/progressbar';
import Genres from '../../ui/genres-component/genres';

import './explore.css';

const ExplorePage = () => {

    const [ button, setButton ] = useState({
        activeObject: null,
        objects: [{id: 1, name: 'Reviews'}, {id: 2, name: 'Books added'}, {id: 3, name: 'Discussions'}]
    })

    const toggleActive = index => {
        setButton({...button, activeObject: button.objects[index]})
    }

    const toggleActiveStyles = index => {
        if(button.objects[index] === button.activeObject) {
            return "buttons-active"
        } else {
            return "buttons-inactive"
        }
    }

    return (
        <div>
            <h2>Explore page does not exist yet...</h2>
            <div className="line-wrapper">
                <div className="line-wrapper__title">
                    <h2>Your reader activity</h2>
                    <h3>This month</h3>
                </div>
                <ActivityCard />
                <div className="buttons">
                    {button.objects.map((item, index) => (
                        <Link to="/explore/reader-activity" key={index} className={[toggleActiveStyles(index), 'button-default'].join(' ')} onClick={() => {toggleActive(index)}}>{item.name}</Link>
                        )
                    )}
                </div>
                {/* <div className="buttons">
                    <Link to="/explore/reader-activity" className="buttons-active button-default">Reviews</Link>
                    <Link to="/explore/reader-activity" className="buttons-inactive button-default">Books added</Link>
                    <Link to="/explore/reader-activity" className="buttons-inactive button-default">Discussions</Link>
                </div> */}
            </div>
            <div className="progress-wrapper">
                <Progressbar percentage={72} text={'72%'} pathColor={'#3B5DD6'} trailColor={'#EBEFF4'} textColor={'#1E2C40'}/>
                <Progressbar percentage={48} text={'48%'} pathColor={'#7BDFFF'} trailColor={'#EBEFF4'} textColor={'#1E2C40'}/>
                <Progressbar percentage={80} text={'80%'} pathColor={'#1E2C40'} trailColor={'#EBEFF4'} textColor={'#1E2C40'}/>
            </div>
            <div>
                <Genres />
            </div>
        </div>
    )
};

export default ExplorePage;