import React, {useState, useEffect} from 'react';

import BooksCard from '../../ui/books-card/books-card';
import TopBook from '../../ui/book-of-the-day/top-book';
import BestBook from '../../ui/best-book-card/best-book-card';
import BestReader from '../../ui/best-reader/best-reader';

// import SeeAll from '../../sections/all-books/all-books';

import LoadingImg from '../../../assets/images/loading-image/loading.png';

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



  // useEffect(() => {
  //   const getBooks = async () => {
  //     const response = await fetch('http://localhost:1337/books');
  //     const data = await response.json();
  //     setBooks(data);
  //   }
  //   getBooks();
  // }, []);

  // useEffect(() => {
  //   const getReadings = async () => {
  //     const response = await fetch('http://localhost:1337/readings');
  //     const data = await response.json();
  //     setReadings(data);
  //   }
  //   getReadings();
  // }, []);

  // useEffect(() => {
  //   const getFavourites = async () => {
  //     const response = await fetch('http://localhost:1337/favourites');
  //     const data = await response.json();
  //     setFavourites(data);
  //   }
  //   getFavourites();
  // }, []);

  // useEffect(() => {
  //   const getTops = async () => {
  //     const response = await fetch('http://localhost:1337/tops');
  //     const data = await response.json();
  //     setTops(data);
  //   }
  //   getTops();
  // }, []);

  // useEffect(() => {
  //   const getBests = async () => {
  //     const response = await fetch('http://localhost:1337/bests');
  //     const data = await response.json();
  //     setBests(data);
  //   }
  //   getBests();
  // }, []);

  // useEffect(() => {
  //   const getReaders = async () => {
  //     const response = await fetch('http://localhost:1337/readers');
  //     const data = await response.json();
  //     setReaders(data);
  //   }
  //   getReaders();
  // }, []);






  // useEffect(() => {
  //   const getBooks = async () => {
  //     const response = await fetch('http://localhost:1337/books');
  //     const data = await response.json();
  //     setBooks(data);
  //   }
  //   getBooks();
  //   setLoading(true)

  //   const getReadings = async () => {
  //     const response = await fetch('http://localhost:1337/readings');
  //     const data = await response.json();
  //     setReadings(data);
  //   }
  //   getReadings();
  //   setLoading(true)

  //   const getFavourites = async () => {
  //     const response = await fetch('http://localhost:1337/favourites');
  //     const data = await response.json();
  //     setFavourites(data);
  //   }
  //   getFavourites();
  //   setLoading(true)

  //   const getTops = async () => {
  //     const response = await fetch('http://localhost:1337/tops');
  //     const data = await response.json();
  //     setTops(data);
  //   }
  //   getTops();
  //   setLoading(true)

  //   const getBests = async () => {
  //     const response = await fetch('http://localhost:1337/bests');
  //     const data = await response.json();
  //     setBests(data);
  //   }
  //   getBests();
  //   setLoading(true)

  //   const getReaders = async () => {
  //     const response = await fetch('http://localhost:1337/readers');
  //     const data = await response.json();
  //     setReaders(data);
  //   }
  //   getReaders();
  //   setLoading(true)
  // }, []);


  const fetchData = () => {
    const getBooks = async () => {
      const response = await fetch('http://localhost:1337/books');
      const data = await response.json();
      setBooks(data);
    }
    getBooks();
    setLoading(true)

    const getReadings = async () => {
      const response = await fetch('http://localhost:1337/readings');
      const data = await response.json();
      setReadings(data);
    }
    getReadings();
    setLoading(true)

    const getFavourites = async () => {
      const response = await fetch('http://localhost:1337/favourites');
      const data = await response.json();
      setFavourites(data);
    }
    getFavourites();
    setLoading(true)

    const getTops = async () => {
      const response = await fetch('http://localhost:1337/tops');
      const data = await response.json();
      setTops(data);
    }
    getTops();
    setLoading(true)

    const getBests = async () => {
      const response = await fetch('http://localhost:1337/bests');
      const data = await response.json();
      setBests(data);
    }
    getBests();
    setLoading(true)

    const getReaders = async () => {
      const response = await fetch('http://localhost:1337/readers');
      const data = await response.json();
      setReaders(data);
    }
    getReaders();
    setLoading(true)
  }

  useEffect(() => {
    fetchData()
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
                  url={book.image.url} 
                  title={book.title}
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
                url={top.image.url}
                title={top.title}
                author={top.author}
                description={top.description}
                key={Date.now()}
                /> 
              )}
            </div>
            <div className="best">
              {bests.map(best => 
                <BestBook
                  url={best.image.url}
                  title={best.title}
                  description={best.description}
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
                  url={read.image.url} 
                  title={read.title}
                  key={read.id}
                  author={read.author}
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
                  url={favourite.img.url} 
                  title={favourite.title}
                  key={favourite.id}
                  author={favourite.author}
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
                  url={reader.image.url}
                  title={reader.title}
                  key={Math.random()}
                />)}
              </div>
            </div>
          </div>
        </div> 
        : <img src={LoadingImg} alt="loading"/>}
      </React.Fragment>
    )
};

export default DashboardPage;