import { connect } from "react-redux";
import FragmentsCapturer from "../components/FragmentsCapturer";
import { getCapture, getCapturedFragments } from "../selectors/counter";
import {
  incrementCounter,
  resetCounter,
  captureFragments,
  removeCapture
} from "../actions";

const mapStateToProps = (state, props) => {
  return {
    counterValue: getCapture(state, props),
    fragments: getCapturedFragments(state, props)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    captureFragments: (value, id) =>
      dispatch(captureFragments(value, id, "capture")),
    resetCounter: id => dispatch(resetCounter(id, "capture")),
    decrementCounter: id => dispatch(incrementCounter(-1, id, "capture")),
    incrementCounter: id => dispatch(incrementCounter(1, id, "capture")),
    removeCapture: (value, id) => dispatch(removeCapture(value, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FragmentsCapturer);
