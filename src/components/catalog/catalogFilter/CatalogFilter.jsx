import React from 'react';
import styles from './CatalogFilter.module.scss';

const countries = ['Brazil', 'Kenya', 'Columbia'];

const CatalogFilter = ( ) => (
  <div className={styles.filter}>
    <span>Or filter</span>
    {countries.map(country => (
      <button
        key={country}
        className={styles.button}
      >
       {country}
      </button>
    ))}
    <button className={styles.button}>All</button>
  </div>
);

export default CatalogFilter;
