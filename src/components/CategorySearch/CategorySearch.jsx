import { useEffect, useState } from 'react';
import { FaList } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/reducers/home/homeReducers';

const CategorySearch = () => {
    const [categoryShow, setCategoryShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.home)

    // get categories and products
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    // search method functionality
    const search = () => {
        console.log(category);
        console.log(searchValue);
        navigate(`/products/search?category=${category}&value=${searchValue}`)
    }

    return (
        <>
            {/* 3rd section in header : category, search, support*/}
            <div className='w-[85%] lg:w-[90%] mx-auto mt-4'>
                <div className='w-full flex flex-wrap md-lg:gap-8'>
                    <div className='w-3/12 md-lg:w-full'>
                        <div className='bg-white relative'>
                            <div onClick={() => setCategoryShow(!categoryShow)} className='h-[50px] bg-violet-500 text-white flex justify-center md-lg:justify-between items-center gap-3 md-lg:px-6 font-bold text-base cursor-pointer '>
                                <div className='flex justify-center items-center gap-3'>
                                    <span><FaList /></span>
                                    <span>All Category</span>
                                </div>
                                <span className='pt-1'><MdOutlineKeyboardArrowDown /></span>
                            </div>
                            <div className={`${categoryShow ? 'h-[400px]' : 'h-0'} w-full overflow-hidden transition-all duration-500 md-lg:relative absolute bg-white dark:bg-slate-950 border border-slate-400 z-[9999]`}>
                                <ul className='py-2 text-slate-700 h-full overflow-auto dark:text-slate-200 font-medium'>
                                    {
                                        categories.map((category, i) => <Link
                                            key={category._id}
                                            to={`/products?category=${category.name}`}
                                            onClick={() => setCategoryShow(false)}
                                            className='flex justify-start items-center gap-2 px-[24px] py-[6px] hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer transition-all duration-500'>
                                            <img src={category.image} alt={category.name} className='w-[30px] h-[30px] rounded-full overflow-hidden' />
                                            <span >{category.name}</span>
                                        </Link>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* category select for search */}
                    <div className='w-9/12 pl-8 md-lg:pl-0 md-lg:w-full'>
                        <div className="w-full flex flex-wrap justify-between items-center md-lg:gap-6 dark:text-slate-100">
                            <div className='w-8/12 md-lg:w-full'>
                                <div className='flex items-center gap-5 h-[50px] border relative'>
                                    <div className='relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden'>
                                        <select onChange={(e) => setCategory(e.target.value)} className='w-[150px] text-slate-600 dark:text-slate-100 font-semibold bg-transparent dark:bg-slate-800 px-2 h-full outline-0 border-none' name="" id="">
                                            <option value="">Select category</option>
                                            {categories.map((category, i) => <option value={category.name} key={i}>
                                                {category.name}
                                            </option>)}
                                        </select>
                                    </div>

                                    {/* search box */}
                                    <input onChange={(e) => setSearchValue(e.target.value)} className='w-full h-full relative bg-transparent text-slate-500 dark:text-slate-100 outline-0 px-3' type="text" placeholder='what do you need?' />

                                    <button onClick={search} className='bg-violet-500 hover:bg-violet-600 absolute right-0 px-8 h-full font-semibold uppercase text-white'>Search</button>
                                </div>
                            </div>

                            {/* support content */}
                            <div className='w-4/12 block md-lg:hidden pl-2 md-lg:pl-0'>
                                <div className='w-full flex justify-end md-lg:justify-start items-center gap-3'>
                                    <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center'>
                                        <span><IoIosCall className='dark:text-gray-500' /></span>
                                    </div>
                                    <div>
                                        <h2 className='text-base font-medium text-slate-700 dark:text-gray-300'>+880 1454 884564</h2>
                                        <span className='text-sm'>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategorySearch;