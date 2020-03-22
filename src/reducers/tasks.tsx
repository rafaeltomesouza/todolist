import { combineReducers } from "redux";
import { ADD_TASK, CHECKED_TASK } from '../actions/task';
import { Task } from '../types';

const compare = (taskPrevious: Task, taskForward: Task) => {
  return taskForward.position - taskPrevious.position
};

const tasks = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state]
        .concat(action.task)
        .sort(compare);
    case CHECKED_TASK:
      return [...state]
        .filter((tasks: Task) => tasks.position !== action.task.position)
        .concat(action.task)
        .sort(compare)
    default:
      return state;
  }
};

export default combineReducers({ tasks });

