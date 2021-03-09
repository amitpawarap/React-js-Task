import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
function Login(props) {
  let Cmp = props.Cmp
  const history = useHistory()
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      history.push('/')
    }
  }, [])
  return (
    <div>
      <Cmp />
    </div>
  )
}
export default Login
