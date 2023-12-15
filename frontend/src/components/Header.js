import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import { ShoppingCart, UserRoundCog } from 'lucide-react'
import '../index.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar className="navbar navbar-expand-md fixed-top mb-5" style={{backgroundColor: '#1e2329' , textAlign: 'center',
    color: '#f0b90b'
    }} expand='lg' collapseOnSelect>
        <Container  >
          <a href='/' style= {{
              color: '#f0b90b',
              fontSize: '1.5rem',
              fontWeight: '900',
              textDecoration: 'none',
            }}>BigManComputers
          </a>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link  className='d-flex align-items-center'>
                <ShoppingCart style={{color: '#f0b90b', }} />
                <p 
                 style= {{
              color: '#f0b90b',
              fontSize: '1rem',
              fontWeight: '900',
              textDecoration: 'none',
              verticalAlign: 'middle',
              paddingTop: '20px',
              paddingLeft: '5px',
            }}>Cart
          </p>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'style= {{
                  color: '#f0b90b', backgroundColor: '#1e2329',}} >
                  <LinkContainer to='/profile' >
                    <NavDropdown.Item  className='d-flex align-items-center'>
                    <p 
                 style= {{
              color: '#f0b90b',
              fontSize: '1rem',
              fontWeight: '900',
              textDecoration: 'none',
            }}>Profile
          </p>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} className='d-flex align-items-center' >
                  <p 
                 style= {{
              color: '#f0b90b',
              fontSize: '1rem',
              fontWeight: '900',
              textDecoration: 'none',
             
            }}>Logout
          </p>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link  className='d-flex align-items-center'>
                  <UserRoundCog style={{
                    color: '#f0b90b',
                  }}/>   <p 
                  style= {{
               color: '#f0b90b',
               fontSize: '1rem',
               fontWeight: '900',
               textDecoration: 'none',
               paddingTop: '20px',
              paddingLeft: '5px',
             }}>Login
           </p>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' style={{backgroundColor: '#1e2329' , color:'#f0b90b'}}>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item style={{color: '#f0b90b'}} >Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item style={{color: '#f0b90b'}}>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item style={{color: '#f0b90b'}}>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
