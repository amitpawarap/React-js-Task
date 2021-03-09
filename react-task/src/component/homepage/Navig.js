import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Navig = () => {
  return (
    <>
      <Navbar className='navbar-fixed-top' bg='dark' expand='xl'>
        <Navbar.Brand>
          {' '}
          <span
            class='navbar-brand m-0 p-0'
            style={{ backgroundColor: '#343a40', color: 'white' }}
          >
            <h3>React Technologies</h3>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-3'>
            <>
              <Nav.Link className='mr-3'>
                <Link
                  to='/home'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  <h4>Home</h4>
                </Link>
              </Nav.Link>

              <Nav.Link className='mr-3'>
                <Link
                  to='/task'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  <h4>Task</h4>
                </Link>
              </Nav.Link>

              <Nav.Link className='mr-3'>
                <Link
                  to='/user'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  <h4>User</h4>
                </Link>
              </Nav.Link>
            </>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Navig
