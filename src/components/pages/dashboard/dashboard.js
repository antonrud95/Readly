import React, {useState, useEffect} from 'react';

import BooksCard from '../../ui/books-card/books-card';
import TopBook from '../../ui/book-of-the-day/top-book';
import BestBook from '../../ui/best-book-card/best-book-card';
import BestReader from '../../ui/best-reader/best-reader';

import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

import './dashboard.css';

import { Link } from 'react-router-dom';

const DashboardPage = () => {

  const [ books, setBooks ] = useState([]);
  const [ readings, setReadings ] = useState([]);
  const [ favourites, setFavourites ] = useState([]);
  const [ tops, setTops ] = useState([]);
  const [ bests, setBests ] = useState([]);
  const [ readers, setReaders ] = useState([]);

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('https://readly-mongo.herokuapp.com/books');
      const data = await response.json();
      setBooks(data);
      setLoading(true)
    }
    getBooks();

    const getReadings = async () => {
      const response = await fetch('https://readly-mongo.herokuapp.com/readings');
      const data = await response.json();
      setReadings(data);
      setLoading(true)
    }
    getReadings();

    const getFavourites = async () => {
      const response = await fetch('https://readly-mongo.herokuapp.com/favourites');
      const data = await response.json();
      setFavourites(data);
      setLoading(true)
    }
    getFavourites();

    const getTops = async () => {
      const response = await fetch('https://readly-mongo.herokuapp.com/tops');
      const data = await response.json();
      setTops(data);
      setLoading(true)
    }
    getTops();

    const getBests = async () => {
      const response = await fetch('https://readly-mongo.herokuapp.com/bests');
      const data = await response.json();
      setBests(data);
      setLoading(true)
    }
    getBests();

    const getReaders = async () => {
      const response = await fetch('https://readly-mongo.herokuapp.com/readers');
      const data = await response.json();
      setReaders(data);
      setLoading(true)
    }
    getReaders();
  }, []);
  
    return (
      <React.Fragment>
        {loading ? <div className="dash">
          <div className="first-col">
            <div className="collections">
              <div className="collections-title">
                <h3 className="dash-title">Popular collections</h3>
                <Link to="/dashboard/more-books" className="main-link">See more</Link>
              </div>
              <div className="items-wrapper">
                {books.map(book => 
                  <BooksCard
                  url={book.Image.url} 
                  title={book.Title}
                  key={book.id}
                  stylesWrapper="books-card-wrapper"
                  stylesWrapperContent="books-card-wrapper__content"
                  stylesWrapperTitle="books-card-wrapper__title"
                />
                )}
              </div>
            </div>
            <div className="tops">
              {tops.map(top =>
                <TopBook 
                url={top.Image.url}
                title={top.Title}
                author={top.Author}
                description={top.Description}
                key={Date.now()}
                /> 
              )}
            </div>
            <div className="best">
              {bests.map(best => 
                <BestBook
                  url={best.Image.url}
                  title={best.Title}
                  description={best.Description}
                  key={Math.random()}
                />)}
            </div>
          </div>
          <div className="second-col">
            <div className="readings">
              <div className="readings-title">
                <h3>People now reading</h3>
                <Link to="dashboard/more-books" className="main-link">See more</Link>
              </div>
              <div className="readings-wrapper">
                {readings.map(read => 
                  <BooksCard
                  url={read.Image.url} 
                  title={read.Title}
                  key={read.id}
                  author={read.Author}
                  stylesWrapper="readings-card-wrapper"
                />
                )}
              </div>
            </div>
            <div className="favourites">
              <div className="favourites-title">
                <h3>People added to favourites</h3>
                <Link to="dashboard/more-books" className="main-link">See more</Link>
              </div>
              <div className="favourites-wrapper">
                {favourites.map(favourite => 
                  <BooksCard
                  url={favourite.Img.url} 
                  title={favourite.Title}
                  key={favourite.id}
                  author={favourite.Author}
                  stylesWrapper="favourites-card-wrapper"
                />
                )}
              </div>
            </div>
            <div className="reader">
              <h3>Most active readers of the week</h3>
              <div className="reader-item-wrapper">
              {readers.map(reader => 
                <BestReader 
                  url={reader.Image.url}
                  title={reader.Title}
                  key={Math.random()}
                />)}
              </div>
            </div>
          </div>
        </div> :  <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
      </React.Fragment>
    )
};

export default DashboardPage;