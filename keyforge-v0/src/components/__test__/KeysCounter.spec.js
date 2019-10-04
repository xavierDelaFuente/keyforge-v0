import React from "react";
import ReactDOM from "react-dom";
import KeysCounter from "../../containers/KeysCounter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../reducers/index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

const keyCost = 6;
const incrementCounter = (getByText, times) => {
  for (let i = 0; i < times; i++) {
    fireEvent.click(getByText("+"));
  }
};

describe("KeysCounter: ", () => {
  afterEach(cleanup);

  test("renders with redux with defaults", () => {
    const { getByTestId } = renderWithRedux(
      <KeysCounter id={"player-1"} keyCost={keyCost} />
    );
    expect(getByTestId("keys-value").textContent).toBe("Keys: 0");
  });

  test("does not increment the KeysCounter value when 'Forge Key' is clicked if the keyCounter is lower than the keyCost", () => {
    const { getByTestId, getByText } = renderWithRedux(
      <KeysCounter id={"player-1"} keyCost={keyCost} />
    );

    fireEvent.click(getByText("Forge Key"));
    expect(getByTestId("keys-value").textContent).toBe("Keys: 0");
  });

  test("increments the KeysCounter value by 1 when 'Forge Key' is clicked if the keyCounter is higher or equal than the keyCost ", () => {
    const { getByTestId, getByText } = renderWithRedux(
      <KeysCounter id={"player-1"} keyCost={keyCost} />
    );
    incrementCounter(getByText, keyCost);

    fireEvent.click(getByText("Forge Key"));
    expect(getByTestId("keys-value").textContent).toBe("Keys: 1");
  });

  test("resets the Counter when a Key is Forged", () => {
    const { getByTestId, getByText } = renderWithRedux(
      <KeysCounter id={"player-1"} keyCost={keyCost} />
    );
    incrementCounter(getByText, keyCost);

    fireEvent.click(getByText("Forge Key"));
    expect(getByTestId("count-value").textContent).toBe("0");
  });
});
