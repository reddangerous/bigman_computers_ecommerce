import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import HeroImage from '../Assets/images/hero.jpg'

const Categories = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#f8f9fa',
        padding: '80px 20px',
        marginTop: '50px'
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: '-30px', // Moves the notch above the content
          left: '20px', // Aligns the notch to the left
          backgroundColor: 'green', // Deep green notch
          color: 'white',
          padding: '10px 30px',
          borderRadius: '30px', // Creates the smooth notch curve
          fontWeight: 'bold',
          fontSize: '1.5rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          zIndex: 10 // Ensure it's above the background
        }}
      >
        Categories
      </div>

      {/* Main Content */}
      <Container>
        <Row className='align-items-center'>
          {/* Left Column for Text */}
          <Col md={6}>
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#333',
                marginBottom: '20px'
              }}
            >
              Materials We Use
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: '#555',
                lineHeight: '1.8',
                marginBottom: '40px'
              }}
            >
              Our furniture is crafted from high-quality materials that ensure
              durability and style. We use plywood for its strength and
              lightweight properties, wool fabric for comfort and elegance, and
              oak wood for its timeless beauty and resilience. Each material is
              carefully selected to create pieces that not only look great but
              also stand the test of time.
            </p>
            <Button
              href='/get-started'
              style={{
                backgroundColor: 'yellow',
                color: 'green',
                border: 'none',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '12px 30px',
                borderRadius: '25px'
              }}
            >
              Get Started →
            </Button>
          </Col>

          {/* Right Column for Image */}
          <Col md={6}>
            <div
              style={{
                borderRadius: '10px',
                border: '5px solid white', // White frame around the image
                overflow: 'hidden', // Ensures no overflow from rounded corners
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' // Optional shadow for depth
              }}
            >
              <img
                src={HeroImage} // Replace with your image path
                alt='Materials'
                style={{ width: '100%', height: 'auto' }} // Responsive image
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Categories
