import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Image, Card } from 'react-bootstrap'
import Hero from '../Assets/images/hero.jpg'
import HeroPage from './HeroPage'
import AboutUs from './AboutUs'
import Categories from './Categories'

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
      {/* Existing Components */}
      <HeroPage />
      <AboutUs />
      <Categories />

      {/* Why Choose Us Section */}
      <section
        id='why-choose-us'
        className='animate-on-scroll py-20 relative overflow-hidden'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50'></div>
        <Container className='relative z-10'>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Why Clients Choose Us
          </h2>
          <div className='flex space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar'>
            {[
              {
                title: 'Exceptional Quality',
                icon: '✨',
                description:
                  'Meticulously crafted pieces that blend beauty with durability'
              },
              {
                title: 'Modern Designs',
                icon: '🎨',
                description: 'Contemporary aesthetics that transform spaces'
              },
              {
                title: 'Customer-Centric',
                icon: '👥',
                description:
                  'Personalized service with swift, reliable delivery'
              },
              {
                title: 'Affordable Luxury',
                icon: '💎',
                description: 'Premium quality at competitive prices'
              }
            ].map((item, index) => (
              <div key={index} className='min-w-[300px] snap-start'>
                <div className='h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20'>
                  <div className='text-4xl mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Showcase */}
      <section className='py-20 bg-white'>
        <Container>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Explore Our Collection
          </h2>
          <Row className='g-4'>
            {['Luxury Sofas', 'Designer Dining', 'Premium Beds'].map(
              (product, index) => (
                <Col md={4} key={index}>
                  <div className='group relative overflow-hidden rounded-2xl'>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <Image
                      src={Hero}
                      alt={product}
                      className='w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {product}
                      </h3>
                      <Button className='bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 transition-colors duration-300'>
                        Explore →
                      </Button>
                    </div>
                  </div>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <Container>
          <h2 className='text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Client Testimonials
          </h2>
          <div className='flex space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar'>
            {[
              {
                name: 'Emma Thompson',
                role: 'Interior Designer',
                text: 'Exceptional quality and service!'
              },
              {
                name: 'James Wilson',
                role: 'Homeowner',
                text: 'Transformed our living space completely.'
              },
              {
                name: 'Sarah Parker',
                role: 'Architect',
                text: 'Unmatched attention to detail.'
              },
              {
                name: 'Michael Brown',
                role: 'Property Developer',
                text: 'The best in the industry.'
              }
            ].map((testimonial, index) => (
              <div key={index} className='min-w-[350px] snap-start'>
                <Card className='h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20'>
                  <div className='text-gray-600 italic mb-4'>
                    {testimonial.text}
                  </div>
                  <div className='mt-auto'>
                    <div className='font-semibold text-gray-800'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {testimonial.role}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className='py-20 bg-gradient-to-r from-purple-100 to-pink-100'>
        <Container className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Join Our Newsletter
          </h2>
          <p className='text-gray-600 mb-8'>
            Stay inspired with our latest collections and exclusive offers.
          </p>
          <div className='flex gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <button className='px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity duration-300'>
              Subscribe
            </button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className='py-20 bg-white'>
        <Container className='text-center'>
          <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            Ready to Transform Your Space?
          </h2>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Discover our curated collection of premium furniture pieces designed
            to elevate your living space.
          </p>
          <Link to='/shop'>
            <button className='px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold hover:opacity-90 transition-opacity duration-300'>
              Explore Collection →
            </button>
          </Link>
        </Container>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default LandingPage
