import { connect } from "react-redux";
import KeysCounter from "../components/KeysCounter";
import { getPlayerKeyCount } from "../selectors/keys";
import { getCount } from "../selectors/counter";
import { forgeKey, resetPlayerCounter } from "../actions";

const mapStateToProps = (state, props) => {
  return {
    keys: getPlayerKeyCount(state, props),
    counterValue: getCount(state, props)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    forgeKey: id => dispatch(forgeKey(id)),
    resetCounter: id => dispatch(resetPlayerCounter(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeysCounter);
