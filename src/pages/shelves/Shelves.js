import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAll, update } from '../../BooksApi';

import Shelf from '../../components/Shelf/Shelf';

import './shelves.css';

const Shelves = ({ logout }) => {
  // COMPONENT HOOKS
  const [allBooks, setAllBooks] = useState([])

  // FETCH ALL BOOKS
  const fetchAllBooks = async() => {

    const books = await getAll();

    setAllBooks(books)
    
  }

  useEffect(() => {

    fetchAllBooks()

  }, [])

  // COMPONENT HANDLERS
  const changeShelf = async (selectedShelf, book) => {

    await update(book, selectedShelf)

    let allFetchedBooks = [...allBooks]

    let updatedBook = allFetchedBooks.find(bookIn => bookIn.id === book.id);

    updatedBook.shelf = selectedShelf;

    const bookFound = allFetchedBooks.findIndex(bookFound => bookFound.id === updatedBook.id);

    if(bookFound >= -1) allFetchedBooks.splice(bookFound, 1, updatedBook)

    setAllBooks(allFetchedBooks)

  }

  return (
    <div className="shelves">

      <div className="shelves__head">

        <h1>My Reads</h1>

        <button onClick={logout}>
          Logout
        </button>

      </div>

      <div className="notes">

        <h2>Notes:</h2>

        <p>You have auth functionalities which you can create new account and login to see your shelved books...</p>

        <p>You have eye icon that navigates you to book details page...</p>

        <p>You can drag and drop books amoung shelves...</p>

      </div>

      <div className="shelves__currently-reading">

        <Shelf title="Currently Reading" books={allBooks.filter(book => book.shelf === 'currentlyReading')} changeShelf={changeShelf} shelf="currentlyReading" />

      </div>

      <div className="shelves__want-to-read">

        <Shelf title="Want To Read" books={allBooks.filter(book => book.shelf === 'wantToRead')} changeShelf={changeShelf} shelf="wantToRead" />

      </div>

      <div className="shelves__read">

        <Shelf title="Read" books={allBooks.filter(book => book.shelf === 'read')} changeShelf={changeShelf}shelf="read" />

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