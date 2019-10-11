import React from "react";
import ReactDOM from "react-dom";
import App from "../../containers/App";
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

describe("App: ", () => {
  afterEach(cleanup);

  test("renders with redux with defaults", () => {
    const { container } = renderWithRedux(<App />);
    expect(container).toBeInTheDocument();
  });

  test("renders two players", () => {
    const { getAllByTestId } = renderWithRedux(<App />);
    expect(getAllByTestId("player")).toHaveLength(2);
  });
});
