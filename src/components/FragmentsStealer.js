import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

const FragmentsStealer = ({
  id,
  counterValue,
  resetCounter,
  stealFragments,
  incrementCounter,
  decrementCounter
}) => {
  const stealFragmentsFromPlayer = (counterValue, id) => {
    stealFragments(counterValue, id);
    resetCounter(id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
      }}
      data-testid="fragments-stealer"
    >
      <Counter
        id={id}
        title="Fragments"
        onIncrement={incrementCounter}
        onDecrement={decrementCounter}
        value={counterValue}
      />
      <button
        onClick={() => stealFragmentsFromPlayer(counterValue, id)}
        data-testid="steal-fragments"
      >
        Steal Fragments
      </button>
    </div>
  );
};

FragmentsStealer.propTypes = {
  id: PropTypes.string.isRequired,

  counterValue: PropTypes.number.isRequired
};

export default FragmentsStealer;
