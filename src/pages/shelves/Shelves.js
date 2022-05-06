import React from 'react';

import Reading from '../../components/shelves/Reading/Reading';
import WantToRead from '../../components/shelves/WantToRead/WantToRead';
import Read from '../../components/shelves/Read/Read';

import './shelves.css';

const Shelves = () => {
  return (
    <div className="shelves">

      <div className="shelves__head">

        <h1>My Reads</h1>

      </div>

      <div className="shelves__currently-reading">

        <Reading />

      </div>

      <div className="shelves__want-to-read">

        <WantToRead />

      </div>

      <div className="shelves__read">

        <Read />

      </div>

    </div>
  )
}

export default Shelves