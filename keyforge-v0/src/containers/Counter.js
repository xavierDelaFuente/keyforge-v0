import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../actions";
import { getCount } from "../selectors/counter";
import Counter from "../components/Counter";

const mapStateToProps = (state, ownProps) => ({
  value: getCount(state)
});

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
