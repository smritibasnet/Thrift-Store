import { api } from '../request'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await api.get(`products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
