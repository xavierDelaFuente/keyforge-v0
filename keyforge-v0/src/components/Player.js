import React from "react";
import Counter from "../containers/Counter";
import PropTypes from "prop-types";

const Player = ({ name, id }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column"
    }}
  >
    <h1>{name}</h1>
    <Counter id={id} />
  </div>
);

Player.propTypes = {
  name: PropTypes.string
};

Player.defaultProps = {
  name: "Player"
};

export default Player;
