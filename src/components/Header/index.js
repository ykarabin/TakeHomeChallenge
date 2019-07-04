import React from 'react';
import styles from "./header.module.scss";

const Header = ({title, logo}) => {
  return (
    <header className={styles.AppHeader}>
      <section>
        <img src={logo} alt="logo"/>
        <h1>{title}</h1>
      </section>
    </header>
  )
};

export default Header;