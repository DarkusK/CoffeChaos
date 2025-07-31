import React from 'react';
import styles from './CatalogItem.module.scss';

const CatalogItem = (props) => {
  const {name,country,price,img} = props;


  
  return(
    <div className={styles.item}>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.name}>{name}</div>
    <div className={styles.country}>{country}</div>
    <div className={styles.price}>{price}</div>
  </div>
);
}
export default CatalogItem;
