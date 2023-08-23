import {productList} from '../assets/data/productList';

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

const initialState = {
  products: productList
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload
      };
      default:
        return state;
  }
}