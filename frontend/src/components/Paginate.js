import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <div className='d-flex justify-content-center mt-4'>
        <Pagination>
          {[...Array(pages).keys()].map(x => (
            <LinkContainer
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/${x + 1}`
              }
            >
              <Pagination.Item
                active={x + 1 === page}
                style={{
                  color: x + 1 === page ? 'white' : '#1e2329',
                  backgroundColor: x + 1 === page ? '#f0b90b' : 'transparent',
                  border:
                    x + 1 === page ? '1px solid #f0b90b' : '1px solid green'
                }}
              >
                {x + 1}
              </Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      </div>
    )
  )
}

export default Paginate
