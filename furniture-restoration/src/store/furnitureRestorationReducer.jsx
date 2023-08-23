import { furnitureRestorationList } from '../assets/data/furnitureRestorationList';

export const GET_FURNITURE_LIST = "GET_FURNITURE_LIST";

const initialState = {
  furnitureRestoration: furnitureRestorationList
}

export const furnitureRestorationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FURNITURE_LIST:
      return {
        ...state,
        furnitureRestoration: action.payload
      };
      default:
        return state;
  }
}