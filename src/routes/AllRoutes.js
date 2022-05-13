import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Shelves from '../pages/shelves/Shelves';
import Search from '../pages/search/Search';
import BookDetails from '../pages/bookDetails/BookDetails';

import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => {
  // COMPONENT HOOKS
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('booksLogin') || null))
  const [authAccounts, setAuthAccounts] = useState(JSON.parse(localStorage.getItem('booksAuthData') || null))
  const navigate = useNavigate()

  const signup = (signupData) => {

    let accounts = [];

    const auth = JSON.parse(localStorage.getItem('booksAuthData'))

    if(auth) {

      accounts = auth

      accounts.forEach(account => {

        if(account.email === signupData.email) {

          alert('This email already exists')

        } else {

          accounts.push((signupData))

          localStorage.setItem('booksAuthData', JSON.stringify(accounts))

          navigate('/login')

        }

      })

    } else {

      accounts.push((signupData))

      localStorage.setItem('booksAuthData', JSON.stringify(accounts))

      navigate('/login')

    }
  }

  const login = (loginData) => {
    // CHECK IF ACCOUNT EXISTS...
    authAccounts.forEach(account => {

      if(account.email === loginData.email && account.password === loginData.password) {

        localStorage.setItem('booksLogin', JSON.stringify(loginData))
    
        setUser(loginData)
    
        navigate('/')

      } else {

        alert('Wrong Credentials')

      }

    })

  }

  const logout = () => {
    
    setUser(null)

    localStorage.removeItem('booksLogin')

    navigate('/login')

  }

  return (

    <Routes>

      <Route path='/signup' element={!user ? <Signup signup={signup} /> : <Navigate to="/" replace />} />

      <Route path='/login' element={!user ? <Login login={login} /> : <Navigate to="/" replace />} />

      <Route path='/' element={user ? <Shelves logout={logout} /> : <Navigate to="/login" replace />} />

      <Route path='/search' element={user ? <Search /> : <Navigate to="/login" replace />} />

      <Route path='/book/:bookId' element={user ? <BookDetails /> : <Navigate to="/login" replace />} />

    </Routes>

  )
}

export default AllRoutes