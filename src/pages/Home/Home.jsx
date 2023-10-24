import React from 'react';
import Headers from '../../components/Headers/Headers';
import CategorySearch from '../../components/CategorySearch/CategorySearch';

const Home = () => {
    return (
        <div className='w-full h-screen dark:bg-slate-800 transition-colors duration-300'>
            <Headers />
            <CategorySearch />
        </div>
    );
};

export default Home;