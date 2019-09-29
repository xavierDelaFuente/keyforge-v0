import React from "react";
import ReactDOM from "react-dom";
import Player from "../../containers/Player";
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

describe("Player: ", () => {
  afterEach(cleanup);

  test("renders with redux with defaults", () => {
    const { container } = renderWithRedux(<Player id={"player-1"} />);
    expect(container).toBeInTheDocument();
  });
});
