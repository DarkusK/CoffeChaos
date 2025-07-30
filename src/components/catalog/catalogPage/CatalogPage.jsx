import { Component } from 'react';
import CatalogSearch from '../catalogSearch/CatalogSearch';
import CatalogFilter from '../catalogFilter/CatalogFilter';
import CatalogList from '../catalogList/CatalogList';
import styles from './CatalogPage.module.scss';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', img: '/images/product.jpeg' },
        { id: 2, name: 'Barbos Coffee 1 kg', country: 'Kenya', price: '6.99$', img: '/images/product.jpeg' },
        { id: 3, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' },
        { id: 4, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' },
        { id: 5, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' },
        { id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' }
      ],
    }
  }
  
  render() {
    const { data } = this.state;

    return (
      <section className={styles.catalog}>
        <div className={styles.catalog__inner}>
          <CatalogSearch />
          <CatalogFilter />
        </div>
        <CatalogList data={data} />
      </section>
    );
  }
}

export default CatalogPage;
