import React from 'react';
import styles from './Details.module.scss';

type HeaderProps = {
  text: string
};

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return(
    <h2 className={styles.h2}>
      {props.text}
    </h2>
  )
}

export default Header;
