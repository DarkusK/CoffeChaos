import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import DefaultHeader from '../components/defaultHeader/DefaultHeader';
import AboutUs from '../components/aboutUs/AboutUs';
import CatalogPage from '../components/catalog/catalogPage/CatalogPage';

const Menu = () => {
    return (
        <>
        <DefaultHeader />
        <AboutUs />
        <CatalogPage />
        <Footer />
        </>
    );
};

export default Menu;
