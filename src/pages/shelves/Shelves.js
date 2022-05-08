import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAll } from '../../BooksApi';

import Shelf from '../../components/Shelf/Shelf';

import './shelves.css';

const Shelves = () => {
  // COMPONENT HOOKS
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([])
  const [wantToReadBooks, setWantToReadBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])

  const fetchAllBooks = async() => {

    const allBooks = await getAll();

    console.log(allBooks)

    const currentBooks = allBooks.filter((book) => {
      return book.shelf === 'currentlyReading'
    })

    setCurrentlyReadingBooks(currentBooks)

    const wantBooks = allBooks.filter((book) => {
      return book.shelf === 'wantToRead'
    })

    setWantToReadBooks(wantBooks)

    const readBooks = allBooks.filter((book) => {
      return book.shelf === 'read'
    })

    setReadBooks(readBooks)

  }

  useEffect(() => {

    fetchAllBooks()

  }, [])

  return (
    <div className="shelves">

      <div className="shelves__head">

        <h1>My Reads</h1>

      </div>

      <div className="shelves__currently-reading">

        <Shelf title="Currently Reading" books={currentlyReadingBooks} />

      </div>

      <div className="shelves__want-to-read">

        <Shelf title="Want To Read" books={wantToReadBooks} />

      </div>

      <div className="shelves__read">

        <Shelf title="Read" books={readBooks} />

      </div>

      <Link to='/search'>

        <span className='shelves__search-page'>
          <img src="/assets/imgs/add.svg" alt="addIcon" />
        </span>

      </Link>

    </div>
  )
}

export default Shelves