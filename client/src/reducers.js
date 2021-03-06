import { combineReducers } from "redux";

import * as Actions from "./actions";

const initialState = {
  entities: [],
  isFetching: false,
  error: null,
  previous: null,
  next: null
};

export function starWarsReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_STARWARS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_STARWARS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.data.results,
        previous: action.data.previous,
        next: action.data.next
      };

    case Actions.GET_STARWARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
}

export const starWars = combineReducers({
  starWarsReducer
});
