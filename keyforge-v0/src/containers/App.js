import { connect } from "react-redux";
import { getIds } from "../selectors/players";
import App from "../components/App";

const mapStateToProps = (state, props) => {
  return {
    playersId: getIds(state, props)
  };
};

export default connect(mapStateToProps)(App);
