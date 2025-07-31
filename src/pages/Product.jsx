import React from 'react';
import Footer from '../components/footer/Footer';
import DefaultHeader from '../components/defaultHeader/DefaultHeader';
import ProductItem from '../components/productItem/ProductItem';


const Product = () => {
    return (
        <>
        <DefaultHeader />
        <ProductItem/>
        <Footer />
        </>
    );
};

export default Product;
