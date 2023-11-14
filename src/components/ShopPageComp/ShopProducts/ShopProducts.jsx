import React from 'react';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Ratings from '../../Ratings/Ratings';
import { Link } from 'react-router-dom';

const ShopProducts = ({ products, styles }) => {
    return (
        <div className={`w-full grid gap-4 sm:grid-cols-1 ${styles === 'grid' ? 'grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2' : 'grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2'}`}>
            {
                products?.map((p, i) => <div key={i} className={`w-full border border-slate-300 dark:border-slate-900 rounded-md dark:bg-slate-700 p-2 flex gap-4 transition-all duration-700 hover:shadow-md hover:-translate-y-3 ${styles === 'grid' ? 'flex-col justify-start items-start' : 'justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start'}`}>
                    <div className={`relative group h-[210px] md:h-[270px] ${styles === 'grid' ? 'xs:h-[170px] overflow-hidden w-full' : 'md-lg:w-full overflow-hidden w-1/3'}`}>
                        <img className='object-cover rounded-md w-full h-[240px] md:h-[270px] xs:h-full' src={p?.images[0]} alt="product image" />

                        <ul className='flex justify-center items-center gap-2 transition-all duration-500 absolute -bottom-10 group-hover:bottom-3 w-full'>
                            <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiFillHeart /></li>
                            <Link to={`/details/${p?._id}`} className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all duration-500'><FaEye /></Link>
                            <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiOutlineShoppingCart /></li>
                        </ul>
                    </div>
                    <div className={`flex flex-col justify-start items-start gap-1 dark:text-gray-100 ${styles === 'list' ? 'w-2/3' : ''}`}>
                        <h2 title={p?.name}>{p?.name.slice(0, 50)}...</h2>
                        <div className='flex justify-start items-center gap-3'>
                            <span className='text-base font-bold'>${p?.price}</span>
                            <div className='flex text-base'>
                                <Ratings ratings={p?.rating} />
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div >
    );
};

export default ShopProducts;