import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../actions";
import Counter from "../components/Counter";

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    value: state.counter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDecrement: () => dispatch(decrementCounter(1)),
    onIncrement: () => dispatch(incrementCounter(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
