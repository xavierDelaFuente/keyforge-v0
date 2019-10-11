const getPlayerKeys = (state, props) => state.keys;

export const getPlayerKeyCount = (state, props) => {
  return getPlayerKeys(state, props).byId[props.id].count;
};
