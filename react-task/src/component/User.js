import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navig from './homepage/Navig'
import { withRouter } from 'react-router-dom'

const User = () => {
  var x = JSON.parse(localStorage.getItem('user'))
  var storeUser = x.email
  const history = useHistory()

  var [storePas, setstorePas] = useState('')
  var [user] = useState('')
  user = {
    email: storeUser,
    password: storePas,
  }

  const handleEvent = () => {
    history.push('/')
    localStorage.clear()
  }

  var toggleEnable = document.getElementById('passfieldenable')
  var toggleDisable = document.getElementById('passfield')
  var changeBtn = document.getElementById('changebtn')
  var saveBtn = document.getElementById('savebtn')

  const ClickMe = () => {
    var toggleEnable = document.getElementById('passfieldenable')
    var toggleDisable = document.getElementById('passfield')
    var changeBtn = document.getElementById('changebtn')
    var saveBtn = document.getElementById('savebtn')

    if (toggleEnable.style.display === 'none') {
      toggleEnable.style.display = 'block'
      toggleDisable.style.display = 'none'
      saveBtn.style.display = 'block'
      changeBtn.style.display = 'none'
    } else {
      toggleEnable.style.display = 'none'
      toggleDisable.style.display = 'block'
      saveBtn.style.display = 'none'
    }
  }

  const okayDone = () => {
    user = { username: storeUser, password: storePas }
    localStorage.setItem('user', JSON.stringify(user))

    if (toggleEnable.style.display === 'block') {
      toggleEnable.style.display = 'none'
      toggleDisable.style.display = 'block'
      saveBtn.style.display = 'none'
      changeBtn.style.display = 'block'
    }
  }

  return (
    <>
      <Navig />
      <div className='container mt-5 ml-5'>
        <form>
          <div class='form-row'>
            <div class='form-group col-md-4'>
              <p style={{ fontSize: '24px' }}>
                <strong>
                  Username: <small>{storeUser}</small>
                </strong>
              </p>
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-4'>
              <div id='passfield'>
                <p style={{ fontSize: '24px' }}>
                  <strong>
                    Password: <small>******</small>
                  </strong>{' '}
                </p>
              </div>

              <div id='passfieldenable' style={{ display: 'none' }}>
                <h5>
                  New Password:{' '}
                  <input
                    type='password'
                    class='d-inline form-control form-control'
                    style={{ width: '190px', height: '30px' }}
                    id='change'
                    value={storePas}
                    onChange={({ target }) => setstorePas(target.value)}
                    id='chgpass'
                  />{' '}
                </h5>
              </div>
            </div>
          </div>
        </form>
        <div class='form-row mt-5 pt-5'>
          <input
            type='submit'
            className='w-25 mr-5 btn btn-default'
            id='changebtn'
            value='Change Password'
            onClick={ClickMe}
          ></input>

          <input
            type='submit'
            className='w-25 mr-5 btn btn-default'
            id='savebtn'
            style={{ display: 'none' }}
            value='Save Password'
            onClick={okayDone}
          ></input>

          <button className='w-25 btn btn-default' onClick={handleEvent}>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}
export default withRouter(User)
