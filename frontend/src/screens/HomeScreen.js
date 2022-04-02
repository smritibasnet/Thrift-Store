import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import { MessageBox } from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productsAction'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts)
  }, [dispatch])

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div>
          <h2> Latest Products </h2>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default HomeScreen
