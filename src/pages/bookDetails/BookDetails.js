import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import { get } from '../../BooksApi';

import './bookDetails.css'

const BookDetails = () => {
  // COMPONENT HOOKS
  const { bookId } = useParams();
  const navigate = useNavigate()
  const [book, setBook] = useState()

  const fetchBook = async() => {
    const book = await get(bookId);
    if(book) {
      setBook(book)
    }
    console.log(book)
  }

  useEffect(() => {
    fetchBook()
  }, [])

  if(!book) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className="bookDetails">

      <div className="bookDetails__area">
        
        <div className="bookDetails__area-image">

          <img src={book.imageLinks.thumbnail} alt="bookImage" />

        </div>
        
        <div className="bookDetails__area-details">

          <h1>{book.title}</h1>
          <h3>{book.subtitle}</h3>

          <p>Published At: {book.publishedDate}</p>

          <p>Book is {book.pageCount} pages</p>

          <h4>Authors: </h4>
          {book.authors.length >= 1 ? 
          
            <p>{book.authors.join(',')}</p>

            :

            <p>...</p>
            
          }

          <h4>Rating: </h4>

          <p>Has {book.ratingsCount} rates</p>

          <span>Rating( {book.averageRating} stars )</span> 

          <h4>Description: </h4>

          <p>{book.description.substring(0, 800) + '...'}</p>

          <button onClick={() => navigate(-1)}>Go Back</button>

        </div>

      </div>

    </div>
  )
}

export default BookDetails