import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../actions";
import { getCount } from "../selectors/counter";
import Counter from "../components/Counter";

const mapStateToProps = (state, ownProps) => {
  return {
    value: getCount(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDecrement: id => dispatch(decrementCounter(1, id)),
    onIncrement: id => dispatch(incrementCounter(1, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
