import React from "react";
import Counter from "../containers/Counter";
import PropTypes from "prop-types";

const Player = ({ name, id, keys }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column"
    }}
    data-testid="player"
  >
    <h1>{name}</h1>
    <div> Keys: {keys}</div>
    <Counter id={id} />
  </div>
);

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  keys: PropTypes.number
};

Player.defaultProps = {
  name: "Player"
};

export default Player;
