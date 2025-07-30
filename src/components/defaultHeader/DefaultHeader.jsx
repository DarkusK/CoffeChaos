import React from 'react';
import Navigation from '../navigation/Navigation';
import styles from './DefaultHeader.module.scss';

const DefaultHeader = () => {
  return (
    <>
      
      <header className={styles.defaultHeader}>
        <Navigation />
        <h1 className={styles.title}>Our Coffee</h1>
      </header>
    </>
  );
};

export default DefaultHeader;
