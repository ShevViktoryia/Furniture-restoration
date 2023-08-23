import { worksList } from '../assets/data/worksList';

export const GET_WORKS_LIST = "GET_WORKS_LIST";

const initialState = {
  works: worksList
}

export const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKS_LIST:
      return {
        ...state,
        works: action.payload
      };
      default:
        return state;
  }
}