import React from 'react';
import styles from './Header.module.scss';

type HeaderProps = {
  text: string
};

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return(
    <h1 className={styles.h1}>
      {props.text}
    </h1>
  )
}

export default Header;
