import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import HeroImage from '../Assets/images/hero.jpg'

const AboutUs = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: '-20px', // Moves the notch above the green container
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          color: 'green',
          padding: '10px 30px',
          borderRadius: '30px', // Creates the smooth notch curve
          fontWeight: 'bold',
          fontSize: '1.5rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          zIndex: 10 // Ensure it's above the green container
        }}
      >
        About Us
      </div>

      {/* Main Container */}
      <div
        style={{
          backgroundColor: 'green',
          padding: '80px 20px',
          borderRadius: '0', // No border radius on the container
          marginTop: '30px' // Ensures space for the notch above
        }}
      >
        <Container>
          <Row className='justify-content-center text-center'>
            <Col md={10}>
              {/* Title */}
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginTop: '50px', // Pushes content further down
                  marginBottom: '20px'
                }}
              >
                A Modern Approach with Modern Furniture Pacific
              </h2>
              {/* Paragraph */}
              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'white',
                  lineHeight: '1.8',
                  marginBottom: '40px'
                }}
              >
                Experience comfort and style with our handcrafted furniture.
                Discover the story behind our passionate mission to transform
                spaces into luxurious havens. With a commitment to quality and
                design, we create pieces that inspire and elevate every room in
                your home.
              </p>
              {/* Call-to-Action Button */}
              <Button
                href='/about'
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
                Learn More →
              </Button>
            </Col>
          </Row>
          ;<Row className='justify-content-center'>
  <Col md={8}>
    {/* Image with Window-Like Frame */}
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        position: 'relative'
      }}
    >
      <img
        src={HeroImage} // Replace with the correct path
        alt='About Us'
        style={{
          width: '100%',
          borderRadius: '10px',
          display: 'block'
        }}
      />
    </div>
  </Col>
</Row>

        </Container>
      </div>
    </div>
  )
}

export default AboutUs
