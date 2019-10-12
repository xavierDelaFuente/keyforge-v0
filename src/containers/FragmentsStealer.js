import { connect } from "react-redux";
import FragmentsStealer from "../components/FragmentsStealer";
import { getSteal } from "../selectors/counter";
import { incrementCounter, stealFragments, resetCounter } from "../actions";

const mapStateToProps = (state, props) => {
  return {
    counterValue: getSteal(state, props)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stealFragments: (value, id) => dispatch(stealFragments(value, id)),
    resetCounter: id => dispatch(resetCounter(id, "steal")),
    decrementCounter: id => dispatch(incrementCounter(-1, id, "steal")),
    incrementCounter: id => dispatch(incrementCounter(1, id, "steal"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FragmentsStealer);
