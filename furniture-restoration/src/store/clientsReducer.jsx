import { clientsList } from '../assets/data/clientsList';

export const GET_CLIENTS_LIST = "GET_CLIENTS_LIST";

const initialState = {
  clients: clientsList
}

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS_LIST:
      return {
        ...state,
        clients: action.payload
      };
      default:
        return state;
  }
}