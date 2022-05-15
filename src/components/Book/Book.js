import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';

import './book.css';
import { Link } from 'react-router-dom';

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

  const drag = (e) => {

    e.target.classList.add('dragging')

    e.target.id = `${book.id}`

  }

  const dragEnd = (e) => {

    // e.target.classList.remove('dragging');

    e.target.removeAttribute('id');

  }

  return (
    <div className="book" draggable="true" onDrag={(e) => drag(e)} onDragEnd={(e) => dragEnd(e)}>

      <div className="book__image">

        {book.imageLinks ? 
        
          <img src={book.imageLinks.thumbnail} alt="book-thumbnail" />

          :

          <img src="/assets/imgs/default.jpg" alt="book-thumbnail" />
      
        }

        <div className='book__image-select' onClick={() => selectRef.current.click()}>

          <img src="/assets/imgs/menu.png" alt="menuIcon" />

          <select value={newShelf} onChange={(e) => updateShelf(e.target.value, book)} style={{ opacity: '0' }} ref={selectRef}>
            
            {newShelf !== 'none' ?

              <option value="none" disabled>
                Move to...
              </option>

              :

              <option value="none" disabled>
                add to...
              </option>
          
            }

            <option value="currentlyReading">
              Currently Reading
            </option>

            <option value="wantToRead">Want to Read</option>

            <option value="read">Read</option>

            {newShelf !== 'none' &&

              <option value="none">None</option>
            
            }

          </select>

        </div>

        <Link to={`/book/${book.id}`}>

          <span className="book__preview">

            <img src="/assets/imgs/eye.png" alt="eyeImage" />

          </span>

        </Link>

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