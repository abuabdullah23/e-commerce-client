import React, { useState } from 'react';
import categories from '../../../common/categories';
import { Range } from 'react-range';
import Ratings from '../../Ratings/Ratings';
import ProductSlider from '../../Products/ProductSlider';

const AllProducts = () => {
    const [filter, setFilter] = useState(false);
    const [rangeState, setRangeState] = useState({ values: [50, 2000] })

    return (
        <section className='py-16'>
            <div className='w-[85%] md:w-[90%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                <div className={`hidden md:block ${filter ? 'mb-6' : 'mb-0'}`}>
                    <button onClick={() => setFilter(!filter)} className='text-clip w-full py-2 px-3 bg-indigo-500 text-white'>Filter Product</button>
                </div>
                <div className='w-full flex flex-wrap'>
                    {/* hidden for medium device : Tablet & Mobile */}
                    <div className={`w-3/12 md-lg:4/12 md:w-full pr-8 text-slate-600 dark:text-gray-100 flex flex-col gap-4 ${filter ? 'md:h-auto md:overflow-auto md:mb-0' : 'md:h-0 md:overflow-hidden md:mb-6'}`}>
                        {/* show category wise products */}
                        <div>
                            <h2 className='text-3xl font-bold'>Category</h2>
                            <div className='py-2'>
                                {
                                    categories.map((c, i) => <div key={i} className='flex justify-start items-center gap-2 py-1'>
                                        <input type="checkbox" name="" id={c} />
                                        <label className='block cursor-pointer' htmlFor={c}>{c}</label>
                                    </div>)
                                }
                            </div>
                        </div>

                        {/* range tracking for filter products */}
                        <div className='py-2 flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Price</h2>
                            <Range
                                step={5}
                                min={50}
                                max={2000}
                                values={rangeState.values}
                                onChange={(values) => setRangeState({ values })}
                                renderTrack={({ props, children }) => (
                                    <div {...props} className='ml-2 w-full h-[6px] bg-slate-200 rounded-full cursor-default'>
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div {...props} className='w-[15px] h-[15px] bg-blue-500 rounded-full cursor-default' />
                                )}
                            />
                            <div>
                                <span className='text-lg font-bold text-red-500 dark:text-slate-300'>${Math.floor(rangeState.values[0])} - ${Math.floor(rangeState.values[1])}</span>
                            </div>
                        </div>

                        {/* show rating wise products */}
                        <div className='py-2 flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Rating</h2>
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <Ratings ratings={5} /> </div>
                                <div className='flex items-center gap-2'>
                                    <Ratings ratings={4} /> </div>
                                <div className='flex items-center gap-2'>
                                    <Ratings ratings={3} /> </div>
                                <div className='flex items-center gap-2'>
                                    <Ratings ratings={2} /> </div>
                                <div className='flex items-center gap-2'>
                                    <Ratings ratings={1} /> </div>
                                <div className='flex items-center gap-2'>
                                    <Ratings ratings={0} /> </div>
                            </div>
                        </div>

                        {/* Latest Products */}
                        <div className='py-5 flex flex-col gap-4 md:hidden'>
                            <ProductSlider title='Latest Products' />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default AllProducts;