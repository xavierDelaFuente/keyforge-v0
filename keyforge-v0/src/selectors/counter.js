const getCounter = (state, props) => state.counter;

export const getCount = (state, props) => {
  return getCounter(state, props).byId[props.id].count;
};

export const getSteal = (state, props) => {
  return getCounter(state, props).byId[props.id].steal;
};

export const getCapture = (state, props) => {
  return getCounter(state, props).byId[props.id].capture;
};

export const getCapturedFragments = (state, props) => {
  return getCounter(state, props).byId[props.id].capturedFragments;
};

