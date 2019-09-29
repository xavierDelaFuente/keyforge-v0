import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./types/counter";

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
