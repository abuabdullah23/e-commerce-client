import React, { useEffect, useState } from 'react';
import { Range } from 'react-range';
import Ratings from '../../Ratings/Ratings';
import ProductSlider from '../../Products/ProductSlider';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import ShopProducts from '../ShopProducts/ShopProducts';
import Pagination from '../../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getPriceRangeProducts, getQueryProducts } from '../../../redux/reducers/home/homeReducers';
import PriceRange from '../../PriceRange/PriceRange';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { categories, products, totalProducts, latestProducts, priceRange, perPage } = useSelector(state => state.home)
    const [filter, setFilter] = useState(false);
    const [rangeState, setRangeState] = useState({ values: [priceRange.low, priceRange.high] });
    const [ratingRange, setRatingRange] = useState('');
    const [category, setCategory] = useState('');
    const [sortPrice, setSortPrice] = useState('');
    const [styles, setStyles] = useState('grid');
    const [pageNumber, setPageNumber] = useState(1);
    const [lowPrice, setLowPrice] = useState(priceRange.low);
    const [highPrice, setHighPrice] = useState(priceRange.high);

    // get price range products
    useEffect(() => {
        dispatch(getPriceRangeProducts());
    }, [])

    // set range
    useEffect(() => {
        setRangeState({
            values: [priceRange.low, priceRange.high]
        })
        // setLowPrice(priceRange.low)
        // setHighPrice(priceRange.high)
    }, [priceRange])

    // query category for search by category
    const queryCategory = (e, value) => {
        if (e.target.checked) {
            setCategory(value)
        } else {
            setCategory('')
        }
    }

    // query products
    useEffect(() => {
        dispatch(
            getQueryProducts({
                low: rangeState.values[0],
                high: rangeState.values[1],
                // low: lowPrice,
                // high: highPrice,
                category,
                ratingRange,
                pageNumber,
                sortPrice
            }))
    }, [
        rangeState.values[0],
        rangeState.values[1],
        // lowPrice,
        // highPrice,
        category,
        ratingRange,
        pageNumber,
        sortPrice
    ])

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
                                        <input checked={category === c.name ? true : false} onChange={(e) => queryCategory(e, c.name)} type="checkbox" name="" id={c.name} />
                                        <label className='block cursor-pointer' htmlFor={c.name}>{c.name}</label>
                                    </div>)
                                }
                            </div>
                        </div>

                        {/* range tracking for filter products */}
                        <div className='py-2 flex flex-col gap-5'>
                            <h2 className='text-3xl font-bold'>Price</h2>
                            <Range
                                step={5}
                                min={priceRange.Low}
                                max={priceRange.high}
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


                        {/* Custom Price Range */}
                        {/* <PriceRange
                            range={priceRange}
                            setLowPrice={setLowPrice}
                            setHighPrice={setHighPrice} /> */}

                        {/* show rating wise products */}
                        <div className='py-2 flex flex-col gap-5 md:mb-8'>
                            <h2 className='text-3xl font-bold'>Rating</h2>
                            <div className='flex flex-col gap-1'>
                                {
                                    [5, 4, 3, 2, 1, ''].map((r, i) => <div key={i} onClick={() => setRatingRange(r)} className={`flex items-center gap-2 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-950 w-fit p-1 rounded transition-all duration-200 ${ratingRange === r ? 'border border-slate-500 dark:bg-slate-950' : ''}`} >
                                        <Ratings ratings={r} /> </div>)
                                }
                            </div>
                        </div>

                        {/* Latest Products */}
                        <div className='py-5 flex flex-col gap-4 md:hidden'>
                            <ProductSlider title='Latest Products' products={latestProducts} />
                        </div>
                    </div>

                    {/* products section : main content */}
                    <div className='w-9/12 md-lg:8/12 md:w-full'>
                        <div className='pl-8 md:pl-0'>
                            <div className='py-4 bg-white dark:bg-slate-900 mb-10 px-3 rounded-md flex justify-between items-start border dark:border-slate-500'>
                                <h2 className='text-lg font-medium text-slate-600 dark:text-gray-100'>Products: {totalProducts}</h2>
                                <div className='flex justify-center items-center gap-3'>
                                    <select onChange={(e) => setSortPrice(e.target.value)} className='p-1 border dark:border-slate-600 outline-0 dark:bg-slate-950 text-slate-600 dark:text-gray-100 font-semibold' name='' id=''>
                                        <option value="">Sort By</option>
                                        <option value="low-to-high">Low to High Price</option>
                                        <option value="high-to-low">High to Low Price</option>
                                    </select>

                                    {/* hidden md and sm device */}
                                    <div className='flex justify-center items-start gap-4 md-lg:hidden'>
                                        <div onClick={() => setStyles('grid')} className={`p-2 text-slate-600 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer rounded-sm ${styles === 'grid' && 'bg-slate-300 dark:bg-slate-600'}`}>
                                            <BsFillGridFill />
                                        </div>
                                        <div onClick={() => setStyles('list')} className={`p-2 text-slate-600 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer rounded-sm ${styles === 'list' && 'bg-slate-300 dark:bg-slate-600'}`}>
                                            <FaThList />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Products grid/list view */}
                            <div className='pb-8'>
                                <ShopProducts products={products} styles={styles} />
                            </div>

                            {/* pagination */}
                            <div className='flex items-center justify-end'>
                                {
                                    totalProducts > perPage && <Pagination
                                        pageNumber={pageNumber}
                                        setPageNumber={setPageNumber}
                                        totalItem={totalProducts}
                                        perPage={perPage}
                                        showItem={(Math.floor(totalProducts / perPage)) + 2} />
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default AllProducts;