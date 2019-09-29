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
    const { getByTestId, getByText } = renderWithRedux(<Counter />);
    fireEvent.click(getByText("+"));
    expect(getByTestId("count-value").textContent).toBe("1");
  });

  test("renders with redux with custom initial state", () => {
    const { getByTestId, getByText } = renderWithRedux(<Counter />);
    fireEvent.click(getByText("-"));
    expect(getByTestId("count-value").textContent).toBe("-1");
  });

  test("renders with redux with custom initial state", () => {
    const { getByTestId, getByText } = renderWithRedux(<Counter />);
    fireEvent.click(getByText("+"));
    expect(getByTestId("count-value").textContent).toBe("1");
  });
});
