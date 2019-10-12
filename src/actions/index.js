export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";
export const STEAL_FRAGMENTS = "STEAL_FRAGMENTS";
export const CAPTURE_FRAGMENTS = "CAPTURE_FRAGMENTS";
export const FORGE_KEY = "FORGE_KEY";
export const REMOVE_CAPTURE = "REMOVE_CAPTURE";

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

export const removeCapture = (value, id) => ({
  type: REMOVE_CAPTURE,
  value,
  id
});
