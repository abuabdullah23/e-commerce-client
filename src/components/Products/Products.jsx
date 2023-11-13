import React from 'react';
import ProductSlider from './ProductSlider';

const Products = ({ latestProducts, topRatedProducts, discountProducts }) => {
    return (
        <div className='py-10'>
            <div className='w-[85%] flex flex-wrap mx-auto'>
                <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
                    <div className='overflow-hidden border-r dark:border-slate-600'>
                        <ProductSlider products={latestProducts} title='Latest Products' />
                    </div>

                    <div className='overflow-hidden border-r dark:border-slate-600'>
                        <ProductSlider products={topRatedProducts} title='Top Rated Products' />
                    </div>

                    <div className='overflow-hidden border-r dark:border-slate-600'>
                        <ProductSlider products={discountProducts} title='Discount Product' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;