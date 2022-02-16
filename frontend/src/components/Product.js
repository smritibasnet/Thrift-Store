import React from 'react'
import { Card } from 'react-bootstrap'

const product = () => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
    </Card>
  )
}

export default product
