import React from 'react'
import './App.css'

import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Login from './component/LoginForm'
import Home from './component/Home'

import Registration from './component/Registration'

import Protected from './Protected'

import { useState } from 'react'
import User from './component/User'
import Task from './component/Task'

function App() {
  return (
    <div className='App'>
      <div className='outer'>
        <div className='inner'>
          
          <BrowserRouter>
            <Route exact path='/'>
              <Registration />
            </Route>
            {/* <Route exact path='/login'>
              <Login />
            </Route> */}
            <Route exact path='/home'>
              <Protected Cmp={Home} />
            </Route>
            <Route exact path='/task'>
              <Protected Cmp={Task} />
            </Route>
            <Route exact path='/user'>
              <Protected Cmp={User} />
            </Route>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
