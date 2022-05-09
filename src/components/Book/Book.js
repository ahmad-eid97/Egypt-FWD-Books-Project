import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';

import './book.css';

const Book = ({ book, changeShelf }) => {

  // CHECK VALIDITY OFF PROPS TYPES
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  // COMPONENT HOOKS
  const [newShelf, setNewShelf] = useState(book.shelf || 'none')
  const selectRef = useRef()

  // COMPONENT HANDLERS
  const updateShelf = (selectedShelf, book) => {
    setNewShelf(selectedShelf)
    changeShelf(selectedShelf, book)
  }

  return (
    <div className="book">

      <div className="book__image">

        {book.imageLinks ? 
        
          <img src={book.imageLinks.thumbnail} alt="book-thumbnail" />

          :

          <img src="/assets/imgs/default.jpg" alt="book-thumbnail" />
      
        }

        <div className='book__image-select' onClick={() => selectRef.current.click()}>

          <img src="/assets/imgs/menu.png" alt="menuIcon" />

          <select value={newShelf} onChange={(e) => updateShelf(e.target.value, book)} style={{ opacity: '0' }} ref={selectRef}>
            
            <option value="none" disabled>
              Move to...
            </option>

            <option value="currentlyReading">
              Currently Reading
            </option>

            <option value="wantToRead">Want to Read</option>

            <option value="read">Read</option>

            <option value="none">None</option>

          </select>

        </div>

      </div>

      <h4>{book.title}</h4>

      {book.authors ?
      
        <p>{book.authors.join(', ')}</p>

        :

        <p>Not Mentioned</p>
      
      }

    </div>
  )
}

export default Book