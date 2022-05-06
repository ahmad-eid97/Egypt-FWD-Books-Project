import React from 'react';

import Shelves from '../pages/shelves/Shelves';
import Search from '../pages/search/Search';

import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<Shelves />} />

      <Route path='/search' element={<Search />} />

    </Routes>
  )
}

export default AllRoutes