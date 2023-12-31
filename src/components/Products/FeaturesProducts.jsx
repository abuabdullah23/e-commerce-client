import React from 'react';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Ratings from '../Ratings/Ratings';
import { Link } from 'react-router-dom';

const FeaturesProducts = ({ products }) => {
    return (
        <div className='w-[85%] flex flex-wrap mx-auto my-12'>
            <div className="w-ful">
                <div className='text-center flex flex-col justify-center items-center text-4xl text-slate-600 dark:text-gray-100 font-bold relative pb-[45px]'>
                    <h1>Feature Products</h1>
                    <div className='w-[100px] h-[4px] bg-[#7fad39] mt-4'></div>
                </div>
                <div className='w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                    {
                        products.map((p, i) =>
                            <div key={i} className='border group transition-all duration-500 hover:shadow-md hover:-mt-2'>
                                <div className='relative overflow-hidden'>
                                    {
                                        p?.discount ? <div className='flex justify-center items-center absolute left-2 top-2 text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs font-semibold'>{p.discount}%</div> : ''
                                    }

                                    <div className='h-[240px] w-full'>
                                        <img className='w-full h-full object-cover' src={p?.images[0]} alt="product image" />
                                    </div>

                                    <ul className='flex justify-center items-center gap-2 transition-all duration-500 absolute -bottom-10 group-hover:bottom-3 w-full'>
                                        <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiFillHeart /></li>
                                        <Link to={`/details/${p._id}`} className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all duration-500'><FaEye /></Link>
                                        <li className='w-[38px] h-[38px] rounded-full cursor-pointer flex justify-center items-center bg-gray-100 hover:bg-[#7fad39] hover:text-white hover:rotate-[360deg] transition-all duration-500'><AiOutlineShoppingCart /></li>
                                    </ul>
                                </div>

                                {/* price and ratings */}
                                <div className='py-3 px-2 text-slate-600 dark:text-gray-100 flex flex-col gap-1'>
                                    <h2>{p?.name.slice(0, 60)}...</h2>
                                    <div className='flex justify-start items-center gap-3'>
                                        <span className='text-base font-bold'>${p.price}</span>
                                        <div className='flex'>
                                            <Ratings ratings={p?.rating} />
                                        </div>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default FeaturesProducts;