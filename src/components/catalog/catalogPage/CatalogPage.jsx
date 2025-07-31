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
        { id: 4, name: 'Barbos Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' },
        { id: 5, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' },
        { id: 6, name: 'Norm Coffee 1 kg', country: 'Columbia', price: '6.99$', img: '/images/product.jpeg' }
      ],
      filter: 'All',
      term:''
    }
  }

  filterPost = (items, filter) => {
    switch(filter){
      case 'Kenya':
        return items.filter(item => item.country === 'Kenya');
      case 'Brazil':
        return items.filter(item => item.country === 'Brazil');
      case 'Columbia':
        return items.filter(item => item.country === 'Columbia');
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }
  
  onUpdateSearch = (term)=>{
    this.setState({term});
  }
  render() {
    const { data, filter,term } = this.state;
    const filteredData = this.filterPost(this.searchEmp(data, term),filter);

    return (
      <section className={styles.catalog}>
        <div className={styles.catalog__inner}>
          <CatalogSearch onUpdateSearch={this.onUpdateSearch}/>
          <CatalogFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <CatalogList data={filteredData} />
      </section>
    );
  }
}

export default CatalogPage;
