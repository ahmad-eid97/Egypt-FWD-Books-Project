import React, { useState } from 'react';

import './login.css'

const Login = ({ login }) => {
  // COMPONENT HOOKS  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // COMPONENT HANDLERS
  const loginHandler = async() => {
    const loginData = {
      email,
      password
    }
    login(loginData)
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

      </div>

    </div>
  )
}

export default Login