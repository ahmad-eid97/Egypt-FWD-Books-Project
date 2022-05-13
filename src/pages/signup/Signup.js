import React, { useState } from 'react';

import './signup.css'

const Signup = ({ signup }) => {
  // COMPONENT HOOKS  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // COMPONENT HANDLERS
  const signupHandler = async() => {
    const signupData = {
      email,
      password
    }
    signup(signupData)
  }

  return (
    <div className="signup">

      <div className="signup__box">

        <div className="wrapper">

          <h1>signup</h1>

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

      </div>

    </div>
  )
}

export default Signup