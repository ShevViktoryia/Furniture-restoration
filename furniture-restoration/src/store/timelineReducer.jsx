import { timelineList } from '../assets/data/timelineList';

export const GET_TIMELINE_LIST = "GET_TIMELINE_LIST";

const initialState = {
  timeline: timelineList
}

export const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMELINE_LIST:
      return {
        ...state,
        timeline: action.payload
      };
      default:
        return state;
  }
}