import { GrMail } from 'react-icons/gr'
import { FaFacebookF, FaLinkedinIn, FaList, FaLock, FaMoon, FaUser } from 'react-icons/fa'
import { AiFillGithub, AiFillHeart, AiFillShopping, AiOutlineTwitter } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { BiSun } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import navItems from './NavItems';

const Headers = () => {
    const user = true;
    const [showSidebar, setShowSidebar] = useState(false);
    const [theme, setTheme] = useState(null);
    const { pathname } = useLocation();
    const wishlist = 4;
    const cart = 32;

    useEffect(() => {
        const storageTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (storageTheme) {
            setTheme(storageTheme)
        } else {
            setTheme(prefersDark ? 'dark' : 'light')
        }
    }, [])

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    const handleThemeToggle = () => {
        setTheme((pre) => pre === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className='w-full bg-white sticky top-0 z-[99999]'>
            {/* 1st navbar */}
            <div className='header-top bg-[#eeeeee] dark:bg-slate-800 transition-colors duration-300 md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='w-full flex justify-between items-center h-[50px] text-slate-500 dark:text-gray-300'>
                        {/* left side */}
                        <ul className='flex justify-start items-center gap-8'>
                            <li className='flex items-center gap-2 text-sm relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><GrMail /></span>
                                <span>user@gmail.com</span>
                            </li>
                            <span className='text-base'>Multi vendor E-Commerce</span>
                        </ul>

                        {/* right side */}
                        <div>
                            <div className='flex justify-center items-center gap-10 dark:text-gray-300'>
                                <div className='flex justify-center items-center gap-1 relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                    <button onClick={handleThemeToggle}>
                                        {
                                            theme === 'light' ? <FaMoon className='cursor-pointer' title='Switch to Dark' /> : <BiSun className='cursor-pointer text-white' title='Switch to Light' />
                                        }
                                    </button>
                                </div>
                                <div className='flex justify-center items-center gap-4 dark:text-gray-300'>
                                    <a href="#" title='facebook'> <FaFacebookF /> </a>
                                    <a href="#" title='twitter'> <AiOutlineTwitter /> </a>
                                    <a href="#" title='linkedin'> <FaLinkedinIn /> </a>
                                    <a href="#" title='github'> <AiFillGithub /> </a>
                                </div>
                                <div className='group cursor-pointer text-slate-800 text-sm flex justify-center items-center gap-1 relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] before:absolute before:h-[18px] before:w-[1px] before:bg-[#afafaf] before:-left-[20px]'>
                                    <img src={`${import.meta.env.VITE_ClientSide_Url}/images/language.png`} alt="language icon" />
                                    <span><MdOutlineKeyboardArrowDown className='dark:text-gray-300' /></span>
                                    <ul className='absolute top-8 invisible transition-all duration-200 rounded-sm text-white py-2 px-3 w-fit flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black'>
                                        <li className='hover:bg-slate-700 px-1'>Bangla</li>
                                        <li className='hover:bg-slate-700 px-1'>English</li>
                                    </ul>
                                </div>
                                {
                                    user ? <Link to={'/dashboard'} className='flex items-center justify-center gap-2 cursor-pointer text-sm'>
                                        <span><FaUser /></span>
                                        <span>User Name</span>
                                    </Link> : <Link className='flex items-center justify-center gap-2 cursor-pointer text-sm'>
                                        <span><FaLock /></span>
                                        <span>Login</span>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd navbar */}
            <div className='bg-gray-100 dark:bg-slate-950 transition-all duration-300'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h-[75px] flex justify-between items-center flex-wrap'>
                        <div className='w-3/12 md-lg:w-full md-lg:pt-4'>
                            <div className='flex justify-between items-center'>
                                <Link to='/'>
                                    <img className='h-9' src={`${import.meta.env.VITE_ClientSide_Url}/images/shop-logo.png`} alt="logo" />
                                </Link>

                                {/* for switch theme */}
                                <button onClick={handleThemeToggle} className='md-lg:block hidden'>
                                    {
                                        theme === 'light' ? <FaMoon className='cursor-pointer' /> : <BiSun className='cursor-pointer text-white' />
                                    }
                                </button>

                                {/* for responsive : hamburger menu */}
                                <div onClick={() => setShowSidebar(true)} className='md-lg:flex hidden justify-center items-center w-[30px] h-[30px] bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-300 border border-slate-600 dark:border-slate-400 transition-colors duration-300 rounded cursor-pointer'>
                                    <span><FaList /></span>
                                </div>
                            </div>
                        </div>

                        <div className='w-9/12 md-lg:w-full'>
                            <div className='flex justify-between md-lg:justify-center items-center pl-8'>
                                {/* menu */}
                                <ul className='flex flex-wrap justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden'>
                                    {
                                        navItems.map((item) => <li key={item.id} title={item.title}>
                                            <Link
                                                to={item.path}
                                                className={`p-2 block ${pathname === item.path ? 'text-[#9bcf4c] underline underline-offset-4' : 'text-slate-600 dark:text-gray-300'}`}
                                            >{item.title}</Link>
                                        </li>)
                                    }
                                </ul>

                                {/* cart and wishlist */}
                                <div className='md-lg:hidden flex justify-center items-center gap-5'>
                                    <div className='flex justify-center gap-5'>
                                        <div title='Your wishlist' className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                                            <span className='text-xl text-red-500'><AiFillHeart /></span>
                                            <div className='w-[20px] h-[20px] absolute -top-2 -right-[5px] bg-green-500 rounded-full text-white text-sm flex justify-center items-center'>
                                                {wishlist}
                                            </div>
                                        </div>
                                        <Link to='/cart' title='Your cart' className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2] hover:bg-slate-300'>
                                            <span className='text-xl text-orange-500'><AiFillShopping /></span>
                                            <div className='w-[20px] h-[20px] absolute -top-2 -right-[5px] bg-green-500 rounded-full text-white text-sm flex justify-center items-center'>
                                                {cart}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* hide sidebar > 991px : for responsive */}
            <div className='hidden md-lg:block z-[9999]'>
                <div onClick={() => setShowSidebar(false)} className={`fixed transition-all duration-200 hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 ${showSidebar ? 'visible' : 'invisible'}`}>
                </div>
                <div className={`w-[300px] h-screen z-[9999] transition-all duration-200 fixed overflow-y-auto bg-white dark:bg-slate-900 dark:text-gray-300 py-6 px-8 top-0 ${!showSidebar ? '-left-[300px]' : 'left-0'}`}>
                    <div className='flex justify-start flex-col gap-6'>
                        <Link to='/'>
                            <img className='h-9' src={`${import.meta.env.VITE_ClientSide_Url}/images/shop-logo.png`} alt="logo" />
                        </Link>
                        <div className='flex justify-start items-center gap-10'>
                            <div className='group cursor-pointer text-slate-800 text-sm flex justify-center items-center gap-1 relative after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <img src={`${import.meta.env.VITE_ClientSide_Url}/images/language.png`} alt="language icon" />
                                <span><MdOutlineKeyboardArrowDown className='dark:text-gray-300' /></span>
                                <ul className='absolute top-8 invisible transition-all duration-200 rounded-sm text-white py-2 px-3 w-fit flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black'>
                                    <li>Bangla</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            {
                                user ? <Link to={'/dashboard'} className='flex items-center justify-center gap-2 cursor-pointer text-sm'>
                                    <span><FaUser /></span>
                                    <span>User Name</span>
                                </Link> : <Link className='flex items-center justify-center gap-2 cursor-pointer text-sm'>
                                    <span><FaLock /></span>
                                    <span>Login</span>
                                </Link>
                            }
                        </div>
                        {/* menu */}
                        <ul className='flex flex-col justify-start items-start gap-3 text-md font-semibold uppercase'>
                            {
                                navItems.map(item => <li key={item.id}>
                                    <Link
                                        className={`block ${pathname === item.path ? 'text-[#7fad39]' : 'text-slate-600 dark:text-gray-300'} hover:pl-1 transition-all duration-300`}
                                        to={item.path} >{item.title}</Link>
                                </li>)
                            }
                        </ul>
                        <div className='flex justify-start items-center gap-4'>
                            <a href="#" title='facebook'> <FaFacebookF /> </a>
                            <a href="#" title='twitter'> <AiOutlineTwitter /> </a>
                            <a href="#" title='linkedin'> <FaLinkedinIn /> </a>
                            <a href="#" title='github'> <AiFillGithub /> </a>
                        </div>
                        <div className='w-full flex justify-end md-lg:justify-start items-center gap-3'>
                            <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center'>
                                <span><IoIosCall className='dark:text-gray-500' /></span>
                            </div>
                            <div>
                                <h2 className='text-sm font-medium text-slate-700 dark:text-gray-300'>+880 1454 884564</h2>
                                <span className='text-xs'>support 24/7 time</span>
                            </div>
                        </div>
                        <ul className='flex flex-col justify-start items-start gap-3 text-[#1c1c1c] dark:text-gray-300'>
                            <li className='flex justify-start items-center gap-2 text-sm'>
                                <span><GrMail /></span>
                                <span>myshop@gmail.com</span>
                            </li>
                            <span className='text-sm'>Multi vendor e-commerce</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headers;