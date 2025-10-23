import React from 'react';
import { useState, useMemo } from 'react';
import CatalogItem from '../catalogItem/CatalogItem';
import styles from './CatalogPage.module.scss';
import productData from '../../../data/product.js';

const CatalogPage = () => {
  const [filter, setFilter] = useState('All');
  const [term, setTerm] = useState('');


  const filteredData = useMemo(() => {
    // 1. Сначала поиск по названию
    let result = productData;
    
    if (term) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    // 2. Потом фильтр по стране
    if (filter !== 'All') {
      result = result.filter(item => item.country === filter);
    }
    
    return result;
  }, [filter, term]);
 

  const renderProductList = () => {
    return filteredData.map(item => {
      const {id, ...itemProps} = item;
      return (
        <CatalogItem
          key={id}
          id={id}
          {...itemProps}
        />
      );
    });
  };
  const renderFilter = () => {
    const countries = ['All', 'Brazil', 'Kenya', 'Columbia'];
    
    return (
      <div className={styles.filter}>
        <span>Or filter</span>
        {countries.map((country) => (
          <button
            key={country}
            className={`${styles.button} ${filter === country ? styles.active : ''}`}
            type='button'
            onClick={() => setFilter(country)}
          >
            {country}
          </button>
        ))}
      </div>
    );
  };
  const renderSearch = () => (
    <div className={styles.catalog__search}>
      <label  htmlFor="search-input">Looking for</label>
      <input
        id="search-input" 
        type="text"
        className={styles.catalog__input}
        placeholder="start typing here..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );

  return ( 
    <section className={styles.catalog}>
      <div className={styles.catalog__inner}>
        {renderSearch()}
        {renderFilter()}
      </div>
      
      {filteredData.length === 0 ? (
       <div className={styles.empty__text}>
          Products not found
        </div>
      ) : (
        <div className={styles.list}>
          {renderProductList()}
        </div>
      )}
    
    </section>
  );
};

export default CatalogPage;
