import React from 'react';

import Book from '../Book/Book';

import { get } from '../../BooksApi';

import PropTypes from 'prop-types';

import './shelf.css'

const Shelf = ({ title, books, changeShelf, shelf }) => {

  // CHECK VALIDITY OFF PROPS TYPES
  Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  const drop = async(e) => {

    e.preventDefault()

    if(e.target.classList.contains('shelf__books')) {

      const newBook = document.querySelector('.dragging');

      const bookId = newBook.id;

      const book = await get(bookId)

      changeShelf(shelf, book)

      // e.target.appendChild(newBook)
    }
  }

  const dragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="shelf" onDrop={(e) => drop(e)} onDragOver={(e) => dragOver(e)}>

      <div className="shelf__head">

        <h2>{title}</h2>

      </div>

      <div className="shelf__books">

        {books.map((book) => (

          <div key={book.id} className="shelf__books-book">

            <Book book={book} changeShelf={changeShelf} />

          </div>

        ))}

      </div>

    </div>
  )
}

export default Shelf;