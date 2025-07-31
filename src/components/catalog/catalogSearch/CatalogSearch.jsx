import React, { Component } from 'react';
import styles from './CatalogSearch.module.scss';

class CatalogSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
        term: ''
    }
  }
  onUpdateSearch = (e) =>{
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSearch(term)
}



  render(){
    return(
      <div className={styles.search}>
      <label>Looking for</label>
      <input
        type="text"
        className={styles.input}
        placeholder="start typing here..."
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
      </div>
    )
  }
 
};

export default CatalogSearch;
