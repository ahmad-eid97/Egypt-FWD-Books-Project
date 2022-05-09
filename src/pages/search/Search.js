import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { search, update } from '../../BooksApi';

import Book from './../../components/Book/Book';

import './search.css';

const Search = () => {
  // COMPONENT HOOKS
  const [searchQuery, setSearchQuery] = useState('')
  const [books, setBooks] = useState([])

  console.log(books)

  // COMPONENT HANDLERS
  const typing = async(e) => {
    setSearchQuery(e.target.value)

    if(e.target.value) {

      const searchedBooks = await search(e.target.value, 30)

      setBooks(searchedBooks)

      console.log(books)
    } else {
      setBooks([])
    }

  }

  // WE HAVE NO REDUX HERE SO I HAVE TO PUT THIS FUNCTION HERE ALSO
  const changeShelf = (selectedShelf, book) => {
    update(book, selectedShelf)
  }

  return (
    <div className='search'>

      <div className="searchInput">

        <Link to="/">

          <img src="/assets/imgs/arrow-back.svg" alt="arrowBack" />

        </Link>

        <input 
          type="search" 
          placeholder="Search Books"
          value={searchQuery}
          onChange={(e) => typing(e)}
          />

      </div>

      <div className="searchResults">

        {books.length ? 

          <>

            {books.map(book => (

              <div className="book" key={book.id}>

                <Book book={book} changeShelf={changeShelf} />

              </div>

            ))}

          </>

          :

          <div className="empty">

            <img src="/assets/imgs/search.png" alt="searchImage" />
            
            <h2>
              There is no search results
            </h2>

          </div>
      
        }

      </div>

    </div>
  )
}

export default Search