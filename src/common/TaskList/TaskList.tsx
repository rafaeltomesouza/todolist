import React from 'react';
import styles from './TaskList.module.scss';
import { Task } from '../../types';

function symbolChecked(checked: number) {
  if (Boolean(checked)) {
    return <div className={styles.checked} />
  }
  return <div className={styles.square} />
}

function nameStrikethrough(name: string, checked: number) {
  if (Boolean(checked)) {
  return <span>{name}</span>
  }
  return name
}

const TaskList = (props: { tasks: Task[], checkedTask: (t: Task) => void }) => {
  const { tasks, checkedTask } = props;
  const lists = tasks && tasks.map((tasks, index) => {
    return <div className={styles.taskcontainer} key={index} onClick={() => checkedTask(tasks)}>
      {symbolChecked(tasks.checked)}{nameStrikethrough(tasks.name, tasks.checked)}
    </div>
  });
  return (<>{lists}</>);
}

export default TaskList;
