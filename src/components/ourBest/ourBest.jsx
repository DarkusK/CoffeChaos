import style from './ourBest.module.scss';
import React from 'react';
import productData from '../../data/product.js';

function OurBest() {
 const products = productData.filter(product => product.best);
  return (
    <section className={style.ourBest}>
      <h2 className={style.title}>Our Best</h2>
      <ul className={style.bestList}>
        {products.map(product => (
          <li className={style.bestItem} key={product.id}>
            <img src={product.img} alt={product.name} className={style.bestImg} />
            <div className={style.bestName}>{product.name}</div>
            <div className={style.bestPrice}>{product.price}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OurBest; 