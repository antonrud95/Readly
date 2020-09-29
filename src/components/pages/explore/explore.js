import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../../ui/activity-graph/activity';
import Progressbar from '../../ui/progressbar-component/progressbar';
import Genres from '../../ui/genres-component/genres';

import './explore.css';

const ExplorePage = () => {
    return (
        <div>
            <h2>Explore page does not exist yet...</h2>
            <div className="line-wrapper">
                <div className="line-wrapper__title">
                    <h2>Your reader activity</h2>
                    <h3>This month</h3>
                </div>
                <ActivityCard />
                <div className="line-wrapper-buttons">
                    <Link to="/explore/reader-activity" className="line-wrapper-buttons__link">Reviews</Link>
                    <Link to="/explore/reader-activity" className="line-wrapper-buttons__link">Books added</Link>
                    <Link to="/explore/reader-activity" className="line-wrapper-buttons__link">Discussions</Link>
                </div>
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