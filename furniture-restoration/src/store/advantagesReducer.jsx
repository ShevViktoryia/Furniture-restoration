import { advantagesList } from '../assets/data/advantagesList';

export const GET_ADVANTAGES_LIST = "GET_ADVANTAGES_LIST";

const initialState = {
  advantages: advantagesList
}

export const advantagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADVANTAGES_LIST:
      return {
        ...state,
        advantages: action.payload
      };
      default:
        return state;
  }
}