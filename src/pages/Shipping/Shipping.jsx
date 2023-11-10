import React from 'react';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import ShippingBanner from '../../components/ShippingPageComp/ShippingBanner';
import ShippingDetails from '../../components/ShippingPageComp/ShippingDetails';
import CategorySearch from '../../components/CategorySearch/CategorySearch';

const Shipping = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
            <Headers />
            <CategorySearch />
            <ShippingBanner />
            <ShippingDetails />
            <Footer />
        </div>
    );
};

export default Shipping;