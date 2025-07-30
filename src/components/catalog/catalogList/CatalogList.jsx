import React from 'react';
import CatalogItem from '../catalogItem/CatalogItem';
import styles from './CatalogList.module.scss';


const CatalogList = ({data} ) => {

    const elements = data.map(item=>{
      const {id, ...itemProps} = item;
      return(
        <CatalogItem
        key={id}
        {...itemProps}
        />
      )
    })
  
  
  
  
  
  
  return(
    <div className={styles.list}>
    {elements}
    </div>
  )

};

export default CatalogList;
