import {
  PRODUCT_DETAIL_LIST_FAIL,
  PRODUCT_DETAIL_LIST_REQUEST,
  PRODUCT_DETAIL_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'
const initState = {
  loading: false,
  products: [],
  error: null,
  productDetail:{loading: false, error: null, detail:null },
}
export const productListReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, products: [], error: action.payload }
    case PRODUCT_DETAIL_LIST_REQUEST:
      return { ...state, productDetail:{...state.productDetail,loading: true }  }
    case PRODUCT_DETAIL_LIST_SUCCESS:
      return { ...state,  productDetail:{...state.productDetail,loading: false, detail:action.payload }  }
    case PRODUCT_DETAIL_LIST_FAIL:
      return { ...state,  productDetail:{...state.productDetail,loading: false, error:action.payload }  }
    default:
      return state
  }
}

