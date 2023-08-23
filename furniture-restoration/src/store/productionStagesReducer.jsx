import {productionStagesList} from '../assets/data/productionStagesList';

export const GET_PRODUCTSTAGES_LIST = "GET_PRODUCTSTAGES_LIST";

const initialState = {
  productionStages: productionStagesList
}

export const productionStagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTSTAGES_LIST:
      return {
        ...state,
        productionStages: action.payload
      };
      default:
        return state;
  }
}