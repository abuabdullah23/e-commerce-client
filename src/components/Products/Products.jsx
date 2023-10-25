import React from 'react';
import ProductSlider from './ProductSlider';

const Products = () => {
    return (
        <div className='py-10'>
            <div className='w-[85%] flex flex-wrap mx-auto'>
                <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                    <div className='overflow-hidden border-r-2'>
                        <ProductSlider title='Latest Products' />
                    </div>

                    <div className='overflow-hidden border-r-2'>
                        <ProductSlider title='Top Rated Products' />
                    </div>

                    <div className='overflow-hidden'>
                        <ProductSlider title='Discount Product' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;