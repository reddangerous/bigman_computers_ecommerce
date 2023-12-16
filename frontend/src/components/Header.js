import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import { ChevronDown, ShoppingCart, UserRoundCog } from 'lucide-react'
import '../index.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {  LockKeyhole  } from 'lucide-react'

const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev)
  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [location.pathname])



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
              {userInfo && userInfo.isAdmin &&(
                <Button
                style={{ backgroundColor: '#1e2329', border: 'none' }}
                onClick={toggleOpen}
                className='d-flex align-items-center z-50 h-5 w-5'
              ><LockKeyhole style={{ color: '#f0b90b' }}/>
               <p 
                 style= {{
              color: '#f0b90b',
              fontSize: '1rem',
              fontWeight: '900',
              textDecoration: 'none',
              verticalAlign: 'middle',
              paddingTop: '20px',
              paddingLeft: '5px',
            }}>Admin
          </p>
          <ChevronDown style={{ color: '#f0b90b' }} />
               </Button>
              )}
                {isOpen &&( 
                <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
               <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
                <li>
                  <a href='/admin/userlist' className='text-2xl font-bold text-zinc-900 hover:text-zinc-700'>Users </a>
                </li>
                <li>
                  <a href='/admin/productlist' className='text-2xl font-bold text-zinc-900 hover:text-zinc-700'>Products </a>
                  <li>
                    <a href='/admin/orderlist' className='text-2xl font-bold text-zinc-900 hover:text-zinc-700'>Orders </a>
                  </li>
                  </li>
                </ul>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
