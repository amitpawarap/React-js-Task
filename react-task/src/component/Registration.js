import React, { useState, useEffect } from 'react'
import { Form, Alert } from 'react-bootstrap'
import Login from './LoginForm'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Registration() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  var [user] = useState()
  user = {
    email: email,
    password: password,
  }

  const [flag, setFlag] = useState(false)
  const [login, setLogin] = useState(true)

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault()

    if (!name || !email || !password) {
      setFlag(true)
    } else {
      setFlag(false)
      localStorage.setItem('user', JSON.stringify(user))
      console.log('Saved in Local Storage')

      setLogin(!login)
    }
  }

  // Directly to the login page
  function handleClick() {
    setLogin(!login)
  }

  return (
    <>
      <nav className='navbar navbar-light'></nav>

      {login ? (
        <form onSubmit={handleFormSubmit}>
          <h3>Register</h3>

          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Full Name'
              name='name'
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-dark btn-lg btn-block'>
            Register
          </button>
          <p className='forgot-password text-right'>
            Already registered{' '}
            <a href='/' onClick={handleClick}>
              log in?
            </a>
          </p>
          {flag && (
            <Alert color='primary' variant='danger'>
              I got it you are in hurry! But every Field is important!
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </>
  )
}

export default withRouter(Registration)
