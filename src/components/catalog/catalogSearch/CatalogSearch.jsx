import React from 'react';
import styles from './CatalogSearch.module.scss';

const CatalogSearch = ({ value, onChange }) => (
  <div className={styles.search}>
    <label>Looking for</label>
    <input
      type="text"
      className={styles.input}
      placeholder="start typing here..."
      
    />
  </div>
);

export default CatalogSearch;
