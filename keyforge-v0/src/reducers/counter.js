import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_PLAYER_COUNTER,
  STEAL_FRAGMENTS,
  INCREMENT_STEAL,
  DECREMENT_STEAL,
  RESET_PLAYER_STEAL_COUNTER
} from "../actions/types/counter";

const initalValue = 0;
export const initialState = {
  allIds: ["player-1", "player-2"],
  byId: {
    "player-1": {
      id: "player-1",
      count: initalValue,
      steal: initalValue
    },
    "player-2": {
      id: "player-2",
      count: initalValue,
      steal: initalValue
    }
  }
};

export const counter = (state = initialState, action) => {
  let id, value;
  switch (action.type) {
    case INCREMENT_COUNTER:
      ({ id, value } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            count: state.byId[id].count + value
          }
        }
      };
    case DECREMENT_COUNTER:
      ({ id, value } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            count: state.byId[id].count - value
          }
        }
      };
    case INCREMENT_STEAL:
      ({ id, value } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            steal: state.byId[id].steal + value
          }
        }
      };
    case DECREMENT_STEAL:
      ({ id, value } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            steal: state.byId[id].steal - value
          }
        }
      };
    case STEAL_FRAGMENTS:
      ({ id, value } = action);
      const otherPlayersId = state.allIds.filter(identifier => identifier !== id)
      return {
        ...state,
        byId: {
          ...state.byId,
          [otherPlayersId]: {
            ...state.byId[otherPlayersId],
            count: state.byId[otherPlayersId].count - value
          }
        }
      };
    case RESET_PLAYER_COUNTER:
      ({ id, value } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            count: initalValue
          }
        }
      };
      case RESET_PLAYER_STEAL_COUNTER:
          ({ id, value } = action);
          return {
            ...state,
            byId: {
              ...state.byId,
              [id]: {
                ...state.byId[id],
                steal: initalValue
              }
            }
          };
    default:
      return state;
  }
};
// state.allIds.filter(id => id !== action.id)