import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const ProductSlider = ({ title }) => {
    const products = [
        [1, 2, 3],
        [4, 5, 6]
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold text-slate-600'>{title}</h2>
                <div className='flex justify-center items-center gap-3 text-slate-600'>
                    <button onClick={() => previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all border border-slate-400'>
                        <span><FiChevronLeft /></span>
                    </button>
                    <button onClick={() => next()} className='w-[30px] h-[30px] flex justify-center items-center bg-slate-300 hover:bg-slate-100 transition-all border border-slate-400'>
                        <span><FiChevronRight /></span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col-reverse gap-8'>
            <Carousel
                autoPlay={true}
                infinite={true}
                arrows={false}
                responsive={responsive}
                transitionDuration={500}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
            >
                {
                    products.map((product, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-start gap-2'>
                                {
                                    product.map((p, i) => <Link className='flex justify-start items-start' key={i} to='#'>
                                        <img className='w-[110px] h-[110px]' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${p}.webp`} alt="slider image" />
                                        <div className='px-3 flex justify-start items-start gap-1 flex-col text-slate-600'>
                                            <h2>Long Sleeve casual shirt for Man</h2>
                                            <span className='text-base font-bold'>$944</span>
                                        </div>
                                    </Link>)
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default ProductSlider;