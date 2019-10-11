import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_PLAYER_COUNTER,
  STEAL_FRAGMENTS,
  DECREMENT_STEAL,
  INCREMENT_STEAL,
  RESET_PLAYER_STEAL_COUNTER
} from "./types/counter";
import { FORGE_KEY } from "./types/keys";

export const decrementCounter = (value, id) => ({
  type: DECREMENT_COUNTER,
  value,
  id
});

export const incrementCounter = (value, id) => ({
  type: INCREMENT_COUNTER,
  value,
  id
});

export const resetPlayerCounter = id => ({
  type: RESET_PLAYER_COUNTER,
  id
});

export const forgeKey = id => ({
  type: FORGE_KEY,
  id
});

export const decrementSteal = (value, id) => ({
  type: DECREMENT_STEAL,
  value,
  id
});

export const incrementSteal = (value, id) => ({
  type: INCREMENT_STEAL,
  value,
  id
});

export const stealFragments = (value, id) => ({
  type: STEAL_FRAGMENTS,
  value,
  id
});

export const resetPlayerStealCounter = id => ({
  type: RESET_PLAYER_STEAL_COUNTER,
  id
});
