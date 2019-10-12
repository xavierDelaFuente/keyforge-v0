import React from "react";
// import ReactDOM from "react-dom";
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

describe("FragmentsCapturer: ", () => {
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
  const getPlayerFragmentsCapturer = ({ player }) =>
    getPlayer({ player: player }).querySelector(
      '[data-testid="captured-fragments"]'
    );
  const getPlayerCapturedFragments = ({ player }) =>
    getPlayer({ player: player }).querySelector(
      '[data-testid="captured-fragment"]'
    );
  const getPlayerFragmentsCapturerCounter = ({ player }) =>
    getPlayerFragmentsCapturer({ player: player }).querySelector(
      '[data-testid="count-value"]'
    );
  const getPlayerFragmentsCapturerIncreaseButton = ({ player }) =>
    getPlayerFragmentsCapturer({ player: player }).querySelector(
      '[data-testid="+"]'
    );
  const getPlayerFragmentsCapturerDecreaseButton = ({ player }) =>
    getPlayerFragmentsCapturer({ player: player }).querySelector(
      '[data-testid="-"]'
    );
  const getPlayerFragmentsCapturerButton = ({ player }) =>
    getPlayerFragmentsCapturer({ player: player }).querySelector(
      '[data-testid="capture-fragments"]'
    );
  const getPlayerFragmentsDeCapturerButton = ({ player }) =>
    getPlayerFragmentsCapturer({ player: player }).querySelector(
      '[data-testid="decapture-fragments"]'
    );

  test("each player has a tool to capture fragments", () => {
    const { getAllByText } = renderWithRedux(<App />);

    expect(
      getPlayerFragmentsCapturerCounter({ player: 1 })
    ).toBeInTheDocument();
    expect(
      getPlayerFragmentsCapturerCounter({ player: 2 })
    ).toBeInTheDocument();
    expect(getAllByText("Captured Fragments")).toHaveLength(2);
  });

  test("each player capture counter starts at 0", () => {
    renderWithRedux(<App />);

    expect(getPlayerFragmentsCapturerCounter({ player: 1 }).textContent).toBe(
      "0"
    );
    expect(getPlayerFragmentsCapturerCounter({ player: 2 }).textContent).toBe(
      "0"
    );
  });

  test("a player can increase the capture counter value by presing +", () => {
    renderWithRedux(<App />);

    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));

    expect(getPlayerFragmentsCapturerCounter({ player: 1 }).textContent).toBe(
      "1"
    );
  });

  test("a player can decrease the capture counter value by presing - if bigger than 0", () => {
    renderWithRedux(<App />);

    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerDecreaseButton({ player: 1 }));

    expect(getPlayerFragmentsCapturerCounter({ player: 1 }).textContent).toBe(
      "0"
    );
  });

  test("a player cannot decrease the capture counter value by presing - if is already 0", () => {
    renderWithRedux(<App />);

    fireEvent.click(getPlayerFragmentsCapturerDecreaseButton({ player: 1 }));

    expect(getPlayerFragmentsCapturerCounter({ player: 1 }).textContent).toBe(
      "0"
    );
  });

  test("if the other player has fragments, click Capture Fragments will capture from other player s fragments", () => {
    const { store, debug } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2", "count"));
    expect(getPlayerFragments({ player: 1 }).textContent).toBe("0");
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("2");

    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerButton({ player: 1 }));

    expect(getPlayerCapturedFragments({ player: 1 }).textContent).toBe("1");
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("1");
  });

  test("resets players counter when he steals fragments", () => {
    const { store } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2"));
    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerButton({ player: 1 }));

    expect(getPlayerFragmentsCapturerCounter({ player: 2 }).textContent).toBe(
      "0"
    );
  });

  test("the maximum to capture is other player s current fragments", () => {
    const { store } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2", "count"));
    expect(getPlayerFragments({ player: 1 }).textContent).toBe("0");
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("2");

    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerButton({ player: 1 }));

    expect(getPlayerCapturedFragments({ player: 1 }).textContent).toBe("2");
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("0");
  });

  test("capture fragments allocates them in a block", () => {
    const { store } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2", "count"));

    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerButton({ player: 1 }));

    expect(
      getPlayerCapturedFragments({ player: 1, position: 0 }).textContent
    ).toBe("2");
  });

  test("when a captured block is deleted, its value return to the other player", () => {
    const { store } = renderWithRedux(<App />);
    store.dispatch(incrementCounter(2, "player-2", "count"));

    fireEvent.click(getPlayerFragmentsCapturerIncreaseButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsCapturerButton({ player: 1 }));
    fireEvent.click(getPlayerFragmentsDeCapturerButton({ player: 1 }));

    expect(getPlayerCapturedFragments({ player: 1 })).not.toBeInTheDocument();
    expect(getPlayerFragments({ player: 2 }).textContent).toBe("2");
  });
});
