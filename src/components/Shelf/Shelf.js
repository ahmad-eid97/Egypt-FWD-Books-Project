import React from 'react';

import Book from '../Book/Book';

import './shelf.css'

const Shelf = ({ title, books }) => {

  return (
    <div className="shelf">

      <div className="shelf__head">

        <h2>{title}</h2>

      </div>

      <div className="shelf__books">

        {books.map((book) => (

          <div key={book.id} className="shelf__books-book">

            <Book book={book} />

          </div>

        ))}

      </div>

    </div>
  )
}

export default Shelf;