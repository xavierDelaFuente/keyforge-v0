import React from "react";
import PropTypes from "prop-types";

import Player from "../containers/Player";

const App = ({ playersId }) => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    {playersId.map((player, i) => (
      <Player name={`Player ${i}`} id={player} key={player} />
    ))}
  </div>
);

App.propTypes = {
  playersId: PropTypes.array.isRequired
};

export default App;
