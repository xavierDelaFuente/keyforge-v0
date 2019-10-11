import { connect } from "react-redux";
import FragmentsStealer from "../components/FragmentsStealer";
import { getSteal } from "../selectors/counter";
import {
  decrementSteal,
  incrementSteal,
  stealFragments,
  resetPlayerStealCounter
} from "../actions";

const mapStateToProps = (state, props) => {
  return {
    counterValue: getSteal(state, props)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    stealFragments: (value, id) => dispatch(stealFragments(value, id)),
    resetCounter: id => dispatch(resetPlayerStealCounter(id)),
    decrementCounter: id => dispatch(decrementSteal(1, id)),
    incrementCounter: id => dispatch(incrementSteal(1, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FragmentsStealer);
