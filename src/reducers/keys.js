import { FORGE_KEY } from "../actions";

const initalValue = 0;
const defaultState = {
  count: initalValue
};

export const initialState = {
  allIds: ["player-1", "player-2"],
  byId: {
    "player-1": {
      id: "player-1",
      ...defaultState
    },
    "player-2": {
      id: "player-2",
      ...defaultState
    }
  },
  incrementValue: 1
};

export const keys = (state = initialState, action) => {
  switch (action.type) {
    case FORGE_KEY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            count: state.byId[action.id].count + state.incrementValue
          }
        }
      };
    default:
      return state;
  }
};
