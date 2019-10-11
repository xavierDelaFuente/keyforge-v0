import { FORGE_KEY } from "../actions/types/keys";

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
