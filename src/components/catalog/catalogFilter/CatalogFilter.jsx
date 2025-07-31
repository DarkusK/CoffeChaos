import React from 'react';
import styles from './CatalogFilter.module.scss';

const CatalogFilter = (props) => {
  const countries = ['All','Brazil', 'Kenya', 'Columbia'];
 
  const buttons = countries.map((country) => {
    return(
      <button
        key={country}
        className={styles.button}
        type='button'
        onClick={() => props.onFilterChange(country)}
      >
        {country}
      </button>
    )
  })
        
  return(
    <div className={styles.filter}>
      <span>Or filter</span>
      {buttons}
    </div>
  )
};

export default CatalogFilter;
