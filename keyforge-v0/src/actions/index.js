import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_PLAYER_COUNTER
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
