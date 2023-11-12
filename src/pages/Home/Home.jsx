import React, { useEffect } from 'react';
import Headers from '../../components/Headers/Headers';
import CategorySearch from '../../components/CategorySearch/CategorySearch';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import FeaturesProducts from '../../components/Products/FeaturesProducts';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/reducers/home/homeReducers';

const Home = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.home)

    // get categories
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <>
            <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
                <Headers />
                <CategorySearch categories={categories} />
                <Banner />
                <Categories categories={categories} />
                <FeaturesProducts />
                <Products />
                <Footer />
            </div>
        </>
    );
};

export default Home;