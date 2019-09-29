import React from "react";
import PropTypes from "prop-types";

const Counter = ({ onDecrement, onIncrement, value }) => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <button onClick={onDecrement}> - </button>
    <div data-testid="count-value">{value}</div>
    <button onClick={onIncrement}> + </button>
  </div>
);

Counter.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Counter;
