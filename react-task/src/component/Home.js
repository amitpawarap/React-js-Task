import React from 'react'
import Navig from './homepage/Navig'
import DropDown from './homepage/Dropdown'
import { withRouter } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navig />
      <DropDown />
    </>
  )
}
export default withRouter(Home)
