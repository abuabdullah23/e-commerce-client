import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ShopBanner = () => {
    return (
        <section className='pt-6'>
            <div className='bg-[url("/images/shop.gif")] h-[220px] bg-cover bg-no-repeat relative bg-left'>
                <div className='w-full h-full absolute left-0 top-0 bg-[#2422228a]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>Shop.my</h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                <Link to='/'>Home</Link>
                                <span className='mt-[6px]'><MdOutlineKeyboardArrowRight /></span>
                                <span>Products</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopBanner;