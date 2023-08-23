import {serviceList} from '../assets/data/serviceList';

export const GET_SERVICE_LIST = "GET_SERVICE_LIST";

const initialState = {
  services: serviceList
}

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE_LIST:
      return {
        ...state,
        services: action.payload
      };
      default:
        return state;
  }
}