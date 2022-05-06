import React from 'react'

const Book = ({ book }) => {
  return (
    <div className="book">

      <div className="book__image">

        <img src={book.imageLinks.thumbnail} alt="book-thumbnail" loading="lazy" />

      </div>

      <h4>{book.title}</h4>

      <p>{book.authors[0]}</p>

    </div>
  )
}

export default Book