import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Image, Card } from 'react-bootstrap'
import Hero from '../Assets/images/hero.jpg'
import HeroPage from './HeroPage'
import AboutUs from './AboutUs'
import Categories from './Categories'
const LandingPage = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: '#333',
        minHeight: '100vh',
        paddingBottom: '50px'
      }}
    >
      {/* Hero Section */}
     <HeroPage />
     <AboutUs />
     <Categories />

      {/* Why Choose Us Section with Horizontal Scroll */}
      <Container style={{ padding: '50px 0' }}>
        <h2
          style={{ textAlign: 'center', color: 'green', marginBottom: '40px' }}
        >
          Why Clients Choose Us
        </h2>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto', // Enables horizontal scrolling
            scrollSnapType: 'x mandatory', // Snap effect
            paddingBottom: '10px' // Space at the bottom of the scroll area
          }}
        >
          {[
            'Exceptional Quality',
            'Modern Designs',
            'Customer-Centric',
            'Affordable Prices'
          ].map((title, index) => (
            <Card
              key={index}
              style={{
                border: '2px solid green',
                backgroundColor: '#fff',
                color: '#333',
                width: '250px',
                marginRight: '20px',
                flexShrink: 0, // Prevents cards from shrinking
                scrollSnapAlign: 'start' // Aligns items at the start
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: 'green' }}>{title}</Card.Title>
                <Card.Text>
                  {index === 0 &&
                    'Each piece is crafted with attention to detail and made to last, blending beauty with durability.'}
                  {index === 1 &&
                    'Our collection features furniture that fits seamlessly into contemporary homes and spaces.'}
                  {index === 2 &&
                    'We’re dedicated to exceeding your expectations with personalized service and fast delivery.'}
                  {index === 3 &&
                    'Our prices are competitive without compromising on quality.'}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      {/* Explore Products Section */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <Container>
          <h2
            style={{
              textAlign: 'center',
              color: 'green',
              marginBottom: '40px'
            }}
          >
            Explore Our Products
          </h2>
          <Row>
            {['Sofas', 'Dining Sets', 'Beds'].map((product, index) => (
              <Col md={4} key={index}>
                <Image
                  src={Hero}
                  alt={`Product ${index + 1}`}
                  fluid
                  style={{
                    borderRadius: '10px',
                    border: '2px solid green',
                    marginBottom: '20px'
                  }}
                />
                <h5 style={{ textAlign: 'center', color: '#333' }}>
                  {product}
                </h5>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimonials Section with Horizontal Scroll */}
      <Container style={{ padding: '50px 0' }}>
        <h2
          style={{ textAlign: 'center', color: 'green', marginBottom: '40px' }}
        >
          What Our Clients Say
        </h2>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto', // Enables horizontal scrolling
            scrollSnapType: 'x mandatory', // Snap effect
            paddingBottom: '10px' // Space at the bottom of the scroll area
          }}
        >
          {[
            'Client Testimonial 1 - "Amazing quality!"',
            'Client Testimonial 2 - "Great service!"',
            'Client Testimonial 3 - "I love my new furniture!"',
            'Client Testimonial 4 - "Highly recommend this store!"'
          ].map((testimonial, index) => (
            <Card
              key={index}
              style={{
                border: '2px solid green',
                backgroundColor: '#fff',
                color: '#333',
                width: '250px',
                marginRight: '20px',
                flexShrink: 0, // Prevents cards from shrinking
                scrollSnapAlign: 'start' // Aligns items at the start
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontStyle: 'italic' }}>
                  "{testimonial}"
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      {/* Newsletter Section */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '30px 0',
          textAlign: 'center'
        }}
      >
        <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'green' }}>
          Subscribe to Our Newsletter
        </h3>
        <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#333' }}>
          Stay updated with our latest collections and exclusive offers.
        </p>
        {/* Newsletter Input Form */}
        <input
          type='email'
          placeholder='Enter your email'
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <Button
          style={{
            backgroundColor: 'green',
            border: 'none',
            padding: '10px 20px',
            marginLeft: '10px'
          }}
        >
          Subscribe
        </Button>
      </div>

      {/* Call-to-Action Section */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '30px 0',
          textAlign: 'center'
        }}
      >
        <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'green' }}>
          Ready to Upgrade Your Space?
        </h3>
        <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#333' }}>
          Browse our exclusive collections and enjoy the perfect blend of style
          and functionality.
        </p>
        <Button
          as={Link}
          to='/shop'
          style={{
            backgroundColor: 'green',
            border: 'none',
            padding: '12px 25px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  )
}

export default LandingPage
