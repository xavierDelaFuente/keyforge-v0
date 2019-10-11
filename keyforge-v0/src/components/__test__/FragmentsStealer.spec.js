import React from "react";
import ReactDOM from "react-dom";
import App from "../../containers/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../reducers/index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { incrementCounter } from "../../actions";
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe("FragmentsStealer: ", () => {
  afterEach(cleanup);

  test("renders with redux with defaults", () => {
    const { container } = renderWithRedux(<App />);
    expect(container).toBeInTheDocument();
  });

  const getPlayer = ({ player }) =>
    document.querySelectorAll('[data-testid="player"]')[player - 1];
  const getPlayerFragments = ({ player }) =>
    getPlayer({ player: player })
      .querySelector('[data-testid="keys-counter"]')
      .querySelector('[data-testid="count-value"]');
  const getPlayerFragmentsStealer = ({ player }) =>
    getPlayer({ player: player }).querySelector(
      '[data-testid="fragments-stealer"]'
    );
  const getPlayerFragmentsStealerCounter = ({ player }) =>
    getPlayerFragmentsStealer({ player: player }).querySelector(
      '[data-testid="count-value"]'
    );
  const getPlayerFragmentsStealerIncreaseButton = ({ player }) =>
    getPlayerFragmentsStealer({ player: player }).querySelector(
      '[data-testid="+"]'
    );
  const getPlayerFragmentsStealerStealButton = ({ player }) =>
    getPlayerFragmentsStealer({ player: player }).querySelector(
      '[data-testid="steal-fragments"]'
    );

  test("a player has a tool to steal fragments", () => {
    const { getAllByText } = renderWithRedux(<App />);

    expect(getPlayerFragmentsStealerCounter({ player: 1 })).toBeInTheDocument();
    expect(getPlayerFragmentsStealerCounter({ player: 2 })).toBeInTheDocument();
    expect(getAllByText("Steal Fragments")).toHaveLength(2);
  });

  test("each player steal counter starts at 0", () => {
    renderWithRedux(<App />);

    expect(getPlayerFragmentsStealerCounter({ player: 1 }).textContent).toBe(
      "0"
    );
    expect(getPlayerFragmentsStealerCounter({ player: 2 }).textContent).toBe(
      "0"
    );
  });

  test("a player can increase the steal counter value by presing +", () => {
    renderWithRedux(<App />);

    fireEvent.click(getPlayerFragmentsStealerIncreaseButton({ player: 1 }));

    expect(getPlayerFragmentsStealerCounter({ player: 1 }).textContent).toBe(
      "1"
    );
  });

  test("if the other player has fragments, click Steal Fragments will steal from other player s fragments", () => {
    const { store } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2"));
    expect(getPlayerFragments({ player: 1 }).textContent).toBe("0");
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("2");

    fireEvent.click(getPlayerFragmentsStealerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsStealerStealButton({ player: 1 }));

    expect(getPlayerFragments({ player: 1 }).textContent).toBe("1");
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("1");
  });

  test("resets players counter when he steals fragments", () => {
    const { store } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2"));
    fireEvent.click(getPlayerFragmentsStealerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsStealerStealButton({ player: 1 }));

    expect(getPlayerFragmentsStealerCounter({ player: 2 }).textContent).toBe(
      "0"
    );
  });
});
