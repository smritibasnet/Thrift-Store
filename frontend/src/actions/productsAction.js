import axios from 'axios'
import {
  PRODUCT_DETAIL_LIST_FAIL,
  PRODUCT_DETAIL_LIST_REQUEST,
  PRODUCT_DETAIL_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  })

  await axios
    .get('/api/products')
    .then((res) => {
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res?.data })
    })
    .catch((error) => {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    })
}

export const listProductsByID = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAIL_LIST_REQUEST
  })

  await axios
    .get(`/api/products/${id}`)
    .then((res) => {
     
      dispatch({ type: PRODUCT_DETAIL_LIST_SUCCESS, payload: res?.data })
    })
    .catch((error) => {
      dispatch({ type: PRODUCT_DETAIL_LIST_FAIL, payload: error.message })
    })
}
