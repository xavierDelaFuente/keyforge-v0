const getCounter = (state, props) => state.counter;

export const getCount = (state, props) => {
  return getCounter(state, props).byId[props.id].count;
};
