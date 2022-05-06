import React, { useState, useEffect } from 'react';

import { getAll } from '../../../BooksApi';

import Book from '../../Book/Book';

import './reading.css'

const Reading = () => {
  // COMPONENT HOOKS
  const [books, setBooks] = useState([])

  const fetchAllBooks = async() => {

    const allBooks = await getAll();

    console.log(allBooks)

    let currentlyReadingBooks = []

    allBooks.forEach(book => {

      if(book.shelf === 'currentlyReading') {

        currentlyReadingBooks.push(book)

      }

    })

    setBooks(currentlyReadingBooks)

  }

  useEffect(() => {

    fetchAllBooks()

  }, [])

  return (
    <div className="reading">

      <div className="reading__head">

        <h2>Currently Reading</h2>

      </div>

      <div className="reading__books">

        {books.map((book) => (

          <div key={book.id} className="reading__books-book">

            <Book book={book} />

          </div>

        ))}

      </div>

    </div>
  )
}

export default Reading