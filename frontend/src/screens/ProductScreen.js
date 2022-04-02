import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import { listProductsByID } from '../actions/productsAction'

const ProductScreen = ({ match }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const { productDetail } = useSelector((state) => state.productList)
  const { loading, detail, error } = productDetail

  useEffect(() => {
    if (params?.id) {
      dispatch(listProductsByID(params?.id))
    }
  }, [params?.id, dispatch])

  return (
    <>
      <Link className='btn btn-secondary my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={detail?.image} alt={detail?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{detail?.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={detail?.rating}
                text={`${detail?.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              <strong>Price:</strong> Rs.{detail?.price}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Description:</strong> <br />
              {detail?.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Rs.{detail?.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {detail?.countInStock === 1 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-dark'
                  type='button'
                  disabled={detail?.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
