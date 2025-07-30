import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.logoLink}>
            <img src='/images/coffee-beans.svg' alt="Логотип Coffee House" className={styles.logo} />
            <span className={styles.coffeeHouse}>Coffee house</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/coffee" className={styles.navLink}>Our Coffee</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/pleasure" className={styles.navLink}>For your pleasure</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
