import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAll, update } from '../../BooksApi';

import Shelf from '../../components/Shelf/Shelf';

import './shelves.css';

const Shelves = ({ logout }) => {
  // COMPONENT HOOKS
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([])
  const [wantToReadBooks, setWantToReadBooks] = useState([])
  const [readBooks, setReadBooks] = useState([])

  const fetchAllBooks = async() => {

    const allBooks = await getAll();

    console.log(allBooks)

    const currentBooks = allBooks.filter(book => {
      return book.shelf === 'currentlyReading'
    })

    setCurrentlyReadingBooks(currentBooks)

    const wantBooks = allBooks.filter(book => {
      return book.shelf === 'wantToRead'
    })

    setWantToReadBooks(wantBooks)

    const readBooks = allBooks.filter(book => {
      return book.shelf === 'read'
    })

    setReadBooks(readBooks)

  }

  useEffect(() => {

    fetchAllBooks()

  }, [])

  // COMPONENT HANDLERS
  const changeShelf = async (selectedShelf, book) => {
    await update(book, selectedShelf)
    fetchAllBooks()
  }

  return (
    <div className="shelves">

      <div className="shelves__head">

        <h1>My Reads</h1>

        <button onClick={logout}>
          Logout
        </button>

      </div>

      <div className="shelves__currently-reading">

        <Shelf title="Currently Reading" books={currentlyReadingBooks} changeShelf={changeShelf} shelf="currentlyReading" />

      </div>

      <div className="shelves__want-to-read">

        <Shelf title="Want To Read" books={wantToReadBooks} changeShelf={changeShelf} shelf="wantToRead" />

      </div>

      <div className="shelves__read">

        <Shelf title="Read" books={readBooks} changeShelf={changeShelf}shelf="read" />

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