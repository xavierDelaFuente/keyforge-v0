import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  STEAL_FRAGMENTS,
  CAPTURE_FRAGMENTS,
} from "./types/counter";
import { FORGE_KEY } from "./types/keys";

export const decrementCounter = (value, id, key) => ({
  type: DECREMENT_COUNTER,
  value,
  id,
  key
});

export const incrementCounter = (value, id, key) => ({
  type: INCREMENT_COUNTER,
  value,
  id,
  key
});

export const resetCounter = (id, key) => ({
  type: RESET_COUNTER,
  id,
  key
});

export const forgeKey = id => ({
  type: FORGE_KEY,
  id
});

export const stealFragments = (value, id) => ({
  type: STEAL_FRAGMENTS,
  value,
  id
});

export const captureFragments = (value, id) => ({
  type: CAPTURE_FRAGMENTS,
  value,
  id
});
