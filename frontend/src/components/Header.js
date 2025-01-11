import React, { useEffect, useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import {
  ChevronDown,
  ShoppingCart,
  UserRoundCog,
  LockKeyhole
} from 'lucide-react'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import Logo from '../Assets/images/logo.jpg'
import '../index.css'

const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleProfileOpen = () => setIsProfileOpen(prev => !prev)
  const toggleOpen = () => setIsOpen(prev => !prev)

  useEffect(() => {
    if (isOpen) setIsOpen(false)
    if (isProfileOpen) setIsProfileOpen(false)
  }, [location.pathname])

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar
        className='navbar navbar-expand-md fixed-top mb-5'
        style={{ backgroundColor: '#ffffff', color: '#4caf50', borderBottom: '1px solid #4caf50' }}
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <a
            href='/'
            style={{
              color: '#4caf50',
              fontSize: '1.5rem',
              fontWeight: '900',
              textDecoration: 'none'
            }}
          >
            <img
              src={Logo}
              alt='logo'
              style={{ width: '100px', height: '50px' }}
            />
          </a>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='custom-toggler'
            style={{ backgroundColor: '#4caf50', color: '#ffffff' }}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link className='d-flex align-items-center'>
                  <ShoppingCart style={{ color: '#4caf50' }} />
                  <span
                    style={{
                      color: '#4caf50',
                      fontSize: '1rem',
                      fontWeight: '700',
                      paddingLeft: '5px'
                    }}
                  >
                    Cart
                  </span>
                </Nav.Link>
              </LinkContainer>
              {userInfo && (
                <Button
                  id='username'
                  onClick={toggleProfileOpen}
                  className='d-flex align-items-center'
                  style={{
                    color: '#ffffff',
                    backgroundColor: '#6a1b9a',
                    border: 'none'
                  }}
                >
                  <UserRoundCog style={{ color: '#ffffff' }} />
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: '700',
                      paddingLeft: '5px'
                    }}
                  >
                    {userInfo.name}
                  </span>
                  <ChevronDown style={{ color: '#ffffff' }} />
                </Button>
              )}
              {isProfileOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    width: '100%',
                    backgroundColor: '#6a1b9a',
                    color: '#ffffff',
                    zIndex: '50'
                  }}
                >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item className='d-flex align-items-left'>
                      <span
                        style={{
                          color: '#ffffff',
                          fontSize: '1rem',
                          fontWeight: '700'
                        }}
                      >
                        Profile
                      </span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    onClick={logoutHandler}
                    className='d-flex align-items-left'
                  >
                    <span
                      style={{
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontWeight: '700'
                      }}
                    >
                      Logout
                    </span>
                  </NavDropdown.Item>
                </div>
              )}
              {!userInfo && (
                <LinkContainer to='/login'>
                  <Nav.Link className='d-flex align-items-center'>
                    <UserRoundCog style={{ color: '#6a1b9a' }} />
                    <span
                      style={{
                        color: '#6a1b9a',
                        fontSize: '1rem',
                        fontWeight: '700',
                        paddingLeft: '5px'
                      }}
                    >
                      Login
                    </span>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
