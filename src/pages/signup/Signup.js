import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './signup.css'

const Signup = ({ signup }) => {
  // COMPONENT HOOKS  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // COMPONENT HANDLERS
  const signupHandler = async() => {
    if(email && password) {
      const signupData = {
        email,
        password
      }
      signup(signupData)
    } else {
      alert("Fields can't be empty!")
    }
  }

  return (
    <div className="signup">

      <div className="signup__box">

        <div className="wrapper">

          <h1>Signup</h1>

          <input 
            type="email" 
            placeholder="Email: ahmad@eid.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <input 
            type="password" 
            placeholder="Password: 123456" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button onClick={signupHandler}>
            signup
          </button>

        </div>

        <p>Already have an account !? <Link to="/login">Login</Link></p>

      </div>

    </div>
  )
}

export default Signup