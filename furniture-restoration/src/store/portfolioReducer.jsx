import {portfolioList} from '../assets/data/portfolioList';

export const GET_PORTFOLIO_LIST = "GET_PORTFOLIO_LIST";

const initialState = {
  portfolio: portfolioList
}

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIO_LIST:
      return {
        ...state,
        portfolio: action.payload
      };
      default:
        return state;
  }
}