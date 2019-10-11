import { connect } from "react-redux";
import FragmentsCapturer from "../components/FragmentsCapturer";
import { getCapture, getCapturedFragments } from "../selectors/counter";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
  captureFragments,
} from "../actions";

const mapStateToProps = (state, props) => {
  return {
    counterValue: getCapture(state, props),
    fragments: getCapturedFragments(state, props),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    captureFragments: (value, id) => dispatch(captureFragments(value, id, 'capture')),
    resetCounter: id => dispatch(resetCounter(id, 'capture')),
    decrementCounter: id => dispatch(decrementCounter(1, id, 'capture')),
    incrementCounter: id => dispatch(incrementCounter(1, id, 'capture'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FragmentsCapturer);
