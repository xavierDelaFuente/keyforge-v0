import {
  INCREMENT_COUNTER,
  RESET_COUNTER,
  STEAL_FRAGMENTS,
  CAPTURE_FRAGMENTS,
  REMOVE_CAPTURE
} from "../actions";

const initalValue = 0;
const defaultState = {
  count: initalValue,
  steal: initalValue,
  capture: initalValue,
  capturedFragments: []
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
  }
};

export const counter = (state = initialState, action) => {
  let id, value, key, tValue, otherId;

  switch (action.type) {
    case INCREMENT_COUNTER: {
      ({ id, value, key } = action);
      tValue = state.byId[id][key] + value >= 0 ? value : 0;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            [key]: state.byId[id][key] + tValue
          }
        }
      };
    }
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
      otherId = state.allIds.filter(identifier => identifier !== id);
      tValue =
        state.byId[otherId].count - value >= 0
          ? value
          : state.byId[otherId].count;
      return {
        ...state,
        byId: {
          ...state.byId,
          [otherId]: {
            ...state.byId[otherId],
            count: state.byId[otherId].count - tValue
          },
          [id]: {
            ...state.byId[id],
            count: state.byId[id].count + tValue
          }
        }
      };
    case CAPTURE_FRAGMENTS:
      ({ id, value } = action);
      otherId = state.allIds.filter(identifier => identifier !== id);
      tValue =
        state.byId[otherId].count - value >= 0
          ? value
          : state.byId[otherId].count;
      return {
        ...state,
        byId: {
          ...state.byId,
          [otherId]: {
            ...state.byId[otherId],
            count: state.byId[otherId].count - tValue
          },
          [id]: {
            ...state.byId[id],
            capturedFragments: [...state.byId[id].capturedFragments, tValue]
          }
        }
      };
    case REMOVE_CAPTURE:
      ({ id, value } = action);
      otherId = state.allIds.filter(identifier => identifier !== id);
      return {
        ...state,
        byId: {
          ...state.byId,
          [otherId]: {
            ...state.byId[otherId],
            count: state.byId[otherId].count + value
          },
          [id]: {
            ...state.byId[id],
            capturedFragments: state.byId[id].capturedFragments.filter(
              id => id !== value
            )
          }
        }
      };
    default:
      return state;
  }
};
