import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
    const [seePass, setSeePass] = useState(false);

    return (
        <div>
            <Headers />
            <div className='bg-slate-200 dark:bg-slate-800 transition-colors duration-300'>
                <div className='w-full justify-center items-center p-10'>
                    <div className='grid grid-cols-2 w-[60%] md-lg:w-[75%] lg:w-[80%] md:grid-cols-1 md:w-full mx-auto bg-white dark:bg-slate-800 rounded-md'>
                        <div className='px-8 py-8'>
                            <h2 className='text-center w-full text-xl text-slate-600 dark:text-gray-100 font-bold'>Login</h2>
                            <div>
                                <form className='text-slate-600 dark:text-gray-100'>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor="email">Email</label>
                                        <input required type="email" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md dark:text-slate-600' id='email' name='email' placeholder='email' />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-4'>
                                        <label htmlFor="password">Password</label>
                                        <div className="relative">
                                            <input
                                                required
                                                type={!seePass ? 'password' : 'text'}
                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md dark:text-slate-600' id='password' name='password' placeholder='password' />
                                            <div
                                                onClick={() => setSeePass(!seePass)}
                                                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 dark:text-slate-600">
                                                {
                                                    !seePass ? <FiEye /> : <FiEyeOff />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <button className='px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md'>Login</button>
                                </form>
                                <SocialLogin />
                            </div>
                            <div className='text-center text-slate-600 dark:text-gray-100 pt-1'>
                                <p>You have no account ? <Link className='text-blue-500' to='/register'>Register</Link></p>
                            </div>
                        </div>

                        <div className='w-full h-full py-4 pr-4'>
                            <img className='w-full h-[95%]' src={`${import.meta.env.VITE_ClientSide_Url}/images/login.jpg`} alt="login image" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;