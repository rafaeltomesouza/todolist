import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void,
  text: string
  disabled: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
  const formatButton = props.disabled ? styles.disabled : styles.active;
  return (
    <button
      className={formatButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
};

export default Button;
