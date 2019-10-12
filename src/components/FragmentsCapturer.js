import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

const FragmentsCapturer = ({
  id,
  fragments,
  counterValue,
  resetCounter,
  captureFragments,
  incrementCounter,
  decrementCounter
}) => {
  const captureFragmentsFromPlayer = (counterValue, id) => {
    captureFragments(counterValue, id);
    resetCounter(id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
      }}
      data-testid="fragments-capturer"
    >
      <div data-testid="fragments-captured">
        <h4>Captured Fragments:</h4>
        <div>{fragments}</div>
      </div>
      <Counter
        id={id}
        title="Fragments"
        onIncrement={incrementCounter}
        onDecrement={decrementCounter}
        value={counterValue}
      />
      <button
        onClick={() => captureFragmentsFromPlayer(counterValue, id)}
        data-testid="steal-fragments"
      >
        Captured Fragments
      </button>
    </div>
  );
};

FragmentsCapturer.propTypes = {
  id: PropTypes.string.isRequired,

  counterValue: PropTypes.number.isRequired
};

export default FragmentsCapturer;
