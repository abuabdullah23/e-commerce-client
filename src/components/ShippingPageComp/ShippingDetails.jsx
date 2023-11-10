import React, { useState } from 'react';

const ShippingDetails = () => {
    const [rest, setRest] = useState(false);
    const [user, setUser] = useState('');

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
        if (shippingData) {
            setRest(true);
            setUser(name);
        }
    }

    console.log(rest);

    return (
        <div className='bg-[#eeeeee] dark:bg-slate-800 transition-colors duration-300 text-slate-600 dark:text-gray-100'>
            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto py-16'>
                <div className="w-full flex flex-wrap">
                    <div className='w-[67%] md-lg:w-full'>
                        <div className="flex flex-col gap-3">
                            <div className="bg-white dark:bg-slate-900 p-6 shadow-sm rounded-md">
                                {
                                    !rest && <>
                                        <h2 className='font-bold pb-3'>Shipping Information</h2>
                                        <form onSubmit={handleShippingData}>
                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="name" id="name" placeholder='Your Name' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="address">Address</label>
                                                    <input type="text" name="address" id="address" placeholder='House no / Building / Street / Area' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                            </div>

                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text" name="phone" id="phone" placeholder='Your phone' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="post">Post</label>
                                                    <input type="text" name="post" id="post" placeholder='Post' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                            </div>

                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="province">Province</label>
                                                    <input type="text" name="province" id="province" placeholder='province' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="city">City</label>
                                                    <input type="text" name="city" id="city" placeholder='city' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                            </div>

                                            <div className='flex md:flex-col gap-5 md:gap-2 w-full'>
                                                <div className="flex flex-col gap-1 mb-2 w-full">
                                                    <label htmlFor="area">Area</label>
                                                    <input type="text" name="area" id="area" placeholder='area' required className='w-full px-3 py-2 bg-transparent border border-slate-200 dark:border-slate-600 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md' />
                                                </div>
                                                <div className="flex flex-col gap-1 mt-2 w-full">
                                                    <button type='submit' className='px-3 py-[6px] rounded-sm bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 text-white'>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                }

                                {
                                    rest && <>
                                        <div className='flex flex-col gap-1'>
                                            <h2>Deliver to {user}</h2>
                                            <p>
                                                <span>Home</span>
                                                <span></span>
                                            </p>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='w-[33%] md-lg:w-full'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingDetails;