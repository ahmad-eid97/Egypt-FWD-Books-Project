import React from 'react';

import Book from '../Book/Book';

import PropTypes from 'prop-types';

import './shelf.css'

const Shelf = ({ title, books, changeShelf }) => {

  // CHECK VALIDITY OFF PROPS TYPES
  Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  return (
    <div className="shelf">

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