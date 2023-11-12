import React, { useState } from 'react';

const ShippingDetails = () => {
    const [res, setRes] = useState(false);
    const [customerInfo, setCustomerInfo] = useState('');

    // handle login form value
    const handleShippingData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const post = form.post.value;
        const province = form.province.value;
        const city = form.city.value;
        const area = form.area.value;
        const shippingData = {
            name,
            address,
            phone,
            post,
            province,
            city,
            area
        }
        if (name && address && phone && post && province && city && area) {
            setRes(true);
            setCustomerInfo(shippingData);
        }
    }

    return (
        <div className='bg-[#eeeeee] dark:bg-slate-800 transition-colors duration-300 text-slate-600 dark:text-gray-100'>
            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto py-16'>
                <div className="w-full flex flex-wrap">
                    <div className='w-[67%] md-lg:w-full'>
                        <div className="flex flex-col gap-3">
                            <div className="bg-white dark:bg-slate-900 p-6 shadow-sm rounded-md">
                                {
                                    !res && <>
                                        <h2 className='font-bold pb-3'>Shipping Information</h2>
                                        <form onSubmit={handleShippingData}>
                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="name">Name</label>
                                                    <input required type="text" name="name" id="name" placeholder='Your Name' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="address">Address</label>
                                                    <input required type="text" name="address" id="address" placeholder='House no / Building / Street / Area' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                            </div>

                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input required type="text" name="phone" id="phone" placeholder='Your phone' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="post">Post</label>
                                                    <input required type="text" name="post" id="post" placeholder='Post' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                            </div>

                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="province">Province</label>
                                                    <input required type="text" name="province" id="province" placeholder='province' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="city">City</label>
                                                    <input required type="text" name="city" id="city" placeholder='city' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                            </div>

                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="area">Area</label>
                                                    <input required type="text" name="area" id="area" placeholder='area' className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mt-2 w-full">
                                                    <button type='submit' className='px-3 py-[6px] rounded-sm bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 text-white'>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                }

                                {
                                    res && <>
                                        <div className='flex flex-col gap-1 text-slate-600 dark:text-gray-100'>
                                            <h2 className='font-semibold pb-2'>Deliver to {customerInfo.name}</h2>
                                            <p>
                                                <span className='bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>Home</span>
                                                <span className='text-sm'>{customerInfo.address}, {customerInfo.province}, {customerInfo.city}, {customerInfo.area}.</span>
                                                <span onClick={() => setRes(false)} className='text-indigo-500 cursor-pointer'> change</span>
                                            </p>
                                            <p className='text-sm'>Email: to customer@gmail.com</p>
                                        </div>
                                    </>
                                }
                            </div>
                            {
                                [1, 2].map((p, i) => <div key={i} className='flex flex-col gap-3 bg-white dark:bg-slate-900 transition-colors duration-300 p-3'>
                                    <div className='flex justify-start items-center'>
                                        <h2 className='text-base text
                                                    0-slate-600 dark:text-gray-100'>Zayed Shop</h2>
                                    </div>
                                    {
                                        [1, 2, 3].map((p, i) => <div key={i} className='w-full flex flex-wrap border-b border-slate-200 dark:border-slate-800 transition-colors duration-300'>
                                            <div className='flex sm:w-full gap-2 w-7/12'>
                                                <div className='flex gap-2 justify-start items-start'>
                                                    <img className='w-[80px] h-[80px]' src={`${import.meta.env.VITE_ClientSide_Url}/images/products/${i + 1}.webp`} alt="product image" />
                                                    <div className='flex flex-col gap-1 text-slate-600 dark:text-gray-100 pr-4'>
                                                        <h2 className='text-base'>Long sleeve casual T-Shirt</h2>
                                                        <span className='text-sm'>Brand: Easy Shop</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-end w-5/12 sm:w-full sm:mt-3'>
                                                <div className='pl-4 sm:pl-0 dark:text-gray-100'>
                                                    <h2 className='text-lg text-orange-500 font-semibold'>$370</h2>
                                                    <p className='line-through'>$400</p>
                                                    <p>-10%</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>)
                            }
                        </div>
                    </div>

                    <div className='w-[33%] md-lg:w-full'>
                        <div className='pl-3 md-lg:pl-0'>
                            <div className='bg-white font-medium p-5 text-slate-600 flex flex-col gap-3'>
                                <h2 className='text-xl font-semibold'>Order Summary</h2>
                                <div className='flex justify-between items-center'>
                                    <span>Items Total</span>
                                    <span>$900</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Delivery Fee</span>
                                    <span>$90</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Total Payment</span>
                                    <span>$990</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span>Total</span>
                                    <span>$950</span>
                                </div>
                                <button disabled={res ? false : true} className={`px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg ${res ? 'bg-orange-500' : 'bg-orange-300'} text-sm text-white uppercase`}>Proceed to Checkout - 4</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingDetails;