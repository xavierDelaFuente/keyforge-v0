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
  decrementCounter,
  removeCapture
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
      data-testid="captured-fragments"
    >
      <div>
        <h4>Captured Fragments:</h4>
        {fragments.length &&
          fragments.map((fragment, key) => (
            <div key={`${key}--${fragment}`}>
              <button
                data-testid="decapture-fragments"
                onClick={() => removeCapture(fragment, id)}
              >
                x
              </button>
              <div data-testid="captured-fragment">{fragment}</div>
            </div>
          ))}
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
        data-testid="capture-fragments"
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
