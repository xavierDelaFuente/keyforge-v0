import { connect } from "react-redux";
import KeysCounter from "../components/KeysCounter";
import { getPlayerKeyCount } from "../selectors/keys";
import { getCount } from "../selectors/counter";
import {
  decrementCounter,
  incrementCounter,
  forgeKey,
  resetPlayerCounter
} from "../actions";

const mapStateToProps = (state, props) => {
  return {
    keys: getPlayerKeyCount(state, props),
    counterValue: getCount(state, props)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    forgeKey: id => dispatch(forgeKey(id)),
    resetCounter: id => dispatch(resetPlayerCounter(id)),
    decrementCounter: id => dispatch(decrementCounter(1, id)),
    incrementCounter: id => dispatch(incrementCounter(1, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeysCounter);
