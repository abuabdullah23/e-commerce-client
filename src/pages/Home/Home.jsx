import React from 'react';
import Headers from '../../components/Headers/Headers';
import CategorySearch from '../../components/CategorySearch/CategorySearch';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';

const Home = () => {
    return (
        <>
            <div className='w-full dark:bg-slate-800 transition-colors duration-300'>
                <Headers />
                <CategorySearch />
                <Banner />
                <Categories />
            </div>
        </>
    );
};

export default Home;