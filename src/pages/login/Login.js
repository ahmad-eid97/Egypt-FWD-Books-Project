import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './login.css'

const Login = ({ login }) => {
  // COMPONENT HOOKS  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // COMPONENT HANDLERS
  const loginHandler = async() => {
    if(email && password) {
      const loginData = {
        email,
        password
      }
      login(loginData)
    } else {
      alert("Fields can't be empty!")
    }
  }

  return (
    <div className="login">

      <div className="login__box">

        <div className="wrapper">

          <h1>Login</h1>

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

          <button onClick={loginHandler}>
            Login
          </button>

        </div>

        <p>Don't have an account !? <Link to="/signup">Signup</Link></p>

      </div>

    </div>
  )
}

export default Login