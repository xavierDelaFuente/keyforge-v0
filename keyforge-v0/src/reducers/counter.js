import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_PLAYER_COUNTER
} from "../actions/types/counter";

const initalValue = 0;
export const initialState = {
  allIds: ["player-1", "player-2"],
  byId: {
    "player-1": {
      id: "player-1",
      count: 0
    },
    "player-2": {
      id: "player-2",
      count: 0
    }
  }
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            count: state.byId[action.id].count + action.value
          }
        }
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            count: state.byId[action.id].count - action.value
          }
        }
      };
    case RESET_PLAYER_COUNTER:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            count: initalValue
          }
        }
      };
    default:
      return state;
  }
};
