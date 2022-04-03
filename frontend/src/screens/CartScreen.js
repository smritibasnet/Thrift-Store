import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { listProductsByID } from '../actions/productsAction'
import { useDispatch } from 'react-redux'

 const CartScreen = (props) => {
  const params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    if (params?.id) {
      dispatch(listProductsByID(params?.id))
    }
  }, [params?.id, dispatch])
  // const qty = props.location.search
  //   ? Number(props.location.search.split('=')[1])
  //   : 1

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        Add to Cart: ProductId: {params?.id} 
      </p>
    </div>
  )
}
export default CartScreen