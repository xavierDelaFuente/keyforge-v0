import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/types/counter";

const todos = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.value;
    case DECREMENT_COUNTER:
      return state - action.value;
    default:
      return state;
  }
};

export default todos;
