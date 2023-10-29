import React from 'react';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import CartBanner from '../../components/CartPageComp/CartBanner';
import CategorySearch from '../../components/CategorySearch/CategorySearch';
import AllCarts from '../../components/CartPageComp/AllCarts';

const Cart = () => {
    return (
        <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
            <Headers />
            <CategorySearch />
            <CartBanner />
            <AllCarts />
            <Footer />
        </div>
    );
};

export default Cart;