import React, { useEffect } from 'react';
import Headers from '../../components/Headers/Headers';
import CategorySearch from '../../components/CategorySearch/CategorySearch';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import FeaturesProducts from '../../components/Products/FeaturesProducts';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from '../../redux/reducers/home/homeReducers';

const Home = () => {
    const dispatch = useDispatch();
    const { categories, products, latestProducts, topRatedProducts, discountProducts } = useSelector(state => state.home)

    // get categories and products
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [])

    return (
        <>
            <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
                <Headers categories={categories} />
                <CategorySearch categories={categories} />
                <Banner />
                <Categories categories={categories} />
                <FeaturesProducts products={products} />
                <Products
                    latestProducts={latestProducts}
                    topRatedProducts={topRatedProducts}
                    discountProducts={discountProducts} />
                <Footer />
            </div>
        </>
    );
};

export default Home;