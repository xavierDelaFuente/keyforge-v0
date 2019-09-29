import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onDecrement, onIncrement, value }) => (
  <div>
    <button onClick={onDecrement}> - </button>
    <div>{value}</div>
    <button onClick={onIncrement}> + </button>
  </div>
);

Todo.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Todo;
