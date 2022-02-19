import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import product from '../components/Product'

const ProductScreen = ({ match }) => {
  // const product = products.find(p => p._id === match.params.id)
  return (
    <>
      <Link className='btn btn-secondary my-3' to='/'>
        Go Back
      </Link>
      {/* <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row> */}
    </>
  )
}

export default ProductScreen
