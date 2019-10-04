import React from "react";
import PropTypes from "prop-types";

const Counter = ({ onDecrement, onIncrement, value, id }) => (
  <div
    style={{ display: "flex", justifyContent: "space-around", margin: "1em" }}
  >
    <button onClick={() => onDecrement(id)}> - </button>
    <div data-testid="count-value">{value}</div>
    <button onClick={() => onIncrement(id)}> + </button>
  </div>
);

Counter.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Counter;
