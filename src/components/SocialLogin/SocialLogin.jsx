import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <>
            <div className='flex justify-center items-center py-2'>
                <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                <span className='px-3 text-slate-600 dark:text-gray-100'>or</span>
                <div className='h-[1px] bg-slate-300 w-[95%]'></div>
            </div>
            <button className='px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
                <span><FaFacebookF /></span>
                <span>Login with Facebook</span>
            </button>
            <button className='px-8 w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
                <span><AiOutlineGoogle /></span>
                <span>Login with Facebook</span>
            </button>
        </>
    );
};

export default SocialLogin;