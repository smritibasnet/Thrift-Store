import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import { MessageBox } from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productsAction'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const {loading, error, products } = useSelector((state) => state.productList)
  // const { } = productList

  useEffect(() => {
    dispatch(listProducts())
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
            {products.length>0? products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )):
            <h3>No Products Found</h3>
            }
          </Row>
        </div>
      )}
    </>
  )
}

export default HomeScreen
