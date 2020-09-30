import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityCard from '../../ui/activity-graph/activity';
import Progressbar from '../../ui/progressbar-component/progressbar';
import Genres from '../../ui/genres-component/genres';
import SocialCard from '../../ui/social-activity/social-activity';

import BooksCard from '../../ui/books-card/books-card';

import './explore.css';

const ExplorePage = () => {
    const [ activities, setActivities] = useState([]);
    const [ recentlyRead, setRecentlyRead] = useState([]);

    useEffect(() => {
        //Add strapi content
        const getSocial = async () => {
            const response = await fetch('http://localhost:1337/social-activities');
            const data = await response.json();
            setActivities(data);
            setLoading(true)
          }
          getSocial();
        const getRead = async () => {
            const response = await fetch('http://localhost:1337/recently-reads');
            const data = await response.json();
            setRecentlyRead(data);
            setLoading(true)
          }
          getRead();
    }, [])

    //add activity buttons
    const [ button, setButton ] = useState({
        activeObject: null,
        objects: [{id: 1, name: 'Reviews'}, {id: 2, name: 'Books added'}, {id: 3, name: 'Discussions'}],
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

    //Add authors
    const authors = ['Edgar Allan Poe', 'Ray Bradbury', 'Haruki Murakami', 'Stephen King', 'J.K. Rowling', 'J.R.R. Tolkien', 'Charles Palahniuk', 'Johann Goethe'];

    //Add spinner condition
    const [ loading, setLoading ] = useState(false);


    return (
        <div className="explore">
            <h2 className="upper-title">Dashboard</h2>
            <div className="lower-title">
                <p><span>Now reading:</span>Dandelion Wine, Ray Bradbury</p>
                <p><span>Reader status:</span>Master</p>
                <p><span>Readers top:</span>127 place</p>
            </div>
            <div className="explore-wrapper">
                <div className="first-column">
                    <div className="progress-wrapper">
                        <div className="progress-title">
                            <h3>Your goals</h3>
                            <Link to="/explore/all-goals" className="progress-title__link">See more</Link>
                        </div>
                        <div className="progress-cards">
                            <div className="progress-card">
                                <p>Read 40 books a year</p>
                                <Progressbar percentage={72} text={'72%'} pathColor={'#3B5DD6'} trailColor={'#EBEFF4'} textColor={'#1E2C40'}/>
                            </div>
                            <div className="progress-card">
                                <p>Read 10 business books</p>
                                <Progressbar percentage={48} text={'48%'} pathColor={'#7BDFFF'} trailColor={'#EBEFF4'} textColor={'#1E2C40'}/>
                            </div>
                            <div className="progress-card">
                                <p>Read 15 biographies</p>
                                <Progressbar percentage={80} text={'80%'} pathColor={'#1E2C40'} trailColor={'#EBEFF4'} textColor={'#1E2C40'}/>
                            </div>
                        </div>
                    </div>
                    <div className="social-wrapper">
                        <div className="progress-title">
                            <h3>Social activity</h3>
                            <Link to="/explore/all-goals" className="progress-title__link">See more</Link>
                        </div>
                        {!loading ? <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </Spinner> : 
                        activities.map(item => 
                            <SocialCard 
                            url={item.logo.url}
                            text={item.text}
                            desc={item.desc}
                            key={item.id}
                            />
                        )}
                    </div>
                    <div className="line-wrapper">
                        <div className="line-wrapper__title">
                            <h2>Your reader activity</h2>
                            <h3>This month</h3>
                        </div>
                        <ActivityCard />
                        <div className="buttons">
                            {button.objects.map((item, index) => (
                                <Link to="/explore" key={index} className={[toggleActiveStyles(index), 'button-default'].join(' ')} onClick={() => {toggleActive(index)}}>{item.name}</Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="recentry-read-wrapper">
                    <div className="progress-title recently-title">
                            <h3>Recently read</h3>
                            <Link to="/explore/all-goals" className="progress-title__link">See more</Link>
                        </div>
                        <div className="recentry-read-items">
                            {!loading ? <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                    </Spinner> :
                            recentlyRead.map(item => 
                                <BooksCard 
                                stylesWrapper={'recentry-read-item'}
                                stylesWrapperContent={'recentry-read-img'}
                                stylesWrapperTitle={'recentry-read-title'}
                                url={item.image.url}
                                title={item.title}
                                author={item.description}
                                />)}
                        </div>
                    </div>
                    <div className="genres-wrapper">
                        <div className="progress-title genres-title">
                            <h3>Favourite genres</h3>
                            <Link to="/explore/all-goals" className="progress-title__link">See more</Link>
                        </div>
                        <div className="progressbar">
                            <Genres />
                            <div className="genres-description">
                                <div className="genres-description__title">
                                    <h3>Diagram based ob books that you’ve read
                                    and added to “to read” list.</h3>
                                </div>
                                <div className="genres-description__content">
                                    <div className="genres-description__content-item">
                                        <span className="first-span span"/>
                                        <p>Science fiction</p>
                                    </div>
                                    <div className="genres-description__content-item">
                                        <span className="second-span span"/>
                                        <p>Adventures</p>
                                    </div>
                                    <div className="genres-description__content-item">
                                        <span className="third-span span"/>
                                        <p>Psychology</p>
                                    </div>
                                    <div className="genres-description__content-item">
                                        <span className="fourth-span span"/>
                                        <p>Philosophy</p>
                                    </div>
                                    <div className="genres-description__content-item">
                                        <span className="fifth-span span"/>
                                        <p>Fantasy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="authors">
                        <h3>Favourite authors</h3>
                        <div className="authors-content">
                            {authors.map(item =>
                                    <p className="authors-content__card">{item}</p>
                                ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ExplorePage;