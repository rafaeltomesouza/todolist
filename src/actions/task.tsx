import { Task } from '../types';

export const ADD_TASK = "ADD_TASK";
export const CHECKED_TASK = "CHECKED_TASK";

export const addTask = (newTask: Task) => {
  return { type: ADD_TASK, task: newTask };
}

export const checkedTask = (done: Task) => {
  return { type: CHECKED_TASK, task: done };
}