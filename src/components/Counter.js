import React from "react";
import PropTypes from "prop-types";

const Counter = ({ onDecrement, onIncrement, value, id }) => (
  <div
    style={{ display: "flex", justifyContent: "space-around", margin: "1em" }}
  >
    <button onClick={() => onDecrement(id)} data-testid="-">
      {" "}
      -{" "}
    </button>
    <div data-testid="count-value">{value}</div>
    <button onClick={() => onIncrement(id)} data-testid="+">
      {" "}
      +{" "}
    </button>
  </div>
);

Counter.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Counter;
