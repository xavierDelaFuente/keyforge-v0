import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./types/counter";

export const decrementCounter = value => ({
  type: DECREMENT_COUNTER,
  value
});

export const incrementCounter = value => ({
  type: INCREMENT_COUNTER,
  value
});
