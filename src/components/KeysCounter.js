import React from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

const KeysCounter = ({
  id,
  keys,
  forgeKey,
  resetCounter,
  keyCost,
  counterValue,
  decrementCounter,
  incrementCounter
}) => {
  const canGenerateKey = () => counterValue >= keyCost;
  const generateKey = () => {
    if (canGenerateKey()) {
      forgeKey(id);
      resetCounter(id);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
      }}
      data-testid="keys-counter"
    >
      <div
        data-testid="keys-value"
        style={{
          margin: "1em"
        }}
      >
        Keys: {keys}
      </div>
      <Counter
        id={id}
        title="Fragments"
        value={counterValue}
        onIncrement={incrementCounter}
        onDecrement={decrementCounter}
      />
      <button onClick={() => generateKey(id, keyCost)}>Forge Key</button>
    </div>
  );
};

KeysCounter.propTypes = {
  id: PropTypes.string.isRequired,
  keys: PropTypes.number.isRequired,
  keyCost: PropTypes.number.isRequired,

  counterValue: PropTypes.number.isRequired,
  forgeKey: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired
};

export default KeysCounter;
