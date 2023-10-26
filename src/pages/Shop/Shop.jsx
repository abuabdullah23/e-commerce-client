import React from 'react';
import Headers from '../../components/Headers/Headers';
import ShopBanner from '../../components/ShopPageComp/ShopBanner';
import AllProducts from '../../components/ShopPageComp/AllProducts/AllProducts';
import Footer from '../../components/Footer/Footer';
import CategorySearch from '../../components/CategorySearch/CategorySearch';

const Shop = () => {
    return (
        <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
            <Headers />
            <CategorySearch />
            <ShopBanner />
            <AllProducts />
            <Footer />
        </div>
    );
};

export default Shop;