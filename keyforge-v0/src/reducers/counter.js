import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/types/counter";

export const initialState = {
  count: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + action.value };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
};
