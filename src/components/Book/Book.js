import React, { useRef } from 'react';

import './book.css';

const Book = ({ book }) => {
  // COMPONENT HOOKS
  const selectRef = useRef()

  return (
    <div className="book">

      <div className="book__image">

        <img src={book.imageLinks.thumbnail} alt="book-thumbnail" loading="lazy" />

        <div className='book__image-select' onClick={() => selectRef.current.click()}>

          <img src="/assets/imgs/menu.png" alt="menuIcon" />

          <select style={{ opacity: '0' }} ref={selectRef}>
            
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

      <p>{book.authors[0]}</p>

    </div>
  )
}

export default Book