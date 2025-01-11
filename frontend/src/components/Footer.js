import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Logo from '../Assets/images/logo.jpg' // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px 0' }}
    >
      <Container>
        <Row className='align-items-center'>
          <Col md={4} className='text-center py-3'>
            <img
              src={Logo}
              alt='Modern Furniture Pacific Logo'
              style={{ width: '150px', marginBottom: '10px' }}
            />
            <h5>Contact Us</h5>
            <p>Email: info@modernfurniturepacific.com</p>
            <p>Phone: +254 700 000 000</p>
          </Col>
          <Col md={4} className='text-center py-3'>
            <h5>Location</h5>
            <p>Nairobi, Kenya</p>
            <iframe
              title='Location Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.125839763956!2d36.82194691468257!3d-1.2920652359597157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12a8c5c9b8c9%3A0x2e6c7e2a6d62a7e8!2sNairobi%20National%20Museum!5e0!3m2!1sen!2ske!4v1614693154004!5m2!1sen!2ske'
              width='300'
              height='200'
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </Col>
          <Col md={4} className='text-center py-3'>
            <h5>Get in Touch</h5>
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Form.Group
                controlId='formBasicName'
                style={{ width: '100%', marginBottom: '10px' }}
              >
                <Form.Control
                  type='text'
                  placeholder='Your Name'
                  required
                  style={{ borderRadius: '5px' }}
                />
              </Form.Group>
              <Form.Group
                controlId='formBasicEmail'
                style={{ width: '100%', marginBottom: '10px' }}
              >
                <Form.Control
                  type='email'
                  placeholder='Your Email'
                  required
                  style={{ borderRadius: '5px' }}
                />
              </Form.Group>
              <Form.Group
                controlId='formBasicMessage'
                style={{ width: '100%', marginBottom: '10px' }}
              >
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Your Message'
                  required
                  style={{ borderRadius: '5px' }}
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                style={{
                  backgroundColor: 'green',
                  border: 'none',
                  width: '100%'
                }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className='text-center py-3'>
            <p>
              &copy; {new Date().getFullYear()} Modern Furniture Pacific. All
              Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
