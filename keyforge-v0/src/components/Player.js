import React from "react";
import KeysCounter from "../containers/KeysCounter";
import FragmentsStealer from "../containers/FragmentsStealer";
import PropTypes from "prop-types";

const Player = ({ name, id }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column"
    }}
    data-testid="player"
  >
    <h1>{name}</h1>
    <KeysCounter id={id} keyCost={6} />
    <FragmentsStealer id={id} />
  </div>
);

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired
};

Player.defaultProps = {
  name: "Player"
};

export default Player;
