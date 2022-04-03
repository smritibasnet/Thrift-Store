import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap'
import { listProductsByID } from '../actions/productsAction'
import LoadingBox from '../components/LoadingBox'
import { MessageBox } from '../components/MessageBox'
import { toast } from 'react-toastify'

const ProductScreen = ({ match }) => {
  const params = useParams()
  const dispatch = useDispatch()
  const { productDetail } = useSelector((state) => state.productList)
  const [qty, setQty] = useState(1)
  const { loading, detail, error } = productDetail

  useEffect(() => {
    if (params?.id) {
      dispatch(listProductsByID(params?.id))
    }
  }, [params?.id, dispatch])
  const addToCartHandler = () => {
    //api handling
    toast.success('Product has been added to cart', { toastId: params?.id })
  }

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div>
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
                        {detail?.countInStock === 1
                          ? 'In Stock'
                          : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroupItem>

                  {detail?.countInStock > 0 && (
                    <>
                      <ListGroupItem>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}>
                              {[...Array(detail?.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    </>
                  )}
                  <ListGroupItem>
                    <Button
                      onClick={addToCartHandler}
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
        </div>
      )}
    </>
  )
}

export default ProductScreen
