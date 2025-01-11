import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector(state => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel
      pause='hover'
      className='mt-5'
      style={{ backgroundColor: 'white' }}
      nextIcon={
        <span
          className='carousel-control-next-icon'
          style={{ backgroundColor: 'pink' }}
        />
      }
      prevIcon={
        <span
          className='carousel-control-prev-icon'
          style={{ backgroundColor: 'pink' }}
        />
      }
    >
      {products.map(product => (
        <Carousel.Item key={product._id} style={{ border: '1px solid green' }}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2 style={{ color: 'red' }}>
                {product.name} (Ksh {product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
