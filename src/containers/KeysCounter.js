import { connect } from "react-redux";
import KeysCounter from "../components/KeysCounter";
import { getPlayerKeyCount } from "../selectors/keys";
import { getCount } from "../selectors/counter";
import { incrementCounter, forgeKey, resetCounter } from "../actions";

const mapStateToProps = (state, props) => {
  return {
    keys: getPlayerKeyCount(state, props),
    counterValue: getCount(state, props)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    forgeKey: id => dispatch(forgeKey(id)),
    resetCounter: id => dispatch(resetCounter(id, "count")),
    decrementCounter: id => dispatch(incrementCounter(-1, id, "count")),
    incrementCounter: id => dispatch(incrementCounter(1, id, "count"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeysCounter);
