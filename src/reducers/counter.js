import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  STEAL_FRAGMENTS,
  CAPTURE_FRAGMENTS,
} from "../actions/types/counter";

const initalValue = 0;
export const initialState = {
  allIds: ["player-1", "player-2"],
  byId: {
    "player-1": {
      id: "player-1",
      count: initalValue,
      steal: initalValue,
      capture: initalValue,
      capturedFragments: initalValue,
    },
    "player-2": {
      id: "player-2",
      count: initalValue,
      steal: initalValue,
      capture: initalValue,
      capturedFragments: initalValue,
    }
  }
};

export const counter = (state = initialState, action) => {
  let id, value, key;
  switch (action.type) {
    case INCREMENT_COUNTER:
      ({ id, value, key } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            [key]: state.byId[id][key] + value
          }
        }
      };
    case DECREMENT_COUNTER:
      ({ id, value, key } = action);
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            [key]: state.byId[id][key] - value
          }
        }
      };
      case RESET_COUNTER:
          ({ id, value, key } = action);
          return {
            ...state,
            byId: {
              ...state.byId,
              [id]: {
                ...state.byId[id],
                [key]: initalValue
              }
            }
          };
    case STEAL_FRAGMENTS:
      ({ id, value } = action);
      const otherPlayersId = state.allIds.filter(
        identifier => identifier !== id
      );
      return {
        ...state,
        byId: {
          ...state.byId,
          [otherPlayersId]: {
            ...state.byId[otherPlayersId],
            count: state.byId[otherPlayersId].count - value
          },
          [id]: {
            ...state.byId[id],
            count: state.byId[id].count + value
          }
        }
      };
      case CAPTURE_FRAGMENTS:
        ({ id, value } = action);
        const otherId = state.allIds.filter(
          identifier => identifier !== id
        );
        return {
          ...state,
          byId: {
            ...state.byId,
            [otherId]: {
              ...state.byId[otherId],
              count: state.byId[otherId].count - value
            },
            [id]: {
              ...state.byId[id],
              capturedFragments: state.byId[id].capturedFragments + value
            }
          }
        };
    default:
      return state;
  }
};
