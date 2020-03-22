import React, { useState } from "react";
import { Header } from '../../common/Header';
import { Details } from '../../common/Details';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { TaskList } from '../../common/TaskList';
import { InputOnChangeEvent, Task } from '../../types';
import styles from './Home.module.scss';

type HomeProps = {
  tasks: Array<Task>,
  addTask: (newTask: Task) => void,
  checkedTask: (done: Task) => void
}

const Home:React.FunctionComponent<HomeProps> = (props) => {
  const initialValue = { name: '', checked: 0, position: 0 };
  const [newTask, setTask] = useState(initialValue);

  const onChange = (event: InputOnChangeEvent) : void => {
      setTask({
        name: event.target.value,
        checked: 0,
        position: props.tasks.length + 1
      });
    }

  const addTask = (): void => {
    props.addTask(newTask);
    setTask(initialValue);
  }

  const checkedTask = (done: Task): void => {
    const result = { ...done };
    result.checked = Boolean(result.checked) ? 0 : 1;
    props.checkedTask(result);
  }

  return (
    <main>
      <Header
        text="To do List"
      />
      <Details
        text="To do ..."
      />
      <section className={styles.addtasks}>
        <Input
          ariaLabel="add a task"
          id="task"
          name="tasks"
          onChange={onChange}
          addTask={addTask}
          type="text"
          value={newTask.name}
        />
        <Button
          onClick={addTask}
          text="Send"
          disabled={!Boolean(newTask.name)}
        />
      </section>
      <Details
        text="List ..."
      />
      <TaskList
        tasks={props.tasks}
        checkedTask={checkedTask}
      />
    </main>
  )
}

export default Home;
