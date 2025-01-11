import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { Search } from 'lucide-react'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form inline>
      <InputGroup className='pl-2' style={{ alignItems: 'center' }}>
        <Form.Control
          type='text'
          name='q'
          onChange={e => setKeyword(e.target.value)}
          placeholder='Search Products...'
          style={{
            color: '#2c3e50',
            outline: 'none',
            backgroundColor: 'white',
            border: '1px solid #28a745',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        />
        <InputGroup.Append>
          <Button
            type='submit'
            onClick={submitHandler}
            style={{ backgroundColor: '#28a745', border: 'none' }}
          >
            <Search style={{ color: 'white' }} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default SearchBox
