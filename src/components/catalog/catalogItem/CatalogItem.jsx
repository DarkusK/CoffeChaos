import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CatalogItem.module.scss';

const CatalogItem = (props) => {
  const {id, name, country, price, img} = props;

  return(
    <Link 
      to={`/coffee/${id}`} 
      state={{ 
        id, 
        name, 
        country, 
        price, 
        img 
      }}
    >
      <div className={styles.item}>
        <img src={img} alt={name} className={styles.img} />
        <div className={styles.name}>{name}</div>
        <div className={styles.country}>{country}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </Link>
  );
}

export default CatalogItem;
