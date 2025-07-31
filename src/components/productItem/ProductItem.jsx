import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './ProductItem.module.scss';

const ProductItem = () => {
  const location = useLocation();
  const { id } = useParams(); // Получаем id из URL
  const { name, country, price, img } = location.state || {};

  // Если нет данных в state, можно загрузить из API или использовать id из URL
  if (!location.state) {
    return <div>Товар не найден</div>;
  }

  return(
    <div className={styles.product}>
      <div className={styles.product__image}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.product__info}>
        <h2 className={styles.product__title}>About it</h2>
        <div className={styles.product__divider}>
          <img src="/images/beans_logo.svg" alt="beans" />
        </div>
        <div className={styles.product__country}>
          <b>Country:</b> {country}
        </div>
        <div className={styles.product__description}>
          <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className={styles.product__price}>
          <b>Price:</b> <span>{price}</span>
        </div>
        <div className={styles.product__id}>
          <b>ID from URL:</b> {id}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;