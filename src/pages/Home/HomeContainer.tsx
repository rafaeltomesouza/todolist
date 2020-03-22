import { connect } from "react-redux";
import { addTask, checkedTask } from "../../actions/task";
import { List } from '../../types';
import Home from "./Home";

const mapStateToProps = (state: List) => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = {
  addTask,
  checkedTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
