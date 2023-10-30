import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Ratings from '../Ratings/Ratings';
import { AiFillGithub, AiFillHeart, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi2';
import Reviews from '../Reviews/Reviews';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'


const Details = () => {
    const [image, setImage] = useState('');
    const images = [1, 2, 3, 4, 5, 6, 7];
    const discount = 11;
    const stock = 5;
    const [state, setState] = useState('reviews');

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdTablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 4
        },
        smMobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsMobile: {
            breakpoint: { max: 440, min: 0 },
            items: 2
        }
    }

    return (
        <div>
            {/* Product name */}
            <section className='bg-slate-100 dark:bg-slate-800 transition-colors duration-300 py-5 mb-5'>
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                    <div className='flex justify-start items-center text-base text-slate-600 dark:text-gray-100 w-full'>
                        <Link to='/'>Home</Link>
                        <span className='mt-1'><MdOutlineKeyboardArrowRight /></span>
                        <span>Sports</span>
                        <span className='mt-1'><MdOutlineKeyboardArrowRight /></span>
                        <span>Long Sleeve casual shirt for Man</span>
                    </div>
                </div>
            </section>

            <section className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto mb-16'>
                <div className='grid grid-cols-2 md-lg:grid-cols-1 gap-8'>
                    {/* show product images section */}
                    <div>
                        <div className='p-4 border dark:border-indigo-400'>
                            <img className='h-[500px] md-lg:h-[240px] w-full' src={image ? `${import.meta.env.VITE_ClientSide_Url}/images/products/${image}.webp` : `${import.meta.env.VITE_ClientSide_Url}/images/products/${images[0]}.webp`} alt="product image" />

                        </div>
                        <div className='py-4'>
                            {images && <Carousel
                                autoPlay={true}
                                infinite={true}
                                responsive={responsive}
                                transitionDuration={500}
                            >
                                {images.map((img, i) => <div
                                    onClick={() => setImage(img)}
                                    key={i}
                                >
                                    <img className='cursor-pointer hover:border-2 border-indigo-400' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${i + 1}.webp`} alt="product image" />
                                </div>)
                                }
                            </Carousel>
                            }
                        </div>
                    </div>

                    {/* details */}
                    <div className='flex flex-col gap-5'>
                        <div className='text-3xl font-bold text-slate-600 dark:text-gray-100'>
                            <h2>Long Sleeve casual shirt for Man</h2>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <div className='flex text-xl'>
                                <Ratings ratings={4.5} />
                            </div>
                            <span className='text-green-500'>(23 reviews)</span>
                        </div>
                        <div className='text-2xl text-red-500 dark:text-orange-500 font-bold flex gap-3'>
                            {discount ? <>
                                <h2 className='line-through'>$500</h2>
                                <h2>${500 - Math.floor((500 * discount) / 100)} (-{discount}%)</h2>
                            </> : <h2>Price: $500</h2>}
                        </div>
                        <div className='text-slate-600 dark:text-gray-100'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus iste laboriosam necessitatibus in pariatur. Necessitatibus exercitationem optio quod quam repudiandae, sed deleniti expedita consequatur excepturi consectetur eum dicta odio esse nostrum molestiae quaerat inventore eaque asperiores minus saepe ea delectus reiciendis odit nesciunt! Atque laboriosam voluptatibus facilis sit neque.</p>
                        </div>
                        <div className='flex gap-3 pb-8 border-b'>
                            {
                                stock ? <>
                                    <div className='flex justify-center items-center h-[50px] bg-slate-200 dark:bg-slate-600 dark:text-white text-xl'>
                                        <div className='px-6 xs:px-4 select-none h-full text-center flex items-center justify-center cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700'>-</div>
                                        <div className='px-6 xs:px-4 select-none'>3</div>
                                        <div className='px-6 xs:px-4 select-none h-full text-center flex items-center justify-center cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700'>+</div>
                                    </div>
                                    <div>
                                        <button className='px-8 py-3 h-full font-semibold bg-purple-500 hover:shadow-lg hover:shadow-purple-500/40 text-white flex items-center gap-3'>
                                            <span><HiShoppingBag /></span>
                                            <span className='block sm:hidden'>Add To Cart</span>
                                        </button>
                                    </div>
                                </> : ''
                            }
                            <div>
                                <div className='flex items-center justify-center h-[50px] w-[50px] cursor-pointer hover:shadow-lg bg-rose-500 hover:shadow-rose-500/50 text-white text-xl'>
                                    <AiFillHeart />
                                </div>
                            </div>
                        </div>

                        {/* availability, share */}
                        <div className='flex flex-col items-start py-5 gap-8'>
                            <div className=' text-black dark:text-gray-100 font-bold text-xl flex items-center justify-start gap-5'>
                                <span>Availability</span> <span className={`text-${stock ? 'green' : 'red'}-500 font-semibold`}>
                                    {stock ? `In Stock(${stock})` : 'Out of Stock'}
                                </span>
                            </div>
                            <div className='flex items-center justify-start gap-5'>
                                <span className='dark:text-gray-100'>Share on</span>
                                <div className='flex justify-start items-center gap-4'>
                                    <a className='w-[38px] h-[38px] rounded-full bg-indigo-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='facebook'> <FaFacebookF /> </a>
                                    <a className='w-[38px] h-[38px] rounded-full bg-cyan-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='twitter'> <AiOutlineTwitter /> </a>
                                    <a className='w-[38px] h-[38px] rounded-full bg-purple-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='linkedin'> <FaLinkedinIn /> </a>
                                    <a className='w-[38px] h-[38px] rounded-full bg-blue-500 hover:bg-[#7fad39] text-white flex items-center justify-center' href="#" title='github'> <AiFillGithub /> </a>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                {stock ? <button className='px-8 py-3 h-full font-semibold bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 text-white'>Buy Now</button> : ''}
                                <button className='px-8 py-3 h-full font-semibold bg-lime-500 hover:shadow-lg hover:shadow-lime-500/40 text-white'>Chat Seller</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Review, add review, rating, shop products */}
            <section className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto mb-16'>
                <div className='flex md:flex-wrap gap-4'>
                    <div className='w-[72%] md-lg:w-full'>
                        <div className='grid grid-cols-2'>
                            <button onClick={() => setState('reviews')} className={`py-1 px-5 hover:text-white hover:bg-green-500 ${state === 'reviews' ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-700'}`}>Reviews</button>
                            <button onClick={() => setState('description')} className={`py-1 px-5 hover:text-white hover:bg-green-500 ${state === 'description' ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-700'}`}>Description</button>
                        </div>
                        <div>
                            {
                                state === 'reviews' ? <Reviews /> : <div className='py-5 text-slate-700 dark:text-gray-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eligendi quam dolores, quisquam facere placeat delectus consectetur maxime ipsa. Laboriosam, delectus porro corrupti, error dicta consectetur molestiae deserunt provident voluptatem, illum reprehenderit officiis odio! Doloribus, laudantium. Delectus quas eveniet recusandae.</div>
                            }
                        </div>
                    </div>

                    <div className='w-[28%] md-lg:w-full'>
                        <div className='px-3 py-1 text-slate-600 bg-slate-200'>
                            <h2>From Shop Fashion</h2>
                        </div>

                        <div className='flex flex-col gap-5 mt-3 border dark:border-indigo-500 p-3'>
                            {
                                [1, 2, 3].map((p, i) => <Link key={i}>
                                    <div className='relative'>
                                        <div className='flex justify-center items-center absolute left-4 top-4 text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs font-semibold'>6%</div>
                                        <img className='object-cover w-full h-full' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${p}.webp`} alt="product image" />
                                    </div>
                                    <h2 className='dark:text-gray-100'>Long Sleeve casual shirt for Man</h2>
                                    <div className='flex items-center gap-1 text-lg'>
                                        <Ratings ratings={4.5} />
                                    </div>
                                </Link>)
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto mb-16'>
                <h2 className='text-2xl font-semibold py-8 text-slate-600 dark:text-gray-100'>Related Products</h2>
                <div>
                    <Swiper
                        slidesPerView='auto'
                        breakpoints={{
                            1280: {
                                slidesPerView: 4
                            },
                            565: {
                                slidesPerView: 3
                            },
                            340: {
                                slidesPerView: 2
                            },
                        }}
                        spaceBetween={25}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.custom_bullet'
                        }}
                        modules={[Pagination]}
                        className='mySwipper'
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7].map((p, i) => <SwiperSlide key={i}>
                                <Link>
                                    <div className='relative h-[270px]'>
                                        <div className='flex justify-center items-center absolute left-2 top-2 text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs font-semibold'>6%</div>
                                        <div className='w-full h-full '>
                                            <img className='object-cover w-full h-full' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${p}.webp`} alt="product image" />
                                            <div className='absolute top-0 left-0 w-full h-full bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500'>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-4 flex flex-col gap-1'>
                                        <h2 className='dark:text-gray-100 text-lg'>Long Sleeve casual shirt
                                            for Man</h2>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2 className='text-[#6699ff] dark:text-green-500 text-lg font-bold'>$454</h2>
                                            <div className='flex items-center gap-1 text-lg'>
                                                <Ratings ratings={4.5} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='w-full flex justify-center items-center py-10'>
                    <div className='custom_bullet justify-center gap-3 !w-auto'></div>
                </div>
            </section >

        </div>
    );
};

export default Details;