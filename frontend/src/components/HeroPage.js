import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeroImage from '../Assets/images/hero.jpg' // Replace with the actual path to your image
import { FaArrowRight } from 'react-icons/fa'

const HeroPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 0',
        position: 'relative'
      }}
    >
      <Container>
        <Row className='align-items-center'>
          {/* Left Section */}
          <Col md={6}>
            <h1
              style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: 'green',
                marginBottom: '20px'
              }}
            >
              Replace Your Space with the Best Furnitures and Fittings
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
              At Modern Furniture Pacific, we redefine living spaces with
              high-quality, stylish furniture tailored to your needs.
            </p>
            <Button
              as={Link}
              to='/shop'
              style={{
                backgroundColor: 'green',
                color: '#fff',
                border: 'none',
                padding: '12px 25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Explore Products <FaArrowRight style={{ marginLeft: '10px' }} />
            </Button>
          </Col>

          {/* Right Section */}
          <Col md={6} style={{ position: 'relative' }}>
            <img
              src={HeroImage}
              alt='Modern Furniture'
              style={{
                maxWidth: '100%',
                borderRadius: '0',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '10%',
                backgroundColor: 'green',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              ⭐ 4.8 (10,234 Reviews)
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroPage
