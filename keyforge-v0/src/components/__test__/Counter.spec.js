import React from "react";
import ReactDOM from "react-dom";
import Counter from "../../containers/Counter";
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

describe("Counter: ", () => {
  afterEach(cleanup);

  test("renders with redux with defaults", () => {
    const { getByTestId } = renderWithRedux(<Counter id={"player-1"} />);
    expect(getByTestId("count-value").textContent).toBe("0");
  });

  test("decrements the counter value by 1 when - is clicked", () => {
    const { getByTestId, getByText } = renderWithRedux(
      <Counter id={"player-1"} />
    );
    fireEvent.click(getByText("-"));
    expect(getByTestId("count-value").textContent).toBe("-1");
  });

  test("increments the counter value by 1 when + is clicked", () => {
    const { getByTestId, getByText } = renderWithRedux(
      <Counter id={"player-1"} />
    );
    fireEvent.click(getByText("+"));
    expect(getByTestId("count-value").textContent).toBe("1");
  });
});
