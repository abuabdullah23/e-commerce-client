import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllCarts = () => {
    const cartProducts = [1, 2, 3]
    const outOfStockProduct = [1, 2]

    return (
        <section className='bg-[#eeeeee] dark:bg-slate-800 transition-colors duration-300'>
            <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16'>
                {
                    cartProducts.length > 0 || outOfStockProduct.length > 0
                        ? <div className='flex flex-wrap'>
                            <div className='w-[67%] md-lg:w-full'>
                                <div className='pr-3 md-lg:pr-0'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='bg-white dark:bg-slate-900 transition-colors duration-300 p-3'>
                                            <h2 className='text-base text-green-500 font-semibold'>Stock Products: {cartProducts.length - outOfStockProduct.length}</h2>
                                        </div>
                                        {
                                            cartProducts.map((p, i) => <div key={i} className='flex flex-col gap-3 bg-white dark:bg-slate-900 transition-colors duration-300 p-3'>
                                                <div className='flex justify-start items-center'>
                                                    <h2 className='text-base text
                                                    0-slate-600 dark:text-gray-100'>Zayed Shop</h2>
                                                </div>
                                                {
                                                    [1, 2].map((p, i) => <div key={i} className='w-full flex flex-wrap'>
                                                        <div className='flex sm:w-full gap-2 w-7/12'>
                                                            <div className='flex gap-2 justify-start items-start'>
                                                                <img className='w-[80px] h-[80px]' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${i + 1}.webp`} alt="product image" />
                                                                <div className='flex flex-col gap-1 text-slate-600 dark:text-gray-100 pr-4'>
                                                                    <h2 className='text-base'>Long sleeve casual T-Shirt</h2>
                                                                    <span className='text-sm'>Brand: Easy Shop</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between w-5/12 sm:w-full sm:mt-3'>
                                                            <div className='pl-4 sm:pl-0 dark:text-gray-100'>
                                                                <h2 className='text-lg text-orange-500 font-semibold'>$370</h2>
                                                                <p className='line-through'>$400</p>
                                                                <p>-10%</p>
                                                            </div>
                                                            <div className='flex flex-col gap-2'>
                                                                <div className='flex bg-slate-200 dark:bg-slate-600 dark:text-white h-[30px] justify-center items-center text-xl'>
                                                                    <div className='px-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700'>-</div>
                                                                    <div className='px-3'>3</div>
                                                                    <div className='px-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700'>+</div>
                                                                </div>
                                                                <button className='py-1 px-2 bg-red-500 dark:bg-orange-600 dark:hover:bg-orange-700 hover:bg-red-600 text-white flex items-center justify-center gap-2'>
                                                                    <FaTrashAlt />
                                                                    <span>Delete</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                }
                                            </div>)
                                        }

                                        {/* Out of stock products section */}
                                        {
                                            outOfStockProduct.length > 0 && <div className='mt-4 flex flex-col gap-3'>
                                                <div className='bg-white dark:bg-slate-900 transition-colors duration-300 p-4'>
                                                    <h2 className='dark:text-indigo-300 font-semibold'>Out of Stock: {outOfStockProduct.length}</h2>
                                                </div>
                                                <div className='bg-white dark:bg-slate-900 transition-colors duration-300 p-4 flex flex-col gap-3'>
                                                    {
                                                        [1, 2].map((p, i) => <div key={i} className='w-full flex flex-wrap'>
                                                            <div className='flex sm:w-full gap-2 w-7/12'>
                                                                <div className='flex gap-2 justify-start items-start'>
                                                                    <img className='w-[80px] h-[80px]' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${i + 1}.webp`} alt="product image" />
                                                                    <div className='flex flex-col gap-1 text-slate-600 dark:text-gray-100 pr-4'>
                                                                        <h2 className='text-base'>Long sleeve casual T-Shirt</h2>
                                                                        <span className='text-sm'>Brand: Easy Shop</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='flex justify-between w-5/12 sm:w-full sm:mt-3'>
                                                                <div className='pl-4 sm:pl-0 dark:text-gray-100'>
                                                                    <h2 className='text-lg text-orange-500 font-semibold'>$370</h2>
                                                                    <p className='line-through'>$400</p>
                                                                    <p>-10%</p>
                                                                </div>
                                                                <div className='flex flex-col gap-2'>
                                                                    <div className='flex bg-slate-200 dark:bg-slate-600 dark:text-white h-[30px] justify-center items-center text-xl'>
                                                                        <div className='px-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700'>-</div>
                                                                        <div className='px-3'>3</div>
                                                                        <div className='px-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700'>+</div>
                                                                    </div>
                                                                    <button className='py-1 px-2 bg-red-500 dark:bg-orange-600 dark:hover:bg-orange-700 hover:bg-red-600 text-white flex items-center justify-center gap-2'>
                                                                        <FaTrashAlt />
                                                                        <span>Delete</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* cart calculation section */}
                            <div className='w-[33%] md-lg:w-full'>
                                <div className='pl-3 md-lg:pl-0 md-lg:mt-5'>
                                    {
                                        cartProducts.length > 0 && <div className='bg-white dark:bg-slate-900 transition-colors duration-300 p-4 text-slate-600 dark:text-gray-100 flex flex-col gap-3'>
                                            <h2 className='text-xl font-bold'>Order Summary</h2>
                                            <div className='flex justify-between items-center'>
                                                <span>4 Items</span>
                                                <span>$543</span>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <span>Shipping Fee</span>
                                                <span>$43</span>
                                            </div>
                                            <div className='flex gap-2'>
                                                <input className='w-full px-3 py-2 border border-slate-200 dark:border-slate-700 outline-0 focus:border-green-500 rounded-sm dark:bg-slate-800' type="text" placeholder='Input your Coupon' />
                                                <button className='px-5 py-[1px] bg-blue-500 hover:bg-blue-600 text-white rounded-sm uppercase text-sm'>Apply</button>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <span>Total</span>
                                                <span className='text-lg font-semibold text-orange-500'>$943</span>
                                            </div>
                                            <button className='px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-sm text-white uppercase'>Proceed to Checkout - 4</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        : <div className='flex items-center justify-center h-[calc(100vh-400px)]'>
                            <Link to='/shop' className='px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white'>Shop Now</Link>
                        </div>
                }
            </div>
        </section>
    );
};

export default AllCarts;