import { connect } from "react-redux";
import Player from "../components/Player";

import { getIds } from "../selectors/players";

const mapStateToProps = (state, props) => {
  return {
    playersId: getIds(state, props)
  };
};

export default connect(mapStateToProps)(Player);
