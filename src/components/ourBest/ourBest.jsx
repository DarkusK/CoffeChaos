import style from './ourBest.module.scss';
import React from 'react';


function OurBest() {
  const products = [
    {
      img: './../images/product.jpeg',
      name: 'Solimo Coffee Beans 2 kg',
      price: '10.73$'
    },
    {
      img: './../images/product.jpeg',
      name: 'Presto Coffee Beans 1 kg',
      price: '15.99$'
    },      
    {
      img: './../images/product.jpeg',
      name: 'AROMISTICO Coffee 1 kg',
      price: '6.99$'
    }
  ];

  return (
    <section className={style.ourBest}>
      <h2 className={style.title}>Our Best</h2>
      <ul className={style.bestList}>
        {products.map((product, idx) => (
          <li className={style.bestItem} key={idx}>
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