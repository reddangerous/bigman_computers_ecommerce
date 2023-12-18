import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register, sendEmailSend, authEmail } from '../actions/userActions'





const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOTP] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [isSubmitDisabled, setisSubmitDisabled] = useState(true)
  const [retryCountdown, setRetryCountdown] = useState(60);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
      setisSubmitDisabled(false)
    }
  }
const sendOtp = (e) => {
    e.preventDefault()
    dispatch(sendEmailSend(email))
    setMessage('Otp sent to your email')
    setIsCountdownActive(true);
  }
const checkOtp = () => {
 const otpCorrect = dispatch(authEmail(email, otp));

 if(otpCorrect){
  setisSubmitDisabled(false)
  setMessage('Otp is correct')
  setisSubmitDisabled(false)
  return
 }
  else{ 
  setMessage('Otp is incorrect please retry or resend otp')
  setisSubmitDisabled(true)
  }
}
useEffect(() => {
  const interval = setInterval(() => {
    setRetryCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
  }, 1000);

  return () => {
    clearInterval(interval);
    setisSubmitDisabled(false); 
  };
}, [isCountdownActive]);



  return (
    <FormContainer>
      
      <h1>Sign Up</h1>
      {message && <Message variant='success'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col>
            {isSubmitDisabled && (
              <Button onClick={sendOtp}>Send OTP</Button>
            )}
            </Col>
          </Row>
          {retryCountdown > 0 && (
            <p>{`Didn't receive code? Retry in ${retryCountdown}s`}</p>
          )}
        </Form.Group>
        <Form.Group controlId='otp'>
          
          <Form.Label> Otp</Form.Label>
          <Row>
            <Col>
          <Form.Control
            type='text'
            placeholder='Enter otp'
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          ></Form.Control>
          </Col>
          <Col>
          <Button onClick={checkOtp}> verify Otp</Button>
          </Col>
          </Row>
        </Form.Group>
        {isSubmitDisabled && (
          <>
        <Form.Group controlId='password'>
          <Form.Label>Password Address</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
        </>
        )}
      </Form>
      
      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
     
    </FormContainer>
  )
}

export default RegisterScreen
