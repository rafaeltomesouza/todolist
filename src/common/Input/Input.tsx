import React from 'react';
import styles from './Input.module.scss';
import { InputOnChangeEvent, InputKeyEvent } from '../../types';

type InputProps = {
  ariaLabel: string,
  id: string,
  name: string,
  onChange: (event: InputOnChangeEvent) => void,
  addTask: () => void,
  type: string,
  value?: string
};

const Input: React.FunctionComponent<InputProps> = (props) => {

  const onPressKey = (event: InputKeyEvent) => {
    if (event.key === "Enter" && Boolean(props.value)) {
      props.addTask();
    }
  }

  return (
    <input
      aria-label={props.ariaLabel}
      className={styles.format}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      onKeyPress={onPressKey}
      type={props.type}
      value={props.value}
    />
  )
}

export default Input;
