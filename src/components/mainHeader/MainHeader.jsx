import styles from './MainHeader.module.scss';
import React from 'react';
import Navigation from '../navigation/Navigation';
function MainHeader() {
  return (
    <>
   
    <header className={styles.mainHeader}>
      <Navigation />
       <div className={styles.container}>
        <h1 className={styles.main__title}>Everything You Love About Coffee</h1>
        <div className={styles.logo}> <img src="/images/beans_logo.svg" alt="Coffee Beans Logo" /></div>
        <div className={styles.sub__title}>
            <h2 className={styles.sub__title}>We make every day full of energy and taste</h2>
            <h2 className={styles.sub__title}>Want to try our beans?</h2>
        </div>
        <button className={styles.main__btn}>
            <span className={styles.more}>More</span>
        </button>
       </div>
     
    </header>
  
  </>
  );
}
export default MainHeader;