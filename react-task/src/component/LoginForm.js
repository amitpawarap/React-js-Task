// //rfce

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import Home from './Home'
import { withRouter } from 'react-router-dom'
function Login() {
  const [emaillog, setEmaillog] = useState(' ')
  const [passwordlog, setPasswordlog] = useState(' ')

  const [flag, setFlag] = useState(false)

  const [home, setHome] = useState(true)

  function handleLogin(e) {
    e.preventDefault()
    // let pass = localStorage.getItem('amitSubmissionPassword').replace(/"/g, '')
    // let mail = localStorage.getItem('amitSubmissionEmail').replace(/"/g, '')
    // .replace(/"/g,"") is used to remove the double quotes for the string
    const mailPass = localStorage.getItem('user').replace(/'/g, '')
    var user = document.getElementById('email').value
    var pass = document.getElementById('pass').value

    if (!emaillog || !passwordlog) {
      setFlag(true)
      console.log('EMPTY')
    } else if (user === mailPass.email && pass === mailPass.password) {
      setFlag(true)
    } else {
      setHome(!home)
      setFlag(false)
    }
  }
  const [register, setRegister] = useState(true)
  function handleClick() {
    setRegister(!register)
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className='form-group'>
            <label>Email</label>
            <input
              id='email'
              type='email'
              className='form-control'
              placeholder='Enter email'
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              id='pass'
              type='password'
              className='form-control'
              placeholder='Enter password'
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-dark btn-lg btn-block'>
            Login
          </button>
          <p>
            <a href='/signup' onClick={handleClick}>
              Sign up?
            </a>
          </p>

          {flag && (
            <Alert color='primary' variant='warning'>
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  )
}

export default withRouter(Login)
