import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <ul className={styles.footerNavList}>
          <li className={styles.footerNavItem}>
            <a href="/" className={styles.footerLogoLink}>
              <img src='/images/coffee-beans-footer.svg' alt="Логотип Coffee House" className={styles.footerLogo} />
              <span className={styles.footerCoffeeHouse}>Coffee house</span>
            </a>
          </li>
          <li className={styles.footerNavItem}>
            <a href="#our-coffee" className={styles.footerNavLink}>Our Coffee</a>
          </li>
          <li className={styles.footerNavItem}>
            <a href="#pleasure" className={styles.footerNavLink}>For your pleasure</a>
          </li>
        </ul>
       
      </nav>
       <img src='/images/beans_logo-footer.svg' alt="" className={styles.footerBeansLogo} />
    </footer>
  );
};

export default Footer;
